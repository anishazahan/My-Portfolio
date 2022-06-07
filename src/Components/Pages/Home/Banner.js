import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div className="flex-item">
            <h1 className='baner-heading text-7xl'>Hey !! </h1>
            <h1 className='text-6xl banner-heading2'>I'm <span className='name'>Anisha Zahan</span> </h1>
            
            <p className='banner-text'>I am a React JS developer,Web designer.I will create Your website as your creative choice! </p>
            <Link className='banner-btn' to="/">Contact Me</Link>
            <Link className='banner-btn ml-4' to="/">See Resume</Link>
      </div>
    </div>
  )
}

export default Banner