import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import VideoReview from '../components/VideoReview';
import TechHome from '../components/TechHome';
import Marquee from '../components/Marquee';
import Business from '../assets/images/business.svg';
import Rocket from '../assets/images/rocket.png';
import Flags from '../assets/images/flags.png';
import Client_logo from '../assets/images/client-logo.jpg';
import CounterHome from '../components/CounterHome';
import ReviewScroll from '../components/ReviewScroll';
import ClutchSlider from '../components/ClutchSlider';
import Circle from '../assets/images/circle.svg';
import Hire_Us from '../assets/images/hire-us.svg';
import Diagonal from '../assets/images/diagonal-vector.svg';
import Black_Stars from '../assets/icons/star-black.svg';
import RightArrow from '../assets/icons/right-arrow.svg';
import IPad1 from '../assets/images/home-work-slider/iPad-1.png';
import IPad2 from '../assets/images/home-work-slider/iPad-2.png';
import IPad3 from '../assets/images/home-work-slider/iPad-3.png';
import IPad4 from '../assets/images/home-work-slider/iPad-4.png';
import IPad5 from '../assets/images/home-work-slider/iPad.png';
import IPhone1 from '../assets/images/home-work-slider/iPhone-1.png';
import IPhone2 from '../assets/images/home-work-slider/iPhone-2.png';
import IPhone3 from '../assets/images/home-work-slider/iPhone-3.png';
import IPhone4 from '../assets/images/home-work-slider/iPhone-4.png';
import IPhone5 from '../assets/images/home-work-slider/iPhone.png';
import Work1 from '../assets/images/home-work-slider/work1.jpg';
import Work2 from '../assets/images/home-work-slider/work2.jpg';
import Work3 from '../assets/images/home-work-slider/work3.jpg';
import Work4 from '../assets/images/home-work-slider/work4.jpg';
import Work5 from '../assets/images/home-work-slider/work5.jpg';
import Work6 from '../assets/images/home-work-slider/work6.jpg';


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (


        <div className={'homepage'}>

            {/* --- Banner --- */}

            <section className="banner">
                <div className="container">
                    <div className="banner-hdng">
                        <h1 className="image-in-text">Get a beautiful website that drives revenue</h1>
                        <p>Results-driven web design, development, SEO, branding, copywriting & video production.</p>
                        <NavLink to="#" className="custom-btn"><span>Schedule a Meeting</span></NavLink>
                    </div>
                </div>
                <div className="banner-slide-images marquee" data-aos="fade-up">
                    <div class="marqueee-slide">
                        <span>
                            <div class="orb"><img src={IPad1} alt="IPad" /></div>
                            <div class="orb"><img src={IPhone1} alt="IPhone" /></div>
                            <div class="orb"><img src={IPad2} alt="IPad" /></div>
                            <div class="orb"><img src={IPhone2} alt="IPhone" /></div>
                            <div class="orb"><img src={IPad3} alt="IPad" /></div>
                        </span>
                        <span>
                            <div class="orb"><img src={IPhone3} alt="IPhone" /></div>
                            <div class="orb"><img src={IPad4} alt="IPad" /></div>
                            <div class="orb"><img src={IPhone4} alt="IPhone" /></div>
                            <div class="orb"><img src={IPad5} alt="IPad" /></div>
                            <div class="orb"><img src={IPhone5} alt="IPhone" /></div>
                        </span>
                    </div>
                </div>
            </section>

            {/* --- Banner --- */}


            {/* --- Valueable --- */}

            <section className="valueable">
                <Marquee />
            </section>

            {/* --- Valueable --- */}


            {/* --- Services --- */}

            <section className="services" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="def-txt">
                                <h2 className="hdng-h2">Design</h2>
                                <p className="hdng-p">Figma, Adobe Illustrator, Adobe Photoshop, Midjourney, Shutterstock, Freepik Premium</p>
                                <ul className="site-ul">
                                    <li><NavLink to="#"><img src={RightArrow} alt="RightArrow" />Web Design</NavLink></li>
                                    <li><NavLink to="#"><img src={RightArrow} alt="RightArrow" />UI and UX</NavLink></li>
                                    <li><NavLink to="#"><img src={RightArrow} alt="RightArrow" />Branding</NavLink></li>
                                    <li><NavLink to="#"><img src={RightArrow} alt="RightArrow" />App Design</NavLink></li>
                                    <li><NavLink to="#"><img src={RightArrow} alt="RightArrow" />Wireframes</NavLink></li>
                                    <li><NavLink to="#"><img src={RightArrow} alt="RightArrow" />Brand guides</NavLink></li>
                                    <li><NavLink to="#"><img src={RightArrow} alt="RightArrow" />Business cards</NavLink></li>
                                    <li><NavLink to="#"><img src={RightArrow} alt="RightArrow" />Blog graphics</NavLink></li>
                                    <li><NavLink to="#"><img src={RightArrow} alt="RightArrow" />Digital ads</NavLink></li>
                                    <li><NavLink to="#"><img src={RightArrow} alt="RightArrow" />Icons</NavLink></li>
                                    <li><NavLink to="#"><img src={RightArrow} alt="RightArrow" />Infographics</NavLink></li>
                                    <li><NavLink to="#"><img src={RightArrow} alt="RightArrow" />Simply anything :)</NavLink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="def-txt">
                                <h2 className="hdng-h2">Dev</h2>
                                <div className="blocks-txt">
                                    <h4><img src={RightArrow} alt="RightArrow" />Wordpress</h4>
                                    <p>Visual Builders (Beaver Builder & Elementor), Custom Theme and Plugin development, Custom Post Type, Custom Fields, WooCommerce, Any plugin integration</p>
                                </div>
                                <div className="blocks-txt">
                                    <h4><img src={RightArrow} alt="RightArrow" />Pure Code</h4>
                                    <p>HTML, CSS, SCSS, JavaScript, JQuery, AJAX, PHP, Laravel Framework, MySQL, Animations with AOS and GSAP</p>
                                </div>
                                <div className="blocks-txt">
                                    <h4><img src={RightArrow} alt="RightArrow" />Webflow</h4>
                                    <p>Creative interactive and animated websites</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Services --- */}


            {/* --- About --- */}

            <section className="about-block">
                <div className="container">
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-7">
                            <div className="about-txt">
                                <h6 className="hdng-h6">Who we are</h6>
                                <h2 className="hdng-h2">Web design & development Services</h2>
                                <p className="hdng-p">We strive to articulate our clients’ desires and cater to their needs to attain the required targets and goals. Our team of professional <NavLink to="#" className="multi-color1">web designers</NavLink> will craft websites with an excellent and contemporary design that aligns with your business goals. Our services are inclusive of every aspect of web designing</p>
                                <p className="hdng-p">You name it, and we will plate it for you. <NavLink to="#" className="multi-color2">Designing</NavLink>, <NavLink to="#" className="multi-color3">Development</NavLink>, <NavLink to="#" className="multi-color4">App development</NavLink>, <NavLink to="#" className="multi-color5">CMS development</NavLink>, and finely attributed <NavLink to="#" className="multi-color1">SEO</NavLink>, <NavLink to="#" className="multi-color2">SEM</NavLink>, and <NavLink to="#" className="multi-color3">SMO</NavLink>.</p>
                                <p className="hdng-p">Our top-notch experts provide our clients with services that can amplify their business and are also cost-effective. We update our clients on every change and restructure we are willing to pursue.</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="about-block-img">
                                <img src={Circle} alt="Circle" />
                                <img src={Hire_Us} className="hire" alt="Hire_Us" />
                                <NavLink to="#">
                                    <div className="diagonal-img">
                                        <img src={Diagonal} alt="Diagonal" />
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- About --- */}



            {/* --- Technologies --- */}

            <section className="technologies" data-aos="fade-up">
                <div className="container">
                    <div className="technologies-block">
                        <h6 className="hdng-h6">The Technologies We Use</h6>
                        <h3 className="hdng-h3">We use the most recent, state-of-the-art technologies. You name it, we know it.</h3>
                        <TechHome />
                    </div>
                </div>
            </section>

            {/* --- Technologies --- */}

            {/* --- Work --- */}

            <section className="work">
                <div className="container">
                    <div className="work-hdng">
                        <h3 className="hdng-h3" data-aos="fade-up">Check Out Our Web Design and Development Portfolio</h3>
                        <div className="row">
                            <div className="col-md-6" data-aos="fade-up">
                                <div className="work-slide">
                                    <div className="work-img">
                                        <img src={Work6} alt="Work6" />
                                        <NavLink to="#" className="custom-btn blk" target="_blank"><span>Visit Prototype</span></NavLink>
                                    </div>
                                    <div className="work-slide-content">
                                        <h6>Mera Room</h6>
                                        <h4>2.5x Revenue Increased</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6" data-aos="fade-up">
                                <div className="work-slide">
                                    <div className="work-img">
                                        <img src={Work3} alt="Work3" />
                                        <NavLink to="#" className="custom-btn blk" target="_blank"><span>Visit Prototype</span></NavLink>
                                    </div>
                                    <div className="work-slide-content">
                                        <h6>Mera Room</h6>
                                        <h4>2.5x Revenue Increased</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6" data-aos="fade-up">
                                <div className="work-slide">
                                    <div className="work-img">
                                        <img src={Work1} alt="Work1" />
                                        <NavLink to="#" className="custom-btn blk" target="_blank"><span>Visit Website</span></NavLink>
                                    </div>
                                    <div className="work-slide-content">
                                        <h6>Mera Room</h6>
                                        <h4>2.5x Revenue Increased</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6" data-aos="fade-up">
                                <div className="work-slide">
                                    <div className="work-img">
                                        <img src={Work2} alt="Work2" />
                                        <NavLink to="#" className="custom-btn blk" target="_blank"><span>Visit Prototype</span></NavLink>
                                    </div>
                                    <div className="work-slide-content">
                                        <h6>Mera Room</h6>
                                        <h4>2.5x Revenue Increased</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6" data-aos="fade-up">
                                <div className="work-slide">
                                    <div className="work-img">
                                        <img src={Work4} alt="Work4" />
                                        <NavLink to="#" className="custom-btn blk" target="_blank"><span>Visit Website</span></NavLink>
                                    </div>
                                    <div className="work-slide-content">
                                        <h6>Mera Room</h6>
                                        <h4>2.5x Revenue Increased</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6" data-aos="fade-up">
                                <div className="work-slide">
                                    <div className="work-img">
                                        <img src={Work5} alt="Work5" />
                                        <NavLink to="#" className="custom-btn blk" target="_blank"><span>Visit Website</span></NavLink>
                                    </div>
                                    <div className="work-slide-content">
                                        <h6>Mera Room</h6>
                                        <h4>2.5x Revenue Increased</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Work --- */}

            {/* --- Assesment --- */}

            <section className="assesment" data-aos="fade-up">
                <div className="container">
                    <div className="assement-block">
                        <div className="assesment-hdng">
                            <h3 className="hdng-h3">Not only are website development, web design, and e-commerce rocket science, but the rocket itself. And Pixxelu is the scientist behind it.</h3>
                        </div>
                        <img className="rocket" src={Rocket} alt="Rocket" />
                        <div className="assesment-btn">
                            <NavLink to="#" className="custom-btn wht"><span>Get A Free Assessment Now</span></NavLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Assesment --- */}


            {/* --- Customers Outlook --- */}

            <section className="customers-outlook" data-aos="fade-up">
                <div className="container">
                    <div className="customers-hdng">
                        <h3 className="hdng-h3">Trusted by Valuable Customers</h3>
                        <p className="hdng-p">Gearing up massive Revenue for our 1,020+ Satisfied Customers.</p>
                        <img src={Client_logo} alt="Client_logo" />
                    </div>
                </div>
            </section>

            {/* --- Customers Outlook --- */}



            {/* --- Video Review --- */}

            <section className="video-review">
                <div className="container" data-aos="fade-up">
                    <div className="video-hdng">
                        <h3 className="hdng-h3">100% Satisfied Investors Worldwide</h3>
                        <img src={Black_Stars} alt="Black_Stars" />
                        <p className="hdng-p">Take a look at what our happy clients have to say about us before you believe us</p>
                    </div>
                    <VideoReview />

                    <div className="customers-review">
                        <h3 className="hdng-h3">Here are some more reviews from our clients</h3>
                        <div className="row">
                            <div className="col-md-7">
                                <ClutchSlider />
                            </div>
                            <div className="col-md-5">
                                <ReviewScroll />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Video Review --- */}


            {/* --- Customers Outlook --- */}

            <section className="customers-outlook" data-aos="fade-up">
                <div className="container">
                    <div className="customers-hdng">
                        <h3 className="hdng-h3">Customers outlook</h3>
                        <p className="hdng-p">We sell so you can sell even better and uplift your business in your respected arena with a well-tailored website.</p>
                        <img src={Flags} alt="Flags" />
                    </div>
                </div>
            </section>

            {/* --- Customers Outlook --- */}



            {/* --- Assesment --- */}

            <section className="assesment" data-aos="fade-up">
                <div className="container">
                    <div className="assement-block">
                        <div className="assesment-hdng">
                            <h3 className="hdng-h3">Congratulations! Pixxelu is happy that your search finally ends here.</h3>
                        </div>
                        <div className="assesment-btn">
                            <NavLink to="#" className="custom-btn wht"><span>Get A Free Assessment Now</span></NavLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Assesment --- */}


            {/* --- Satisfaction Review --- */}

            <section className="satisfaction" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="counter">
                                <CounterHome />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img src={Business} alt="Business" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Video Review --- */}





        </div>

    )
}


export default Home
