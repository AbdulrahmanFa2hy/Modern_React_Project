import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="cta section__margin" id="cta">
      <small className="cta__subtext">
        Request Early Access to Get Started
      </small>
      <div className="cta__register">
        <h1 className="cta__register-heading">
          Register today & start exploring the endless possiblities.
        </h1>
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
