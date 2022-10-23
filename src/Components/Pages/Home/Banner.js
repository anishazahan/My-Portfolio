import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'
import resume from './Resume.pdf'
import img from '../../../assets/img/muslim-girl-removebg.png'




const Banner = () => {
  return (
    <div className='banner max-width mx-auto sm:max-h-[60vh] md:max-h-[0vh] lg:max-h-[90vh] bg-black'>
     <div className="flex flex-col lg:flex-row flex-item flex-1 px-5 md:px-10 lg:px-20 w-full justify-center mt-10">
     <div className="flex-item order-2 lg:order-1">
            <h1 className='baner-heading text-5xl lg:text-7xl text-white '>Hey !! </h1>
            <h1 className='lg:text-6xl text-5xl banner-heading2 text-white'>I'm <span className='name '>Anisha Zahan</span> </h1>
            
            <p className='banner-text'>I am a Fronted React JS developer.I will create Your website <br/> as your creative choice! </p>
           <div className="flex flex-col md:flex-row  space-y-3 md:space-y-0 text-secondary text-medium w-36 md:w-0">
           <Link className='banner-btn1' to="/">Contact Me</Link>
            <a className='banner-btn2 ml-0 lg:ml-4' href={resume}
             target='_blank' rel="noreferrer" >See Resume</a>
           </div>
      </div>
      <div className="img flex flex-1 justify-center items-center order-1 lg:order-2 w-10/12 h-full ml-10">
    <img className='img1 hidden lg:block z-10 h-[499px] ml-10 ' src={img} alt="" />
   
    </div>
    
     </div>
    </div>
  )
}

export default Banner