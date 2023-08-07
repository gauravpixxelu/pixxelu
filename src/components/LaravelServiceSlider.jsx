import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Service_Icn5 from '../assets/icons/shopify-development/service-icon5.svg';

const LaravelServiceSlider = () => {
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
                    <h4 className="hdng-h4">Custom Laravel Web Solutions</h4>
                    <p className="hdng-p">Whether it is a web app, a cloud solution, a website, or cross-platform software, our Laravel development team will help you develop highly efficient solutions.</p>
                </div>

                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">Enterprise Development Solutions</h4>
                    <p className="hdng-p">Build featureful and highly secure enterprise solutions using Laravel which will help you automate your business and increase employee productivity.</p>
                </div>

                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">Laravel API Development</h4>
                    <p className="hdng-p">Integrate 3rd party applications and develop an aesthetically appealing web app to build a stronger web presence with custom API development.</p>
                </div>

                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">Laravel CRM Development</h4>
                    <p className="hdng-p">Develop a highly secure, scalable, customizable CRM solution using the most popular PHP framework.</p>
                </div>

                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">Laravel Migration Services</h4>
                    <p className="hdng-p">Migrate your existing web solution efficiently to a cloud-based Laravel platform and develop powerful cloud-based solutions for your business.</p>
                </div>

                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">Laravel Cloud Integration</h4>
                    <p className="hdng-p">Develop custom CRM solutions with powerful features and develop a fully functional and feature-rich solution by performing Cloud integration.</p>
                </div>
            </Slider>
        </>
    );
};

export default LaravelServiceSlider;
