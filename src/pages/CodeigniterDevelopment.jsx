import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import VideoReview from '../components/VideoReview';
import Business from '../assets/images/business.svg';
import CounterHome from '../components/CounterHome';
import Black_Stars from '../assets/icons/star-black.svg';
import BannerGraphic from '../assets/images/codeigniter-development/banner-graphic.png';
import Project1 from '../assets/images/shopify-development/project1.jpg';
import Project2 from '../assets/images/shopify-development/project2.jpg';
import Project3 from '../assets/images/shopify-development/project3.jpg';
import Project4 from '../assets/images/shopify-development/project4.jpg';
import Service_Icn5 from '../assets/icons/shopify-development/service-icon5.svg';
import ReviewScroll from '../components/ReviewScroll';
import Form from '../components/Form';
import Marquee from '../components/Marquee';
import LaravelMarquee from '../components/LaravelMarquee';


function CodeigniterDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'codeigniter-page'}>


            {/* --- Codeigniter Banner --- */}

            <section className="codeigniter-banner every-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner-data">
                                <h2 className="hdng-h2">CodeIgniter Web Development Services</h2>
                                <p className="hdng-p">Pixxelu Digital Technology delivers stable and scalable solutions with dynamic user interfaces that combine robust functionality and supreme visuals. Our development team ensures meeting deadlines and following your project requirements.</p>
                            </div>
                            <NavLink to="#" className="custom-btn wht"><span>Get Your Project Started</span></NavLink>
                        </div>

                        <div className="col-md-6">
                            <div className="laravel-box">
                                <img src={BannerGraphic} alt="BannerGraphic" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Codeigniter Banner --- */}



            {/* --- Marquee Services --- */}

            <section className="valueable">
                <Marquee />
            </section>

            {/* --- Marquee Services --- */}



            {/* --- What We Promise --- */}

            <section className="laravel-block">
                <div className="container">
                    <div className="why-laravel">
                        <h3 className="hdng-h3">What do we Promise to you?</h3>
                        <p className="hdng-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="row businees-gd">
                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Exceptional Performance</h4>
                                <p className="hdng-p">We are skilled in utilizing various in-built functionalities of this framework and do speed optimization techniques to provide you with a high-performant web solution. This improves user experience, increases conversions & boosts search engine rankings.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Third-party Integration</h4>
                                <p className="hdng-p">Our team of CodeIgniter developers is skilled in integrating various tools and services into your web solution, helping you achieve your business goals. This provides you with a more comprehensive and user-friendly web solution.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Focus on Security</h4>
                                <p className="hdng-p">We ensure to build extremely secure web apps and websites by implementing the right security features. Our team of security-forced developers ensures secure web development from the ground up with standards-compliant and well-written code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- What We Promise --- */}



            {/* --- Hiring --- */}

            <section className="hiring">
                <div className="container">
                    <div className="hiring-block codeigniter-hiring">
                        <div className="hiring-txt">
                            <h2>What is Codeigniter Web Development?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <NavLink to="#" className="custom-btn wht"><span>Get Your Project Started</span></NavLink>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- Hiring --- */}



            {/* --- Reasons --- */}

            <section className="shopify-services">
                <div className="container" data-aos="fade-up">
                    <h3 className="hdng-h3">Best Codeigniter Development Services to Build <br />Futuristic Web Solutions</h3>
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">CodeIgniter Web Development</h4>
                                <p className="hdng-p">Our team uses React technology to develop custom user interfaces since it ensures flexibility, efficiency, and scalability. </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">CodeIgniter CMS Development</h4>
                                <p className="hdng-p">At Devox Software, we focus on SPD which allows for placing all the content and features of the app on a single page.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Custom CodeIgniter Development</h4>
                                <p className="hdng-p">Having a team of qualified specialists – CTO, Team Leads, developers, and QA engineers – we provide consulting services.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">eCommerce Development</h4>
                                <p className="hdng-p">We help build a solid architecture for your React application. The right architecture allows maintaining and scaling the app easier.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">CodeIgniter Upgradation</h4>
                                <p className="hdng-p">Our development team helps move an existing web app to the React JavaScript library. We carefully plan the migration process.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">CodeIgniter Third-Party Integration</h4>
                                <p className="hdng-p">Complete support and maintenance services to ensure regular update, scaling and performance of Node.js applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Reasons --- */}



            {/* --- Hiring --- */}

            <section className="hiring">
                <div className="container">
                    <div className="hiring-block codeigniter-hiring">
                        <div className="hiring-txt">
                            <h2>Need Assistance with Your CodeIgniter Development Project?</h2>
                            <p>We can help you refine your digital product idea and develop the web app that meets your requirements!</p>
                            <NavLink to="#" className="custom-btn wht"><span>Get Your Project Started</span></NavLink>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- Hiring --- */}



            {/* --- Why CodeIgniter --- */}

            <section className="laravel-block">
                <div className="container">
                    <div className="why-laravel">
                        <h3 className="hdng-h3">Why Pixxelu for CodeIgniter Web <br />Development Services?</h3>
                    </div>
                    <div className="row businees-gd">
                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Agile Methodology</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">100% client Satisfaction</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">On-time Delivery</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Experienced Developers</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Quality Assurance & Testing</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">User-centric Development</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- Why CodeIgniter --- */}



            {/* --- Faq Heading --- */}

            <section className="laravel-marque">
                <LaravelMarquee />
                <h2>Frequently Asked Questions</h2>
            </section>

            {/* --- Faq Heading --- */}



            {/* --- FAQ --- */}


            <section className="faq-sec">
                <div className="container">
                    <div className="accordion" id="accordionExample" data-aos="fade-up">
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What does a digital marketer do?</button>
                            </h4>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">An experienced digital marketer will research your business, understand your target audience, and craft result oriented strategy to drive results. Moreover, a digital marketer will also proficiently execute these strategies to reach the target audience, promote your business services and products and develop brand awareness across all social media channels.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Would my business benefit from digital marketing services?</button>
                            </h4>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Digital marketing services are a must for building a successful business. You require digital marketing services to improve sales and drive revenue regardless of your business type. Therefore, properly understanding how to apply digital marketing services and taking advantage of them will surely make your business future-proof.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Is digital marketing service cost-effective compared to traditional marketing?</button>
                            </h4>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Digital marketing service is more cost-effective than traditional marketing. Even, you can implement a targeted approach using digital marketing that will help you reach a larger audience. Even in digital marketing, you can measure ROI, tweak your campaign as per your preference, and even start and stop your campaign based on your budget.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Why should I buy digital marketing services from your company?</button>
                            </h4>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Our professional digital marketing team has experience of 5+ years crafting result-driven campaigns for various industries. Having an in-depth understanding of SEO, social media, and content marketing make us unique compared to our peers. To ensure you receive the best in class digital marketing service, our specialized team members will study your business and create campaigns accordingly.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">How much do digital marketing services cost?</button>
                            </h4>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Digital marketing service costs from $500 to $50,000. The cost of a digital marketing service depends upon the timeline, requirements, and type of digital marketing service you want to sign up for. For example, the price for content marketing and SEO services varies depending on the project scope.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Will I get guaranteed results from digital marketing services?</button>
                            </h4>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Digital marketing services do not provide guaranteed results. It is advisable to stay away from companies that claim guaranteed or quick results from digital marketing services. However, digital marketing is the best and the most preferred way to promote your business online. If done with the help of professional digital marketers, you will surely see results after 6 to 12 months.</p>
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


export default CodeigniterDevelopment