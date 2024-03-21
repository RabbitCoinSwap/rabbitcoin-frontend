import { useCallback } from 'react'
import { stakeNftFarm } from 'utils/calls'
import { useRabbitCoinNftStake, useSmartNftStakeContract, useSousChef } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks'
import { useFarmFromPid } from 'state/nftFarms/hooks'
import { getAddress } from 'utils/addressHelpers'

const useStakeFarms = (pid: number) => {
  const farm = useFarmFromPid(pid)
  const isSmartNftPool = farm.contractAddresses ? getAddress(farm.contractAddresses) : null
  const masterChefContract = isSmartNftPool ? useSmartNftStakeContract(pid) : useRabbitCoinNftStake() 
  const gasPrice = useGasPrice()

  const handleStake = useCallback(
    async (collectionAddresses: string[], tokenIds: number[]) => {
      return stakeNftFarm(masterChefContract, pid, collectionAddresses, tokenIds, gasPrice, isSmartNftPool, farm.performanceFee);
    },
    [masterChefContract, pid, gasPrice, isSmartNftPool, farm.performanceFee]
  );
  


  return { onStake: handleStake }
}

export default useStakeFarms
