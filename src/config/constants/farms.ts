import { ChainId } from '@rabbitcoin/sdk'
import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  // CAUTION: We dont'need pool zero for farm
  {
    pid: 0,
    lpSymbol: 'RABBIT',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      137: '0x28767E286113Ab01EE819b9398A22D6f27BaDb6E', // RabbitCoin
      80001: '0xAE234b5b5dBaaB22CfC7d6038b39c90aa4EC9Cc5', // RabbitCoin
    },
    token: serializedTokens.carrot,
    quoteToken: serializedTokens.rabbit,
  },
  {
    pid: 1,
    lpSymbol: 'RABBIT-USDT LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
      137: '0xFb982fA95e94D1F98f43ec9EBc8d31632DA0040b', // RabbitCoinPair
      80001: '0x', // RabbitCoinPair
    },
    token: serializedTokens.rabbit,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'RABBIT-WMATIC LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
      137: '0x15D98d5b9Aa485a1f6989a507C9BbdCe8966F70D', // RabbitCoinPair
      80001: '0x', // RabbitCoinPair
    },
    token: serializedTokens.rabbit,
    quoteToken: serializedTokens.wmatic,
  },
  {
    pid: 3,
    lpSymbol: 'DAI-USDC LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
      137: '0x70B118b9Bd6996638024Be5EbBaFBEEe7DDe702C', // RabbitCoinPair
      80001: '0x', // RabbitCoinPair
    },
    token: serializedTokens.dai,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 4,
    lpSymbol: 'WMATIC-USDT LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
      137: '0xd2E6c7fc39C5118c8F79B54B86768A520FC061CA',
      80001: '0x', // RabbitCoinPair
    },
    token: serializedTokens.wmatic,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 5,
    lpSymbol: 'WMATIC-USDC LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
      137: '0xf356157463d5c263aAc7468F2E6e09DeE1F7c26C',
      80001: '0x' // RabbitCoinPair
    },
    token: serializedTokens.wmatic,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 6,
    lpSymbol: 'WMATIC-BUSD LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
      137: '0x074f962a2B52899B3DCE51FA891A5aeB42f2a045',
      80001: '0x' // RabbitCoinPair
    },
    token: serializedTokens.wmatic,
    quoteToken: serializedTokens.busd,
  },
  /*
  {
    pid: 7,
    lpSymbol: 'RABBIT-NITRO LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
      137: '0x9556C3c45333476e0D2466CfBBE8f001055BDc41',
      80001: '0xf228A55fFCD281b5a245D48f5677870313381c15' // RabbitCoinPair
    },
    token: serializedTokens.nitro,
    quoteToken: serializedTokens.rabbit,
  },
  {
    pid: 8,
    lpSymbol: 'RABBIT-DJ LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
      137: '0x94d979cebe0481eab8a1296818e81fc2636b0d2f',
      80001: '0x43Db09aa003A824A04BFd7555D92Ea7EB3F85d11' // RabbitCoinPair
    },
    token: serializedTokens.dj,
    quoteToken: serializedTokens.rabbit,
  },
  {
    pid: 9,
    lpSymbol: 'RABBIT-Z LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
      137: '0x3ad14c5fb4f8d2f09cdd1434473ed97fc8c7a62e',
      80001: '0x32a0bd863Cd833a6306449f67c7211284D1EAF00' // RabbitCoinPair
    },
    token: serializedTokens.z,
    quoteToken: serializedTokens.rabbit,
  },
  */
].filter((f) => !!f.lpAddresses[ChainId.MAINNET])

export default farms
