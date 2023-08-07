import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import VideoReview from '../components/VideoReview';
import Business from '../assets/images/business.svg';
import CounterHome from '../components/CounterHome';
import Black_Stars from '../assets/icons/star-black.svg';
import Client_logo from '../assets/images/client-logo.jpg';
import Service_Icn5 from '../assets/icons/shopify-development/service-icon5.svg';
import Fact_Icn1 from '../assets/icons/shopify-development/fact-icn1.svg';
import Fact_Icn2 from '../assets/icons/shopify-development/fact-icn2.svg';
import Fact_Icn3 from '../assets/icons/shopify-development/fact-icn3.svg';
import Enplace from '../assets/images/shopify-development/enplace.jpg';
import Shopify_Logo from '../assets/images/shopify-development/shopify-logo.svg';
import Shopify_Expert from '../assets/images/shopify-development/shopify-expert-logo.png';
import Shopify_App from '../assets/images/shopify-development/shopify-app-store.png';
import Project1 from '../assets/images/shopify-development/project1.jpg';
import Project2 from '../assets/images/shopify-development/project2.jpg';
import Project3 from '../assets/images/shopify-development/project3.jpg';
import Project4 from '../assets/images/shopify-development/project4.jpg';
import ReviewScroll from '../components/ReviewScroll';
import Form from '../components/Form';
import Marquee from '../components/Marquee';
import ShopifyTabSlide from '../components/ShopifyTabSlide';


function ShopifyDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'shopify'}>


            {/* --- Shopify Banner --- */}

            <section className="shopify-banner every-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="banner-data">
                                <h2 className="hdng-h2"><span>Shopify</span> Development Company</h2>
                                <p className="hdng-p">Looking for custom Shopify development services? Want to build a custom Shopify store for your business? Our expert Shopify developers will help you build that.</p>
                            </div>
                            <div className="shopify-experts">
                                <img src={Shopify_Expert} alt="Shopify_Expert" />
                                <img src={Shopify_App} alt="Shopify_App" />
                            </div>
                            <NavLink to="#" className="custom-btn"><span>Hire Shopify Developer</span></NavLink>
                        </div>

                        <div className="col-md-7">
                            <div class="shopifylogo-box">
                                <img src={Shopify_Logo} alt="Shopify_Logo" />
                            </div>
                            <div class="scroll-box">
                                <img src={Enplace} alt="Enplace" />
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



            {/* --- Facts --- */}

            <section className="shopify-facts">
                <div className="container" data-aos="fade-up">
                    <div className="fact-hdng">
                        <h6 className="hdng-h6">MATTER OF FACTS</h6>
                        <h3 className="hdng-h3">We are measured by many things.<br />
                            But most of all by numbers.</h3>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-4 fact-box">
                            <div className="shopify-fact-block">
                                <img src={Fact_Icn1} alt="Fact_Icn1" />
                                <h4 className="hdng-h4">+30 % ⌀ Increase in conversion rate</h4>
                                <p className="hdng-p">Through our years of experience, we optimize every little detail to increase the conversion rate.</p>
                            </div>
                        </div>

                        <div className="col-md-4 fact-box">
                            <div className="shopify-fact-block">
                                <img src={Fact_Icn2} alt="Fact_Icn2" />
                                <h4 className="hdng-h4">+58 % higher basket value</h4>
                                <p className="hdng-p">Upsells and cross-sells as well as optimised product presentations ensure a higher shopping basket value.</p>
                            </div>
                        </div>

                        <div className="col-md-4 fact-box">
                            <div className="shopify-fact-block">
                                <img src={Fact_Icn3} alt="Fact_Icn3" />
                                <h4 className="hdng-h4">8 % more organic traffic</h4>
                                <p className="hdng-p">Long-term on-page SEO strategy ensures independence from Google and Facebook advertising & provide a cost-effective source of customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Facts --- */}




            {/* --- Reasons --- */}

            <section className="shopify-services">
                <div className="container" data-aos="fade-up">
                    <h6 className="hdng-h6">Build Featureful and Fast Shopify Development Stores</h6>
                    <h3 className="hdng-h3">List of Best Shopify Web Development Services</h3>
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Shopify Store Setup</h4>
                                <p className="hdng-p">Setup your Shopify store using the experience and strong technical expertise of our Shopify development experts.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Shopify App Development</h4>
                                <p className="hdng-p">Build a completely new mobile app from scratch with the latest features and functionalities of existing Shopify applications.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Shopify SEO Services</h4>
                                <p className="hdng-p">Improve your product’s organic search and conversion rates by optimising your Shopify store with the Google’s SEO guidelines.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Shopify Theme Development</h4>
                                <p className="hdng-p">Build a strong visual foundation of your website using the Shopify theme development services and be consistant with your brand image.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Shopify Migration</h4>
                                <p className="hdng-p">Move your shop information from platforms like Wix, WooCommerce and Etsy properly and quickly with the help of professional Shopify experts.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">PSD to Shopify</h4>
                                <p className="hdng-p">Having years of experience in HTML and CSS, our team will turn your Photoshop design (PSD) into fully functional Shopify website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Reasons --- */}


            {/* --- Services Inculded --- */}

            <section className="included-slider">
                <div className="container">
                    <div className="tab-slider" data-aos="fade-up">
                        <ShopifyTabSlide />
                    </div>
                </div>
            </section>

            {/* --- Services Inculded --- */}




            {/* --- Reasons --- */}

            <section className="shopify-services">
                <div className="container" data-aos="fade-up">
                    <h6 className="hdng-h6">Benefits of Shopify Development Services</h6>
                    <h3 className="hdng-h3">Why Choose Shopify Platform?</h3>
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Ease of Use</h4>
                                <p className="hdng-p">Shopify is easy to use compared to Magento and Woocommerce and has a slight learning curve as well is suitable for developers and novices as well.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Mobile Ready</h4>
                                <p className="hdng-p">Build a mobile optimized Shopify store that is mobile responsive and includes an exclusive mobile shopping cart making your store accessible across all devices.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Setup Your Payment Gateway</h4>
                                <p className="hdng-p">Get advantage of dozens of Shopify payment gateways along with Stripe, by using this payment gateway you will not be charged a single penny.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">High-end Security</h4>
                                <p className="hdng-p">Don’t be worried about your highly sensitive data such as credit card numbers, and private account details with Shopify’s high-end security updates and support.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Large Template Library</h4>
                                <p className="hdng-p">Get advantage of the plethora of different themes, and even collaborate with developers to develop visually appealing Shopify stores.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Advanced Integrations</h4>
                                <p className="hdng-p">Modify your Shopify website quickly with application and give customizable functionality and features to your Shopify store.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Reasons --- */}


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


export default ShopifyDevelopment