import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'
import resume from './Anisha _Zahan_ resume.pdf'
import img from '../../../assets/img/muslim-girl-removebg.png'



const Banner = () => {
  return (
    <div className='banner'>
     <div className="flex justify-center align-middle">
     <div className="flex-item">
            <h1 className='baner-heading text-5xl lg:text-7xl'>Hey !! </h1>
            <h1 className='lg:text-6xl text-5xl banner-heading2'>I'm <span className='name '>Anisha Zahan</span> </h1>
            
            <p className='banner-text'>I am a React JS developer,Web designer.I will create Your website <br/> as your creative choice! </p>
            <Link className='banner-btn1' to="/">Contact Me</Link>
            <a className='banner-btn2 ml-4' href={resume}
             target='_blank' rel="noreferrer" >See Resume</a>
      </div>
      <img src={img} alt="" />

    
    
     </div>
    </div>
  )
}

export default Banner