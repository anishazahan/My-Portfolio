import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div className="flex-item">
            <h1 className='baner-heading text-5xl lg:text-7xl'>Hey !! </h1>
            <h1 className='lg:text-6xl text-5xl banner-heading2'>I'm <span className='name text-secondary'>Anisha Zahan</span> </h1>
            
            <p className='banner-text'>I am a React JS developer,Web designer.I will create Your website as your creative choice! </p>
            <Link className='banner-btn1' to="/">Contact Me</Link>
            <Link className='banner-btn2 ml-4' to="/">Download Resume</Link>
      </div>
    </div>
  )
}

export default Banner