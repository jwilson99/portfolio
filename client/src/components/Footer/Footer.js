import React from 'react';
import './footer.css';
import github from './images/github.png';
import linkedin from './images/linkedin.png';

// creates Footer component to render to the page
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerItem">
                <a href="https://github.com/jwilson99" target="_blank" rel="noopener noreferrer">
                <img src={github} className="icon" alt="icon and link to GitHub account"/>
                </a>
                <a href="https://www.linkedin.com/in/julie-wilson-2673a5b6/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} className="icon" alt="icon and link to LinkedIn account"/>
                </a>
            </div>
        </footer>
    )
};

// exports Footer for external use
export default Footer;