import React from "react";
import "./MySkills.css";
import skillImg from '../../../assets/img/skills.png'

const MySkills = () => {
  return (
    <div className="skills-background pb-10">
      <h2 className="skill-heading text-3xl text-gray-200 pt-10">
        My  skills
      </h2>
      <div className=" py-10 mx-auto">
        <div className="hero-content flex-col lg:flex-row mx-auto">
          <img className="rounded-md"
            src={skillImg}
           alt=""/>
          <div>
            <h1 className="text-xl font-bold skill-name mt-[-8] text-gray-200 ">Skills</h1>
            <button className="skill-btn p-2">HTML</button>
            <button className="skill-btn p-2">CSS</button>
            <button className="skill-btn p-2">BOOTSTRAP</button>
            <button className="skill-btn p-2">TAILWIND</button><br/>
            <button className="skill-btn p-2">DAYSIUI</button>
            <button className="skill-btn p-2">JAVASCRIPT</button>
            <button className="skill-btn p-2">REACT.JS</button>

            <h1 className="text-xl font-bold skill-name mt-4 text-gray-200">Familiar</h1>
            <button className="skill-btn p-2">Node.JS</button>
            <button className="skill-btn p-2">Redux</button>
            <button className="skill-btn p-2">Typescript</button>
            <button className="skill-btn p-2">Express.Js</button>
            <button className="skill-btn p-2">Firebase Authentication</button>
            <button className="skill-btn p-2">MongoDB</button><br/>
            <button className="skill-btn p-2">Mongoose</button>
            <button className="skill-btn p-2">Next Js</button>
            
            <h1 className="text-xl font-bold skill-name mt-4 text-gray-200">Deploy and Tools</h1>
            <button className="skill-btn p-2">Git</button>
            <button className="skill-btn p-2">GitHub</button>
            <button className="skill-btn p-2">Netlify</button>
            <button className="skill-btn p-2">Firebase</button>
            <button className="skill-btn p-2">Heroku</button><br/>
            <button className="skill-btn p-2">VS Code</button>
            <button className="skill-btn p-2">Figma</button>
            <button className="skill-btn p-2">PhotoShop</button>
            <button className="skill-btn p-2">Postman</button>
            <button className="skill-btn p-2">Vercel</button>

            
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
