import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import './navbar.css';
import headshot from './images/profile.jpg';
import Images from './images/images';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

const Navbar = () => (
    <Tabs className="tabContainer">
        <Tab label="About" >
            <div className="tabContent">
                <h2 style={styles.headline}>About</h2>
            <hr/>
                <div className="about">
                    <div>
                        <img src={headshot} id="headshot" alt="head shot of Julie Wilson"/>
                    </div>

                    <p id="aboutText">
                        I am a certified full stack web developer with a bachelor's of science in biology and a background in molecular genetics.
                        <br/>
                        <br/>
                        After working in a molecular neuroscience lab as a laboratory coordinator, I decided that while many of the tasks involved in the job, such as data analysis and presentation, suited me well; however, I felt I was often detracted from these tasks by daily wet lab work.
                        <br/>
                        <br/>
                        I have incorporated my skills in research, documentation, and attention to detail to create a portfolio that incorporated my love for creative problem solving.
                    </p>
                </div>
                <h2 style={styles.headline}>Skills</h2>
                <hr/>
                <div className="skills">
                    <Images />
                </div>
            </div>
        </Tab>
        <Tab label="Portfolio" >
            <div className="tabContent">
                <h2 style={styles.headline}>Portfolio</h2>
                <hr/>
                <Portfolio/>
            </div>
        </Tab>
        <Tab label="Contact" >
            <div className="tabContent">
                <h2 style={styles.headline}>Contact</h2>
                <hr/>
                    <Contact />
            </div>
        </Tab>
    </Tabs>
);

export default Navbar;