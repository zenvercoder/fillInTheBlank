import React, { Component } from 'react';
import '../styles/Footer.css'; // Tell Webpack that Button.js uses these styles


export default class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <div>
                    <div className="footer-stuff">

                        <div>
                            <ul>
                                <li><a target="_blank" href="https://github.com/zenvercoder">GitHub</a></li>
                                <li><a target="_blank" href="https://www.linkedin.com/in/zenvercoder">LinkedIn</a></li>
                                <li><a target="_blank" href="https://twitter.com/zenvercoder">Twitter</a></li>
                                <li><a target="_blank" href="mailto:zenvercoder@gmail.com">Email</a></li>
                                <li><a target="_blank" href="http://codepen.io/zenvercoder/">CodePen</a></li>
                                <li><a target="_blank" href="https://zenvercoder.github.io/">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
