import React from "react";
import "../../pages/Contact/ContactPage.css";
/* TypedJs */
import Typical from "react-typical";

import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Contact = () => {
  return (
    <div>
      <HeaderPage />

      <ParticleBackground />
      <main>
      <section className="contact" id="contact-me">
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
                    ' Twitter', 1500
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
                    Linkedin
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
            {/* <a href="https://linktr.ee/nandita27iitp" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="linktext">Link</span>
                </div>
                <div className="text">
                    Linktree
                </div>
            </a> */}
        </div>

        <h3 className="connect" data-aos="fade-left" data-aos-delay="300">Let's Connect!!</h3>
    </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};

export default React.memo(Contact);
