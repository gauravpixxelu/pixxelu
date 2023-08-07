import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Work1 from '../assets/images/home-work-slider/work1.jpg';
import Work2 from '../assets/images/home-work-slider/work2.jpg';
import Work3 from '../assets/images/home-work-slider/work3.jpg';
import Work4 from '../assets/images/home-work-slider/work4.jpg';
import Work5 from '../assets/images/home-work-slider/work5.jpg';
import Work6 from '../assets/images/home-work-slider/work6.jpg';
import Project1 from '../assets/images/shopify-development/project1.jpg';
import Project2 from '../assets/images/shopify-development/project2.jpg';
import Project3 from '../assets/images/shopify-development/project3.jpg';
import Project4 from '../assets/images/shopify-development/project4.jpg';

function Work() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'work-page'}>


            <section className="work-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="all-work-block">
                <div className="container">
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

                        <div className="col-md-6" data-aos="fade-up">
                            <div className="work-slide">
                                <div className="work-img">
                                    <img src={Project1} alt="Project1" />
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
                                    <img src={Project2} alt="Project2" />
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
                                    <img src={Project3} alt="Project3" />
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
                                    <img src={Project4} alt="Project4" />
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
            </section>
        </div>

    )
}


export default Work