import { MenuItemsType } from '@pancakeswap/uikit'

const drawerLinks: MenuItemsType[] = [
  /*
    {
        label: 'NFTs',
        icon: 'NftIcon',
        href: '/nfts',
        initialOpenState: true,
        items: [
            {
                label: 'Collections',
                href: '/nfts/collections',
            },
            {
                label: 'Marketplace',
                href: 'https://market.rabbitcoin.xyz/',
            },            

        ],
    },
    */
  {
    label: 'Trade',
    icon: 'TradeIcon',
    href: '/swap',
    initialOpenState: true,
    items: [
      {
        label: 'Swap',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/liquidity',
      },
      {
        label: 'Info',
        href: '/info',
      }
    ],
  },
  {
    label: 'Yield',
    icon: 'FarmIcon',
    href: '/farms',
    initialOpenState: true,
    items: [
      {
        label: 'Farms',
        href: '/farms',
      },
      {
        label: 'Stake',
        href: '/pools',
      },
      /*
            {
                label: 'NFT Stake',
                href: '/nftpools',
            },
            {
                label: 'Claim Rewards',
                href: '/claim',
            },
            */
    ],
  },
  {
    label: 'More',
    icon: 'InfoIcon',
    href: '/more',
    initialOpenState: false,
    items: [
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/dapp/rabbitcoin',
      },

      {
        label: 'Coingecko',
        href: 'https://www.coingecko.com/en/coins/rabbitcoin-exchange',
      },
      {
        label: 'Docs & Guides',
        href: 'https://docs.rabbitcoin.xyz/',
      },
      {
        label: 'Form add Logo',
        href: 'https://forms.gle/rJ8ipx33fA6jX9Mo8',
      },
      {
        label: 'CMC Community',
        href: 'https://coinmarketcap.com/community/profile/rabbitchef/',
      },
    ],
  },
]

export default drawerLinks
