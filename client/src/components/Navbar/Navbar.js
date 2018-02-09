import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Portfolio from '../Portfolio/Portfolio';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

const Navbar = () => (
    <Tabs>
        <Tab label="About" >
            <div>
                <h2 style={styles.headline}>About</h2>
                <p>
                    This is an example tab.
                </p>
                <p>
                    You can put any sort of HTML or react component in here. It even keeps the component state!
                </p>
            </div>
        </Tab>
        <Tab label="Portfolio" >
            <div>
                <h2 style={styles.headline}>Portfolio</h2>
                <Portfolio/>
            </div>
        </Tab>
        <Tab label="Contact" >
            <div>
                <h2 style={styles.headline}>Contact</h2>
                <p>
                    This is a third example tab.
                </p>
            </div>
        </Tab>
    </Tabs>
);

export default Navbar;