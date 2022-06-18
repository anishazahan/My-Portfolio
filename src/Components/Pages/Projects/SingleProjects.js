import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './SingleProjects.css'

const SingleProjects = ({Project}) => {
  const {name,img,id} = Project;

  const Navigate = useNavigate();

  const navigateToProjectDetail = id =>{
    Navigate(`/projects/${id}`);
}

   
    
  return (
    <div className='mx-auto shadow-lg px-5 pb-10 pt-2'>
        <img src={img} alt="" />
        <h2 className='text-3xl my-10 projects-tittle'>{name}</h2>
        <div className="flex flex-row justify-between">
            <Link className='projects-btn' to='/'>Live Site</Link>
            <button className='projects-btn' onClick={() => navigateToProjectDetail(id)}>View Details</button>
        </div>


    </div>
  )
}

export default SingleProjects