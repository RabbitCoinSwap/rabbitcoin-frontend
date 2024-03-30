import { useState, useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { Ifo, Minting, PoolIds } from 'config/constants/types'
import { useRabbitCoinNFTContract, useERC20, useIfoV2Contract } from 'hooks/useContract'
import { multicallPolygonv1, multicallv2 } from 'utils/multicall'
import ifoV2Abi from 'config/abi/ifoV2.json'
import ifoV3Abi from 'config/abi/ifoV3.json'
import rabbitCoinAbi from 'config/abi/rabbitCoinNft.json'
import { useIfoPoolCredit } from 'state/pools/hooks'
import { fetchIfoPoolUserAndCredit } from 'state/pools'
import { useAppDispatch } from 'state'
import { BIG_ZERO } from 'utils/bigNumber'
//import useIfoAllowance from '../useIfoAllowance'
import { WalletIfoState, WalletIfoData } from '../../types'
import { formatEther } from '@ethersproject/units'

const initialState = {
  isInitialized: false,
  isHolder: false,
  discountAmount: 0,
  poolBasic: {
    amountTokenCommittedInLP: BIG_ZERO,
    offeringAmountInToken: BIG_ZERO,
    refundingAmountInLP: BIG_ZERO,
    taxAmountInLP: BIG_ZERO,
    hasClaimed: false,
    isPendingTx: false,
  },
  poolUnlimited: {
    amountTokenCommittedInLP: BIG_ZERO,
    offeringAmountInToken: BIG_ZERO,
    refundingAmountInLP: BIG_ZERO,
    taxAmountInLP: BIG_ZERO,
    hasClaimed: false,
    isPendingTx: false,
  },
}

/**
 * Gets all data from an IFO related to a wallet
 */
const useGetWalletIfoData = (ifo: Minting): WalletIfoData => {
  const [state, setState] = useState<WalletIfoState>(initialState)
  const dispatch = useAppDispatch()
  const credit = useIfoPoolCredit()

  const { address, currency, version } = ifo

  const { account } = useWeb3React()
  const contract = useRabbitCoinNFTContract(address)
  const currencyContract = useERC20(currency.address, false)
  //const allowance = useIfoAllowance(currencyContract, address)

  const setPendingTx = (status: boolean, poolId: PoolIds) =>
    setState((prevState) => ({
      ...prevState,
      [poolId]: {
        ...prevState[poolId],
        isPendingTx: status,
      },
    }))

  const setIsClaimed = (poolId: PoolIds) => {
    setState((prevState) => ({
      ...prevState,
      [poolId]: {
        ...prevState[poolId],
        hasClaimed: true,
      },
    }))
  }

  const fetchIfoData = useCallback(async () => {
    const ifoCalls = ['viewUserInfo', 'viewUserOfferingAndRefundingAmountsForPools'].map((method) => ({
      address,
      name: method,
      params: [account, [0, 1]],
    }))

    const mintingV3Calls =
      version === 3.1
        ? ['isHolder', 'getDiscountByAddress'].map((name) => ({
            address,
            name,
            params: [account],
          }))
        : []

    dispatch(fetchIfoPoolUserAndCredit({ account }))

    const abi = rabbitCoinAbi

    //const [userInfo, amounts, isQualifiedNFT, isQualifiedPoints] = await multicallv2(abi, [...ifoCalls, ...ifov3Calls])
    const [isHolder, discountAmount] = await multicallPolygonv1(abi, [...mintingV3Calls])

    setState((prevState) => ({
      ...prevState,
      isInitialized: true,
      isHolder: isHolder ? isHolder[0] : false,
      discountAmount: discountAmount ? parseFloat(formatEther(discountAmount[0])) : 0,
    }))
  }, [account, address, dispatch, version])

  const resetIfoData = useCallback(() => {
    setState({ ...initialState })
  }, [])

  const creditLeftWithNegative = credit.minus(state.poolUnlimited.amountTokenCommittedInLP)

  const ifoCredit = {
    credit,
    creditLeft: BigNumber.maximum(BIG_ZERO, creditLeftWithNegative),
  }

  return { ...state, contract, setPendingTx, setIsClaimed, fetchIfoData, resetIfoData, ifoCredit }
}

export default useGetWalletIfoData
