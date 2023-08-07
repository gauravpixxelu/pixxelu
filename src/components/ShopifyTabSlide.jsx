import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Work1 from '../assets/images/shopify-development/work-img1.jpg';
import Work2 from '../assets/images/shopify-development/work-img2.jpg';
import Work3 from '../assets/images/shopify-development/work-img3.jpg';
import Work4 from '../assets/images/shopify-development/work-img4.jpg';
import Slider from 'react-slick';

const ShopifyTabSlide = () => {
    const [activeTab, setActiveTab] = useState(0); // State to track the active tab index
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, 
        beforeChange: (_, next) => setActiveTab(next), // Update the active tab index before slide change
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1
                }
            }
        ],
    };

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex); // Update the active tab index when a tab is clicked
        sliderRef.current.slickGoTo(tabIndex); // Go to the corresponding slide on tab click
    };

    return (
        <>
            <div className="tab-container">
                <div
                    className={`tab ${activeTab === 0 ? 'active' : ''}`}
                    onClick={() => handleTabClick(0)}
                >
                    Store Set Up
                </div>
                <div
                    className={`tab ${activeTab === 1 ? 'active' : ''}`}
                    onClick={() => handleTabClick(1)}
                >
                    Restyle
                </div>
                <div
                    className={`tab ${activeTab === 2 ? 'active' : ''}`}
                    onClick={() => handleTabClick(2)}
                >
                    Customization
                </div>
                <div
                    className={`tab ${activeTab === 3 ? 'active' : ''}`}
                    onClick={() => handleTabClick(3)}
                >
                    Scratch
                </div>
            </div>


            <Slider {...settings} ref={sliderRef}>
                <div className="banner-slide">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="slide-img-gd">
                                <img src={Work1} alt="Work1" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="slide-txt-gd">
                                <h2>Shopify Stores Set Up</h2>
                                <h4>$999+</h4>
                                <p>We will rebrand / design your Shopify store, we will develop everything, integrate apps and make sure you’re all set for a quick launch!</p>
                                <NavLink to="#" className="custom-btn blk"><span>Hire Shopify Developer</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-slide">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="slide-img-gd">
                                <img src={Work2} alt="Work2" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="slide-txt-gd">
                                <h2>Shopify Stores Set Up</h2>
                                <h4>$999+</h4>
                                <p>We will rebrand / design your Shopify store, we will develop everything, integrate apps and make sure you’re all set for a quick launch!</p>
                                <NavLink to="#" className="custom-btn blk"><span>Hire Shopify Developer</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-slide">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="slide-img-gd">
                                <img src={Work3} alt="Work3" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="slide-txt-gd">
                                <h2>Shopify Stores Set Up</h2>
                                <h4>$999+</h4>
                                <p>We will rebrand / design your Shopify store, we will develop everything, integrate apps and make sure you’re all set for a quick launch!</p>
                                <NavLink to="#" className="custom-btn blk"><span>Hire Shopify Developer</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-slide">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="slide-img-gd">
                                <img src={Work4} alt="Work4" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="slide-txt-gd">
                                <h2>Shopify Stores Set Up</h2>
                                <h4>$999+</h4>
                                <p>We will rebrand / design your Shopify store, we will develop everything, integrate apps and make sure you’re all set for a quick launch!</p>
                                <NavLink to="#" className="custom-btn blk"><span>Hire Shopify Developer</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    );
};

export default ShopifyTabSlide;
