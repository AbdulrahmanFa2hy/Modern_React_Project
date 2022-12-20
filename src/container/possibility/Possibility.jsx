import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="possibility section__padding" id="possibility">
      <div className="possibility__image">
        <img src={possibilityImage} alt={`possibilityImg`} />
      </div>
      <div className="possibility__container">
        <p className="possibility__container-access">
          Request Early Access to Get Started
        </p>
        <h1 className="possibility__container-heading gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p className="possibility__container-text">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="possibility__container-subtext ">
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  );
};

export default Possibility;
