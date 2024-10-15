import React from 'react';
import './Footer.css';
import { SiLinktree } from "react-icons/si";

const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                    Page created by Sruti Sahini
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/srutisahini210149/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Sruti-sahini" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);