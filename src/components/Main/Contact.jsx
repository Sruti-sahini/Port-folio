import React from 'react';
import '../../pages/Contact/ContactPage.css'
/* TypedJs */
import Typical from 'react-typical';
import { Link } from 'react-router-dom';
import { ButtomGet } from "../ButtomGet/ButtomGet";


const Contact = () => (

    <section className="contact" id="contact">
        <h3 className="title" data-aos="fade-left" data-aos-delay="300">
            Contact me by:
            <Typical
                className="site-contact"
                loop={Infinity}
                wrapper="b"
                steps={[
                    ' Gmail', 1500,
                    ' Linkedin', 1500,
                    ' Github', 1500,
                    ' Twitter', 1500,
                ]}
            />

        </h3>

        <div className="icons">
            <a href="mailto:sahinisruti@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fas fa-envelope"></span>
                </div>
                <div className="text">
                    Gmail
                </div>
            </a>
            <a href="https://www.linkedin.com/in/srutisahini210149/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-linkedin-in"></span>
                </div>
                <div className="text">
                    LinkedIn
                </div>
            </a>
            <a href="https://github.com/Sruti-sahini" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-github-square"></span>
                </div>
                <div className="text">
                    GitHub
                </div>
            </a>
            <a href="https://x.com/SahiniSrut45634" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-twitter"></span>
                </div>
                <div className="text">
                    Twitter
                </div>
            </a>
        </div>

        <div className="portafolio-btn">
        <Link to="/contact-me">
          <ButtomGet />
        </Link>
      </div>
    </section>
);

export default React.memo(Contact);