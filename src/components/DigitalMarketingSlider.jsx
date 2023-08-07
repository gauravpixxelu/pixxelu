import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Service_Icn5 from '../assets/icons/shopify-development/service-icon5.svg';

const DigitalMarketingSlider = () => {
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
                    <h4 className="hdng-h4">Search Engine Optimisation (SEO)</h4>
                    <p className="hdng-p">Get your website to the top of Google’s search results pages using onpage and offpage optimisation. Attract high quality leads that converts into a paying client.</p>
                </div>

                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">Conversion Rate Optimisation (CRO)</h4>
                    <p className="hdng-p">To ensure you turn your website visitors a paying customer, utlise conversion rate optimization. Optimize your website for different devices to promote better conversions.</p>
                </div>

                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">Social Media Marketing</h4>
                    <p className="hdng-p">Expand and market your business on social media. Identify your goals, make competitor analysis and evaluate your clients using social media brand management.</p>
                </div>

                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">Content Marketing</h4>
                    <p className="hdng-p">Sign up for result driven content marketing services that will help you to boost your website and drive exceptional business result.</p>
                </div>

                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">Google PPC Ads</h4>
                    <p className="hdng-p">Setup data driven PPC campaign to quickly reach your customers. Drive high traffic and leads for your website using effective PPC specialists.</p>
                </div>

                <div className="laravel-service-box">
                    <img src={Service_Icn5} alt="Service_Icn5" />
                    <h4 className="hdng-h4">Online Reputation Management (ORM)</h4>
                    <p className="hdng-p">Improve review generation, monitoring and review response publishing using our state of art online reputation management and improve your online reputation.</p>
                </div>
            </Slider>
        </>
    );
};

export default DigitalMarketingSlider;
