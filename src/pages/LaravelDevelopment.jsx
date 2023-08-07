import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import VideoReview from '../components/VideoReview';
import Business from '../assets/images/business.svg';
import CounterHome from '../components/CounterHome';
import Black_Stars from '../assets/icons/star-black.svg';
import LaravelDashboard from '../assets/images/laravel-development/laravel-dashboard.png';
import Laravel_Logo from '../assets/images/laravel-development/laravel-logo.svg';
import Hiring from '../assets/images/laravel-development/hiring.svg';
import Project1 from '../assets/images/shopify-development/project1.jpg';
import Project2 from '../assets/images/shopify-development/project2.jpg';
import Project3 from '../assets/images/shopify-development/project3.jpg';
import Project4 from '../assets/images/shopify-development/project4.jpg';
import Service_Icn5 from '../assets/icons/shopify-development/service-icon5.svg';
import Develop_Img1 from '../assets/images/laravel-development/develop-img1.jpg';
import Develop_Img2 from '../assets/images/laravel-development/develop-img2.jpg';
import Develop_Img3 from '../assets/images/laravel-development/develop-img3.jpg';
import Develop_Img4 from '../assets/images/laravel-development/develop-img4.jpg';
import Develop_Img5 from '../assets/images/laravel-development/develop-img5.jpg';
import Develop_Img6 from '../assets/images/laravel-development/develop-img6.jpg';
import ReviewScroll from '../components/ReviewScroll';
import Form from '../components/Form';
import LaravelServiceSlider from '../components/LaravelServiceSlider';
import Marquee from '../components/Marquee';
import LaravelMarquee from '../components/LaravelMarquee';

function LaravelDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'laravel'}>


            {/* --- Shopify Banner --- */}

            <section className="laravel-banner every-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="banner-data">
                                <h2 className="hdng-h2"><span>Laravel</span> Development Company</h2>
                                <ul className="site-ul">
                                    <li>Secure & scalable enterprise-level web app</li>
                                    <li>Robust & agile solution for every use case</li>
                                    <li>Industry leadership in web app development</li>
                                </ul>
                                <p className="hdng-p">With an experience of 18+ years, we have successfully delivered 1000+ projects in 90+ countries.</p>
                            </div>
                            <NavLink to="#" className="custom-btn"><span>Hire A Laravel Developer</span></NavLink>
                        </div>

                        <div className="col-md-7">
                            <div className="shopifylogo-box">
                                <img src={Laravel_Logo} alt="Laravel_Logo" />
                            </div>
                            <div className="laravel-box">
                                <img src={LaravelDashboard} alt="LaravelDashboard" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Shopify Banner --- */}



            {/* --- Valueable --- */}

            <section className="valueable">
                <Marquee />
            </section>

            {/* --- Valueable --- */}


            {/* --- What is Laravel --- */}

            <section className="laravel-block">
                <div className="container">
                    <div className="why-laravel">
                        <h3 className="hdng-h3">What is Laravel Development?</h3>
                        <h6 className="hdng-h6">Drive Exceptional Results With the Custom Laravel Development Services</h6>
                        <p className="hdng-p">Laravel is an open-source and free PHP framework with a set of its own tools and resources to develop contemporary web solutions for small to enterprise-level businesses. Using the power of Laravel development, we have built highly scalable and feature-rich CRM, eCommerce web solutions, marketplace apps, and API integrations.</p>
                        <p className="hdng-p">Regardless of your business type, Laravel is the ideal solution to build custom web solutions as per your business requirement. If you are looking to develop a secure, mobile-friendly, and feature-rich web solution, Laravel is the ideal solution.</p>
                        <NavLink to="#" className="custom-btn"><span>Talk to a Laravel Development</span></NavLink>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="develop-box">
                                <img src={Develop_Img1} alt="Develop_Img1" />
                                <h4 className="hdng-h4">Experienced Laravel Developers</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="develop-box">
                                <img src={Develop_Img2} alt="Develop_Img2" />
                                <h4 className="hdng-h4">High-Quality Development</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="develop-box">
                                <img src={Develop_Img3} alt="Develop_Img3" />
                                <h4 className="hdng-h4">Well-versed with Laravel Ecosystem</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="develop-box">
                                <img src={Develop_Img4} alt="Develop_Img4" />
                                <h4 className="hdng-h4">Expert Consultation Informed Decision</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="develop-box">
                                <img src={Develop_Img5} alt="Develop_Img5" />
                                <h4 className="hdng-h4">Cross-platform Development Capabilities</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="develop-box">
                                <img src={Develop_Img6} alt="Develop_Img6" />
                                <h4 className="hdng-h4">Highly-Responsive Support & Maintenance Team</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- What is Laravel --- */}


            {/* --- Laravel Services --- */}


            <section className="services-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="hdng-h2">List of Best Laravel Web Development Services</h2>
                        </div>
                        <div className="col-md-8">
                            <LaravelServiceSlider />
                        </div>
                    </div>
                </div>
            </section>


            {/* --- Laravel Services --- */}


            {/* --- What is Laravel --- */}

            <section className="laravel-block">
                <div className="container">
                    <div className="why-laravel">
                        <h3 className="hdng-h3">Custom Laravel Web Development Services</h3>
                        <h6 className="hdng-h6">Launch your business with ease, style, and speed.</h6>
                        <p className="hdng-p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                    </div>
                    <div className="row businees-gd">
                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Laravel Enterprise App Development</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Laravel Application Development</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Laravel Module and Package Development</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Laravel Support and Maintenance</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Laravel Based eCommerce Development</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Laravel API Integration Service</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- What is Laravel --- */}


            {/* --- Hiring --- */}

            <section className="hiring">
                <div className="container">
                    <div className="hiring-block">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="hiring-txt">
                                    <h2>Want to Hire a Dedicated Laravel Developer?</h2>
                                    <p>Hire our experienced Laravel developer who will work dedicatedly on your project and delivery fully functional web solutions.</p>
                                    <NavLink to="#" className="custom-btn"><span>Let’s Discuss</span></NavLink>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="hiring-img">
                                    <img src={Hiring} alt="Hiring" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- Hiring --- */}



            {/* --- Laravel Marquee --- */}

            <section className="laravel-marque">
                <LaravelMarquee />
                <h2>Frequently Asked Questions</h2>
            </section>

            {/* --- Laravel Marquee --- */}




            {/* --- FAQ --- */}


            <section className="faq-sec">
                <div className="container">
                    <div className="accordion" id="accordionExample" data-aos="fade-up">
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How much does it cost to hire a Laravel developer?</button>
                            </h4>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Laravel web development costs from $1000 to $10,000 or more. The cost of Laravel development depends upon the project scope, the complexity of the solution, and features and functionality.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Is Laravel good for web development?</button>
                            </h4>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Being an MVC-based architecture makes Laravel the best PHP framework for web development. MVC architecture also has in-built functionalities so that developers can easily use it to develop feature-rich web apps according to the client’s requirements.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Is Laravel used to develop enterprise-level solutions?</button>
                            </h4>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">The focus of developing Laravel is to make scalable web solutions and manage enterprise-level projects. Basically, the focus of Laravel is to offer scalable web solutions to growing businesses.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Is Laravel faster than regular PHP?</button>
                            </h4>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Laravel is a highly reliable and robust framework used to build highly customized websites and web apps. Being an open-source platform and following the MVC architecture, it is hugely faster than regular PHP.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">How do I choose a Laravel development company for my project?</button>
                            </h4>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Follow these steps to choose the best Laravel development company.</p>
                                    <ul className="site-ul">
                                        <li>Conduct an Experience Evaluation</li>
                                        <li>The organization you want to employ should be capable of working and delivering in shorter cycles</li>
                                        <li>The company you choose should offer a cost-effective solution with clear communication</li>
                                        <li>Make sure to choose a company with a list of genuine clients, many companies create a fake list of clients to attract customers and cross-verify the data on different websites before finalizing the company.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Do I need to sign NDA before starting a Laravel development project with your company?</button>
                            </h4>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Being a well-known Laravel development company, we ensure to sign a non-disclosure agreement with each of our clients to make sure the discussed idea is completely confidential. We make sure the shared data don’t get leaked and follow every measure to keep it confidential.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- FAQ --- */}




            {/* --- Work --- */}

            <section className="work">
                <div className="container">
                    <div className="work-hdng">
                        <h3 className="hdng-h3" data-aos="fade-up">Check Out Our Shopify Web <br />Design Portfolio</h3>
                        <div className="row">
                            <div className="col-md-6" data-aos="fade-up">
                                <div className="work-slide">
                                    <div className="work-img">
                                        <img src={Project1} alt="Project1" />
                                        <NavLink to="#" className="custom-btn blk" target="_blank"><span>Visit Website</span></NavLink>
                                    </div>
                                    <div className="work-slide-content">
                                        <h4>2.5x Revenue Increased</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6" data-aos="fade-up">
                                <div className="work-slide">
                                    <div className="work-img">
                                        <img src={Project2} alt="Project2" />
                                        <NavLink to="#" className="custom-btn blk" target="_blank"><span>Visit Website</span></NavLink>
                                    </div>
                                    <div className="work-slide-content">
                                        <h4>2.5x Revenue Increased</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6" data-aos="fade-up">
                                <div className="work-slide">
                                    <div className="work-img">
                                        <img src={Project3} alt="Project3" />
                                        <NavLink to="#" className="custom-btn blk" target="_blank"><span>Visit Website</span></NavLink>
                                    </div>
                                    <div className="work-slide-content">
                                        <h4>2.5x Revenue Increased</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6" data-aos="fade-up">
                                <div className="work-slide">
                                    <div className="work-img">
                                        <img src={Project4} alt="Project4" />
                                        <NavLink to="#" className="custom-btn blk" target="_blank"><span>Visit Website</span></NavLink>
                                    </div>
                                    <div className="work-slide-content">
                                        <h4>2.5x Revenue Increased</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- Work --- */}



            {/* --- Video Review --- */}

            <section className="video-review" >
                <div className="container" data-aos="fade-up">
                    <div className="video-hdng">
                        <h3 className="hdng-h3">100% Satisfied Investors Worldwide</h3>
                        <img src={Black_Stars} alt="Black_Stars" />
                        <p className="hdng-p">Take a look at what our happy clients have to say about us before you believe us</p>
                    </div>
                    <VideoReview />
                </div>
            </section>

            {/* --- Video Review --- */}



            {/* --- Assesment --- */}

            <section className="customform" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <Form />

                        <div className="col-md-4">
                            <div className="testimonial-forms">
                                <ReviewScroll />
                            </div>
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


export default LaravelDevelopment