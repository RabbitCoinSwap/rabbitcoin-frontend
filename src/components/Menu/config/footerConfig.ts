import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('RabbitCoin'),
        href: 'https://docs.rabbitcoin.xyz/rabbitcoin/about-me',
      },
      {
        label: t('Tokenomics'),
        href: 'https://docs.rabbitcoin.xyz/rabbitcoin/tokenomics',
      },
      {
        label: t('Roadmap'),
        href: 'https://docs.rabbitcoin.xyz/rabbitcoin/roadmap',
      },
      {
        label: t('Contact Us'),
        href: 'https://docs.rabbitcoin.xyz/#contact-us',
      },
      /*
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://pancakeswap.creator-spring.com/',
        isHighlighted: true,
      },
      */
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.rabbitcoin.xyz/help/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.rabbitcoin.xyz/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.rabbitcoin.xyz/help/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/rabbitcoinswap',
      },
      {
        label: t('Smart Contracts'),
        href: 'https://docs.rabbitcoin.xyz/developments/smart-contrats',
      },
      {
        label: t('Listing Token'),
        href: 'https://docs.rabbitcoin.xyz/developments/listing-token',
      },
      {
        label: t('Selfdrop'),
        href: 'https://airdrop.rabbitcoin.xyz',
      },
      /*
      {
        label: t('Bug Bounty'),
        href: 'https://docs.pancakeswap.finance/code/bug-bounty',
      },
      {
        label: t('Careers'),
        href: 'https://docs.rabbitcoin.xyz/extras/offical-accounts',
      },
      */
    ],
  },
]
