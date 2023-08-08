import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'privacy-page'}>

            {/* --- Privacy Banner --- */}

            <section className="privacy-banner">
                <div className="container">
                    <h2 className="hdng-h2">Privacy Policy</h2>
                </div>
            </section>

            {/* --- Privacy Banner --- */}



            {/* --- Privacy Content --- */}

            <section className="privacy-content">
                <div className="container">
                    <div className="privacy-box">
                        <p className="hdng-p">At PixxelU, we are committed to protecting the privacy and security of our customers and site visitors (yep, we mean you). The PixxelU team members are customers themselves, of both PixxelU and other internet sites – so we totally appreciate the importance of Privacy. For all our services, the data controller — the company that’s responsible for your privacy— is PixxelU Digital Technology.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">How We Use Your Information</h4>
                        <p className="hdng-p">We use your information in just a few different ways — what we do depends on the information. The tables below set this out in detail, showing what we do, and why we do it. Personal Information Collected from <NavLink to="https://pixxelu.com/">pixxelu.com</NavLink></p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Your Name And Contact Details</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>How we use your name & contact details</th>
                                    <th>Why</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Reply to your queries</td>
                                    <td>We’ve got to do this to reply to your queries that you would have posted on the Contact Us page of <NavLink to="https://pixxelu.com/privacy-policy">pixxelu.com. </NavLink>website or elsewhere</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Your Name And Contact Details</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>How we use your name & contact details</th>
                                    <th>Why</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Deliver your purchases to you</td>
                                    <td>We’ve got to do this to perform our contract with you</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Send you service messages by e-mail or through our app, such as order updates</td>
                                    <td>We’ve got to do this to perform our contract with you</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Sending you information by email, or post, about our new products and services</td>
                                    <td>To keep you up to date. We only send this with your permission (Consent)</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Fraud prevention and detection</td>
                                    <td>To prevent and detect fraud against either you or<NavLink to="https://pixxelu.com/privacy-policy"> pixxelu.com–</NavLink> unfortunate, but absolutely essential</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Showing you <NavLink to="https://pixxelu.com/privacy-policy">pixxelu.com</NavLink> adverts as you browse the web</td>
                                    <td>So you can see our latest products and deals</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Finding out what you, and other customers, like</td>
                                    <td>To ensure we are giving you what you want, and to stay ahead of the competition</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Your Payment Information</h4>
                        <p className="hdng-p">This means your card’s security/CVV code, don’t worry, we don’t keep them.</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>How we use your payment information</th>
                                    <th>Why ?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Deliver your purchases to you</td>
                                    <td>We’ve got to do this to perform our contract with you</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Take payment, and give refunds</td>
                                    <td>We’ve got to do this to perform our contract with you — We don’t store any of this information in our systems</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Fraud prevention and detection</td>
                                    <td>To prevent and detect fraud against either you or PixxelU– unfortunate, but absolutely essential</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Your Contact History With Us</h4>
                        <p className="hdng-p">What you’ve said to us — for example, over the phone, on instant chat, or on social media.</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>How we use your contact history</th>
                                    <th>Why</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Provide customer service and support</td>
                                    <td>We’ve got to do this to perform our contract with you</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Train our staff</td>
                                    <td>So that, when you contact us, you get the best possible customer service</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Purchase History And Saved Items</h4>
                        <p className="hdng-p">What you’ve bought and what you’ve stored in your basket for another time</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>How we use your purchase history and
                                        saved items</th>
                                    <th>Why</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sell you things</td>
                                    <td>We’ve got to do this to perform our contract with you — if you can’t put stuff into a basket, you can’t buy it!</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Provide customer service and support, and handle returns</td>
                                    <td>We’ve got to do this to perform our contract with you</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Finding out what you, and other customers, like</td>
                                    <td>To ensure we are giving you what you want, and to stay ahead of the competition</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Purchase History And Saved Items</h4>
                        <p className="hdng-p">What you’ve bought and what you’ve stored in your basket for another time</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>How we use your purchase history and saved items</th>
                                    <th>Why</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sell you things</td>
                                    <td>We’ve got to do this to perform our contract with you — if you can’t put stuff into a basket, you can’t buy it!</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Provide customer service and support, and handle returns</td>
                                    <td>We’ve got to do this to perform our contract with you</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Finding out what you, and other customers, like</td>
                                    <td>To ensure we are giving you what you want, and to stay ahead of the competition</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="hdng-p">Information about your phone or laptop, and how you use our website and app Information you give us when you browse our site or use our app, including your IP address and device type and, if you choose to share it with us, your location data, as well as how you use our website and app.</p>
                    </div>

                    <div className="privacy-box">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>How we use information about your phone or laptop, and how you use our website and app</th>
                                    <th>Why</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Improve our website and set default options for you (such as language and currency)</td>
                                    <td>To give you the best possible shopping experience</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Protect our website</td>
                                    <td>To prevent and detect fraud against either you or PixxelU– unfortunate, but absolutely essential — and to meet our legal obligations about looking after your data</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Finding out what you, and other customers, like</td>
                                    <td>To ensure we are giving you what you want, and to stay ahead of the competition</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="hdng-p">Your responses to surveys, competitions and promotions</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Your Responses To Surveys, Competitions And Promotions</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>How we use your responses to surveys, competitions and promotions</th>
                                    <th>Why ?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Run the survey, competition or promotion</td>
                                    <td>We’ve got to do this to perform our contract with you — if we can’t use your entry, you can’t possibly win!</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="hdng-p">You don’t have to give us any of this personal information but if you don’t, you may not be able to buy from the site, and you are unlikely to receive our optimal overall customer experience. We also anonymise and aggregate personal information (so that it does not identify you) and use it for purposes including testing our IT systems, research, data analysis, improving our site and app, and developing new products and services. We also share this information with third parties.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Marketing Messages</h4>
                        <p className="hdng-p">If you have given us consent, we’ll send you marketing messages by email, to keep you aware of what we’re up to and to help you see and find our products.</p>
                        <p className="hdng-p">How to stop marketing messages from Pixxelu</p>
                        <p className="hdng-p">You can stop receiving marketing messages from us at any time.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">You Can Do This:</h4>
                        <ul>
                            <li>Change your Consent in the “my profile” section of shop <NavLink to="https://pixxelu.com/">pixxelu.com</NavLink></li>
                            <li>By clicking on the ‘unsubscribe’ link in any email</li>
                            <li>By contacting us at <NavLink to="mailto:info@pixxelu.com">info@pixxelu.com</NavLink></li>
                        </ul>
                        <p className="hdng-p">Once you do this, we will update your profile to ensure that you don’t receive further marketing messages Stopping marketing messages will not stop service communications (such as order updates) or where you have asked us to provide information.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Your Information</h4>
                        <p className="hdng-p">We have our development center in India, from where we provide software development and IT services for customers round the Globe.We protect your privacy and your rights through the use of the Indian Commission’s standard data protection clauses.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Keeping Your Information</h4>
                        <p className="hdng-p">We’ll only hold on to your information for as long as you are a customer. If you haven’t logged onto our website for three years we will delete your information from our systems. If you no longer wish to be a customer, you can also contact us and request to delete all the information we have on you.</p>
                        <p className="hdng-p">If reasonably necessary or required to meet legal or regulatory requirements, resolve disputes, prevent fraud and abuse, or enforce our Terms & Conditions, we may also keep hold of some of your information as required, even after you have closed your account or it is no longer needed to provide the services to you.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Your Rights</h4>
                        <p className="hdng-p">You have a lot of rights relating to your personal information:</p>
                        <ul>
                            <li>The right to be informed about how your personal information is being used</li>
                            <li>The right to access the personal information we hold about you</li>
                            <li>The right to request the correction of inaccurate personal information we hold about you (although you can do o this in the “My Account” section of <NavLink to="https://pixxelu.com/">pixxelu.com</NavLink></li>
                            <li>The right to request that we delete your data, you can use the Delete My Personal Info feature of “My Account” section of <NavLink to="https://pixxelu.com/">pixxelu.com</NavLink> Or you can email us about your request</li>
                            <li>The right to stop direct marketing messages, which you can do by changing your Consent preferences in “My Account” section of <NavLink to="https://pixxelu.com/">pixxelu.com</NavLink> Or you can email us about your request</li>
                            <li>The right to complain to your data protection regulator — in the India , the Information Commissioner’s Office</li>
                        </ul>
                        <p className="hdng-p">If you want to exercise your rights, have a complaint, or just have questions, please contact us. </p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Changes To How We Protect Your Privacy</h4>
                        <p className="hdng-p">We may change this page from time to time, to reflect how we are processing your data. If we make significant changes, we will make that clear on the PixxelU website or other PixxelU services, or by some other means of contact such as email, so that you are able to review the changes before you continue to use pixxelu.com.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Cookie Policy</h4>
                        <p className="hdng-p"><NavLink to="https://pixxelu.com/">Pixxelu.com </NavLink>uses “cookies” to make parts of our website work and to collect data that helps us understand our visitors better. A cookie is a text file that is placed on your hard disk by our web page server. Cookies cannot be used to run programs or deliver viruses to your computer.</p>
                        <p className="hdng-p">We use cookies because we want to make our website user-friendly, and we are interested in anonymous user behavior. Our cookies don’t store sensitive or personally identifiable information such as your name or address.</p>
                        <p className="hdng-p">You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully use the Pixxelu website.</p>
                        <p className="hdng-p">Here is a list of the main types of cookies we use, and what we use them for. We have described them using the categories recommended by the International Chamber of Commerce in the India Cookie Guide.</p>
                        <p className="hdng-p">Strictly Necessary Cookies: These cookies are essential in order to enable you to move around the website and use its features, such as accessing the secure area of the website, accessing the forum, or commenting on our blog posts. Without these cookies the services you have asked for cannot be provided.</p>
                        <p className="hdng-p">Performance Cookies: These cookies collect information about how visitors use a website, for instance which pages visitors go to most often, how they move around the website, and if they get error messages from web pages.</p>
                        <p className="hdng-p">Like many companies PixxelU uses Google Analytics to help us monitor our website traffic. These analytics cookies do not collect information that identifies an individual visitor. All information these cookies collect is aggregated and therefore anonymous and does not affect your privacy.</p>
                        <p className="hdng-p">By using PixxelU website you agree we may place these types of cookies on your device.</p>
                        <p className="hdng-p">Google Analytics: Google collects anonymous usage statistics about visitors to <NavLink to="https://pixxelu.com/">pixxelu.com</NavLink> to assist PixxelU in better understanding their website visitors. All Google Analytics cookies names start with ‘__ut…’</p>
                        <p className="hdng-p">Google stores the information collected by the cookie on servers in the United States and other countries. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google’s behalf. Google will not associate your IP address with any other data held by Google.</p>
                        <p className="hdng-p">By using PixxelU’s website you consent to the processing of data about your visit by Google in the manner and for the purposes set out above.</p>
                        <p className="hdng-p">More details about the analytics cookies, and how to reject or delete them:</p>
                        <p className="hdng-p">www.google.com/intl/en/privacypolicy.html</p>
                        <p className="hdng-p">Functionality Cookies: These cookies allow the website to remember choices you make and provide enhanced, more personal features.</p>
                        <p className="hdng-p">PixxelU uses this type of cookie when you tick “Remember Me” when logging in or registering to access the secure area of the website, the forum, or comment on our blog posts. These cookies are also created by WordPress, similar to ‘Strictly Necessary Cookies’, above.</p>
                        <p className="hdng-p">By ticking “Remember Me” on PixxelU’s website you agree we may place this type of cookie on your device.</p>
                        <p className="hdng-p">Targeting or advertising cookies: These cookies are used to deliver adverts more relevant to you and your interests. The <NavLink to="https://pixxelu.com/">pixxelu.com</NavLink> website does not carry advertising, so this type of cookie is not used here. If you provide PixxelU with user information, you have the following rights with respect to that information:</p>
                        <ul>
                            <li>To review the user information that you have supplied to us</li>
                            <li>To request that we correct any errors, outdated information, or omissions in user information that you have supplied to us</li>
                            <li>To request that your user information not be used to contact you</li>
                            <li>To request that your user information be removed from any solicitation list that we use</li>
                            <li>To request that your user information be deleted from our records and</li>
                            <li>To opt out of being solicited by this website or third parties</li>
                        </ul>
                        <p className="hdng-p">If you request that your user information be deleted from our records, there may be a brief delay in processing that request, while verifying that the request is valid and originates from you as opposed to an unauthorized third party. If you request that your information be deleted, we reserve the right to terminate and/or limit your access to the <NavLink to="https://pixxelu.com/">pixxelu.com.</NavLink></p>
                        <p className="hdng-p">To exercise any of these rights, please contact us at <NavLink to="mailto:info@pixxelu.com">info@pixxelu.com</NavLink>.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">3rd Party Cookies And Social Networks</h4>
                        <p className="hdng-p">If you click on a hyperlink from <NavLink to="https://pixxelu.com/">pixxelu.com</NavLink> website to any third party websites, share content on a social network, or arrive at <NavLink to="https://pixxelu.com/">pixxelu.com </NavLink>from a social network (e.g. if you ‘share’ content with or arrive from LinkedIn or Twitter) you may be sent cookies from these third party websites. Third party websites will have their own privacy and cookie policies which PixxelU cannot control. Please check the third-party websites for more information about their cookies and how to manage them.</p>
                        <p className="hdng-p">This is a list of Cookies used in <NavLink to="https://pixxelu.com/">pixxelu.com:</NavLink></p>
                        <ul>
                            <li>Dnn Cookies</li>
                            <li>Google Analytic</li>
                            <li>Security Of Your Personal</li>
                        </ul>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Information</h4>
                        <p className="hdng-p">INo method of safeguarding information is 100% secure. PixxelUuses a variety of security technologies and procedures to help protect your personal information from unauthorized access, use or disclosure. PixxelU secures the personally identifiable information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use or disclosure. When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Socket Layer (SSL) protocol.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Changes To This Statement</h4>
                        <p className="hdng-p">PixxelU will occasionally update this Statement of Privacy to reflect company and customer feedback. PixxelU encourages you to periodically review this Statement to be informed of how PixxelUis protecting your information. When such a change is made, we will update the “Last Updated” date above.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Disclaimer</h4>
                        <p className="hdng-p">All Trademarks, Product Names, Brands, Photos, and Logos featured, referred to, or displayed on this website are the copyrighted property of their respective trademark holders, and are used for reference only.</p>
                        <p className="hdng-p">Pixxelu Digital Technologies is not affiliated with or endorsed by these trademark and copyright holders.</p>
                        <p className="hdng-p">All trademarks remain property of their respective holders. Their use in no way indicates any relationship between PixxelU and the holders of said trademarks.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Contact Information</h4>
                        <p className="hdng-p">PixxelU welcomes your comments regarding this Statement of Privacy. If you believe that PixxelU has not adhered to this Statement, please contact PixxelU at <NavLink to="mailto:info@pixxelu.com">info@pixxelu.com</NavLink>. We will use commercially reasonable efforts to promptly determine and remedy the problem.</p>
                        <p className="hdng-p">You can write to us at:</p>
                        <p className="hdng-p"><b>PixxelU Digital Technologies:</b> 2nd Floor, 256 Kachahri adda Dharamshala (H.P) 176215 INDIA</p>
                    </div>

                </div>

            </section>


            {/* --- Privacy Content --- */}


        </div>

    )
}

export default PrivacyPolicy