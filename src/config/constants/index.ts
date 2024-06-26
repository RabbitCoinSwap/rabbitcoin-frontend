import { /*ChainId,*/ JSBI, Percent, Token } from '@rabbitcoin/sdk'
import { mainnetTokens, testnetTokens } from './tokens'

// CAUTION: This declaration was inside @pancakeswap/sdk
// TODO: Make customized clone of @pancakeswap/sdk
declare enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
  POLYGON_MAINNET = 137,
  MUMBAI_TESTNET = 80001,
}

//export const ROUTER_ADDRESS = '0xD1F1AA97DFD0e9BAeb3E21b2c80e8B59df32e954' // Mumbai
export const ROUTER_ADDRESS = '0x19957543117222c04d66031B941Fc07E07893311' // RabbitCoinRouter

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

// used to construct intermediary pairs for trading (Allow Routes/Path)
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MAINNET]: [
    mainnetTokens.wbnb,
    mainnetTokens.cake,
    mainnetTokens.usdt,
    mainnetTokens.btcb,
    mainnetTokens.ust,
    mainnetTokens.eth,
    mainnetTokens.usdc,
  ],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.cake, testnetTokens.usdt],
  137: [mainnetTokens.wmatic, mainnetTokens.rabbit, mainnetTokens.usdc, mainnetTokens.usdt],
  80001: [testnetTokens.wmatic, testnetTokens.rabbit, testnetTokens.usdc, testnetTokens.usdt],
}

/**
 * Addittional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.MAINNET]: [mainnetTokens.usdt, mainnetTokens.cake, mainnetTokens.btcb],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.cake, testnetTokens.usdt],
  137: [mainnetTokens.usdt],
  80001: [testnetTokens.usdt],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.MAINNET]: [mainnetTokens.wbnb, mainnetTokens.dai, mainnetTokens.cake, mainnetTokens.usdt],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.cake, testnetTokens.usdt],
  137: [mainnetTokens.wmatic, mainnetTokens.rabbit, mainnetTokens.usdc, mainnetTokens.usdt],
  80001: [testnetTokens.wmatic, testnetTokens.rabbit, testnetTokens.usdc, testnetTokens.usdt],
}
/*
export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [mainnetTokens.cake, mainnetTokens.wbnb],
    [mainnetTokens.usdc, mainnetTokens.usdt],
    [mainnetTokens.dai, mainnetTokens.usdt],
  ],
}
*/
export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.POLYGON_MAINNET]: [
    [mainnetTokens.wmatic, mainnetTokens.rabbit],
    [mainnetTokens.usdt, mainnetTokens.rabbit],
    [mainnetTokens.wmatic, mainnetTokens.usdt],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_BNB: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 BNB
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
  '0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C',
]

export { default as farmsConfig } from './farms'
export { default as nftFarmsConfig } from './nftFarms'
export { default as poolsConfig } from './pools'
export { default as ifosConfig } from './ifo'
export { default as mintingConfig } from './minting'

export const FAST_INTERVAL = 10000
export const SLOW_INTERVAL = 60000
