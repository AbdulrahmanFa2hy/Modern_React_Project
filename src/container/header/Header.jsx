import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header__container" id="home">
      <div className="header__container-left">
        <h1 className="header__container-title gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="header__container-text">
          Yet bed any for traveling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header__container-contact">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="header__container-people">
          <img src={people} alt="people" />
          <small>1,600 people requested access a visit in last 24 hours</small>
        </div>
      </div>
      <div className="header__container-right">
        <img src={ai} alt="ai-photo" />
      </div>
    </div>
  );
};

export default Header;
