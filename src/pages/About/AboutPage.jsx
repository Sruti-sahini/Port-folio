import React from "react";
import "./AboutPage.css";

/* Component */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import imgabout from "../../img/SrutiSahini.jpeg";
// import Github from "./Github";

const About = () => {
  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="about-section" id="about-me">
          <div className="about-container">
            <div className="about-img-container">
              <img src={imgabout} alt="my-self" className="about-img" />
            </div>
            <div className="about-info">
              <p> Hi, </p>
              <p>
              I am Sahini Venkata Sitaram Sruti, currently pursuing a Bachelor of Technology at the prestigious Indian Institute of Technology (IIT) Patna. My academic journey, coupled with my relentless passion for technology, has shaped me into a highly motivated individual with a strong foundation in software development and machine learning. Throughout my B.Tech, I have consistently aimed to push boundaries and develop innovative solutions that make a lasting impact.
              </p>
              <p>
                {" "}
                From an early stage, my enthusiasm for programming ignited a journey of continuous learning. I am proficient in various programming languages, including C/C++, Python, HTML, CSS, JavaScript, and SQL, which enables me to approach problems with a versatile toolkit. My technical expertise extends to frameworks and databases like PyTorch, TensorFlow, Keras, ReactJS, Node.js, Express.js, and MongoDB, empowering me to build robust applications.
              </p>
              <div className="hide parrafo-active">
                <p>
                As an Applied Scientist Intern at Amazon India, I had the opportunity to work on the Image Verification Project as part of the Central Machine Learning team. During this internship, I contributed to developing a comprehensive evaluation benchmark for Vision Language Models, conducted ablation experiments, and proposed enhancements for model optimization. This experience deepened my understanding of machine learning models and honed my skills in Python, PyTorch, and Hugging Face's transformers.
                </p>
                <p>
                In addition to academics, I take pride in my coding achievements, having solved over 500 problems on platforms like LeetCode and GeeksforGeeks. My passion for machine learning earned me a spot in the Amazon ML Summer School, where I was selected as one of the top 3000 students nationwide. I was also selected as one of the top 30 women students for the 2024 Mercari Women Hackathon in India.{" "}
                </p>
                <p>
                I have also developed multiple projects, including a blog website using the MERN stack, and CarHub, a React-based car rental platform. These projects showcase my skills in full-stack development and highlight my ability to create intuitive, user-friendly platforms.
                </p>
                <p>
                Apart from technical skills, I have demonstrated leadership capabilities as a sub-coordinator in various campus activities like Creative and Design for Infinito and Celesta, IIT Patna's annual fest. These roles have helped me hone my interpersonal skills, and I value collaboration and teamwork in achieving shared goals.
                </p>
              </div>
              <div className="btn-info">
                <div
                  className="custom-btn btn-codigo"
                  id="btn-hide"
                  onClick={readMore}
                >
                  <span>Read more</span>
                </div>
              </div>
            
          </div>
</div>
          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="row container">
              <div
                className="columns col-skill"
                data-aos="fade-left"
                data-aos-delay="650"
              >
                <h4>Programming Languages</h4>
                <div className="skill">
                  <div>
                    <img
                      alt="C"
                      className="icons-skils"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                    />
                    <h5>C</h5>
                  </div>
                  <div>
                    <img
                      alt="C++"
                      className="icons-skils"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                    />
                    <h5>C++</h5>
                  </div>
                  <div>
                    <img
                      alt="Python"
                      className="icons-skils"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                    />
                    <h5>Python</h5>
                  </div>
                  {/* <div>
                    <img
                      alt="Java"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    />
                    <h5>Java</h5>
                  </div> */}
                </div>
                <h4>Front-End</h4>
                <div className="skill">
                  <div>
                    <img
                      alt="HTML"
                      className="icons-skils"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    />
                    <h5>HTML</h5>
                  </div>
                  <div>
                    <img
                      alt="CSS"
                      className="icons-skils"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    />
                    <h5>CSS</h5>
                  </div>
                  <div>
                    <img
                      alt="Js"
                      className="icons-skils"
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    />
                    <h5>JavaScript</h5>
                  </div>
                  {/* <div>
                    <img
                      alt="Bootstrap"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    />
                    <h5>Bootstrap</h5>
                  </div> */}
                  <div>
                    <img
                      alt="Tailwindcss"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    />
                    <h5>Tailwindcss</h5>
                  </div>
                  <div>
                    <img
                      alt="React"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    />
                    <h5>React.js</h5>
                  </div>
                </div>
                <h4>Back-End</h4>
                <div className="skill">
                  <div>
                    <img
                      alt="Nodejs"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    />
                    <h5>NodeJs</h5>
                  </div>
                  <div>
                    <img
                      alt="express"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    />
                    <h5>Express</h5>
                  </div>
                  <div>
                    <img
                      alt="mongodb"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
                    />
                    <h5>MongodDB</h5>
                  </div>
                  {/* <div>
                    <img
                      alt="MySQL"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"
                    />
                    <h5>MySQL</h5>
                  </div> */}
                </div>
                <h4>Tools</h4>
                <div className="skill">
                  <div>
                    <img
                      alt="figma"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                      title="Figma"
                    />
                    <h5>Figma</h5>
                  </div>

                  <div>
                    <img
                      alt="Visual Studio Code"
                      className="icons-skils"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png"
                      title="Visual Studio Code"
                    />
                    <h5>VS Code</h5>
                  </div>
                  {/* <div>
                    <img
                      alt="git"
                      className="icons-skils"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                      title="Git"
                    />
                    <h5>Git</h5>
                  </div> */}
                  <div>
                    <img
                      alt="github"
                      className="icons-skils"
                      src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg"
                      title="Github"
                    />
                    <h5>Github</h5>
                  </div>
                  {/* <div>
                    <img
                      alt="gcp"
                      className="icons-skils"
                      src="  https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/googlecloud/googlecloud-original.svg"
                      title="Google Cloud"
                    />
                    <h5>Google Cloud</h5>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* <Github /> */}
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default React.memo(About);
