import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import VideoReview from '../components/VideoReview';
import Business from '../assets/images/business.svg';
import CounterHome from '../components/CounterHome';
import Black_Stars from '../assets/icons/star-black.svg';
import NodeGraphic from '../assets/images/nodejs-development/node-banner.png';
import Project1 from '../assets/images/shopify-development/project1.jpg';
import Project2 from '../assets/images/shopify-development/project2.jpg';
import Project3 from '../assets/images/shopify-development/project3.jpg';
import Project4 from '../assets/images/shopify-development/project4.jpg';
import Develop_Img1 from '../assets/images/laravel-development/develop-img1.jpg';
import Develop_Img2 from '../assets/images/laravel-development/develop-img2.jpg';
import Develop_Img3 from '../assets/images/laravel-development/develop-img3.jpg';
import Develop_Img4 from '../assets/images/laravel-development/develop-img4.jpg';
import Develop_Img5 from '../assets/images/laravel-development/develop-img5.jpg';
import Develop_Img6 from '../assets/images/laravel-development/develop-img6.jpg';
import Service_Icn5 from '../assets/icons/shopify-development/service-icon5.svg';
import NodeService from '../assets/images/nodejs-development/node-hire.svg';
import Fact_Icn1 from '../assets/icons/shopify-development/fact-icn1.svg';
import Fact_Icn2 from '../assets/icons/shopify-development/fact-icn2.svg';
import Fact_Icn3 from '../assets/icons/shopify-development/fact-icn3.svg';
import ReviewScroll from '../components/ReviewScroll';
import Form from '../components/Form';
import Marquee from '../components/Marquee';
import LaravelMarquee from '../components/LaravelMarquee';


function NodeJsDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'nodejs-page'}>


            {/* --- Wordpress Banner --- */}

            <section className="node-banner every-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="banner-data">
                                <h2 className="hdng-h2">Node JS Development Services</h2>
                                <p className="hdng-p">As a leading Node.js development company, Pixxelu Digital Technology create fast, scalable and real time applications. Hire our dedicated developers for Node JS web development needs.</p>
                            </div>
                            <NavLink to="#" className="custom-btn wht"><span>Get Your Project Started</span></NavLink>
                        </div>

                        <div className="col-md-5">
                            <div className="laravel-box">
                                <img src={NodeGraphic} alt="NodeGraphic" />
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


            {/* --- Facts --- */}

            <section className="shopify-facts">
                <div className="container" data-aos="fade-up">
                    <div className="fact-hdng">
                        <h3 className="hdng-h3">Business Values Added by Choosing <br />Node.js Development</h3>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-4 fact-box">
                            <div className="shopify-fact-block">
                                <img src={Fact_Icn1} alt="Fact_Icn1" />
                                <h4 className="hdng-h4">Lightweight Sophistication</h4>
                                <p className="hdng-p">Efficient and lightweight, Node.js is suitable for startups and enterprises.</p>
                            </div>
                        </div>

                        <div className="col-md-4 fact-box">
                            <div className="shopify-fact-block">
                                <img src={Fact_Icn2} alt="Fact_Icn2" />
                                <h4 className="hdng-h4">Improves Scalability</h4>
                                <p className="hdng-p">Node.js can significantly improve the number of concurrent users a website can handle.</p>
                            </div>
                        </div>

                        <div className="col-md-4 fact-box">
                            <div className="shopify-fact-block">
                                <img src={Fact_Icn3} alt="Fact_Icn3" />
                                <h4 className="hdng-h4">Agility Driven</h4>
                                <p className="hdng-p">Meet urgent requirements of your resource-hungry and data-intensive applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Facts --- */}




            {/* --- Reasons --- */}

            <section className="shopify-services">
                <div className="container" data-aos="fade-up">
                    <h3 className="hdng-h3">Nodejs Development Services We Offer</h3>
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Custom Node.js Development</h4>
                                <p className="hdng-p">We develop customized, high performing, scalable, secure and UI rich business apps for our clients to fit your business needs.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Node.Js Consulting</h4>
                                <p className="hdng-p">We provide cost-efficient, seamless Node.Js Consulting Services all across the globe based on the project specifications & business vertical.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">API Integration And Development</h4>
                                <p className="hdng-p">Our Node js programmers that are proficient in developing scalable and robust API based Node.js solutions.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Package Development</h4>
                                <p className="hdng-p">Our expert Node.js developers have rich experience in creating reusable packages in Node.js.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Node Js Application Migration</h4>
                                <p className="hdng-p">Migrate any existing framework application like .Net, PHP, JAVA to Node.js and leverage the benefits of our expertise.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Node JS Maintenance And Support</h4>
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
                    <div className="hiring-block node-hiring">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="hiring-txt">
                                    <h2>Want to Hire an Node js Developer?</h2>
                                    <p>Contact us. Share your requirements with our professional eCommerce developer and build a fully functional eCommerce website.</p>
                                    <NavLink to="#" className="custom-btn"><span>Let’s Discuss</span></NavLink>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="hiring-img">
                                    <img src={NodeService} alt="NodeService" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- Hiring --- */}



            {/* --- What is Laravel --- */}

            <section className="laravel-block">
                <div className="container">
                <div className="why-laravel">
                        <h3 className="hdng-h3">Why choose Pixxelu for your <br />Node js development services?</h3>
                        <h6 className="hdng-h6">Benefits of eCommerce Development Services</h6>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="develop-box">
                                <img src={Develop_Img1} alt="Develop_Img1" />
                                <h4 className="hdng-h4">360-Degree Requirement Analysis</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="develop-box">
                                <img src={Develop_Img2} alt="Develop_Img2" />
                                <h4 className="hdng-h4">State-Of-The-Art Design</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="develop-box">
                                <img src={Develop_Img3} alt="Develop_Img3" />
                                <h4 className="hdng-h4">100% Confidentiality</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="develop-box">
                                <img src={Develop_Img4} alt="Develop_Img4" />
                                <h4 className="hdng-h4">Agile Development</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="develop-box">
                                <img src={Develop_Img5} alt="Develop_Img5" />
                                <h4 className="hdng-h4">Skilled Programmers</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="develop-box">
                                <img src={Develop_Img6} alt="Develop_Img6" />
                                <h4 className="hdng-h4">Competitive Pricing</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- What is Laravel --- */}




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


export default NodeJsDevelopment