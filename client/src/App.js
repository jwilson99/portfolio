import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


class App extends Component {
    render() {
        return (

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <MuiThemeProvider>
                    <Navbar/>
                    <Footer/>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
