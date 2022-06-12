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
            <h1 className="text-3xl font-bold skill-name">Skils</h1>
            <button className="skill-btn p-2">HTML</button>
            <button className="skill-btn p-2">CSS</button>
            <button className="skill-btn p-2">BOOTSTRAP</button>
            <button className="skill-btn p-2">TAILWIND</button><br/>
            <button className="skill-btn p-2">DAYSIUI</button>
            <button className="skill-btn p-2">JAVASCRIPT</button>
            <button className="skill-btn p-2">REACT.JS</button>

            
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
