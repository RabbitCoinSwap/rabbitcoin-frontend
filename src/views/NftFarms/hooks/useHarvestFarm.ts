import { useCallback } from 'react'
import { harvestNftFarm } from 'utils/calls'
import { useRabbitCoinNftStake, useSmartNftStakeContract } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks'
import { useFarmFromPid } from 'state/nftFarms/hooks'
import { getAddress } from 'utils/addressHelpers'

const useHarvestFarm = (farmPid: number) => {
  const farm = useFarmFromPid(farmPid)
  const isSmartNftPool = farm.contractAddresses ? getAddress(farm.contractAddresses) : null
  const masterChefContract = isSmartNftPool ? useSmartNftStakeContract(farmPid) : useRabbitCoinNftStake() 
  const gasPrice = useGasPrice()

  const handleHarvest = useCallback(async () => {
    return harvestNftFarm(masterChefContract, farmPid, gasPrice, isSmartNftPool)
  }, [farmPid, masterChefContract, gasPrice])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
