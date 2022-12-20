import React from "react";
import "./footer.css";
import footerLogo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <h1 className="footer__heading gradient__text">
        Do you want to step in to the future before others
      </h1>
      <button className="footer__btn">Request Early Access</button>
      <div className="footer__content">
        <div className="footer__content-logo">
          <img src={footerLogo} alt="footerLogo" />
          <small className="footer__content-logo_subtext">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </small>
        </div>
        <div className="footer__content-data">
          <ul>
            <li>Links</li>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Get in touch</li>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        © 2021 GPT-3. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
