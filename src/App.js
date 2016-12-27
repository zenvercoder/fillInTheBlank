import React, {Component} from 'react';
import logo from './logo.svg';
import './styles/App.css';

import Footer from './components/Footer.js';
import Button from './components/Button.js';

class App extends Component {
    render() {
        return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>omg I'm Reacting</h2>
                    </div>
                    <p className="App-intro">
                        ohai
                    </p>
                    <div></div>
                    <Button />
                    <Footer />
                </div>
        );
    }
}

export default App;
