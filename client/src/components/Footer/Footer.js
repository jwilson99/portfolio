import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import './footer.css';

const recentsIcon = <FontIcon className="material-icons">GitHub</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">LinkedIn</FontIcon>;


class Footer extends Component {
    state = {
        selectedIndex: 2,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={this.state.selectedIndex} className="bottomnav">
                    <BottomNavigationItem
                        icon={recentsIcon}
                        onClick={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        icon={favoritesIcon}
                        onClick={() => this.select(1)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default Footer;