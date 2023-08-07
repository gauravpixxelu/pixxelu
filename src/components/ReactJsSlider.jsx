import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Service_Icn5 from '../assets/icons/shopify-development/service-icon5.svg';

const ReactJsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
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

    return (
        <>


            <Slider {...settings}>
                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">Custom React Development</h4>
                    <p className="hdng-p">Our team uses React technology to develop custom user interfaces since it ensures flexibility, efficiency, and scalability. </p>
                </div>

                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">Single Page Development</h4>
                    <p className="hdng-p">At Devox Software, we focus on SPD which allows for placing all the content and features of the app on a single page.</p>
                </div>

                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">React Consulting</h4>
                    <p className="hdng-p">Having a team of qualified specialists – CTO, Team Leads, developers, and QA engineers – we provide consulting services.</p>
                </div>

                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">Architecture Building</h4>
                    <p className="hdng-p">We help build a solid architecture for your React application. The right architecture allows maintaining & scaling the app easier.</p>
                </div>

                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">App Migration to React</h4>
                    <p className="hdng-p">Our development team helps move an existing web app to the React JavaScript library. We carefully plan the migration process.</p>
                </div>

                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">Maintenance and Support</h4>
                    <p className="hdng-p">As a React JS web development company, we offer maintenance services to support applications once they’ve been delivered.</p>
                </div>
            </Slider>
        </>
    );
};

export default ReactJsSlider;
