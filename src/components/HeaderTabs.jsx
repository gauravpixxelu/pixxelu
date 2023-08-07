import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Case_Study from "../assets/images/case-study.png"
import Choose_Icn1 from "../assets/icons/choose-icn1.png"
import Choose_Icn2 from "../assets/icons/choose-icn2.png"
import Choose_Icn3 from "../assets/icons/choose-icn3.png"
import Choose_Icn4 from "../assets/icons/choose-icn4.png"

const HeaderTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabHover = (index) => {
        setActiveTab(index);
    };

    const tabsData = [
        {
            heading: 'Services',
            content: (
                <>
                    <div className="nav-gd">
                        <h4>Web:</h4>
                        <ul className="site-ul">
                            <li><NavLink to="#">PHP development</NavLink></li>
                            <li><NavLink to="#">Laravel development</NavLink></li>
                            <li><NavLink to="#">WHMCS development</NavLink></li>
                            <li><NavLink to="#">Shopify development</NavLink></li>
                            <li><NavLink to="#">Magento development</NavLink></li>
                            <li><NavLink to="#">Wordpress development</NavLink></li>
                            <li><NavLink to="#">AWS Consulting</NavLink></li>
                            <li><NavLink to="#">Frontend development</NavLink></li>
                            <li><NavLink to="#">Backend development</NavLink></li>
                        </ul>
                    </div>

                    <div className="nav-gd">
                        <h4>Mobile:</h4>
                        <ul className="site-ul">
                            <li><NavLink to="#">iOS</NavLink></li>
                            <li><NavLink to="#">Android</NavLink></li>
                            <li><NavLink to="#">Cross-platform</NavLink></li>
                        </ul>
                    </div>

                    <div className="nav-gd">
                        <h4>Cloud Development:</h4>
                        <ul className="site-ul">
                            <li><NavLink to="#">DevOps</NavLink></li>
                        </ul>
                    </div>
                </>
            ),
        },
        {
            heading: 'Case Studies',
            content: (
                <>
                    <img src={Case_Study} alt="Case_Study" />
                </>
            ),
        },
        {
            heading: 'Why Choose Us',
            content: (
                <>
                    <div className="why-choose">
                        <h3>We <span>Work Hard</span> to support our customers every day.</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="why-box">
                                    <div className="why-icon">
                                        <img src={Choose_Icn1} alt="Choose_Icn1" />
                                    </div>
                                    <div className="why-txt">
                                        <h5>Assured Global Services</h5>
                                        <p>Our dedicated and experienced professionals take care of every detail of the project while catering services globally.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="why-box">
                                    <div className="why-icon">
                                        <img src={Choose_Icn2} alt="Choose_Icn2" />
                                    </div>
                                    <div className="why-txt">
                                        <h5>Integrity</h5>
                                        <p>We never compromise when it comes to principles and work ethics. Honest collaboration leads to long-term relationships.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="why-box">
                                    <div className="why-icon">
                                        <img src={Choose_Icn3} alt="Choose_Icn3" />
                                    </div>
                                    <div className="why-txt">
                                        <h5>On-Time Delivery</h5>
                                        <p>Customers trust us. So we draft a blueprint of the plan & implement strategies accordingly to complete the project on time.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="why-box">
                                    <div className="why-icon">
                                        <img src={Choose_Icn4} alt="Choose_Icn4" />
                                    </div>
                                    <div className="why-txt">
                                        <h5>Quality Consciousness</h5>
                                        <p>By utilizing the latest technology, we commit and deliver top notch quality services to our customers and ensure they are satisfied.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ),
        },
    ];

    return (
        <div className="vertical-tabs">
            {tabsData.map((tab, index) => (
                <div
                    key={index}
                    className={`tab ${activeTab === index ? 'active' : ''}`}
                    onMouseEnter={() => handleTabHover(index)}
                >
                    <div className="tab-hdng">
                        <h3 className="tab-heading">{tab.heading}</h3>
                    </div>

                    <div className="tab-content-gd">
                        <div className={`tab-content ${activeTab === index ? 'show' : ''}`}>
                            {tab.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HeaderTabs;
