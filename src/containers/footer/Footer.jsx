import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Be the change you wish to see in the world -Gandhi </h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Invest in us</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Code ADA <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Mission </p>
        <p>Goals</p>
        <p>Who we are</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2050 River APP. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
