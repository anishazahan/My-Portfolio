import React from 'react'
import './Projects.css'
import landscape from '../../../assets/img/landscape2.png'
import landscapeOrg from '../../../assets/img/lanscape-original.png'
import cars from '../../../assets/img/cars.png'
import { Link } from 'react-router-dom'


const Projects = () => {
  return (
    <div className='my-20 max-w-7xl mx-auto px-10'>
        <h2 className='Projects-heading text-center text-3xl mb-10'>My Projects</h2>
       <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-4">
       <div className="project-box shadow-md px-4 pb-10 ">
                <img className='project-img mb-2' src={landscapeOrg} alt="" />
                <h2 className='text-2xl project-name my-4'>Home Landscaping service</h2>
              <Link to='/' className='peoject-details-btn rounded-sm text-left'>Details</Link>
            </div>
       <div className="project-box shadow-md px-4 pb-10">
                <img className='project-img' src={landscape} alt="" />
                <h2 className='text-2xl project-name my-4'>Fruits warehouse</h2>
                <Link to='/' className='peoject-details-btn rounded-sm text-left'>Details</Link>
            </div>
       <div className="project-box shadow-md px-4 pb-10">
                <img className='project-img' src={cars} alt="" />
                <h2 className='text-2xl project-name my-4'>Cars Instruments</h2>
                <Link to='/' className='peoject-details-btn rounded-sm'>Details</Link>
            </div>
       </div>

    </div>
  )
}

export default Projects