import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.rabbitcoin.xyz/extras/contact-us',
      },
      {
        label: t('What is Rabbit?'),
        href: 'https://docs.rabbitcoin.xyz/usdcollect-token/what-is-usdcollect',
      },
      {
        label: t('Tokenomics'),
        href: 'https://docs.rabbitcoin.xyz/usdcollect-token/tokenomics',
      },
      {
        label: t('Community'),
        href: 'https://docs.rabbitcoin.xyz/extras/offical-accounts',
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
        href: 'https://docs.rabbitcoin.xyz/extras/offical-accounts',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.rabbitcoin.xyz/',
      },
      {
        label: t('Guides'),
        href: 'https://docs.rabbitcoin.xyz',
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
        label: t('Documentation'),
        href: 'https://docs.rabbitcoin.xyz/',
      },
      /*
      {
        label: t('Bug Bounty'),
        href: 'https://docs.pancakeswap.finance/code/bug-bounty',
      },
      */
      {
        label: t('Audits'),
        href: 'https://docs.rabbitcoin.xyz',
      },
      {
        label: t('Careers'),
        href: 'https://docs.rabbitcoin.xyz/extras/offical-accounts',
      },
    ],
  },
]
