import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'zmx-uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import EarnAssetCard from './components/EarnAssetCard'

const Hero = styled.div`
  .logo-title {
    width: 33%;
  }
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 10px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/zum/zum-finance-left.png'), url('/images/zum/zum-finance-right.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const HeaderImage = styled.img`
  width: 100%;
`
const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <>
      <HeaderImage src="/images/Header.png" alt="" />
      <Page>
        <Hero>
          <img src="/images/zum/yazi.png" alt="" className="logo-title" />
          <Text>{TranslateString(578, 'Yield farm on Binance Smart Chain.')}</Text>
        </Hero>
        <div>
          <Cards>
            <FarmStakingCard />
            <TwitterCard />
            <EarnAssetCard />
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
        </div>
      </Page>
    </>
  )
}

export default Home
