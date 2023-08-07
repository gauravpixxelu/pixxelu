import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import VideoReview from '../components/VideoReview';
import Business from '../assets/images/business.svg';
import CounterHome from '../components/CounterHome';
import Black_Stars from '../assets/icons/star-black.svg';
import WordpressWebsite from '../assets/images/wordpress-developement/wordpress-website.png';
import Wordpress_Logo from '../assets/images/wordpress-developement/wordpress-logo.svg';
import Project1 from '../assets/images/shopify-development/project1.jpg';
import Project2 from '../assets/images/shopify-development/project2.jpg';
import Project3 from '../assets/images/shopify-development/project3.jpg';
import Project4 from '../assets/images/shopify-development/project4.jpg';
import Service_Icn5 from '../assets/icons/shopify-development/service-icon5.svg';
import ReviewScroll from '../components/ReviewScroll';
import Graphic from '../assets/images/wordpress-developement/graphic.svg';
import Form from '../components/Form';
import Marquee from '../components/Marquee';
import LaravelMarquee from '../components/LaravelMarquee';


function WordpressDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'wordpress-page'}>


            {/* --- Wordpress Banner --- */}

            <section className="wordpress-banner every-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="banner-data">
                                <h2 className="hdng-h2">WordPress Development Services</h2>
                                <ul className="site-ul">
                                    <li>Secure & scalable enterprise-level web app</li>
                                    <li>Robust & agile solution for every use case</li>
                                    <li>Industry leadership in web app development</li>
                                </ul>
                                <p className="hdng-p">Want to develop custom WordPress website, CMS, a plugin? Our team of WordPress professionals will help you develop the featureful website based on your needs.</p>
                            </div>
                            <NavLink to="#" className="custom-btn wht"><span>Hire A Wordpress Developer</span></NavLink>
                        </div>

                        <div className="col-md-7">
                            <div className="shopifylogo-box">
                                <img src={Wordpress_Logo} alt="Wordpress_Logo" />
                            </div>
                            <div className="laravel-box">
                                <img src={WordpressWebsite} alt="WordpressWebsite" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Wordpress Banner --- */}



            {/* --- Valueable --- */}

            <section className="valueable">
                <Marquee />
            </section>

            {/* --- Valueable --- */}




            {/* --- Reasons --- */}

            <section className="shopify-services">
                <div className="container" data-aos="fade-up">
                    <h6 className="hdng-h6">Build Featureful and Fast WordPress Website</h6>
                    <h3 className="hdng-h3">List of Best WordPress Web<br /> Development Services</h3>
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Website Development</h4>
                                <p className="hdng-p">Develop high end and fully functional WordPress website according to your business requirements and integrate WordPress modules and plugins.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Migration and Update</h4>
                                <p className="hdng-p">Quick and safe migration and update process to ensure your website files, plugins, databases and setting options stay intact without any major change.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">WordPress Plugin Development</h4>
                                <p className="hdng-p">Extend the functionality of your website by integrating plugin in your website. Our team develops tailor made plugins according to your need.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">WordPress Theme Development </h4>
                                <p className="hdng-p">Develop high performing and world-class WordPress theme according to your business requirements with advanced features.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">WordPress e-Commerce Development</h4>
                                <p className="hdng-p">Move your shop information from platforms like Wix, WooCommerce & Etsy properly and quickly with the help of professional Shopify experts.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">WordPress CMS Development</h4>
                                <p className="hdng-p">Fully functional content management system with richer functionalities that will fullfil your business requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Reasons --- */}


            {/* --- Hiring --- */}

            <section className="hiring">
                <div className="container">
                    <div className="hiring-block wordpress-hire">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="hiring-txt">
                                    <h2>Choose Flexibility and Agility with WordPress Development Services</h2>
                                    <p>With unlimited flexibility and agility you can build business websites from scratch. Having a laser-sharp focus on performance, WordPress is highly suitable for developing business and informative websites across the globe. As of now, WordPress alone powers 43% of the internet and will continue to do so due to its focus on offering agility and unbeatable performance.</p>
                                    <NavLink to="#" className="custom-btn"><span>Let’s Discuss</span></NavLink>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="hiring-img">
                                    <img src={Graphic} alt="Graphic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- Hiring --- */}



            {/* --- Reasons --- */}

            <section className="shopify-services">
                <div className="container" data-aos="fade-up">
                    <h6 className="hdng-h6">Benefits of WordPress Development Services</h6>
                    <h3 className="hdng-h3">Why Choose WordPress Platform?</h3>
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">WordPress is Free</h4>
                                <p className="hdng-p">WordPress is free to host, you don’t need to pay an extra amount to host your website. Just buy a reliable web hosting service and host your website.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Enhanced Security</h4>
                                <p className="hdng-p">WordPress offers enhanced security from hackers and different vulnerabilities. Even it comes with https:// to make your website secure.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Thousands of Designs to Choose From</h4>
                                <p className="hdng-p">Get an option to choose 1000+ website themes before developing your website. Choose the theme that complements brand identity and develop a website</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Easy to Update</h4>
                                <p className="hdng-p">Stay updated with the latest technologies and keep up with the changing environment while developing a website.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Integrate Features with Plugins</h4>
                                <p className="hdng-p">WordPress has more than 54000 plugins to integrate for your website including security plugins, SEO plugins, design plugins, speed plugins, and more.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Search Engine and SEO Friendly</h4>
                                <p className="hdng-p">Structure your website according to the guidelines of Google and make it SEO friendly. Make your website easy to crawl for your search engine.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Reasons --- */}





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
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How much does it cost to hire a WordPress developer?</button>
                            </h4>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">WordPress development costs between $500 to $5000. The cost depends upon how many pages you require, the UI and UX design, hours, and the complexity of the website. Without understanding the project scope, it becomes challenging to determine the exact cost of WordPress website. There, it is receommded to consultant our WordPress consultant and get an exact quote depending upon your project size.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Can I hire a WordPress developer on a monthly or hourly basis?</button>
                            </h4>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Yes, we offer flexible hiring models in which you can hire our experienced WordPress developers on the basis of monthly and hourly basis depending upon your project size and requirement. Even if you are confused about whether to hire based on an hourly or monthly basis, just get in touch with our web development consultant and we will help you solve your query.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What makes Pixxelu different from other WordPress development companies?</button>
                            </h4>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Our company aims to develop featureful WordPress websites focusing UI (user interface) and UX (user experience). We have extensive experience in developing high-functioning web solutions that set us apart from competitors. Regardless of the business size, we have the capability to develop fast and secure web solutions in the given timeline which benefits businesses across the globe.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Do you provide continuous support even after the completion of the project?</button>
                            </h4>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Yes, we offer 60 days of free post-completion support even after developing a WordPress website. In case you face any technical issues with your website, you can contact our WordPress developer and they will help you look into the issue and fix it within the given timeline. However, if you major changes to your website, that requires complex development, we may charge you based on your requirement and timeline as well.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">How will I get regular updates on my WordPress development project?</button>
                            </h4>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">The project delivery manager will constantly stay in touch with the client. You will have a dedicated web developer or a team depending upon your project requirement. The delivery manager will consistently stay with you to understand your requirement and share regular project updates. Our team will use communication tools like Slack, Basecamp, and JIRA for effective communication and maintain track of progress.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Can I see the WordPress design before it is built?</button>
                            </h4>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Of course, you can see the WordPress design before it goes live, as we will create mockups exclusively for you to help you get an idea about how your website will look. The website will be fully functional to give you an idea about how it will appear and function when it will go live.</p>
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

            {/* --- Satisfaction Review --- */}




        </div>

    )
}


export default WordpressDevelopment