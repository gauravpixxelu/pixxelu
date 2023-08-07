import React from 'react';
import Quote from '../assets/icons/quote.svg';
import YellowStars from '../assets/icons/star-yellow.svg';


const ReviewScroll = () => {

    return (

        <div className="review-scroll">
            <div className="review-box">
                <img src={Quote} alt="Quote" className="quote"/>
                <p className="hdng-p">Pixxelu gave value to my business website. I highly recommend Pixxelu as a web development company that is professional, talented, and competent.</p>
                <img src={YellowStars} alt="YellowStars" />
                <h6>Jean M J</h6>
            </div>

            <div className="review-box">
                <img src={Quote} alt="Quote" className="quote"/>
                <p className="hdng-p">I had a plain boring website until I got it redesigned from Pixxelu. The team of designers and developers at Pixxelu is truly professional and certainly cares about its clients’ needs. Highly recommended!</p>
                <img src={YellowStars} alt="YellowStars" />
                <h6>Adrian E</h6>
            </div>

            <div className="review-box">
                <img src={Quote} alt="Quote" className="quote"/>
                <p className="hdng-p">I couldn’t be any happier with my website. Pixxelu has been pleased with its services and customer support. I highly recommend the developers of Pixxelu and will surely hire them again in the future.</p>
                <img src={YellowStars} alt="YellowStars" />
                <h6>Przemyslaw T</h6>
            </div>

            <div className="review-box">
                <img src={Quote} alt="Quote" className="quote"/>
                <p className="hdng-p">Can't speak highly enough of Rakesh and his team at Pixxelu. Assisted me to understand what exactly I needed. The web application they developed is everything I needed. Thanks a ton guys, keep up the good work!</p>
                <img src={YellowStars} alt="YellowStars" />
                <h6>Florian Y</h6>
            </div>

            <div className="review-box">
                <img src={Quote} alt="Quote" className="quote"/>
                <p className="hdng-p">I am very glad that we have a very strong and excellent working partnership with Pixxelu as their guidance and IT skills made our business grow 100 times faster and better from where it used to be . Thank you PIXXELU.</p>
                <img src={YellowStars} alt="YellowStars" />
                <h6>Nathan Gilbert</h6>
            </div>

            <div className="review-box">
                <img src={Quote} alt="Quote" className="quote"/>
                <p className="hdng-p">I am here to say I had the best experience with Pixxelu. It was most pleasant for me to work with the Pixxelu team. I am very satisfied with the website that they created for my shop. They helped me a lot.</p>
                <img src={YellowStars} alt="YellowStars" />
                <h6>Sherin Sebastian</h6>
            </div>
        </div>


    )
}

export default ReviewScroll