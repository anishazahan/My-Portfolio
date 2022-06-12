import React from "react";
import "./MySkills.css";
import skillImg from '../../../assets/img/skills.png'

const MySkills = () => {
  return (
    <div className="bg-gray-100">
      <h2 className="skill-heading text-2xl">
        My <span className="skill-letter">S</span>kills{" "}
      </h2>
      <div className=" py-10 mx-auto">
        <div className="hero-content flex-col lg:flex-row mx-auto">
          <img className="rounded-md"
            src={skillImg}
           alt=""/>
          <div>
            <h1 className="text-xl font-bold skill-name mt-[-8] ">Skils</h1>
            <button className="skill-btn p-2">HTML</button>
            <button className="skill-btn p-2">CSS</button>
            <button className="skill-btn p-2">BOOTSTRAP</button>
            <button className="skill-btn p-2">TAILWIND</button><br/>
            <button className="skill-btn p-2">DAYSIUI</button>
            <button className="skill-btn p-2">JAVASCRIPT</button>
            <button className="skill-btn p-2">REACT.JS</button>

            <h1 className="text-xl font-bold skill-name mt-4">Familer</h1>
            <button className="skill-btn p-2">Node.JS</button>
            <button className="skill-btn p-2">EXpress.Js</button>
            <button className="skill-btn p-2">Firebase Authentication</button>
            <button className="skill-btn p-2">MongoDB</button><br/>
            
            <h1 className="text-xl font-bold skill-name mt-4">Deploy and Tools</h1>
            <button className="skill-btn p-2">Git</button>
            <button className="skill-btn p-2">GitHUB</button>
            <button className="skill-btn p-2">Netlify</button>
            <button className="skill-btn p-2">Firebase</button>
            <button className="skill-btn p-2">Heroku</button><br/>
            <button className="skill-btn p-2">VS Code</button>
            <button className="skill-btn p-2">Figma</button>
            <button className="skill-btn p-2">PhotoShop</button>
            <button className="skill-btn p-2">Postman</button>

            
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
