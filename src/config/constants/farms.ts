import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'ZMX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xB8c281fe1b315Fec8928a10057404D9802F5cc45',
    },
    tokenSymbol: 'ZMX',
    tokenAddresses: {
      97: '',
      56: '0xf8e031265601419b84840617Cd18b658d29DDc41',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
      {
    pid: 6,
    risk: 5,
    lpSymbol: 'ZMX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xA7a261a8002497c8BDB2664896Da491C928CD9f6',
    },
    tokenSymbol: 'Zumfi',
    tokenAddresses: {
      97: '',
      56: '0xf8e031265601419b84840617Cd18b658d29DDc41',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'ZUM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5eC714a1f3A04Ab04760E97c1642B60e90bCf576',
    },
    tokenSymbol: 'ZUM',
    tokenAddresses: {
      97: '',
      56: '0x54C2c07b3Af037567269Ad6A168D5bD527867b58',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'ZMX POOL',
    lpAddresses: {
      97: '',
      56: '0xf8e031265601419b84840617Cd18b658d29DDc41',
    },
    tokenSymbol: 'ZMX',
    tokenAddresses: {
      97: '0xf8e031265601419b84840617Cd18b658d29DDc41',
      56: '0x00375ff8ede1c7ca76c1821f804dec52c6d1f627',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'ZUM POOL',
    lpAddresses: {
      97: '',
      56: '0x54C2c07b3Af037567269Ad6A168D5bD527867b58',
    },
    tokenSymbol: 'ZUM',
    tokenAddresses: {
      97: '',
      56: '0x54C2c07b3Af037567269Ad6A168D5bD527867b58',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms

