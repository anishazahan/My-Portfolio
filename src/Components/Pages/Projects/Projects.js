import React, { useEffect, useState } from 'react'
import './Projects.css'
import SingleProjects from './SingleProjects';



const Projects = () => {

  const [Projects, setProjects] = useState([]);

  useEffect( ()=>{
      fetch('Projects.json')
      .then(res => res.json())
      .then(data => console.log(data));
  }, [])

  return (
    <div className='my-20 max-w-7xl mx-auto px-10'>
        <h2 className='Projects-heading text-center text-3xl mb-10'>My Projects</h2>
       <div className="grid grid-col-1 lg:grid-cols-2 gap-y-5 gap-x-4">
       {
                Projects.map(Project => <SingleProjects
                    key={Project.id}
                    Project={Project}
                >
                </SingleProjects>)
            }
       </div>

    </div>
  )
}

export default Projects