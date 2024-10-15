import React from "react";
import Geeksforgeeks from "../../img/geeksforgeeks.png";
import CodingNinjas from "../../img/codingNinjas.png";
import Leetcode from "../../img/leetcode.png";
import "./Content.css";
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";

/* ReactScroll */
import { Link } from "react-scroll";

const Content = () => (
  <div className="content">
    <ParticleHeaderBg />
    <section className="intro" id="intro">
      <div className="title">
        <p data-aos="fade-up" data-aos-delay="600">
          Hello!
        </p>
        <h1 className="name" data-aos="fade-up" data-aos-delay="800">
          I am Sruti Sahini
        </h1>
        <p data-aos="fade-up" data-aos-delay="1000">
          A passionate Programmer and a Web Developer
        </p>

        <div className="wrapper">
          <a
            href="https://www.geeksforgeeks.org/user/sahinipyxx/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <img src={Geeksforgeeks} alt="geeksforgeeks" />
            </div>
          </a>
          <a
            href="https://leetcode.com/u/sahinisruti/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <img src={Leetcode} alt="leetcode" />
            </div>
          </a>

          <a
            href="https://www.naukri.com/code360/profile/4fe49e78-4822-4469-b4d1-3e4b6916a835"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <img src={CodingNinjas} alt="hackerrank" />
            </div>
          </a>
          
        </div>

        <Link to="project" href="#project">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
