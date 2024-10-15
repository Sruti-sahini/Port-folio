import React, { useState } from "react";
import "./ProjectPage.css";
import restapi from "../../img/rest-api-icon.png";

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from "react-router-dom";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

/* Img */
const proyectsImg = require.context("../../img", true);

const Project = () => {
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);

  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="project-site">
          <h1 className="heading" data-section="Nav" data-value="projects">
            Projects
          </h1>
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal3(!estadoModal3)}>
              <img
                src={proyectsImg(`./Blog.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal5(!estadoModal5)}>
              <img
                src={proyectsImg(`./CarHub.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
        </section>
        <h1 style={{ color: "#f40373" }}>More to come!!</h1>
      </main>

      <Modal estado={estadoModal3} cambiarEstado={cambiarEstadoModal3}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./Blog.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <h1>Blog Website</h1>
              <p>
              This blog platform is designed using the MERN stack, providing a seamless and interactive user experience for sharing thoughts and ideas.
              </p>
              <p>
              User data is securely stored in a MongoDB database, enabling efficient management of blog posts and user accounts. The platform allows users to register and log in, giving them the ability to upload, edit, and view posts. Users can engage with content by creating personalized lists of their favorite blogs, fostering a community of sharing and interaction.
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://github.com/Sruti-sahini/Website_Blog"
                  target="_blank" rel="noreferrer"
                >
                  https://github.com/Sruti-sahini/Website_Blog
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>Used technology:</span>
                <div className="eins-modal-tec">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt=""
                    style={{ backgroundColor: "white" }}
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt=""
                  />
                  <img
                    src="https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal estado={estadoModal5} cambiarEstado={cambiarEstadoModal5}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./CarHub.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <h1>CarHub</h1>
              <p>
              CarHub is a car rental platform built using modern web technologies like React, Next.js, and TypeScript, designed to provide users with a smooth and intuitive experience for finding and viewing car rental options.
              </p>
              <p>
                The platform integrates with the Rapid API to fetch real-time data on car details, including fuel type, model year, and rental rates. Users can easily filter and search for cars based on their preferences, making the process of selecting and renting cars more efficient and personalized.
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://github.com/Sruti-sahini/CarHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/Sruti-sahini/CarHub
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>Used technology:</span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt=""
                  />
                  <img
                    src={restapi}
                    alt=""
                    style={{ backgroundColor: "white" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Project;
