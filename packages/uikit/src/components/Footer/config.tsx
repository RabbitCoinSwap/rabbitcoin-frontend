import { Language } from "../LangSelector/types";
import { FooterLinkType, SocialLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact Us",
        href: "https://docs.rabbitcoin.xyz/#contact-us",
      },
      {
        label: "Blog",
        href: "https://blog.rabbitcoin.xyz",
      },
      {
        label: "Community",
        href: "https://docs.rabbitcoin.xyz",
      },
      {
        label: "RabbitCoin",
        href: "https://docs.rabbitcoin.xyz/rabbitcoin/about-me",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.rabbitcoin.xyz/help/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.rabbitcoin.xyz/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.rabbitcoin.xyz/help/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/rabbitcoinswap",
      },
      {
        label: "Documentation",
        href: "https://docs.rabbitcoin.xyz",
      },
      {
        label: "Bug Bounty",
        href: "",
      },
      {
        label: "Audits",
        href: "",
      },
      {
        label: "Careers",
        href: "",
      },
    ],
  },
];

export const socials: SocialLinkType[] = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/RabbitCoinMatic",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/rabbitcoinsportal",
  },
  /*
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/pancakeswap",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://www.instagram.com/rabbitcoinorg/",
  },  
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/RabbitCoinSwap",
  },
  */
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/4BQ9mkfJPT",
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/rabbitcoinpolygon/",
  },
  {
    label: "Medium",
    icon: "Medium",
    href: "https://medium.com/@rabbitcoinpolygon",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
