import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import VideoReview from '../components/VideoReview';
import Business from '../assets/images/business.svg';
import CounterHome from '../components/CounterHome';
import Black_Stars from '../assets/icons/star-black.svg';
import Service_Img from '../assets/images/digital-marketing/service-img.svg';
import BannerGraphic from '../assets/images/digital-marketing/banner-graphic.png';
import Project1 from '../assets/images/shopify-development/project1.jpg';
import Project2 from '../assets/images/shopify-development/project2.jpg';
import Project3 from '../assets/images/shopify-development/project3.jpg';
import Project4 from '../assets/images/shopify-development/project4.jpg';
import Service_Icn5 from '../assets/icons/shopify-development/service-icon5.svg';
import ReviewScroll from '../components/ReviewScroll';
import Form from '../components/Form';
import Marquee from '../components/Marquee';
import DigitalMarketingSlider from '../components/DigitalMarketingSlider';
import LaravelMarquee from '../components/LaravelMarquee';


function DigitalMarketing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'digital-marketing-page'}>


            {/* --- Wordpress Banner --- */}

            <section className="dm-banner every-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="banner-data">
                                <h2 className="hdng-h2">Digital Marketing Services</h2>
                                <ul className="site-ul">
                                    <li>Google Certified Professionals</li>
                                    <li>Global Clientele</li>
                                    <li>Transparent Process</li>
                                </ul>
                            </div>
                            <NavLink to="#" className="custom-btn"><span>Get Your Project Started</span></NavLink>
                        </div>

                        <div className="col-md-7">
                            <div className="laravel-box">
                                <img src={BannerGraphic} alt="BannerGraphic" />
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


            {/* --- What is Laravel --- */}

            <section className="laravel-block">
                <div className="container">
                    <div className="why-laravel">
                        <h3 className="hdng-h3">What is Digital Marketing Service?</h3>
                        <h6 className="hdng-h6">Drive Business Growth With Complete Digital Marketing Services</h6>
                        <p className="hdng-p">Digital marketing is also referred as online marketing is the promotion of brands that will help you connect with potential customers using digital communication and internet. Digital Marketing includes variety of services such as social media marketing, content marketing, email marketing, web based advertisement.</p>
                        <p className="hdng-p">Additionally, digital marketing includes 2 types of marketing, inbound marketing and outbound marketing. Both of these types focuses on following the buyer’s journey and turn them into a paying client. Generally, brand creates content for specific marketing platforms and focuses on that to drive revenue.</p>
                        <NavLink to="#" className="custom-btn"><span>Talk to Digital Marketing Consultant</span></NavLink>
                    </div>
                </div>
            </section>


            {/* --- What is Laravel --- */}

            {/* --- Laravel Services --- */}


            <section className="services-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="hdng-h2">List of Best Digital Marketing Services</h2>
                        </div>
                        <div className="col-md-8">
                            <DigitalMarketingSlider />
                        </div>
                    </div>
                </div>
            </section>


            {/* --- Laravel Services --- */}



            {/* --- What is Laravel --- */}

            <section className="laravel-block">
                <div className="container">
                    <div className="why-laravel">
                        <h3 className="hdng-h3">Digital Marketing Services</h3>
                        <h6 className="hdng-h6">Benefits of Digital Marketing Services</h6>
                        <p className="hdng-p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                    </div>
                    <div className="row businees-gd">
                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Expand Global Reach</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Interactive Marketing</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Increase Engagement</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Boost ROI</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Cost-effective Advertisement</h4>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="bussiness-box">
                                <img src={Service_Icn5} alt="Service_Icn5" />
                                <h4 className="hdng-h4">Remarketing Opportunities</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- What is Laravel --- */}


            {/* --- Hiring --- */}

            <section className="hiring">
                <div className="container">
                    <div className="hiring-block dm-hiring">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="hiring-txt">
                                    <h2>Looking for Digital Marketing Services?</h2>
                                    <p>Talk to us. Our digital marketing team will understand your business and create a systematic plan to boost the growth of your business.</p>
                                    <NavLink to="#" className="custom-btn"><span>Let’s Discuss</span></NavLink>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="hiring-img">
                                    <img src={Service_Img} alt="Service_Img" />
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


export default DigitalMarketing