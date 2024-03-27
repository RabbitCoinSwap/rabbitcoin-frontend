import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'RabbitCoin',
  description:
    'Dive into RabbitCoin decentralized exchange (DEX), where you can effortlessly stake, farm, or trade with unparalleled ease and flexibility, making your crypto journey seamless and rewarding!. Start earning passive income with RabbitCoin today!',
  image: 'https://rabbitcoin.xyz/assets/images/clone/ogbanner.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('RabbitCoin')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('RabbitCoin')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('RabbitCoin')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('RabbitCoin')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('RabbitCoin')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('RabbitCoin')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('RabbitCoin')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('RabbitCoin')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('RabbitCoin')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('RabbitCoin')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('RabbitCoin')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('RabbitCoin')}`,
      }
    case '/nftpools':
      return {
        title: `${t('NFT Pools')} | ${t('RabbitCoin')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('RabbitCoin')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('RabbitCoin')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('RabbitCoin')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('RabbitCoin')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('RabbitCoin')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('RabbitCoin')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('RabbitCoin Info & Analytics')}`,
        description: 'View statistics for RabbitCoin exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('RabbitCoin Info & Analytics')}`,
        description: 'View statistics for RabbitCoin exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('RabbitCoin Info & Analytics')}`,
        description: 'View statistics for RabbitCoin exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('RabbitCoin')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('RabbitCoin')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('RabbitCoin')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('RabbitCoin')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('RabbitCoin')}`,
      }
    default:
      return null
  }
}
