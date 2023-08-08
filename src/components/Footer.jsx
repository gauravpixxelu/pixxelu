import React from "react";
import { NavLink } from 'react-router-dom';
import White_Logo from '../assets/images/white-logo.svg';
import India from '../assets/icons/india.svg';
import Usa from '../assets/icons/usa.svg';
import SouthAfrica from '../assets/icons/south-africa.svg';
import Facebook from '../assets/icons/facebook.svg';
import Twitter from '../assets/icons/twitter.svg';
import Instagram from '../assets/icons/instagram.svg';
import Linkedin from '../assets/icons/linkedin.svg';

function Footer() {
    return (

        <div className={'site-footer'}>

            {/* ----- Footer ----- */}

            <footer className="site-footer">
                <div className="container">
                    <div class="marquee">
                        <div class="marquee__inner" aria-hidden="true">
                            <p><NavLink to="#">Start a project <span>✺</span></NavLink></p>
                            <p><NavLink to="#">Start a project <span>✺</span></NavLink></p>
                            <p><NavLink to="#">Start a project <span>✺</span></NavLink></p>
                            <p><NavLink to="#">Start a project <span>✺</span></NavLink></p>
                        </div>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-logo">
                            <img src={White_Logo} alt="Whatsapp" />
                        </div>
                        <div className="footer-social">
                            <ul className="site-ul">
                                <li><NavLink to="#" target="_blank"><img src={Facebook} alt="Facebook" /></NavLink></li>
                                <li><NavLink to="#" target="_blank"><img src={Twitter} alt="Twitter" /></NavLink></li>
                                <li><NavLink to="#" target="_blank"><img src={Instagram} alt="Instagram" /></NavLink></li>
                                <li><NavLink to="#" target="_blank"><img src={Linkedin} alt="Linkedin" /></NavLink></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <ul className="site-ul">
                                <li><NavLink to="tel:9218000707">+91 9218000707</NavLink></li>
                                <li><NavLink to="mailto:info@pixxelu.com">info@pixxelu.com</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="footer-address">
                                    <div className="address-box">
                                        <h4><img src={India} alt="India" />India</h4>
                                        <p>Building 256, Kachari Adda, near Patrol Pump, Dharamshala, Himachal Pradesh 176215</p>
                                    </div>
                                    <div className="address-box">
                                        <h4><img src={Usa} alt="Usa" />USA</h4>
                                        <p>11816 Inwood Rd #1126 Dallas, TX 75244</p>
                                    </div>
                                    <div className="address-box">
                                        <h4><img src={SouthAfrica} alt="SouthAfrica" />South Africa</h4>
                                        <p>Wild fig Business Park. Cranberry Street <br />Honeydew Roodepoort 1724</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="footer-links">
                                    <h3>Quick Links</h3>
                                    <ul className="site-ul">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/about-us">About Us</NavLink></li>
                                        <li><NavLink to="/work">Work</NavLink></li>
                                        <li><NavLink to="/blog">Blog</NavLink></li>
                                        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="footer-links">
                                    <h3>Hire Developers</h3>
                                    <ul className="site-ul">
                                        <li><NavLink to="#">Hire Web Designers</NavLink></li>
                                        <li><NavLink to="#">Hire Mobile Application Developers</NavLink></li>
                                        <li><NavLink to="#">Hire Laravel Developers</NavLink></li>
                                        <li><NavLink to="#">Hire WordPress Developers</NavLink></li>
                                        <li><NavLink to="#">Hire Shopify Developers</NavLink></li>
                                        <li><NavLink to="#">Hire Custom eCommerce Developers</NavLink></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="footer-links">
                                    <h3>Policies</h3>
                                    <ul className="site-ul">
                                        <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                                        <li><NavLink to="/terms-conditions">Terms and Conditions</NavLink></li>
                                        <li><NavLink to="/refund-policy">Refund Policy</NavLink></li>
                                        <li><NavLink to="/cancellation-return-policy">Cancellation & Return Policy</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <p className="copyright">© 2014-2023 Pixxelu. All rights reserved</p>
                    </div>
                </div>
            </footer>

            {/* ----- Footer ----- */}

        </div>

    )
}
export default Footer