import React from "react";
import "./about.css";
import ME from "../../assets/flip.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about_container">
        <div className="about_me">
          <img src={ME} alt="about image" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>2 Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>            
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            quos, cumque, omnis natus corrupti facilis cupiditate suscipit
            accusamus obcaecati maxime modi! Aliquid distinctio repellendus
            nulla ex sequi incidunt repudiandae architecto!
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
