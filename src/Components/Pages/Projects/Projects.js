import React, { useEffect, useState } from 'react'
import './Projects.css'
import img1 from '../../../assets/img/carProject.png'
import img2 from '../../../assets/img/lanscapeProject.png'
import img3 from '../../../assets/img/cry.png'
import img4 from '../../../assets/img/watch.png'
import img5 from '../../../assets/img/calculate.png'
import img6 from '../../../assets/img/bestChoice.png'



const Projects = () => {

  const [Projects, setProjects] = useState([]);

  useEffect( ()=>{
      fetch('Projects.json')
      .then(res => res.json())
      .then(data =>setProjects(data));
  }, [])

  return (
    <div className='my-20 max-w-7xl mx-auto px-10'>
         <h2 className='Projects-heading text-center text-3xl mb-14 text-gray-300'>My Projects</h2>
       {/* <div className="grid grid-col-1 lg:grid-cols-2 gap-y-5 gap-x-4">
       {
                Projects.map(Project => <SingleProjects
                    key={Project.id}
                    Project={Project}
                >
                </SingleProjects>)
            }
       </div> */} 
       <div className="grid grid-cols-2 lg:grid-cols-3 px-5 lg:px-16 gap-3 ">
        <div className="project-box shadow-md">
          <div className="h-54">
            <img className='h-56' src={img1} alt="" />
          </div>
          <h1 className='text-[18px] font-bold mt-4 mb-2 px-4 project-heading'>Cars Instruments</h1>
          <div className="flex flex-col space-y-1 pb-5 px-4">
            <a className='text-sm link text-secondary' href="https://car-manufacturer-76b00.web.app/">Live Link</a>
            <a className='text-sm link' href="https://github.com/anishazahan/Cars-Instruments-Server">Client Link</a>
            <a className='text-sm link' href="https://github.com/anishazahan/Cars-Instruments">Server Code Link</a>
          </div>
        </div>
        <div className="project-box shadow-md">
          <div className="h-54">
            <img className='h-56' src={img2} alt="" />
          </div>
          <h1 className='text-[18px] font-bold mt-4 mb-2 px-4 project-heading'>Home Lanscaping Service</h1>
          <div className="flex flex-col space-y-1 pb-5 px-4">
            <a className='text-sm link text-primary' href="https://home-landscaper-services.firebaseapp.com/home">Live Link</a>
            <a className='text-sm link' href="https://github.com/anishazahan/Landscaping-Service">Client Link</a>
          </div>
        </div>
        <div className="project-box shadow-md">
          <div className="h-54">
            <img className='h-56' src={img3} alt="" />
          </div>
          <h1 className='text-[18px] font-bold mt-4 mb-2 px-4 project-heading'>Cryto Cafe</h1>
          <div className="flex flex-col space-y-1 pb-5 px-4">
            <a className='text-sm link text-secondary' href="https://lambent-quokka-79e933.netlify.app/coins">Live Link</a>
            <a className='text-sm link' href="https://github.com/anishazahan/Crypto-Cafe-Website">Client Code Link</a>
          </div>
        </div>
        <div className="project-box shadow-md">
          <div className="h-54">
            <img className='h-56' src={img4} alt="" />
          </div>
          <h1 className='text-[18px] font-bold mt-4 mb-2 px-4 project-heading'>Watch Collection</h1>
          <div className="flex flex-col space-y-1 pb-5 px-4">
            <a className='text-sm link text-secondary' href="https://lambent-quokka-79e933.netlify.app/coins">Live Link</a>
            <a className='text-sm link' href="https://github.com/anishazahan/Smart-Watch-Collection">Client Link</a>
          </div>
        </div>
        <div className="project-box shadow-md">
          <div className="h-54">
            <img className='h-56' src={img5} alt="" />
          </div>
          <h1 className='text-[18px] font-bold mt-4 mb-2 px-4 project-heading'>Saving Calculate</h1>
          <div className="flex flex-col space-y-1 pb-5 px-4">
            <a className='text-sm link text-secondary' href="https://nostalgic-joliot-c1bf7a.netlify.app/">Live Link</a>
            <a className='text-sm link' href="https://github.com/anishazahan/Saving-Calculate">Client Code Link</a>
          </div>
        </div>
        <div className="project-box shadow-md">
          <div className="h-54">
            <img className='h-56' src={img6} alt="" />
          </div>
          <h1 className='text-[18px] font-bold mt-4 mb-2 px-4 project-heading'>Best Choice</h1>
          <div className="flex flex-col space-y-1 pb-5 px-4">
            <a className='text-sm link text-secondary' href="https://best-choice-a3d8e.web.app/">Live Link</a>
            <a className='text-sm link' href="https://github.com/anishazahan/Best-Choice">Client Code Link</a>
          </div>
        </div>

       </div>
   
    </div>
  )
}

export default Projects