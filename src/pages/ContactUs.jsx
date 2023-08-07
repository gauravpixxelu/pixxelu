import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import India from '../assets/icons/india.svg';
import Usa from '../assets/icons/usa.svg';
import SouthAfrica from '../assets/icons/south-africa.svg';
import Call from '../assets/icons/call.svg';
import Whatsapp from '../assets/icons/whatsapp.svg';
import Email from '../assets/icons/email.svg';
import Skype from '../assets/icons/skype.svg';
import { NavLink } from 'react-router-dom';

function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'contact-us'}>


            <section className="contact-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Get a free quote for <span>web design and development</span></h2>
                        </div>
                    </div>
                </div>
            </section>




            <section className="contact-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-info">
                                <div className="contact-address">
                                    <div className="contact-info-box align">
                                        <img src={India} alt="India" />
                                        <p>Building 256, Kachari Adda, near Patrol Pump, Dharamshala, Himachal Pradesh 176215</p>
                                    </div>
                                    <div className="contact-info-box">
                                        <img src={Usa} alt="Usa" />
                                        <p>11816 Inwood Rd #1126 Dallas, TX 75244</p>
                                    </div>
                                    <div className="contact-info-box align">
                                        <img src={SouthAfrica} alt="SouthAfrica" />
                                        <p>Wild fig Business Park. Cranberry Street <br />Honeydew Roodepoort 1724</p>
                                    </div>

                                    <div className="contact-info-hdng">
                                    <h4>Give a ring</h4>
                                    </div>
                                    <div className="contact-info-box">
                                        <img src={Call} alt="Call" />
                                        <p><NavLink to="tel:9218000707">+91 9218000707</NavLink></p>
                                    </div>

                                    <div className="contact-info-hdng">
                                    <h4>New Business Inquiries</h4>
                                    </div>
                                    <div className="contact-info-box">
                                        <img src={Skype} alt="Skype" />                                        
                                        <p><NavLink to="mailto:info@pixxelu.com">info@pixxelu.com</NavLink></p>
                                    </div>

                                    <div className="contact-info-hdng">
                                    <h4>Whatsapp</h4>
                                    </div>
                                    <div className="contact-info-box">
                                        <img src={Whatsapp} alt="Whatsapp" />
                                        <p><NavLink to="#" target="_blank">+91 9218000707</NavLink></p>
                                    </div>

                                    <div className="contact-info-hdng">
                                    <h4>Skype</h4>
                                    </div>
                                    <div className="contact-info-box">
                                        <img src={Email} alt="Email" />
                                        <p><NavLink to="#" target="_blank">design99grapesims</NavLink></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="contact-form-block">
                                <h3 className="hdng-h3">Let's do great <span>work together.</span></h3>
                                <p className="hdng-p">Fill out the form below and we will reply within 12 hours. We will suggest an online call using WhatsApp or Skype to collect all the information and prepare a proposal and an initial layout for you.</p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    )
}


export default ContactUs