import React from "react";
import "./experience.css";
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return <section id="experience">
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className="experience_details">
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
              <h4>HTML</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
              <h4>JS</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Starter</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>
      {/* Backend */}
      <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
          <article className="experience_details">
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
              <h4>Node</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
              <h4>MongoDB</h4>
              <small className="text-light">Starter</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
              <h4>Php</h4>
              <small className="text-light">Intermediate</small>
            </div>            
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
              <h4>Django</h4>
              <small className="text-light">Intermediate</small>
            </div>            
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
              <h4>Mysql</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_detials-icon'/>
            <div>
              <h4>Python</h4>
              <small className="text-light">intermediate</small>
            </div>            
          </article>
        </div>
      </div>
    </div>
  </section>;
};

export default Experience;
