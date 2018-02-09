import React from 'react';
import './footer.css';
import github from './images/github.png';
import linkedin from './images/linkedin.png';

// creates Footer component to render to the page
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerItem">
                <a href="https://github.com/jwilson99">
                <img src={github} className="icon"/>
                </a>
                <a href="https://www.linkedin.com/in/julie-wilson-2673a5b6/">
                <img src={linkedin} className="icon"/>
                </a>
            </div>
        </footer>
    )
};

// exports Footer for external use
export default Footer;