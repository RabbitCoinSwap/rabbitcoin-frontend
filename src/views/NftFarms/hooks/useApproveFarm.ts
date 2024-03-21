import { useCallback } from 'react'
import { MaxUint256 } from '@ethersproject/constants'
import { Contract } from '@ethersproject/contracts'
import { useRabbitCoinNftStake } from 'hooks/useContract'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'

const useApproveNftFarm = (nftContract: Contract, smartNftPoolAddress?: string) => { 
  const masterChefContract = useRabbitCoinNftStake() //useMasterchef()
  const { callWithGasPrice } = useCallWithGasPrice()
  const handleApprove = useCallback(async () => {
    return callWithGasPrice(nftContract, 'setApprovalForAll', [smartNftPoolAddress ?? masterChefContract.address, true])
  }, [nftContract, smartNftPoolAddress ?? masterChefContract, callWithGasPrice])

  return { onApprove: handleApprove }
}

export default useApproveNftFarm
