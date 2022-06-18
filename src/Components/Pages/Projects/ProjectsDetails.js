import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectsDetails = () => {

    const {projectID} = useParams();
  return (
    <div>

    <h2>Welcome to details {projectID}</h2>


    </div>
  )
}

export default ProjectsDetails