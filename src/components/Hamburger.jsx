import React, { useState } from 'react';
import HeaderTabs from './HeaderTabs';
import Years from '../assets/images/years.png';


const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <div className="container">
          <HeaderTabs />

          <div className="hamburger-experience">
            <div className="expercience-img">
              <img src={Years} alt="Years" />
            </div>
            <div className="expercience-txt">
              <ul className="site-ul">
                <li><span>20+</span> Employees</li>
                <li><span>1000+</span> Happy Customer</li>
                <li><span>3</span> Locations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bars"></span>
      </div>

    </>
  );
};

export default Hamburger;
