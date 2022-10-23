import React from 'react'
import './About.css'
import photo from '../../../assets/img/muslim-girl-using-laptop_63253-7859.ee1f38e272b8f4be1ee2.webp'
import { Link } from 'react-router-dom'
import {FaFacebookSquare,FaLinkedin,FaSkype,FaGooglePlus } from "react-icons/fa";
import MySkills from '../Home/MySkills';
const About = () => {
  return (
    <div className="about-background pt-2 pb-2">
      <div className='maxWidth mx-auto grid md:grid-cols-1 lg:grid-cols-2 md:p-10 grid-cols-1 lg:my-20  gap-3 sm:px-16 sm:m-12 xl:mx-auto '>
       
       <div className="text-section pt-20 ml-5 md:ml-0">
           <h2 className='about-heading text-xl md:text-3xl text-gray-100'>  React.JS DeVeloper</h2>
           <p className='mt-4 mr-3 py-7 text-justify text-gray-300'>I am fronted React Js Developer.I have 2 years work experience.I have fresh knowledgeof html,css,bootstrap,tailwind,javascript ES6(comfortable),react.js and familier for express.Js,node Js,Mongodb and other tecnology.You will get 100% full support of work assured until you are fully satisfied.I have the ability to apply professional and technical knowledge in a challenging environment. Which helps me to improve my skills and experience, to develop efficiency and to constantly learn new things for myself.</p>
           
          <div className=" flex flex-col lg:flex-row justify-between mt-5">
          <div className="flex flex-row">
          <Link to ="/" className='icon shado'><FaFacebookSquare></FaFacebookSquare> </Link>
           <Link to ="/" className='icon shado'><FaLinkedin></FaLinkedin> </Link>
           <Link to ="/" className='icon shado'><FaSkype></FaSkype> </Link>
           <Link to ="/" className='icon shado'><FaGooglePlus></FaGooglePlus> </Link>
            </div>
           <div className="mr-14 mt-10 md:mt-0">
           <Link to="about" className='about-btn'>About More</Link>
         </div>
          </div>
          
      
   </div>
   <div className="img-section md:mt-20 sm:mt-16 lg:p-0 lg:m-0">
          <img className='about-img' src={photo} alt="" />
   </div>
  
</div>



<MySkills></MySkills>
    </div>
   
  )
}

export default About