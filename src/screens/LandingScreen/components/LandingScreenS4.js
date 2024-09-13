import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

class Landing4 extends Component {
    state = {}
    render() {
        return (
            <footer class='footer' id='landing-s4-footer'>
                <div class="footer-container">
                    <div class="footer-logos" id='footer-logo-div'>
                        <a href="#" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2x" color="#ffffff" />
                        </a>
                        <a href="https://facebook.com" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size="2x" color="#ffffff" />
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2x" color="#ffffff" />
                        </a>
                        <a href="https://linkedin.com" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#ffffff" />
                        </a>
                    </div>

                    <div class="footer-info" id="footer-info-div">
                        <p>Have any questions? Write to us at:</p>
                        <h3 id='email-address-h3'>xavage@tisb.ac.in</h3>
                        <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Landing4;