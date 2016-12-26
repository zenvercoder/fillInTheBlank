import React, { Component } from 'react';
import '../styles/Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
    render() {
        // You can use them as regular CSS styles
        return <div>
            <div className="Buttoncontainer">
                <div className="Button">hover</div>
            </div>
        </div>
    }
}

export default Button;