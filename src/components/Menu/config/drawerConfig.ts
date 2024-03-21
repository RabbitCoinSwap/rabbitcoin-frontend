import { MenuItemsType } from "@pancakeswap/uikit";


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
            /*
            {
                label: 'CoinMarketCap',
                href: 'https://coinmarketcap.com/currencies/rabbitcoin/',
            },

            {
                label: 'OpenSea',
                href: 'https://opensea.io/collection/rabbitcoin-nfts',
            },
            {
                label: 'DappRadar',
                href: 'https://dappradar.com/dapp/rabbitcoin',
            },
            {
                label: 'NFTrade',
                href: 'https://nftrade.com/assets/polygon/0x569b70fc565afba702d9e77e75fd3e3c78f57eed',
            },
            */
            {
                label: 'Docs & Guides',
                href: 'https://docs.rabbitcoin.xyz/',
            },

        ],
    },


];

export default drawerLinks