import { ChainId } from '@rabbitcoin/sdk'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { CHAIN_ID } from './networks'
import tokens, { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

export const vaultPoolConfig = {
  [VaultKey.CakeVault]: {
    name: <Trans>Auto RABBIT</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.rabbit.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO RabbitCoin',
    description: <Trans>Stake RabbitCoin to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.rabbit.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

/// It chooses network id which determined in environment
const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.rabbit,
    earningToken: serializedTokens.rabbit,
    contractAddress: {
      97: '0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
      137: '0x15d2A505bCa0491ec25d73af8FD970754Ee7fac8', // RabbitCoinPool
      80001: '0xE26C5d768D97db78Effee63d79028B27d51d67cD', // RabbitCoinPool
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00025', // UPDATE:tokenPerBlock
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.carrot,
    earningToken: serializedTokens.rabbit,
    contractAddress: {
      137: '0x9e0629e8Ef591b626A5d0893783199668E1a5893',
      80001: '0x',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 2,
    tokenPerBlock: '0.0025',
    deployedBlockNumber: 55016560,
    version: 3,
    participantThreshold: 10000,
  },
  /*
  {
    sousId: 2,
    stakingToken: serializedTokens.wmatic,
    earningToken: serializedTokens.rabbit,
    contractAddress: {
      137: '0xd043e7BB67B817a41aFa5127945583b78e509348',
      80001: '0x2fF12C692590539d69DbE1bdD0e4155e2697bF6D',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 3,
    tokenPerBlock: '0.0036',
    deployedBlockNumber: 45634502,
    version: 3,
    participantThreshold: 1000,
  },
  {
    sousId: 3,
    stakingToken: serializedTokens.rabbit,
    earningToken: serializedTokens.blitz,
    contractAddress: {
      137: '0xC5284c89d58DE92B4Ef1741CFf6c77B942Dc2d5e',
      80001: '0x0A3d9101c07382045CBC5441284c94C80c9AB0Af',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 4,
    tokenPerBlock: '1.28',
    deployedBlockNumber: 45634502,
    version: 3,
    participantThreshold: 500000,
  },
  {
    sousId: 4,
    stakingToken: serializedTokens.blitz,
    earningToken: serializedTokens.rabbit,
    contractAddress: {
      137: '0xBf6523808f55A2139eE03804017DdDB20B90cA91',
      80001: '0xC92c9561d8AeFE055fE9D9f210B33C6a27Dbb057',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 5,
    tokenPerBlock: '0.0068',
    deployedBlockNumber: 45634502,
    version: 3,
    participantThreshold: 50000000,
  },
  {
    sousId: 5,
    stakingToken: serializedTokens.rabbit,
    earningToken: serializedTokens.avatar,
    contractAddress: {
      137: '0x1be4Dd1D02AdB7A3Cd092951150cB14C6C9289Fc',
      80001: '0x66661Ccb610a6b139f74CA11CD87a5707f55f23c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 4,
    tokenPerBlock: '28',
    deployedBlockNumber: 45634502,
    version: 3,
    participantThreshold: 500000,
  },
  {
    sousId: 6,
    stakingToken: serializedTokens.avatar,
    earningToken: serializedTokens.rabbit,
    contractAddress: {
      137: '0x9F70Ff2555757Bc1dE99F8c3b0cE7DD38c523D9f',
      80001: '0x71838Bd207Db2Ef4d9962D7eDA2BFD54b3DD3d20',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 5,
    tokenPerBlock: '0.0063',
    deployedBlockNumber: 45634502,
    version: 3,
    participantThreshold: 1000000000,
  },
  {
    sousId: 7,
    stakingToken: serializedTokens.rabbit,
    earningToken: serializedTokens.hunt,
    contractAddress: {
      137: '0x262199dBFF7CC9860f9f12956f5442a30EcD847B',
      80001: '0x8B8d6666Fc94CcD974e958A65E16b811989eFDBD',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 4,
    tokenPerBlock: '21',
    deployedBlockNumber: 45634502,
    version: 3,
    participantThreshold: 750000,
  },
  {
    sousId: 8,
    stakingToken: serializedTokens.hunt,
    earningToken: serializedTokens.rabbit,
    contractAddress: {
      137: '0x150aD667558c2667E294Aa362Ed9704Cad635C38',
      80001: '0xD41B60B95E7B036155D7eD83594d152AaeB19ce7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 5,
    tokenPerBlock: '0.0116',
    deployedBlockNumber: 45634502,
    version: 3,
    participantThreshold: 750000000,
  },
  {
    sousId: 9,
    stakingToken: serializedTokens.rabbit,
    earningToken: serializedTokens.nitro,
    contractAddress: {
      137: '0x563B0dECBbA56Ec4D0c3FA65f3E24f99CF926aF8',
      80001: '0x2509e563496bD847646730b6E25E230D262bE764',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 4,
    tokenPerBlock: '2.5',
    deployedBlockNumber: 45634502,
    version: 3,
    participantThreshold: 500000,
  },
  {
    sousId: 10,
    stakingToken: serializedTokens.nitro,
    earningToken: serializedTokens.rabbit,
    contractAddress: {
      137: '0x2FE87D842B3994ca07130d76362ff504f3530ca8',
      80001: '0xe1D8458ec162b9EE6C998D2B4E9C3B7F87ea55da',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 5,
    tokenPerBlock: '0.0036',
    deployedBlockNumber: 45634502,
    version: 3,
    participantThreshold: 50000000,
  },
  {
    sousId: 11,
    stakingToken: serializedTokens.rabbit,
    earningToken: serializedTokens.dj,
    contractAddress: {
      137: '0x7199Fec50451F5612df0392dbb74A6B91cD9e6c4',
      80001: '0x209c54ae81ca70334369692b73abcb09cdda0f21',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 4,
    tokenPerBlock: '0.00082',
    deployedBlockNumber: 45634502,
    version: 3,
    participantThreshold: 500000,
  },
  {
    sousId: 12,
    stakingToken: serializedTokens.dj,
    earningToken: serializedTokens.rabbit,
    contractAddress: {
      137: '0xE81076995DA01C847B979b72dCf81c63067EdcA8',
      80001: '0x71082763808734ff10e35bd214d82fa756500848',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 5,
    tokenPerBlock: '0.021',
    deployedBlockNumber: 45634502,
    version: 3,
    participantThreshold: 100000,
  },
  {
    sousId: 13,
    stakingToken: serializedTokens.rabbit,
    earningToken: serializedTokens.z,
    contractAddress: {
      137: '0x5e35532DD33FA442488E8ce0E4d35d742c0307e5',
      80001: '0xB66C6A0D7603f7a29517Dc65b6021Df13FFf878E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 4,
    tokenPerBlock: '0.049',
    deployedBlockNumber: 45634502,
    version: 3,
    participantThreshold: 500000,
  },
  {
    sousId: 14,
    stakingToken: serializedTokens.z,
    earningToken: serializedTokens.rabbit,
    contractAddress: {
      137: '0x925F0Ef1Edf2f510Cffb01102dcA0D6D7f4E3e5A',
      80001: '0x850D8B7fE535Ef0E7D696189607938B5E16FA47E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 5,
    tokenPerBlock: '0.018',
    deployedBlockNumber: 45634502,
    version: 3,
    participantThreshold: 5000000,
  },
  */
].filter((p) => !!p.contractAddress[ChainId.POLYGON])

export default pools
