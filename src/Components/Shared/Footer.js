import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookSquare,FaLinkedin,FaSkype,FaGooglePlus } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="footer p-10 bg-black text-base-content px-20 text-gray-400">
    <div>
      <span className="footer-title">Services</span> 
      <Link to='services' className="link link-hover">Web Development</Link> 
      <Link to='services' className="link link-hover">UI UX Design</Link> 
      <Link to='services' className="link link-hover">React Application</Link> 
      <Link to='services' className="link link-hover">Web Design</Link>
    </div> 
    <div>
      <span className="footer-title">Portfolio</span> 
      <Link to='about' className="link link-hover">About us</Link> 
      <Link to='contact' className="link link-hover">Contact</Link> 
      <Link to='services' className="link link-hover">Services</Link> 
      <Link to='/' className="link link-hover">Blog</Link>
    </div> 
    <div>
      <span className="footer-title">Social</span> 
      <div className="grid grid-flow-col">
      <Link to ="/" className='icon shadow-lg'><FaFacebookSquare></FaFacebookSquare> </Link>
                <Link to ="/" className='icon shadow-lg'><FaLinkedin></FaLinkedin> </Link>
                <Link to ="/" className='icon shadow-lg'><FaSkype></FaSkype> </Link>
                <Link to ="/" className='icon shadow-lg'><FaGooglePlus></FaGooglePlus> </Link>
      </div>
    </div>
  </footer>
  )
}

export default FooterSection
