import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'
import resume from './Resume.pdf'
import img from '../../../assets/img/muslim-girl-removebg.png'
import img2 from '../../../assets/img/banner2.webp'



const Banner = () => {
  return (
    <div className='banner max-width mx-auto'>
     <div className="flex flex-col lg:flex-row flex-item flex-1 px-20 w-full justify-center mt-16">
     <div className="flex-item">
            <h1 className='baner-heading text-5xl lg:text-7xl'>Hey !! </h1>
            <h1 className='lg:text-6xl text-5xl banner-heading2'>I'm <span className='name '>Anisha Zahan</span> </h1>
            
            <p className='banner-text'>I am a Fronted React JS developer.I will create Your website <br/> as your creative choice! </p>
            <Link className='banner-btn1' to="/">Contact Me</Link>
            <a className='banner-btn2 ml-4' href={resume}
             target='_blank' rel="noreferrer" >See Resume</a>
      </div>
    <div className="img flex flex-1">
    <img className='img1 ' src={img} alt="" />
    <img className='img2' src={img2} alt="" />
    </div>
    
     </div>
    </div>
  )
}

export default Banner