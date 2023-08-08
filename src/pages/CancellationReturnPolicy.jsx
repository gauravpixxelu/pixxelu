import React, { useEffect } from 'react';

function CancellationReturnPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'cancellation-page'}>

            {/* --- Cancellation Banner --- */}

            <section className="privacy-banner">
                <div className="container">
                    <h2 className="hdng-h2">Cancellation And Return Policy</h2>
                </div>
            </section>

            {/* --- Cancellation Banner --- */}


            {/* --- Cancellation Content --- */}

            <section className="privacy-content">
                <div className="container">
                    <div className="privacy-box">
                        <p className="hdng-p">Both the parties reserve the right to cancel the project at any stage.</p>
                        <p className="hdng-p">In case the Project is canceled by the Client, the payments made for the project can be refunded to the Client after deducting the upfront payment amount received for Initiation of the project and the other payments received against the milestones completed.</p>
                        <p className="hdng-p">In case the Project or any specific milestone work is canceled by PixxelU , the payments made for the project/milestone can be refunded after deducting USD 15 per hour for the Billable Hours spent on the work performed for the Client including but not limited to the time spent on project discussion, requirements gathering, project planning & documentation, project initiation and execution. After the payments are settled between the two parties – PixxelU must transfer to the Client – all the documents, designs and scripts produced for the Project/milestone are cancelled.</p>
                        <p className="hdng-p">The Client owns the rights to use only the paid for work/milestones.</p>
                        <p className="hdng-p">30 days money back guarantee: PixxelU offers “30-Days Money-Back Guarantee” to ensure customer satisfaction and mutual trust. If for any reason the Client wishes to discontinue using the Product, within a month of the purchase, PixxelU will issue a refund within 24-48 hours after deducting 4% payment gateway transaction fee and USD 18/hour for the Billable Hours spent on the Project.</p>                    </div>
                </div>
            </section>

            {/* --- Cancellation Content --- */}


        </div>

    )
}

export default CancellationReturnPolicy