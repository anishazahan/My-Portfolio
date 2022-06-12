import React from 'react'
import { Link } from 'react-router-dom';
import './SingleProjects.css'

const SingleProjects = ({Project}) => {

    const {name,img,id} = Project;
    console.log(name,img);
  return (
    <div className='mx-auto shadow-lg px-5 pb-10 pt-2'>
        <img src={img} alt="" />
        <h2 className='text-3xl my-10 projects-tittle'>{name}</h2>
        <div className="flex flex-row justify-between">
            <Link className='projects-btn' to='/'>Live Site</Link>
            <Link className='projects-btn' to='/'>View Details</Link>
        </div>


    </div>
  )
}

export default SingleProjects