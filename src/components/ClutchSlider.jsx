import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review1 from '../assets/images/review1.jpg';
import Review2 from '../assets/images/review2.jpg';
import Review3 from '../assets/images/review3.jpg';
import Slider from 'react-slick';





const ClutchSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true, 
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
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

        <Slider {...settings}>
            <div className="clutch-slide">
                <img src={Review1} alt="Review1" />
            </div>

            <div className="clutch-slide">
                <img src={Review2} alt="Review2" />
            </div>

            <div className="clutch-slide">
                <img src={Review3} alt="Review3" />
            </div>
        </Slider>

    );
};

export default ClutchSlider;
