import React from 'react'
import Hero from '../../components/hero/Hero'
import AboutUs from '../../components/aboutUs/AboutUs'
import './home.css'


function Home() {
  return (
    <div className='home-container'>
        <Hero/>
        <AboutUs/>
       
    </div>
  )
}

export default Home