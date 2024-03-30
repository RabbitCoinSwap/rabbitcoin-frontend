import { ChainId } from '@rabbitcoin/sdk'
import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'
import { VaultKey } from 'state/types'

export const getAddress = (address: Address): string => {
  const chainId = process.env.NEXT_PUBLIC_CHAIN_ID
  return address[chainId] ? address[chainId] : address[ChainId.MAINNET]
}

export const getMasterChefAddress = () => {
  return getAddress(addresses.masterChef)
}
// Only Pool Version Masterchef
export const getRabbitCoinPoolAddress = () => {
  return getAddress(addresses.rabbitCoinPool)
}
// Only Farm Version Masterchef
export const getRabbitCoinFarmAddress = () => {
  return getAddress(addresses.rabbitCoinFarm)
}
// Nft Farm Version Masterchef
export const getRabbitCoinNftStakeAddress = () => {
  return getAddress(addresses.rabbitCoinNftStake)
}
export const getRabbitCoinClaimRewardAddress = () => {
  return getAddress(addresses.rabbitCoinClaimReward)
}
export const getRabbitCoinClaimRewardV2Address = () => {
  return getAddress(addresses.rabbitCoinClaimRewardV2)
}
export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}
export const getMulticallPolygonAddress = () => {
  return getAddress(addresses.multiCallPolygon)
}
export const getLotteryV2Address = () => {
  return getAddress(addresses.lotteryV2)
}
export const getPancakeProfileAddress = () => {
  return getAddress(addresses.pancakeProfile)
}
export const getPancakeRabbitsAddress = () => {
  return getAddress(addresses.pancakeRabbits)
}
export const getBunnyFactoryAddress = () => {
  return getAddress(addresses.bunnyFactory)
}
export const getClaimRefundAddress = () => {
  return getAddress(addresses.claimRefund)
}
export const getPointCenterIfoAddress = () => {
  return getAddress(addresses.pointCenterIfo)
}
export const getBunnySpecialAddress = () => {
  return getAddress(addresses.bunnySpecial)
}
export const getTradingCompetitionAddress = () => {
  return getAddress(addresses.tradingCompetition)
}
export const getTradingCompetitionAddressV2 = () => {
  return getAddress(addresses.tradingCompetitionV2)
}
export const getEasterNftAddress = () => {
  return getAddress(addresses.easterNft)
}
export const getRabbitCoinNftAddress = () => {
  return getAddress(addresses.rabbitCoinNft)
}
export const getRabbitCoinBronzeNftAddress = () => {
  return getAddress(addresses.rabbitCoinBronzeNft)
}
export const getRabbitCoinSilverNftAddress = () => {
  return getAddress(addresses.rabbitCoinSilverNft)
}
export const getRabbitCoinGoldNftAddress = () => {
  return getAddress(addresses.rabbitCoinGoldNft)
}
export const getLotNftAddress = () => {
  return getAddress(addresses.lotNft)
}
export const getBlitzBrawlerNftAddress = () => {
  return getAddress(addresses.blitzBrawlerNft)
}
export const getAvatarsAiNftAddress = () => {
  return getAddress(addresses.avatarsAiNft)
}
export const getBeastHunterNftAddress = () => {
  return getAddress(addresses.beastHunterNft)
}
export const getNitroNftAddress = () => {
  return getAddress(addresses.nitroNft)
}
export const getPlaceDjNftAddress = () => {
  return getAddress(addresses.placeDjNft)
}
export const getZidanogoNftAddress = () => {
  return getAddress(addresses.zidanogoNft)
}
export const getVaultPoolAddress = (vaultKey: VaultKey) => {
  if (!vaultKey) {
    return null
  }
  // CAUTION: This line below added by RabbitCoin
  const address = vaultKey == 'cakeVault' ? addresses.rabbitCoinAutoPoolVault : addresses[vaultKey]
  return getAddress(address)
}

export const getCakeVaultAddress = () => {
  return getAddress(addresses.cakeVault)
}
export const getRabbitCoinAutoPoolVaultAddress = () => {
  return getAddress(addresses.rabbitCoinAutoPoolVault)
}
export const getIfoPoolAddress = () => {
  return getAddress(addresses.ifoPool)
}
export const getPredictionsAddress = () => {
  return getAddress(addresses.predictions)
}
export const getChainlinkOracleAddress = () => {
  return getAddress(addresses.chainlinkOracle)
}
export const getBunnySpecialCakeVaultAddress = () => {
  return getAddress(addresses.bunnySpecialCakeVault)
}
export const getBunnySpecialPredictionAddress = () => {
  return getAddress(addresses.bunnySpecialPrediction)
}
export const getBunnySpecialLotteryAddress = () => {
  return getAddress(addresses.bunnySpecialLottery)
}
export const getBunnySpecialXmasAddress = () => {
  return getAddress(addresses.bunnySpecialXmas)
}
export const getFarmAuctionAddress = () => {
  return getAddress(addresses.farmAuction)
}
export const getAnniversaryAchievement = () => {
  return getAddress(addresses.AnniversaryAchievement)
}
export const getNftMarketAddress = () => {
  return getAddress(addresses.nftMarket)
}
export const getNftSaleAddress = () => {
  return getAddress(addresses.nftSale)
}
export const getPancakeSquadAddress = () => {
  return getAddress(addresses.pancakeSquad)
}
