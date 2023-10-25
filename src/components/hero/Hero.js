import React from 'react'
import backgroundVideo from '../../assets/video.mp4'
import './hero.css'

function Hero() {
  return (
    <div className='container-hero'>
    <h1>Hero</h1>
    <video class='video' controls autoPlay loop muted>
  <source src={backgroundVideo} type="video/webm" />
</video>
    </div>
  )
}

export default Hero