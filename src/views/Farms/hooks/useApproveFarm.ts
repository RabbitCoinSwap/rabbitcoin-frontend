import { useCallback } from 'react'
import { MaxUint256 } from '@ethersproject/constants'
import { Contract } from '@ethersproject/contracts'
import { useRabbitCoinFarm } from 'hooks/useContract'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'

const useApproveFarm = (lpContract: Contract) => {
  const masterChefContract = useRabbitCoinFarm() //useMasterchef()
  const { callWithGasPrice } = useCallWithGasPrice()
  const handleApprove = useCallback(async () => {
    return callWithGasPrice(lpContract, 'approve', [masterChefContract.address, MaxUint256])
  }, [lpContract, masterChefContract, callWithGasPrice])

  return { onApprove: handleApprove }
}

export default useApproveFarm
