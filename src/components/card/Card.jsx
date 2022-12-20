import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="blog__content_card">
      <img className="blog__content_card-img" src={props.img} alt="blog01" />
      <div className="blog_content-card_container">
        <span>{props.date}</span>
        <h1>{props.title}</h1>
        <small>{props.subtext}</small>
      </div>
    </div>
  );
};

export default Card;
