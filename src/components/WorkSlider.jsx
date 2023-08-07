import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ekococo from '../assets/images/home-work-slider/ekococo.jpg';
import Ele4orce from '../assets/images/home-work-slider/ele4orce.jpg';
import Krazy from '../assets/images/home-work-slider/krazy.jpg';
import Slider from 'react-slick';


const WorkSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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
            <div className="work-slide">
                <img src={Ekococo} alt="Review1" />
                <div className="work-slide-content">
                    <h6>EKOCOCO</h6>
                    <h4>Coconut tree waste material crafts</h4>
                    <p>Designed ELE4ORCE website, increasing client's customer base by 35% with visually appealing and user-friendly interface.</p>
                </div>
            </div>

            <div className="work-slide">
                <img src={Ele4orce} alt="Review2" />
                <div className="work-slide-content">
                    <h6>ELE4ORCE</h6>
                    <h4>New customers increase by 35%</h4>
                    <p>Collaborated with client to create unique website showcasing coconut tree waste material products. Result was professional and successful online platform.</p>
                </div>
            </div>

            <div className="work-slide">
                <img src={Krazy} alt="Review3" />
                <div className="work-slide-content">
                    <h6>Krazy Deals & Steals</h6>
                    <h4>Sales increased by 30%</h4>
                    <p>Redesigned app for client, resulting in a significant boost in sales performance.</p>
                </div>
            </div>

            <div className="work-slide">
                <img src={Ekococo} alt="Review1" />
                <div className="work-slide-content">
                    <h6>EKOCOCO</h6>
                    <h4>Coconut tree waste material crafts</h4>
                    <p>Designed ELE4ORCE website, increasing client's customer base by 35% with visually appealing and user-friendly interface.</p>
                </div>
            </div>

            <div className="work-slide">
                <img src={Ele4orce} alt="Review2" />
                <div className="work-slide-content">
                    <h6>ELE4ORCE</h6>
                    <h4>New customers increase by 35%</h4>
                    <p>Collaborated with client to create unique website showcasing coconut tree waste material products. Result was professional and successful online platform.</p>
                </div>
            </div>

            <div className="work-slide">
                <img src={Krazy} alt="Review3" />
                <div className="work-slide-content">
                    <h6>Krazy Deals & Steals</h6>
                    <h4>Sales increased by 30%</h4>
                    <p>Redesigned app for client, resulting in a significant boost in sales performance.</p>
                </div>
            </div>

        </Slider>

    );
};

export default WorkSlider;
