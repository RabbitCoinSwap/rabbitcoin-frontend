import masterchefABI from 'config/abi/masterchef.json'
import chunk from 'lodash/chunk'
import { multicallPolygonv2 } from 'utils/multicall'
import { SerializedFarmConfig } from '../../config/constants/types'
import { SerializedFarm } from '../types'
import { getRabbitCoinFarmAddress } from '../../utils/addressHelpers'
import { getRabbitCoinFarmContract } from '../../utils/contractHelpers'

const masterChefAddress = getRabbitCoinFarmAddress() //getMasterChefAddress()
const masterChefContract = getRabbitCoinFarmContract() //getMasterchefContract

export const fetchMasterChefFarmPoolLength = async () => {
  const poolLength = await masterChefContract.poolLength()
  return poolLength
}

const masterChefFarmCalls = (farm: SerializedFarm) => {
  const { pid } = farm
  return pid || pid === 0
    ? [
        {
          address: masterChefAddress,
          name: 'poolInfo',
          params: [pid],
        },
        {
          address: masterChefAddress,
          name: 'totalAllocPoint',
        },
      ]
    : [null, null]
}

export const fetchMasterChefData = async (farms: SerializedFarmConfig[]): Promise<any[]> => {
  const masterChefCalls = farms.map((farm) => masterChefFarmCalls(farm))
  const chunkSize = masterChefCalls.flat().length / farms.length
  const masterChefAggregatedCalls = masterChefCalls
    .filter((masterChefCall) => masterChefCall[0] !== null && masterChefCall[1] !== null)
    .flat()

  const masterChefMultiCallResult = await multicallPolygonv2(masterchefABI, masterChefAggregatedCalls)

  const masterChefChunkedResultRaw = chunk(masterChefMultiCallResult, chunkSize)
  let masterChefChunkedResultCounter = 0
  return masterChefCalls.map((masterChefCall) => {
    if (masterChefCall[0] === null && masterChefCall[1] === null) {
      return [null, null]
    }
    const data = masterChefChunkedResultRaw[masterChefChunkedResultCounter]
    masterChefChunkedResultCounter++
    return data
  })
}
