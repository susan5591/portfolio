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
              <small>Less than a year</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>College Projects</small>
            </article>
          </div>
          <p>
            I’m a tech enthusiast and striving to become a better developer than
            I am today by honing my programming, managing, designing and leading
            skills. With a motivation of making optimized and user-friendly
            websites, I have been carrying on my journey. I have always wanted
            to expand my work experience along with my career path.
            <br/>
            <br/>
            There is always change in technologies trend, but adapting in such 
            situation has been one of my ability. Challenges are the things that
            drives me to do my best and solving the problems brings the smile in 
            my face. These are the things that helps me to be a finer developer.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
