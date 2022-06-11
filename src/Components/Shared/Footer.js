import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookSquare,FaLinkedin,FaSkype,FaGooglePlus } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer class="footer p-10 bg-black text-base-content px-20 text-gray-400">
    <div>
      <span class="footer-title">Services</span> 
      <Link to='services' class="link link-hover">Web Development</Link> 
      <Link to='services' class="link link-hover">UI UX Design</Link> 
      <Link to='services' class="link link-hover">React Application</Link> 
      <Link to='services' class="link link-hover">Web Design</Link>
    </div> 
    <div>
      <span class="footer-title">Portfolio</span> 
      <Link to='about' class="link link-hover">About us</Link> 
      <Link to='contact' class="link link-hover">Contact</Link> 
      <Link to='services' class="link link-hover">Services</Link> 
      <Link to='home' class="link link-hover">Blog</Link>
    </div> 
    <div>
      <span class="footer-title">Social</span> 
      <div class="grid grid-flow-col">
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
