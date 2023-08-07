import React, { useState, useEffect } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [thankMessage, setThankMessage] = useState('');
    const [country, setCountry] = useState('');
    const [checkboxOptions, setCheckboxOptions] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
        option5: false,
        option6: false,
    });

    const countries = ['Country 1', 'Country 2', 'Country 3', 'Country 4']; // Replace with your list of countries

    const handleSubmit = async e => {
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            message,
            country,
            checkboxOptions,
            budget,
        };

        try {
            const response = await fetch(
                'https://pixxelu.com/dev/red3sixty/api/contact-us',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                }
            );
            const responseData = await response.json();
            console.log(responseData);
            setThankMessage('Thank you for your message. It has been sent.');
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setCountry('');
            setCheckboxOptions({
                option1: false,
                option2: false,
                option3: false,
                option4: false,
                option5: false,
                option6: false,
            });
        } catch (error) {
            console.log(error);
            setThankMessage('Message failed to send. Please try again later.');
        }
    };

    const handleCountryChange = e => {
        setCountry(e.target.value);
    };

    const [isAnyCheckboxClicked, setIsAnyCheckboxClicked] = useState(false);

    const [isBudgetVisible, setIsBudgetVisible] = useState(false);

    const handleCheckboxChange = e => {
        const { name, checked } = e.target;
        setIsAnyCheckboxClicked(true); // Set isAnyCheckboxClicked to true when any checkbox is checked
        setCheckboxOptions(prevOptions => ({
            ...prevOptions,
            [name]: checked,
        }));
        if (checked) {
            setIsBudgetVisible(true); // Set isBudgetVisible to true when any checkbox is checked
        }
    };

    const handleBudgetChange = e => {
        setBudget(e.target.value);
    };

    const [budget, setBudget] = useState('Around $500');


    return (
                <form onSubmit={handleSubmit} className="from-bottom">
                    <div className="row">

                        <div className="col-md-12">
                            <label className="label-op">I Need</label>
                            <div className="form-feild checkbox-feild">

                                <label>
                                    <input
                                        type="checkbox"
                                        name="option1"
                                        checked={checkboxOptions.option1}
                                        onChange={handleCheckboxChange}
                                    />{' '}
                                    <span> Website Design & Development</span>                                   
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="option2"
                                        checked={checkboxOptions.option2}
                                        onChange={handleCheckboxChange}
                                    />{' '}
                                    <span>App Development</span>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="option3"
                                        checked={checkboxOptions.option3}
                                        onChange={handleCheckboxChange}
                                    />{' '}
                                    <span>E-Commerce Website Development</span>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="option4"
                                        checked={checkboxOptions.option4}
                                        onChange={handleCheckboxChange}
                                    />{' '}
                                    <span>Search Engine Optimization (SEO)</span>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="option5"
                                        checked={checkboxOptions.option5}
                                        onChange={handleCheckboxChange}
                                    />{' '}
                                    <span>Digital Marketing</span>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="option6"
                                        checked={checkboxOptions.option6}
                                        onChange={handleCheckboxChange}
                                    />{' '}
                                    <span>Other</span>
                                </label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-feild">
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Enter name"
                                    required
                                />

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-feild">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-feild">
                                <label>Mobile Number</label>
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    placeholder="Enter Mobile number"
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-feild">
                                <label>Country</label>
                                <select value={country} onChange={handleCountryChange} required>
                                    <option value="">Select Country</option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>


                        <div className="col-md-12">
                            <div className="form-feild">
                                    <div>
                                        <label>Budget</label>
                                        <div className="budget-radio">
                                        <label>
                                    <input
                                        type="radio"
                                        name="budget"
                                        value="Around $500"
                                        checked={budget === 'Around $500'}
                                        onChange={handleBudgetChange}
                                    />
                                    <span>Around $500</span>
                                </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="budget"
                                                    value=" $1000"
                                                    checked={budget === ' $1000'}
                                                    onChange={handleBudgetChange}
                                                />
                                                <span>$1000</span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="budget"
                                                    value=" $1500"
                                                    checked={budget === ' $1500'}
                                                    onChange={handleBudgetChange}
                                                />
                                                <span>$1500</span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="budget"
                                                    value=" $2000"
                                                    checked={budget === ' $2000'}
                                                    onChange={handleBudgetChange}
                                                />
                                                <span>$2000</span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="budget"
                                                    value=" $2500"
                                                    checked={budget === ' $2500'}
                                                    onChange={handleBudgetChange}
                                                />
                                                <span>$2500</span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="budget"
                                                    value=" $3000"
                                                    checked={budget === ' $3000'}
                                                    onChange={handleBudgetChange}
                                                />
                                                <span>$3000</span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="budget"
                                                    value=" $3500"
                                                    checked={budget === ' $3500'}
                                                    onChange={handleBudgetChange}
                                                />
                                                <span>$3500</span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="budget"
                                                    value=" $4000"
                                                    checked={budget === ' $4000'}
                                                    onChange={handleBudgetChange}
                                                />
                                                <span>$4000</span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="budget"
                                                    value=" $4500"
                                                    checked={budget === ' $4500'}
                                                    onChange={handleBudgetChange}
                                                />
                                                <span>$4500</span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="budget"
                                                    value=" $5000"
                                                    checked={budget === ' $5000'}
                                                    onChange={handleBudgetChange}
                                                />
                                                <span>$5000</span>
                                            </label>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-feild">

                                <label>I want</label>
                                <textarea
                                    type="textarea"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    placeholder="I am here for..."
                                />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-button">
                                <button type="submit" className="custom-btn">
                                    <span>Get Free Estimate</span>
                                </button>
                                {thankMessage && <p className="error-msg">{thankMessage}</p>}
                            </div>
                        </div>
                    </div>
                </form>

    );
};

export default ContactForm;
