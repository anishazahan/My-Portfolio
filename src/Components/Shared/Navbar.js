import React from 'react'
import './Navbar.css'

const Navbar = ({children}) => {
  return (
    <div>
      <div class="drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col ">
 
    <div class="w-full navbar bg-black px-16">
    <div class="flex-1 px-2 mx-2 logo text-2xl"> <span className='logo-fast-letter'>A</span> nisha<span className='ml-2'> Zahan</span></div>
      <div class="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path></svg>
        </label>
      </div> 
     
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
   
  {children}
  </div> 
  <div class="drawer-side">
    <label htmlFor="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
    
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
    
  </div>
</div>

    </div>
  )
}

export default Navbar;