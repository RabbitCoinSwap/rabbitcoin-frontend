import { ChainId } from '@rabbitcoin/sdk'
import BigNumber from 'bignumber.js'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 3
export const POLYGON_BLOCK_TIME = 2.2

export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: 'https://bscscan.com',
  [ChainId.TESTNET]: 'https://testnet.bscscan.com',
}

export const BASE_POLYGON_SCAN_URLS = {
  [137]: 'https://polygonscan.com',
  [80001]: 'https://mumbai.polygonscan.com',
}

// CAKE_PER_BLOCK details
// 40 CAKE is minted per block
// 20 CAKE per block is sent to Burn pool (A farm just for burning cake)
// 10 CAKE per block goes to CAKE syrup pool
// 9 CAKE per block goes to Yield farms and lottery
// CAKE_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// CAKE/Block in src/views/Home/components/CakeDataRow.tsx = 15 (40 - Amount sent to burn pool)
export const CAKE_PER_BLOCK = 40 // TODO: Change This
export const BLOCKS_PER_YEAR = (60 / POLYGON_BLOCK_TIME) * 60 * 24 * 365 // Year: 14.334.545 Day: 39.272
export const CAKE_PER_YEAR = CAKE_PER_BLOCK * BLOCKS_PER_YEAR
export const BASE_URL = 'https://pancakeswap.finance'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[ChainId.MAINNET]
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)

// CAUTION: Added by RabbitCoin
export const RABBIT_PER_BLOCK_FARM = 0.18 // You can set and test Farm emission
export const RABBIT_PER_YEAR_FARM = RABBIT_PER_BLOCK_FARM * BLOCKS_PER_YEAR 
export const RABBIT_PER_BLOCK_NFTFARM = 0.35 // You can set and test NftFarm emission
export const RABBIT_PER_YEAR_NFTFARM = RABBIT_PER_BLOCK_NFTFARM * BLOCKS_PER_YEAR 

export const BASE_RABBITCOIN_URL = 'https://rabbitcoin.xyz'
export const BASE_RABBITCOIN_ADD_LIQUIDITY_URL = `${BASE_RABBITCOIN_URL}/add`
export const BASE_POLYGON_SCAN_URL = BASE_POLYGON_SCAN_URLS[process.env.NEXT_PUBLIC_CHAIN_ID]



// Gas Settings
export const DEFAULT_GAS_LIMIT = 200000
export const AUCTION_BIDDERS_TO_FETCH = 500
export const RECLAIM_AUCTIONS_TO_FETCH = 500
export const AUCTION_WHITELISTED_BIDDERS_TO_FETCH = 500
export const IPFS_GATEWAY = 'https://ipfs.io/ipfs'
// In reality its 10000 because of fast refresh, a bit less here to cover for possible long request times
export const PANCAKE_BUNNIES_UPDATE_FREQUENCY = 8000
