import { ChainId, Token } from '@rabbitcoin/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { CHAIN_ID } from './networks'
import { SerializedToken } from './types'

const { MAINNET, TESTNET } = ChainId

const POLYGON_MAINNET = 137
const MUMBAI_TESTNET = 80001

interface TokenList {
  [symbol: string]: Token
}

const defineTokens = <T extends TokenList>(t: T) => t

export const mainnetTokens = defineTokens({
  wmatic: new Token(
    POLYGON_MAINNET,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped Matic',
    'https://polygon.technology/',
  ),
  wbnb: new Token(
    MAINNET,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  ),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  matic: new Token(
    MAINNET,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'MATIC',
    'MATIC',
    'https://polygon.technology/'
    ),
  rabbit: new Token(
    POLYGON_MAINNET,
    '0x28767E286113Ab01EE819b9398A22D6f27BaDb6E',
    18,
    'RABBIT',
    'RabbitCoin',
    'https://www.rabbitcoin.xyz/',
  ),
  usdt: new Token(
    POLYGON_MAINNET,
    '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    6,
    'USDT',
    'Tether USD',
    'https://tether.to/',
  ),
  usdc: new Token(
    POLYGON_MAINNET,
    '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    6,
    'USDC',
    'USD Coin',
    'https://www.centre.io/usdc',
  ),
  dai: new Token(
    POLYGON_MAINNET,
    '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    18,
    'DAI',
    'Dai Stablecoin',
    'https://makerdao.com/en/',
  ),
  carrot: new Token(
    POLYGON_MAINNET,
    '0x18d8d6190C3BCb9514eb8151f690bB9Cd30e45fC',
    18,
    'CARROT',
    'CarrotBar',
    'https://www.rabbitcoin.xyz/',
  ),
  busd: new Token(
    POLYGON_MAINNET,
    '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39',
    18,
    'BUSD',
    'Binance USD',
    'https://www.binance/en/busd',
  ),
  bnb: new Token(MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'BNB', 'BNB', 'https://www.binance.com/'),
  cake: new Token(
    MAINNET,
    '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://pancakeswap.finance/',
  ),
  /*
  tlos: new Token(MAINNET, '0xb6C53431608E626AC81a9776ac3e999c5556717c', 18, 'TLOS', 'Telos', 'https://www.telos.net/'),
  beta: new Token(
    MAINNET,
    '0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28',
    18,
    'BETA',
    'Beta Finance',
    'https://betafinance.org',
  ),
  nft: new Token(MAINNET, '0x1fC9004eC7E5722891f5f38baE7678efCB11d34D', 6, 'NFT', 'APENFT', 'https://apenft.org'),
  stephero: new Token(
    MAINNET,
    '0xE8176d414560cFE1Bf82Fd73B986823B89E4F545',
    18,
    'HERO',
    'StepHero',
    'https://stephero.io/',
  ),
  pros: new Token(MAINNET, '0xEd8c8Aa8299C10f067496BB66f8cC7Fb338A3405', 18, 'PROS', 'Prosper', 'https://prosper.so/'),
  qbt: new Token(MAINNET, '0x17B7163cf1Dbd286E262ddc68b553D899B93f526', 18, 'QBT', 'Qubit Token', 'https://qbt.fi/'),
  cvp: new Token(
    MAINNET,
    '0x5Ec3AdBDae549Dce842e24480Eb2434769e22B2E',
    18,
    'CVP',
    'Concentrated Voting Power Token',
    'https://powerpool.finance/',
  ),
  bscdefi: new Token(
    MAINNET,
    '0x40E46dE174dfB776BB89E04dF1C47d8a66855EB3',
    18,
    'BSCDEFI',
    'BSC Defi blue chips token',
    'https://powerpool.finance/',
  ),
  */
  btcb: new Token(
    MAINNET,
    '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    18,
    'BTCB',
    'Binance BTC',
    'https://bitcoin.org/',
  ),
  ust: new Token(
    MAINNET,
    '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
    18,
    'UST',
    'Wrapped UST Token',
    'https://mirror.finance/',
  ),
  eth: new Token(
    MAINNET,
    '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    18,
    'ETH',
    'Binance-Peg Ethereum Token',
    'https://ethereum.org/en/',
  ),
} as const)

export const testnetTokens = defineTokens({  
  wmatic: new Token(
    MUMBAI_TESTNET,
    '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    18,
    'WMATIC',
    'Wrapped Matic',
    'https://polygon.technology/',
  ),
  rabbit: new Token(
    MUMBAI_TESTNET,
    '0xE564106bacd4D3b74a79e0fbDabF0c43828a1DBB', // CHANGE_ADDRESS:RabbitCoin (test)
    18,
    'RABBIT',
    'RabbitCoin',
    'https://www.rabbitcoin.xyz/',
  ),
  usdc: new Token(
    MUMBAI_TESTNET,
    '0xEF21802E25BD223100205e2A3e80aacb5e7211F1',
    18,
    'USDC',
    'USD Coin',
    'https://www.rabbitcoin.xyz/',
  ),
  usdt: new Token(
    MUMBAI_TESTNET,
    '0x6Add000b64258A977be4bE177A57a5cC8d59939f',
    6,
    'USDT',
    'Tether USD',
    'https://www.rabbitcoin.xyz/',
  ),
  dai: new Token(
    MUMBAI_TESTNET,
    '0xcB1e72786A6eb3b44C2a2429e317c8a2462CFeb1',
    18,
    'DAI',
    'Dai Stablecoin',
    'https://makerdao.com/en/',
  ),
  wbnb: new Token(
    TESTNET,
    '0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  ),
  cake: new Token(
    TESTNET,
    '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://pancakeswap.finance/',
  ),
  busd: new Token(
    TESTNET,
    '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    18,
    'BUSD',
    'Binance USD',
    'https://www.paxos.com/busd/',
  ),
  syrup: new Token(
    TESTNET,
    '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://pancakeswap.finance/',
  ),
  bake: new Token(
    TESTNET,
    '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    18,
    'BAKE',
    'Bakeryswap Token',
    'https://www.bakeryswap.org/',
  ),
} as const)

const tokens = () => {
  const chainId = CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === MUMBAI_TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {} as typeof testnetTokens & typeof mainnetTokens)
  }

  return mainnetTokens
}

const unserializedTokens = tokens()

type SerializedTokenList = Record<keyof typeof unserializedTokens, SerializedToken>

export const serializeTokens = () => {
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {} as SerializedTokenList)

  return serializedTokens
}

export default unserializedTokens
