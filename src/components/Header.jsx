import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/logo.svg';
import Whatsapp from '../assets/icons/whatsapp.svg';
import Shopify from '../assets/icons/nav-icons/shopify.svg';
import Wordpress from '../assets/icons/nav-icons/wordpress.svg';
import Codeigniter from '../assets/icons/nav-icons/codeigniter.svg';
import Laravel from '../assets/icons/nav-icons/laravel.svg';
import Nodejs from '../assets/icons/nav-icons/nodejs.svg';
import Reactjs from '../assets/icons/nav-icons/reactjs.svg';
import Hamburger from './Hamburger';
import { NavLink, useLocation } from 'react-router-dom';


const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsSticky(scrollTop > 0); // Update isSticky based on scroll position
        };

        window.addEventListener('scroll', handleScroll); // Add scroll event listener
        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up scroll event listener
        };
    }, []);

    useEffect(() => {
        // Close the mobile menu when navigating to a new page
        setIsMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        // Retrieve the mobile menu state from local storage on page load
        const storedMobileMenuState = localStorage.getItem('mobileMenuState');
        if (storedMobileMenuState) {
            setIsMobileMenuOpen(JSON.parse(storedMobileMenuState));
        }
    }, []);

    useEffect(() => {
        // Store the mobile menu state in local storage
        localStorage.setItem('mobileMenuState', JSON.stringify(isMobileMenuOpen));
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`site-header ${isSticky ? 'sticky' : ''}`}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <NavLink className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo" />
                    </NavLink>
                    <button
                        className={`navbar-toggler ${isMobileMenuOpen ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                        aria-label="Toggle navigation"
                        onClick={toggleMobileMenu}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </NavLink>
                                <div className="mega-menu">
                                    {/* Mega menu content goes here */}
                                    <div className="mega-menu-content">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h4>Development</h4>
                                                <ul>
                                                    <li>
                                                        <NavLink to="/shopify-development"><img src={Shopify} alt="Shopify" />Shopify Development</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/laravel-development"><img src={Laravel} alt="Laravel" />Laravel Development</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/nodejs-development"><img src={Nodejs} alt="Nodejs" />Node.Js Development</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/reactjs-development"><img src={Reactjs} alt="Reactjs" />React.Js Development</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/wordpress-development"><img src={Wordpress} alt="Wordpress" />WordPress Development</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/codeigniter-development"><img src={Codeigniter} alt="Codeigniter" />Codeigniter Development</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/custom-ecommerce-development"><img src={Shopify} alt="Shopify" />Custom eCommerce Development</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <h4>Design</h4>
                                                <ul>
                                                    <li>
                                                        <NavLink to="/user-experience-design"><img src={Shopify} alt="Shopify" />Website Design</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/user-experience-design"><img src={Shopify} alt="Shopify" />User Experience Design</NavLink>
                                                    </li>
                                                </ul>

                                                <h4>SEO</h4>
                                                <ul>
                                                    <li>
                                                        <NavLink to="/digital-marketing"><img src={Shopify} alt="Shopify" />Digital Marketing</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/work">Work</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-options">
                        <ul className="site-ul">
                            {/* <li><NavLink to="#" target="_blank"><img src={Call} alt="Whatsapp" /></NavLink></li> */}
                            <li><NavLink to="#" target="_blank"><img src={Whatsapp} alt="Whatsapp" /></NavLink></li>
                            <li><NavLink to="#" className="custom-btn" target="_blank"><span>Schedule A Call</span></NavLink></li>
                            <Hamburger />
                        </ul>
                    </div>
                </nav>


            </div>
        </header>

    )
}

export default Header