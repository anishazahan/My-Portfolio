import React from 'react'
import './About.css'
import photo from '../../../assets/img/pexels-photo-4482897.jpeg'
import { Link } from 'react-router-dom'
import {FaFacebookSquare,FaLinkedin,FaSkype,FaGooglePlus } from "react-icons/fa";
const About = () => {
  return (
    <div className='maxWidth mx-auto grid md:grid-cols-1 lg:grid-cols-2 md:p-10 grid-cols-1 lg:my-20  gap-3 sm:px-16 sm:m-12'>
       
            <div className="text-section pt-20 sm:p-12">
                <h2 className='about-heading text-3xl'>  React.JS DeVeloper</h2>
                <p className='mt-4 mr-3 py-7'>I am fronted React Js Developer.I have 2 years work experience.I have fresh knowledge of html,css,bootstrap,tailwind,javascript ES6(comfortable),react.js and familier for express.Js,node Js,Mongodb and other tecnology.You will get 100% full support of work assured until you are fully satisfied.I have the ability to apply professional and technical knowledge in a challenging environment. Which helps me to improve my skills and experience, to develop efficiency and to constantly learn new things for myself.</p>
                
               <div className=" flex flex-row justify-between mt-7">
               <div className="flex flex-row">
               <Link to ="/" className='icon'><FaFacebookSquare></FaFacebookSquare> </Link>
                <Link to ="/" className='icon'><FaLinkedin></FaLinkedin> </Link>
                <Link to ="/" className='icon'><FaSkype></FaSkype> </Link>
                <Link to ="/" className='icon'><FaGooglePlus></FaGooglePlus> </Link>
               </div>
                <div className="mr-14">
                <Link to="about" className='about-btn'>About More</Link>
              </div>
               </div>
               
           
        </div>
        <div className="img-section md:mt-20 sm:mt-16 sm:p-12 lg:p-0 lg:m-0">
               <img className='about-img' src={photo} alt="" />
        </div>
       
    </div>
  )
}

export default About