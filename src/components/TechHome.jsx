import React from 'react';
import React_icon from '../assets/icons/react.svg'
import Laravel from '../assets/icons/laravel.svg'
import Wordpress from '../assets/icons/wordpress.svg'
import Webflow from '../assets/icons/webflow.svg'
import Php from '../assets/icons/php.svg'
import Shopify from '../assets/icons/shopify.svg'
import Nodejs from '../assets/icons/nodejs.svg'
import Java from '../assets/icons/java.svg'
import Javascript from '../assets/icons/javascript.svg'
import Angular from '../assets/icons/angular.svg'
import Flutter from '../assets/icons/flutter.svg'
import Bootstrap from '../assets/icons/bootstrap.svg'
import Html from '../assets/icons/html.svg'

const TechHome = () => {

    return (

        <div className="tech-block">
            <div className="tech-box">
                <img src={React_icon} alt="React" />
                <h6>React</h6>
            </div>

            <div className="tech-box">
                <img src={Laravel} alt="Laravel" />
                <h6>Laravel</h6>
            </div>

            <div className="tech-box">
                <img src={Wordpress} alt="Wordpress" />
                <h6>Wordpress</h6>
            </div>

            <div className="tech-box">
                <img src={Webflow} alt="Webflow" />
                <h6>Webflow</h6>
            </div>

            <div className="tech-box">
                <img src={Php} alt="Php" />
                <h6>PHP</h6>
            </div>

            <div className="tech-box">
                <img src={Shopify} alt="Shopify" />
                <h6>Shopify</h6>
            </div>

            <div className="tech-box">
                <img src={Nodejs} alt="Nodejs" />
                <h6>Node Js</h6>
            </div>

            <div className="tech-box">
                <img src={Java} alt="Java" />
                <h6>Java</h6>
            </div>

            <div className="tech-box">
                <img src={Javascript} alt="Javascript" />
                <h6>Javascript</h6>
            </div>

            <div className="tech-box">
                <img src={Angular} alt="Angular" />
                <h6>Angular</h6>
            </div>

            <div className="tech-box">
                <img src={Flutter} alt="Flutter" />
                <h6>Flutter</h6>
            </div>

            <div className="tech-box">
                <img src={Bootstrap} alt="Bootstrap" />
                <h6>Bootstrap</h6>
            </div>

            <div className="tech-box">
                <img src={Html} alt="Html" />
                <h6>Html</h6>
            </div>
        </div>

    )
}

export default TechHome