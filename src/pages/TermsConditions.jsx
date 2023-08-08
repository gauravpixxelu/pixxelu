import React, { useEffect } from 'react';

function TermsConditions() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'terms-conditions-page'}>

            {/* --- TermsConditions Banner --- */}

            <section className="privacy-banner">
                <div className="container">
                    <h2 className="hdng-h2">Terms & Conditions</h2>
                </div>
            </section>

            {/* --- TermsConditions Banner --- */}


            {/* --- TermsConditions Content --- */}

            <section className="privacy-content">
                <div className="container">
                    <div className="privacy-box">
                        <h4 className="hdng-h4">1. Contract</h4>
                        <p className="hdng-p">PixxelU is in the business of providing Consultancy and allied Services on Computer based Information Technology, to its clientele, including any affiliates, subsidiaries, divisions of PixxelU’s clients and customers (hereinafter referred to as “PixxelU Customers”) and PixxelU is in the business of producing Softwares, Designs, Software Planning Documents/Diagrams and Creative works for its Customers – whether copyrightable/patentable or not (hereinafter referred to as “Product” or “Products”).</p>
                        <p className="hdng-p">Client (………………………………………………………………………….. through its authorized representative ………….…………………………………………………..) has contacted PixxelU for purchasing PixxelU services/products.</p>
                        <p className="hdng-p">Now THEREFORE, in consideration of mutual promises, covenants and conditions set forth herein, the parties hereto agree to the terms mentioned in this agreement/proposal.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">2. Acceptance Of The Terms And Conditions</h4>
                        <p className="hdng-p">The client’s approval for work to commence must be deemed a contractual agreement between the Client and PixxelU . The acceptance of terms and conditions can be through.</p>
                        <ul>
                            <li>either an email confirming back the quote (with the quote document attached), or</li>
                            <li>the quote document signed by the client, or</li>
                            <li>the Client has given his/her approval to commence the work, or</li>
                            <li>the Client has made the Payment of the advance which indicates that the Client accepts these terms and conditions and approves to commence the work.</li>
                        </ul>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">3. Definitions</h4>
                        <h5 className="hdng-h5">Agile Engagement Model</h5>
                        <p className="hdng-p">The Client is billed based on the Time and Material basis as the complete Project SOW has not been pre-agreed and project requirements/milestones/deliverables are to be mutually agreed between the parties. Unless agreed to in a separate SOW agreement, the Penalty Clause and Free Tech Support related terms are not applicable on PixxelU for customization work.</p>
                        <h5 className="hdng-h5">Assumptions</h5>
                        <p className="hdng-p">In the absence of clearly defined requirements or technical constraints which may affect the User Experience or Functionality of the solution being discussed in the project, some general assumptions are noted, on the basis of which PixxelU proposes a solution and/or Estimates and/or Quotations. Any deviations from assumptions may impact the SOW, hence the project timelines and pricing must also be revised accordingly.</p>
                        <h5 className="hdng-h5">Authorized Representative Of The Client” Or “Authorized</h5>
                        <p className="hdng-p">Person authorized to complete any and/or all legal formalities on behalf of the client. PixxelU believes that the authorized person representing the Client has procured all the legal authorizations from the client for negotiating the terms</p>
                        <h5 className="hdng-h5">Client Representative</h5>
                        <p className="hdng-p">and signing the agreements/documents/sign off documents as may be required time to time.</p>
                        <h5 className="hdng-h5">Authorized Representative Of Pixxelu” Or “Authorized Pixxelu Representative</h5>
                        <p className="hdng-p">Person authorized to complete any and/or all legal formalities on behalf of PixxelU . Client believes that the authorized person representing PixxelU has procured all the legal authorizations from PixxelU for negotiating the terms and signing the agreements/documents/sign off documents as may be required time to time.</p>
                        <h5 className="hdng-h5">Billable Hours Hours Spent For</h5>
                        <ul>
                            <li>Communication with the Client or the Client Representatives, or any 3rd party on behalf of the Client</li>
                            <li>Coordination with any 3rd Party for execution or delivery of this project</li>
                            <li>Requirements Analysis</li>
                            <li>Planning, Documentation, Designing, Development, Testing, Quality Assurance, Implementation etc. related to the execution or delivery of this project</li>
                            <li>Resolving UAT issues or errors reported by the Client or any person/entity appointed by the Client</li>
                            <li>Optimization of the scripts, software, design, User Experience etc. as per the client requirements</li>
                            <li>Tech Support and General Support *Free Tech/General Support is not available for this project as PixxelU is being hired on Time and Material basis (“Agile Engagement Model”).</li>
                            <li>All other hours as may be required to be spent for execution and delivery of the project and providing the support.</li>
                        </ul>
                        <h5 className="hdng-h5">Billing Rate</h5>
                        <ul>
                            <li>USD 25 per hour for work done under the “Work Made For Hire” arrangement.</li>
                            <li>USD 18 per hour for work done under Non Exclusive License arrangement.</li>
                            <li>Billing rates will be mutually negotiated in case the client wants to restrict PixxelU from displaying the client’s business name website in PixxelU’s portfolio and/or the marketing material.</li>
                        </ul>
                        <h5 className="hdng-h5">Client</h5>
                        <p className="hdng-p">The client who is engaging PixxelU for purchasing its products or engaging PixxelU for its services. Client includes the owner of the client business, directors, authorized representative(s) and Client Team.</p>
                        <h5 className="hdng-h5">Client Content</h5>
                        <p className="hdng-p">Logos, Information, textual content, graphics, images, documents, artwork, products data, services info etc provided by the client to PixxelU in relation to the services being sourced from PixxelU.</p>
                        <h5 className="hdng-h5">Client Info</h5>
                        <p className="hdng-p">Business Name, Trade Name, Logo, Business Info, Services Details, Contact Details (email ID, phone numbers, business address etc), website details (website URL, Staging Site URL, Demo Site URL, publishing date/year etc)</p>
                        <h5 className="hdng-h5">Client Review” Or “Client Uat</h5>
                        <p className="hdng-p">Review of the project work <strong>‘Ready for Client Review’</strong> by the Client Team.</p>
                        <h5 className="hdng-h5">Client Team</h5>
                        <p className="hdng-p">The client or any individual or a group of individuals appointed by the client for communicating with the client in relation to the project e.g. discussing and finalizing the Scope of Work, reviewing the work being performed, reviewing the progress reports, sharing feedback on the work submitted for client review.</p>
                        <h5 className="hdng-h5">Completion” Or “Project Completion</h5>
                        <p className="hdng-p">Means the project has been duly completed in all respects and the client has no objections in terms of quantity, scope of work, quality, timelines etc, which must not be disputed at any later date. No penalties can be claimed or imposed by the Client after Project Completion.</p>
                        <h5 className="hdng-h5">Cancellation” Or “Project Cancellation</h5>
                        <p className="hdng-p">Both the parties must abide by all the terms/obligations/assurances/responsibilities agreed to in this agreement other than those explicitly relieved from due to the project cancellation. Both the parties shall remain liable for respecting and maintaining the copyrights, IP rights, confidential information owned by the parties and the mutual non-solicitation agreement after the project cancellation.</p>
                        <h5 className="hdng-h5">Delivery Date</h5>
                        <p className="hdng-p">The date by which the project must be delivered to the client; this date must stand automatically extended by the number of days which client takes in providing the content and Project Credentials as may be required to complete the project or to deliver the project or to publish the work done on the client’s staging server or production server or the app stores.</p>
                        <h5 className="hdng-h5">Estimates</h5>
                        <p className="hdng-p">Informal estimates for the SOW being discussed.</p>
                        <h5 className="hdng-h5">Exclusive Rights</h5>
                        <p className="hdng-p">The Client owns perpetual exclusive worldwide license to use the project/product on a single/multiple domain name, and the Client owns rights to modify and enhance the project files as may be required to run his/her business in general. However, the Client is not allowed to reverse engineer any part of the solution which is delivered in compiled or encrypted format nor the Client is allowed to infringe the copyrights and IP rights owned by PixxelU .</p>
                        <h5 className="hdng-h5">Pixxelu Services</h5>
                        <p className="hdng-p">Services provided by PixxelU , e.g. Business Consultancy, Software Development, Web and Mobile Applications Design and Development, Marketing, Backend Support, Staffing etc.</p>
                        <h5 className="hdng-h5">Pixxelu Products</h5>
                        <p className="hdng-p">Ready off the shelf solutions like YoKart, Growcer, YoCoach, YoRent, VivoCabs, VivoGigs, YoYumm etc.</p>
                        <h5 className="hdng-h5">Project</h5>
                        <p className="hdng-p">The scope of work and deliverables covered within this agreement for which PixxelU is being engaged.</p>
                        <h5 className="hdng-h5">Project Info</h5>
                        <p className="hdng-p">Project Overview, business challenges being faced, solutions provided/developed to solve the business challenges, SDLC process followed, technologies used for the project.</p>
                        <h5 className="hdng-h5">Project Credentials</h5>
                        <p className="hdng-p">Production Server Credentials, App Store Credentials, Login Info, Authorizations, Permissions, Directions, Collaboration, Introductions etc as may be required to Deliver the work to the Client, or to Publish on the Production Server or App Stores.</p>
                        <h5 className="hdng-h5">Project Delivery</h5>
                        <p className="hdng-p">Delivery of the agreed project deliverables to the Client via electronic medium or via publishing the work performed over to the Staging Server or Production Server as may be instructed by the client.</p>
                        <h5 className="hdng-h5">Project Info</h5>
                        <p className="hdng-p">Project Overview, business challenges being faced, solutions provided/developed to solve the business challenges, SDLC process followed, technologies used for the project.</p>
                        <h5 className="hdng-h5">Production Site</h5>
                        <p className="hdng-p">URL where the work done must be transferred and is accessible to the target audience.</p>
                        <h5 className="hdng-h5">Project Price” Or “Project Value” Or “Project Quotation</h5>
                        <p className="hdng-p">The amount payable to PixxelU after all the Taxes Deductible or any amounts to be withheld by the Client.</p>
                        <h5 className="hdng-h5">Production Server</h5>
                        <p className="hdng-p">Server where Production Site is hosted. It’s generally owned and managed by the Client unless Client has engaged PixxelU to manage the production server as well.</p>
                        <h5 className="hdng-h5">Ready For Client Review</h5>
                        <p className="hdng-p">Delivery/transfer of the work performed on staging or production server where client or the client team can review the work performed on the project.</p>
                        <h5 className="hdng-h5">Quotation</h5>
                        <p className="hdng-p">Formal estimates for the final SOW agreed.</p>
                        <h5 className="hdng-h5">Sign Off</h5>
                        <p className="hdng-p">Acceptance of the deliverables by the client whereby client accepts the deliverables completed and received in all terms be it quantity, scope of work, quality, timelines etc, which must not be disputed at any later date.</p>
                        <h5 className="hdng-h5">Single Domain Non-exclusive License (Sdnel)</h5>
                        <p className="hdng-p">License which grants a perpetual non-exclusive worldwide license to use the copy of the project/product on a single domain name, this license grants you rights to modify and enhance the project files as may be required to run your business in general. However, the Client is not allowed to reverse engineer any part of the solution which is delivered in compiled or encrypted format nor the Client is allowed to infringe the copyrights and IP rights owned by PixxelU .</p>
                        <h5 className="hdng-h5">Sow (Scope Of Work)</h5>
                        <p className="hdng-p">Scope of work to be delivered as per this agreement. It may contain one or more of the following:</p>
                        <ul>
                            <li>boundaries and assumptions for completion of the project</li>
                            <li>list of services to be delivered</li>
                            <li>list of solutions/products/hardware to be delivered</li>
                            <li>after sale services</li>
                        </ul>
                        <p className="hdng-p">Any deviations from the assumptions, and any service or solution or product not specifically listed in the SOW must be termed as OUT OF SCOPE, hence separately billable under an additional SOW, which shall be governed by these terms and conditions.</p>
                        <h5 className="hdng-h5">Staging Server</h5>
                        <p className="hdng-p">Server where Staging Site is hosted. It’s generally provided by PixxelU unless the Client wants PixxelU to upload the Work In Progress and UAT copy on a server which is owned by the Client.</p>
                        <h5 className="hdng-h5">Staging Site</h5>
                        <p className="hdng-p">Temporary URL(s) where PixxelU uploads the work in progress until the client requests PixxelU to transfer the files to the Client through online medium or any other mutually agreed medium. There can be multiple Staging Sites for different teams working on the project, for example, Design Team, Development Team, QC Team, UAT Team etc.</p>
                        <h5 className="hdng-h5">Taxes Deductible</h5>
                        <p className="hdng-p">The taxes or deductions or any amount to be withheld by the Client as per the Tax Laws or any other applicable law in the respective country of the Client or the country from where the payments are being made.</p>
                        <h5 className="hdng-h5">Timelines</h5>
                        <p className="hdng-p">Unless defined and agreed otherwise, timelines being shared along with the proposal are for Project Completion Stage 1. Please refer to the clause #10A for more details.</p>
                        <h5 className="hdng-h5">Third Parties” Or “3Rd Parties</h5>
                        <p className="hdng-p">Any (individual or company or entity) who is not directly a party to this agreement but the execution of the Project is dependent on the timely performance and cooperation of this (individual or company or entity). Examples:</p>
                        <ul>
                            <li>Hosting Provider</li>
                            <li>Domain Provider</li>
                            <li>Mail Service Provider</li>
                            <li>Payment Gateways</li>
                            <li>Any other aggregator or service provider whose application is to be integrated with the Project</li>
                            <li>Any other 3rd Party API or Software or Plugin integration</li>
                            <li>3rd Party Quality Assurance Provider, if any engaged</li>
                            <li>3rd Party Auditors, if any engaged</li>
                            <li>3rd Party Service Provider, if any engaged</li>
                            <li>Any other 3rd Party whose participation is required in the completion of the project</li>
                        </ul>
                        <h5 className="hdng-h5">Uat Findings</h5>
                        <p className="hdng-p">The collection of documents, files, images, screenshots and screen recordings shared by the Client which contains the bugs, errors, objections and deficiencies found by the Client based on the gaps between the scope of work agreed and the project or milestone work submitted for the Client UAT. Should be shared in one go within 15 calendar days starting from the Project Completion or Project Delivery Date, whichever happens first.</p>
                        <h5 className="hdng-h5">Work Made For Hire</h5>
                        <p className="hdng-p">The engagement model wherein the copyright and IP rights over the Exclusive Rights work performed by PixxelU (the service provider) are owned by the Client. Deliverables must clearly define the items which are to be performed under “Work Made For Hire” engagement model. PixxelU must not resell the material produced under this model.</p>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">4. Usage Of Pixxelu Services / Products / Solutions</h4>
                        <p className="hdng-p">The Client agrees not to use the PixxelU services/products delivered for any business which is harmful to the society or children or is illegal. Further the Client is fully responsible for all and any content published/distributed or allowed to be published/ distributed through the Client’s website whether hosted on servers owned/maintained by PixxelU or by the Client himself. Client must execute best possible precautionary and security measures to restrict any illegitimate use of the services/solutions procured from PixxelU .</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">5. Quotations</h4>
                        <p className="hdng-p">The Client agrees not to use the PixxelU services/products delivered for any business which is harmful to the society or children or is illegal. Further the Client is fully responsible for all and any content published/distributed or allowed to be published/ distributed through the Client’s website whether hosted on servers owned/maintained by PixxelU or by the Client himself. Client must execute best possible precautionary and security measures to restrict any illegitimate use of the services/solutions procured from PixxelU .</p>
                    </div>
                    <div className="privacy-box">
                        <h4 className="hdng-h4">6. Time Estimates</h4>
                        <p className="hdng-p">The Client agrees that stipulated timelines cannot be met if the project scope is changed by the client once the project scope document is finalized. The Client agrees not to change the requirements without extending the original agreed timelines by minimum 1 week against each change request.</p>
                    </div>
                    <div className="privacy-box">
                        <h4 className="hdng-h4">7. Share In Profits From Business Or Sale Of Business</h4>
                        <p className="hdng-p">After the client makes the agreed payments for the project and all additional works if any ordered, PixxelU will not claim any share in client’s profits from business or from sale of business to some other company.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">8. Examples Of Work</h4>
                        <p className="hdng-p">PixxelU retains the right to list/display the Client Info and the Project Info in its respective portfolios and promotion materials. This overrides all previous agreements and NDAs signed. Client agrees to it and authorizes PixxelU for the same.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">9. Dependencies On 3rd Parties</h4>
                        <p className="hdng-p">No penalties can be invoked if the project completion and/or delivery is delayed due to the dependencies on 3rd parties. The Client must make all required arrangements and coordinate with the third parties to compel them to finish their part of the job/commitments timely with acceptable level of quality.</p>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">10A. Project Completion – Stage 1</h4>
                        <p className="hdng-p">The Project or the part of the project must be marked as completed in any of the following cases:</p>
                        <ul>
                            <li>The work done has been submitted to the Client for the Final Client UAT. UAT findings must be reviewed by PixxelU vis-a-vis the agreed scope of work and worked on accordingly.</li>
                            <li>The Client or the Authorized Client Representative or the Client Team has not shared the UAT findings for 15 calendar days after the project or part thereof was submitted for the <strong>Client Review/Client UAT.</strong></li>
                            <li>The project has been marked accepted or delivered. Please refer to 10B and 10C.</li>
                        </ul>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">10B. Project Acceptance – Stage 2</h4>
                        <p className="hdng-p">The Project or the part of the project must be marked as accepted in any of the following cases:</p>
                        <ul>
                            <li>The Client or the Authorized Client Representative has shared the acceptance of the project or part thereof in writing.</li>
                            <li>The Client or the Authorized Client Representative or the Client Team has not shared the UAT findings for 15 calendar days after the project or part thereof was submitted for the Client <strong>Review/Client UAT.</strong></li>
                            <li>TPrevious milestone/phase or the work submitted for Client Review/Client UAT must be deemed accepted by the Client if PixxelU has been given go ahead to execute the next milestone/phase work.</li>
                            <li>When the Client is ordering any new work/change requests/additional requirements then the client accepts that the previous work has been delivered within the acceptable timelines and the Client must not claim any penalties for the delay.</li>
                        </ul>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">10C. Project Delivery – Stage 3</h4>
                        <p className="hdng-p">The project must be marked as delivered in any of the following cases:</p>
                        <ul>
                            <li>The Project Files have been delivered to the client via online transfer or the Project Files have been uploaded on a specific location/destination/server provided by the Client.</li>
                            <li>The Project Files and/or the Apps have been moved/published on a specific server/app store as instructed by the Client.</li>
                            <li>The Client or the Authorized Client Representative has shared a Sign Off Letter/Document or any other document which is equivalent to the Sign Off wherein the deliverables have been accepted as duly completed in all respects.</li>
                        </ul>
                    </div>



                    <div className="privacy-box">
                        <h4 className="hdng-h4">11A. Free Technical Support</h4>
                        <p className="hdng-p">Free Tech Support Starts From The Date Of Project Delivery And It Is Not Applicable Where Pixxelu Team Has Been Hired To Work As Per “Agile Engagement Model” (Where Complete Project Sow Has Not Been Pre-agreed). Free Technical Support Must Be Provided As Per The Following Terms Agreed.</p>

                        <p className="hdng-p"><strong>a. Pixxelu Provides Upto 1 Year Free Technical Support For Following Kind Of Issues Only:</strong></p>
                        <ul>
                            <li>Scripting/programming errors/bugs.</li>
                            <li>Logical Bugs/Calculation related errors/bugs</li>
                            <li>Connection errors/API Integration Errors</li>
                        </ul>
                        <p className="hdng-p"><strong>b. Above Support Is Not Available If The Errors/Bugs Arise Due To Any External Entity Or Third Party. Examples:</strong></p>
                        <ul>
                            <li>Server or software or application or extension downgrades or upgrades</li>
                            <li>Edits done in the code/scripts delivered by any external entity/person/professional</li>
                            <li>Operating System or Browser Version Downgrades/Upgrades</li>
                            <li>Any other factor which is not directly related to any deficiency at the end of PixxelU</li>
                        </ul>
                        <p className="hdng-p"><strong>c. Above Support Is Not Available For Following Kind Of Instances, Unless Otherwise Specifically Covered In The Scope Of Work And/Or Deliverables:</strong></p>
                        <ul>
                            <li>Training for using the software/solutions delivered</li>
                            <li>General enquiries/questions related to any particular features of the software/solution delivered</li>
                            <li>Cosmetic updates and/or UI/UX updates</li>
                            <li>Enhancements or modifications in the default features/functional logics of the software/solutions delivered.</li>
                        </ul>
                    </div>



                    <div className="privacy-box">
                        <h4 className="hdng-h4">11B. Site Maintenance</h4>
                        <p className="hdng-p">After The Project Has Been Published On The Client’s Server, Unless Otherwise Agreed In Writing- Following Services Will Be Separately Billed:</p>
                        <ul>
                            <li>Content updates</li>
                            <li>Refinements and logical tweaks to the website, which were not planned/approved by the client earlier.</li>
                            <li>Content presentation and design updates that were not planned/approved by the client earlier.</li>
                        </ul>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">12.Photography And Graphics</h4>
                        <p className="hdng-p">Both The Parties Agree To Abide By The Following Terms:</p>
                        <ul>
                            <li>Unless otherwise agreed – Stock Images used for creating any banner or promotion graphic or animation are not part of the project deliverables, Client must purchase the license to use the stock images from respective 3rd parties at his/her own cost.</li>
                            <li>PixxelU may use stock photographs and images while creating the website. Images and graphics purchased from stock libraries are not generally included in the quote and will be invoiced separately.</li>
                            <li>At request of the Client – PixxelU will keep the client updated about the stock images being used and the cost involved before raising the invoice.</li>
                            <li>Images used by PixxelU for product demos must not be used by the client unless the client has purchased the usage rights for those images. Client must be fully responsible for violation of any 3rd party copyright.</li>
                            <li>Images delivered by PixxelU along with a bundled software/solution/script are for Demo Purpose only and must not be used for commercial purpose. Client should contact PixxelU for more information about the price of those images if the Client wishes to use those images for commercial purpose OR Client should replace the default images with the images owned by the Client.</li>
                        </ul>
                    </div>



                    <div className="privacy-box">
                        <h4 className="hdng-h4">13.Browser Compatibility</h4>
                        <p className="hdng-p">Pixxelu Makes Every Effort To Design Pages That Work Flawlessly On Most Popular Current Browsers I.E. The Latest Version Of Edge/Firefox/Chrome Released On The Date Of Project Agreement. However, Pixxelu Cannot Be Held Responsible For Pages That Do Not Display Acceptably In Newer Versions Of Browsers Released After Pages Have Been Designed. Internet Explorer Is An Outdated Browser And Hence Pixxelu Does Not Design For Ie Users. Pixxelu Recommends Using The Latest Version Of Chrome Or Firefox Instead Of Older Versions Of Microsoft Internet Explorer. Pixxelu Can Work On Improving Ui/Ux For Older Versions Of Internet Explorer For An Additional Charge.</p>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">14. Search Engine Submission</h4>
                        <p className="hdng-p">Following services are not part of the project unless agreed otherwise in writing:</p>
                        <ul>
                            <li>Submission of websites on different search engines.</li>
                            <li>Securing good ranking of your website on different search engines</li>
                            <li>Search Engine Optimization – On Page/Off Page.</li>
                        </ul>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">15. Content Publishing And Responsibilities</h4>
                        <p className="hdng-p">After PixxelU has delivered the project to the client, the Client is solely responsible for the content/information/images posted on his website or application delivered. If there is any error or omission by the PixxelU team while uploading/posting the content/information/images on the Client’s website, PixxelU will correct it if reported to the PixxelU or PixxelU representatives or allocated Point of Contact.</p>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">16. Client Content – Ownership And Responsibilities</h4>
                        <p className="hdng-p">The Client Content, including any end-user data generated by Client’s product, and material supplied by the Client, must remain the Client’s property. PixxelU rightfully believes that this material belongs to the Client and that it does not breach any copyright laws. Under no circumstances shall PixxelU be held responsible for any claims, damages, and loss of profit or reputation caused to the Client due to the use of material provided by the Client.</p>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">17. Domain Names</h4>
                        <p className="hdng-p">Domain names booked by PixxelU on behalf of the <strong>Client</strong>:</p>
                        <ul>
                            <li>PixxelU provides domain name consultancy if required. Domain names registered by PixxelU on the <strong>Client’s</strong> behalf are property of PixxelU until the <strong>Client</strong> has paid for the domain booked and any fee involved.</li>
                            <li>PixxelU agrees to transfer such domains to the <strong>Client</strong> or his/her agent when asked to do so provided that all accounts have been settled.</li>
                        </ul>
                        <p className="hdng-p">Domains booked and owned by the <strong>Client</strong> are not subject to this term. Clause #17 applies only to those domains that are booked by PixxelU upon the request of the<strong> Client</strong>.</p>
                    </div>





                    <div className="privacy-box">
                        <h4 className="hdng-h4">18. Travel Time And Expenses</h4>
                        <p className="hdng-p">Travelling time to and from the client premises is not generally included in our estimate. If a visit/travel is required for a meeting, the client will bear all the expenses or as agreed by both the parties.</p>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">19. 3rd Party Add-ons/services/applications</h4>
                        <p className="hdng-p">All third-party costs arising from the registration of a domain name/purchase of third-party utilities/services must be met by the Client and are payable to PixxelU Technologies or 3rd party directly before a formal application for registration is made. Examples of 3rd party fees are as under:</p>
                        <ul>
                            <li>Domain Names</li>
                            <li>Server Space Hosting Fees</li>
                            <li>SSL Certificates</li>
                            <li>Backup Services</li>
                            <li>3rd Party APIs, if any, required by ‘Client’ to be integrated with the work ordered.</li>
                            <li>3rd Party Plugins/Scripts/Applications/Software/Widgets/Services, if any, required by ‘Client’ to be integrated with the work ordered.</li>
                            <li>Payment Gateways Signup and Recurring Fees</li>
                        </ul>
                    </div>



                    <div className="privacy-box">
                        <h4 className="hdng-h4">20. Mode Of Payments Accepted By Pixxelu</h4>
                        <ul>
                            <li>Clients Based Outside India: International Wire Transfers, Credit Card/PayPal via 2Checkout payment gateway.</li>
                            <li>Clients Based in India: NEFT, RTGS or Physical Cheques mailed to our office address.</li>
                            <li>Payments for packages/services other than covered under Startup Package and GoQuick Packages should be made via Wire Transfer only.</li>
                        </ul>
                    </div>



                    <div className="privacy-box">
                        <h4 className="hdng-h4">21. Payment Terms</h4>
                        <ul>
                            <li>Payment plan is agreed between the <strong>Client</strong> and PixxelU based on the milestones.</li>
                            <li>Payment must be due within <strong>14 days </strong>of the invoice date unless the due date is specifically mentioned in the Invoice</li>
                            <li>Full publication of the website/technical work will only take place after full payment has been received in our account unless otherwise agreed in writing.</li>
                            <li>Any material previously published may be removed if payment is not received within the due date. When this occurs, a minimum charge of $250 USD will be charged to have the site restored.</li>
                            <li>Accounts that have not been settled within the due date will incur a late payment charge of $100 USD or 1% of the Invoiced Amount (whichever is higher), for each week delayed.</li>
                            <li>In case of delay in payments beyond the due date, PixxelU reserves the right to stop the work being commenced and the Client agrees to exempt PixxelU from meeting the timelines agreed.</li>
                            <li>The Client agrees that if any payment is delayed beyond 60 days, the Client will remove all unpaid items and its copies from production, staging and public environment and shall not use the unpaid items/work for any commercial or non-commercial purpose.</li>
                        </ul>
                    </div>



                    <div className="privacy-box">
                        <h4 className="hdng-h4">22. Cancellation</h4>
                        <p className="hdng-p">Both the parties reserve the right to cancel the project at any stage.</p>
                        <ul>
                            <li>In case the <strong>Project</strong> is canceled by the Client, the payments made for the project can be refunded to the <strong>Client</strong> after deducting the upfront payment amount received for Initiation of the project and the other payments received against the milestones completed.</li>
                            <li>In case the <strong>Project or any specific milestone work</strong> is canceled by PixxelU , the payments made for the project/milestone can be refunded after deducting USD 15 per hour for the <strong>Billable Hours</strong> spent on the work performed for the <strong>Client</strong> including but not limited to the time spent on project discussion, requirements gathering, project planning &amp; documentation, project initiation and execution. After the payments are settled between the two parties – PixxelU must transfer to the <strong>Client</strong> – all the documents, designs and scripts produced for the Project/milestone are cancelled.</li>
                            <li>The Client owns the rights to use only the paid for work/milestones.</li>
                            <li>30 days money back guarantee: PixxelU offers “30-Days Money-Back Guarantee” to ensure customer satisfaction and mutual trust. If for any reason the Client wishes to discontinue using the Product, within a month of the purchase, PixxelU will issue a refund within 24-48 hours after deducting 4% payment gateway transaction fee and USD 18/hour for the Billable Hours spent on the Project.</li>
                        </ul>
                        <p className="hdng-p">(This guarantee is specifically for GoQuick/Start-Up Package orders for our ready solutions. *Start-Up package is available only for Yo!Kart). After project/order cancellation/refund issued, PixxelU reserves all rights to take down the website and/or apps published/delivered on the Client’s provided server and/or the apps store accounts. Client is responsible to keep a backup of the data published on the website/server, PixxelU must not be held responsible for any data/files lost.</p>
                    </div>



                    <div className="privacy-box">
                        <h4 className="hdng-h4">23A. Penalty Clause</h4>
                        <p className="hdng-p">Penalties applicable on PixxelU : PixxelU agrees to complete the Milestone(s) as per the SOW agreed to, within the agreed timeline. If there is a delay in completion of the Milestone, PixxelU agrees to the penalty of 1% of the Milestone price for each week delayed. OR If the PixxelU delays the Milestone(s) completion by more than 8 weeks, then the Client can request for cancellation of the project and seek the full refund for the currently in progress milestone(s) work, however, the refund amount must not exceed the originally agreed price of the Canceled Milestone(s) SOW.</p>
                        <p className="hdng-p"><strong>Note: The Client can claim either the penalty or the refund.</strong></p>
                        <ul>
                            <li>IPenalties for delay must be applicable only on the currently in progress milestone work; if the Client has made a payment for a milestone the respective milestone and all previous milestones must be marked as completed and should be out of the penalty clause</li>
                            <li>Penalty – Delay Period should exclude the calendar days between the date when the project/work was submitted to the client for the Client UAT and the date when the Client submits the UAT Findings.</li>
                            <li>Penalty Amount/Refund applicable must be adjusted against/out of the pending amount owed by the client towards PixxelU and any remaining amount must be refunded to the client via wire transfer or PayPal or any other mode of payment as per mutual agreement.</li>
                            <li>Once the refund has been issued, the Project or the canceled portion/milestone must be marked canceled and PixxelU must be relieved from all liabilities towards the Client and the Client must not make any claims, objections, demands from PixxelU for any loss or damages incurred at his/her end due to the delay. PixxelU must own all rights on the canceled project and/or the canceled portion/milestone including designs, scripts, documents, other outputs and elements created for the canceled work and the Client must not use any of the work, scripts, designs, documents already delivered but canceled. The Client must be liable to pay full price of the canceled work in case the Client uses or copies any piece of the including design, script, elements and documents produced by PixxelU for the Project.</li>
                        </ul>
                        <p className="hdng-p"><strong>Responsibilities applicable on Client:</strong> Client should provide all comments, feedbacks, suggestions about the project scope during the Detailed Project Scope Documentation phase; subsequently any changes or modifications or enhancements done to the project scope would be additionally chargeable with or without delivery timelines revision. And if there are changes which are accepted by PixxelU without additional charge, the timeline should extend by the number of days required to implement those additional non-billable items.</p>
                        <ul>
                            <li>Client should make payments as per the agreed payment terms, else PixxelU should be exempt from meeting the timelines agreed to, and will not be liable to any kind of penalties for the delay in delivery of the project.</li>
                            <li>Client should provide his feedback on the work submitted for their review within 15 calendar days, if there is a delay from client side in providing feedback on the work submitted for their review, PixxelU should be exempt from meeting the timelines agreed to, and will not be liable for any kind of penalties for the delay in delivery of the project. Days taken by the Client in providing the feedback must be added to the agreed timelines related to the project/milestone completion and delivery.</li>
                            <li>If Client changes the functional requirement(s) in the scope of work, Client understands and accepts that additional cost and working days will be added to the project, hence the project delivery timeline will need to be revised.</li>
                        </ul>
                    </div>



                    <div className="privacy-box">
                        <h4 className="hdng-h4">23B. Exceptions To The Penalty Clause</h4>
                        <p className="hdng-p">Following are the Exclusions/Exceptions when the Client is not allowed to invoke any kind of penalties and PixxelU can’t be held responsible for the delays. Any extension of a timeline due to Client’s delay shall be extended by the number of days Client delays providing the necessary details to publish the work done.</p>
                        <p className="hdng-p"><strong>a. In case of Web and Mobile Application Projects:</strong></p>
                        <ul>
                            <li>Change requests have been submitted by the client/client team; project delivery timeline must be deemed extended accordingly</li>
                            <li>Client has not provided the server details and other Project Credentials to publish the work done.</li>
                            <li>Project has been setup/published at the staging server or production server and the Client or the Client Team or the Client Representative(s) is/are reviewing the work done and/or doing the content publishing.</li>
                            <li>As per the terms agreed the Client should review the work done/project being delivered at the Staging Server; the Client is reviewing the work done after the web/mobile apps have been published at the Client’s server and the Client is sharing list of modifications/tweaks/errors required to be worked on.</li>
                        </ul>
                        <p className="hdng-p"><strong>b. In case of Mobile Application Projects:</strong></p>
                        <ul>
                            <li>The Client is taking time in sharing the required Project Credentials for publishing the apps on the app stores.</li>
                            <li>PixxelU has delivered the app to the Client and the Client needs some days/weeks to do the content publishing so that the app does not get rejected by the app stores due to policy implications.</li>
                        </ul>
                        <p className="hdng-p"><strong>c. In case the Client has hired a team with work based on Agile Process without pre-agreed scope of work.</strong></p>
                        <p className="hdng-p"><strong>d. Unless otherwise explicitly agreed as SOW (Scope of work), penalties are not applicable for any delay caused due to requirements/features/design being requested is subjective to the taste, feelings, preferences, opinions, culture, understanding and personality of different users or group of users or stakeholders.</strong></p>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">24. Delayed Response From The Client Side</h4>
                        <p className="hdng-p">Unreasonable delays from the Client side in providing the required feedback/information/data to finish the Project must exempt PixxelU from meeting the timelines mentioned in the Quotation. In case the Client does not provide requested details/data/information for more than 15 working days, the Client authorizes PixxelU to forfeit the payments made towards the Project.</p>
                        <p className="hdng-p">In case, during the project duration, the Client does not maintain communication with PixxelU for more than 15 calendar days, the Client agrees that the Project must be deemed as received and accepted by the Client, and the Client further authorizes PixxelU to mark the project completed and invoice the client for remaining un-invoiced amount as per the total project price agreed. However, the Client can instruct PixxelU to put project on hold provided:</p>
                        <ul>
                            <li>the Client agrees to pay a project resumption fee of USD 1,000 or 25% of the total project price, whichever is higher.</li>
                            <li>‘on-hold’ period does not exceed 2 calendar months.</li>
                            <li>the Client agrees that when the project work is resumed the professionals attached to the project (Project Team Structure) may be different from originally agreed one.</li>
                            <li>the Client agrees to pay this project resumption fee every time a project is being put ‘on-hold’.</li>
                        </ul>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">25. Escalation</h4>
                        <p className="hdng-p">PixxelU ensures you get right assistance to resolve issues in a timely manner. If your concerns are not entertained to your satisfaction, you can escalate critical issues to higher level of management. You may follow the below-mentioned escalation matrix to avoid any delay or discomfort in the event of dissatisfaction.</p>
                        <ul>
                            <li>First Level Escalation: In case of delay in project timelines or unsatisfactory response from your associated Project Manager/Business Analyst, You may escalate your case to Support <a href="https://pixxelu.com/terms-conditions#">(Info@pixxelu.com )</a>and expect a response within the next 2 working days.</li>
                            <li>Final Escalation: If you don’t receive a satisfactory solution from any of the team members following the first level of escalation, or haven’t received a reply within 5 business days after submitting your Feedback/Query/Complaint, you may escalate your case to our Management – Karan (karan@pixxelu.com). Rest assured that immediate action will be taken.</li>
                        </ul>
                    </div>



                    <div className="privacy-box">
                        <h4 className="hdng-h4">26. Copyright/ownership Rights:</h4>
                        <p className="hdng-p">Unless otherwise agreed in writing, PixxelU must retain the copyright and IP rights for all material, including design, artwork and the source code, created for the Client by PixxelU .</p>
                        <p className="hdng-p">However, as per the agreed terms client owns rights on following items:</p>
                        <ul>
                            <li>Client Content</li>
                            <li>Work Made For Hire</li>
                            <li>Work to be delivered with Exclusive Rights</li>
                        </ul>
                        <p className="hdng-p">If the project is being done on Single Domain License basis, Client owns the rights to use the system only on designated domains and the Client should take reasonable care of the system files to restrict unauthorized access of the system scripts/source code delivered.</p>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">27. Ownership Of Code And Intellectual Property Rights</h4>
                        <p className="hdng-p">Unless otherwise agreed, PixxelU is the owner of the source code and the intellectual property rights and reserves the right to reuse the code for other projects. Following terms must be applicable and obliged:</p>
                        <ul>
                            <li>The Client must not create unauthorized copies of any Software/Scripts/Designs/File/Document/Information delivered to the Client by PixxelU ;</li>
                            <li>The Client must not access and/or share and/or transfer any Software/Products/information/document owned by PixxelU unless authorized to do so.</li>
                            <li>The Client must not reverse engineer any software/script/application owned by PixxelU .</li>
                            <li>The Client must not make any Software/Document/File/Information available to any third party in any manner, nor may Client use such works to provide services to any third party unless explicitly agreed otherwise in writing. However, the Client is authorized to make the solution accessible to its target customers, vendors, affiliates, other authorized users of the solution as a web application and/or mobile application.</li>
                            <li>In the event that the Client breaches any of terms specified in this clause, the Client hereby authorizes any court of competent jurisdiction in India or outside India to pass the judgment against the Client for and in the amount of USD 100,000 (USD Dollar One Hundred Thousand) for each default, as provided in the aforementioned paragraphs, together with costs of suit and the cost of attorney incurred by PixxelU for recovery of above compensation/damages from the Client. These damages/compensation allowed must be considered as interim relief to PixxelU and PixxelU must have the liberty to claim higher amount as compensation for the direct/indirect damages and PixxelU may pursue criminal proceedings as well.</li>
                            <li>Notwithstanding anything stated in this agreement, provided there are no outstanding payments and there are no outstanding disputes with respect to any agreed terms in this agreement, the Client is being granted non-exclusive, worldwide, transferable and perpetual license to use the Solution/Project delivered for running any legit business as per the applicable laws in their respective countries of operation. And the Client may create and share copies of the software/scripts/documents/materials purchased from PixxelU for the purpose of including, but not limited to, backups, code repository, quality assuring, modifying, and/or enhancing the project files, including with 3rd parties, as long as the Client keeps the copies in non-production environment and is not accessible or shared with any person or 3rd party without having an agreement with those persons and 3rd parties to respect and oblige the confidentiality and copyrights owned by PixxelU .</li>
                        </ul>
                        <p className="hdng-p">If the project is being done on Single Domain License basis, Client owns the rights to use the system only on designated domains and the Client should take reasonable care of the system files to restrict unauthorized access of the system scripts/source code delivered.</p>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">28. Termination Of The Agreement</h4>
                        <p className="hdng-p">If either party terminates this Agreement for any reason, the parties will continue to perform all of their respective obligations with respect to the confidentiality, non-solicitation, Copyrights and IP Rights owned by the other party.</p>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">29. Single Domain License</h4>
                        <p className="hdng-p">Unless otherwise agreed, client agrees to setup the scripts delivered only on one production domain/sub-domain (accessible to public or the end users of the application), two sub-domains for development or testing environment (wip.yourdomain.com and test.yourdomain.com) and localhost. However, if the Client wishes to run the same website on a different domain/sub-domain, then the Client has to purchase a separate license for each domain/sub-domain.</p>
                        <ul>
                            <li>No license would be required for Add-on Domains that will point to the main domain where this system will be implemented. All add-on domains will be forwarded to the main domain from the hosting server and no additional license would be required for these domains.</li>
                            <li>For every new domain or sub-domain, the Client has to buy a separate license.</li>
                            <li>Additional sub-domain licenses for development or testing environment can be purchased at USD 500 per domain/sub-domain)</li>
                        </ul>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">30. License Validity Period</h4>
                        <p className="hdng-p">Limited period license is issued initially. After 6 months from the date of full payment, a lifetime license is issued. Feel Free to contact PixxelU Support Team, in case your license has expired and payment has been made in full, such issues will be resolved on highest priority.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">31. No Recurring Costs Of License</h4>
                        <p className="hdng-p">There is no renewal/recurring license fee. However, if a client wishes to run the same website on a different domain or sub domain, then the client has to purchase a separate license for each domain or sub domain.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">32. Use Of Encrypted Files</h4>
                        <p className="hdng-p">Unless otherwise agreed, PixxelU can use its own framework (code library in encrypted format) for web applications development for making source code of our intellectual property/scripts secure from other programmers; faster turnaround time; and bug free application development. Client will be provided with detailed documentation for using framework (code library functions). With the help of documentation provided, other programmers can modify the website functionality. PixxelU framework is a collection of functions related to Database Manipulation, Images/Files Management, Paging, and Form Builder etc. which looks like PHP Functions but have different syntax than default PHP functions. Other willing and efficient PHP programmers can learn and practice these functions/framework within a few days/weeks as per their own learning pace.</p>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">33. Mutual Non-solicitation Of Employees</h4>
                        <p className="hdng-p">During the period starting on the Effective Date of this agreement and ending five years after the termination or expiration of this agreement (the “Non-Solicitation Period”), neither party will directly or indirectly, on its own behalf or in the service or on behalf of others, in any capacity induce or attempt to induce any officer, director, or employee to leave the other party.</p>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">34. Single Point Of Contact And Authorized Person</h4>
                        <ul>
                            <li>The Client has appointed…………………………………….. email ID ………………………………. Phone Number…………………………as Single Point of Contact for managing this project on behalf of the Client.</li>
                            <li>The Client has appointed…………………………………….. email ID ………………………………. Phone Number…………………………as the Authorized person for handling conflicts, signing the agreements and signing other documents on behalf of the Client.</li>
                        </ul>
                        <p className="hdng-p">Either Party’s point of contact may change by providing written notice to the other party of the new contact.</p>
                    </div>


                    <div className="privacy-box">
                        <h4 className="hdng-h4">35. General Terms</h4>
                        <ul>
                            <li>Notwithstanding anything stated in this agreement, PixxelU and Client must not be liable to the the other Party or any third party for any lost profits, lost savings or other incidental or punitive damages arising out of either Party’s breach of this Agreement, even if the Party has been advised of the possibility of such damages.</li>
                            <li>Despite the best efforts of PixxelU , errors in web page information may occur. At no time will PixxelU be held responsible for accidentally including erroneous information, extending beyond correcting the error.</li>
                            <li>Should the Parties waive any of these terms on an individual basis, this must not affect the validity of remaining clauses or commit either Party to waive the same clause on any other occasion.</li>
                            <li>By agreeing to these terms and conditions, statutory rights of the parties to this agreement are not affected.</li>
                            <li>Any modification to this Agreement must be signed in writing by both Parties.</li>
                        </ul>
                    </div>

                    <div className="privacy-box">
                        <h4 className="hdng-h4">Pixxelu (Contact Details/address/signature)</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Contact Name</th>
                                    <th>Rakesh Kumar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Designation</td>
                                    <td>CEO/Director</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Business Name</td>
                                    <td>Pixxelu Degital Technologies</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Business Address</td>
                                    <td>Second Floor #256 PixxelU Degital Technologies Near Punjab sind bank Dharamshala PIN – 174615</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* --- TermsConditions Content --- */}


        </div>

    )
}

export default TermsConditions