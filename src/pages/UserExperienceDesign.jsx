import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Project1 from '../assets/images/shopify-development/project1.jpg';
import Project2 from '../assets/images/shopify-development/project2.jpg';
import Project3 from '../assets/images/shopify-development/project3.jpg';
import Project4 from '../assets/images/shopify-development/project4.jpg';
import Dashboard from '../assets/images/user-experience-design/dashboard.jpg';
import VideoReview from '../components/VideoReview';
import Business from '../assets/images/business.svg';
import CounterHome from '../components/CounterHome';
import Black_Stars from '../assets/icons/star-black.svg';
import VideoBanner from '../assets/video/banner-video-uiux.mp4';
import ReviewScroll from '../components/ReviewScroll';
import Form from '../components/Form';
import Marquee from '../components/Marquee';
import LaravelMarquee from '../components/LaravelMarquee';
import Scroller from '../components/Scroller';
 



function UserExperienceDesign() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'ui-ux-page'}>


            {/* --- Video Banner --- */}
            <section className="video-banner">
                <video width="100%" autoPlay loop muted>
                    <source src={VideoBanner} type="video/mp4" />
                </video>
                <div className="container video-banner-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="video-banner-txt">
                                <h1>UI UX design <span>that</span> works <span>wonders</span></h1>
                                <h3>15+ Yrs Experience</h3>
                            </div>
                            <div className="video-banner-blocks">
                                <div className="video-block-box">

                                </div>
                                <div className="video-block-box">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Video Banner --- */}


            {/* --- Valueable --- */}

            <section className="valueable">
                <Marquee />
            </section>

            {/* --- Valueable --- */}



            {/* --- UI/UX Services --- */}


            <section className="ui-services">
                <div className="container">
                    <div className="ui-service-box gd-box1">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="ui-service-txt">
                                    <h2 className="hdng-h2">Redesign for the <br />app Made easy</h2>
                                    <div className="keywords">
                                        <h5>User Research</h5>
                                        <h5>UX Design</h5>
                                    </div>
                                    <p>We completely analyze your requirement with deep research and numerous iterations for finalizing the outcome done for you.</p>
                                    <NavLink to="#" className="custom-btn" target="_blank"><span>Visit Prototype</span></NavLink>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ui-service-img">
                                    <img src={Dashboard} alt="Dashboard" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ui-service-box gd-box2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="ui-service-txt">
                                    <h2 className="hdng-h2">SaaSup Website For <br />Unique Start-Up Brands</h2>
                                    <div className="keywords">
                                        <h5>User Research</h5>
                                        <h5>UX Design</h5>
                                    </div>
                                    <p>We completely analyze your requirement with deep research and numerous iterations for finalizing the outcome done for you.</p>
                                    <NavLink to="#" className="custom-btn" target="_blank"><span>Visit Website</span></NavLink>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ui-service-img">
                                    <img src={Dashboard} alt="Dashboard" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ui-service-box gd-box3">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="ui-service-txt">
                                    <h2 className="hdng-h2">Redesign for the <br />Dashboard Made easy</h2>
                                    <div className="keywords">
                                        <h5>User Research</h5>
                                        <h5>UX Design</h5>
                                    </div>
                                    <p>We completely analyze your requirement with deep research and numerous iterations for finalizing the outcome done for you.</p>
                                    <NavLink to="#" className="custom-btn" target="_blank"><span>Visit Prototype</span></NavLink>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ui-service-img">
                                    <img src={Dashboard} alt="Dashboard" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- UI/UX Services --- */}



            {/* --- UI/UX Services --- */}


            <section className="scroller-portfolio">
                <Scroller />
            </section>


            {/* --- UI/UX Services --- */}


            {/* --- Work --- */}

            <section className="work">
                <div className="container">
                    <div className="work-hdng">
                        <h3 className="hdng-h3" data-aos="fade-up">Check Out Our UI/UX <br />Design Portfolio</h3>
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
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is UI design?</button>
                            </h4>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">User Interface design is the type of process professional designers utilize to craft intuitive design interfaces for software, websites, and mobile apps.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What is UX design?</button>
                            </h4>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">User Experience design is the process designers utilize to craft products that offer relevant and meaningful experiences to the audience.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Why UI/UX services are important to your business?</button>
                            </h4>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Great UI/UX design impacts client satisfaction and hooks your users. Even, it helps you to increase the return of investment (ROI) that is a significant reason to design excellent UI/UX design for your web page. Apart from that, crafting a good UI/UX design will help you to establish your brand and keep uniformity across your website as well.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How much does UI/UX Cost?</button>
                            </h4>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Any UX/UI design costing is based on the chosen plan. The requirements of the interface, whether the project has to start from scratch or the existing products require a reverb drive es the cost for any UX UI.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Do you only design websites?</button>
                            </h4>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Web designing, Mobile application services, blockchain, AI, cross-platform, and SaaS applications are the provided services.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">How does the project begin?</button>
                            </h4>
                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="hdng-p">Our procedures follow four basic principles i.e Discover, Define, Design, and deliver.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- FAQ --- */}



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


export default UserExperienceDesign