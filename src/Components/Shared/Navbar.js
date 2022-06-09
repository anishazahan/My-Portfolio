import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({children}) => {
  return (
    <div>
      <div className="drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col ">
 
    <div className="w-full navbar bg-black px-16">
    <div className="flex-1 px-2 mx-2 logo text-3xl"> <span className='logo-fast-letter'>A</span> nisha<span className='ml-2'> Zahan</span></div>
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path></svg>
        </label>
      </div> 
     
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          
          <li><Link className='menu' to="/">Home</Link></li>
          <li><Link className='menu' to="/services">Services</Link></li>
          <li><Link className='menu' to="/">Portfolio</Link></li>
          <li><Link className='menu' to="/about">About</Link></li>
          <li><Link className='menu' to="/">Contact</Link></li>
         
        </ul>
      </div>
    </div>
   
  {children}
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
    
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
    
  </div>
</div>

    </div>
  )
}

export default Navbar;