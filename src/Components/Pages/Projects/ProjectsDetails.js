import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectsDetails = () => {

    const {projectName} = useParams();
  return (
    <div>

    <h2 className='mt-10 mb-72 text-center text-2xl'>Welcome to details {projectName}</h2>


    </div>
  )
}

export default ProjectsDetails