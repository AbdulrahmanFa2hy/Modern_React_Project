import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="wgpt3" id="wgpt3">
      <div className="wgpt3__container">
        <div className="wgpt3__intro">
          <Feature
            title={"What is GPT-3"}
            text={`We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.`}
          />
        </div>
        <div className="wgpt3__container-library">
          <h1 className="wgpt3__container-library_title gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p>Explore The Library</p>
        </div>
        <div className="wgpt3__container-boxes">
          <div>
            <Feature
              title={"Chatbots"}
              text={`We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.`}
            />
          </div>
          <div>
            <Feature
              title={"Knowledgebase"}
              text={`At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b`}
            />
          </div>
          <div>
            <Feature
              title={"Education"}
              text={`At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
