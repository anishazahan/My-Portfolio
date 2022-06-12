import React from 'react'
import { Link } from 'react-router-dom';

const SingleProjects = ({Projects}) => {

    const {name,img,id} = Projects;
    console.log(name);
  return (
    <div className='mx-auto shadow-lg'>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <div className="flex flex-row justify-between">
            <Link to='/'>Live Site</Link>
            <Link to='/'>View Details</Link>
        </div>


    </div>
  )
}

export default SingleProjects