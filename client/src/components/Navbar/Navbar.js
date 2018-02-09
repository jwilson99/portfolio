import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Portfolio from '../Portfolio/Portfolio';
import './navbar.css';
import headshot from '../profile.jpg';

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
                        <img src={headshot} id="headshot"/>
                    </div>

                    <p id="aboutText">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias amet animi, dicta doloremque doloribus eum eveniet explicabo nostrum nulla provident, quasi qui repellat vitae voluptatibus. Consectetur harum, in. Debitis.
                    </p>
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
                <p>
                    This is a third example tab.
                </p>
            </div>
        </Tab>
    </Tabs>
);

export default Navbar;