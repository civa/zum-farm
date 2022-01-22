import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'ZMX',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x6F3Cf80e90866Ee17Af465A710F18b612EB655f0',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x8ce454309145306609037da2a24C55362C7166D7',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://ZUMswap.finance/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
