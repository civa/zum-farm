import { MenuEntry } from 'zmx-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://dex.zum.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'http://dex.zum.finance/#/pool',
      },
      {
        label: 'Liquidity V2',
        href: 'https://pancakeswap.finance/swap#/pool',
      },
    ],
  },
  {
    label: 'Farm and Stake',
    icon: 'FarmIcon',
    href: '/farms',
  },
  // {
  //  label: 'poolss',
  //  icon: 'PoolIcon',
  //  href: '/poolss',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/TournamentGameToken/Zum.finance/tree/master',
      },
      {
        label: 'Docs',
        href: 'https://docs.zum.finance/',
      },
      {
        label: 'Blog',
        href: 'https://blog.zum.finance/',
      },
      {
        label: 'Vote',
        href: 'https://snapshot.org/#/zumtoken.eth',
      },
      
    ],
  },
]

export default config
