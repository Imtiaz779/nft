import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Hero from '../../pages/Home/component/Hero'
import MarqueeCrypto from './component/MarqueeCrypto'
import TradeCard from './component/TradeCard'

const Home = () => {
  return (
    <div  className="font-montserrat">
     <Navbar/>
     <Hero/>
     <MarqueeCrypto/>
     <TradeCard/>
    <Footer/>
    </div>
   

  )
}

export default Home