import React from "react";
import "./feature.css";

const Feature = (props) => {
  return (
    <>
      <div className="section__header">
        <span className="line"></span>
        <h3>{props.title}</h3>
      </div>
      <p className="section__header-text">{props.text}</p>
    </>
  );
};

export default Feature;
