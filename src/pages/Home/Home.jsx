import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Hero from '../../pages/Home/component/Hero'
import MarqueeCrypto from './component/MarqueeCrypto'
import TradeCard from './component/TradeCard'
import NodeCard from './component/NodeCard'
import KeyBenefits from './component/KeyBenefits'
import NodeWork from './component/NodeWork'
import KeyFeature from './component/KeyFeature'
import Tokenomics from './component/Tokenomics'
import InterestingFeature from './component/InterestingFeature'
import LatestNews from './component/LatestNews'

const Home = () => {
  return (
    <div  className=" container font-inter bg-[#0E0E0E] ">
     <Navbar/>
     <Hero/>
     <MarqueeCrypto/>
     <TradeCard/>
     <NodeCard/>
     <KeyBenefits/>
     <NodeWork/>
     <KeyFeature/>
     <Tokenomics/>
     <InterestingFeature/>
     <LatestNews/>
    <Footer/>
    </div>
   

  )
}

export default Home