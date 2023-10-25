import React from 'react'
 import logo from '../../assets/logo.png'
import './hero.css'
import NavBarHome from '../navbar/NavBarHome'

function Hero() {
  return (
    <div className='container-hero'>
   <div className=''>
   <h1 className='hero-title'>Star Five
 </h1>
<img  width='220px' height="auto" src={logo} alt="logo"/>

 </div>
 <div className='navbar'>
 <NavBarHome/>
 </div>


    </div>
  )
}

export default Hero 