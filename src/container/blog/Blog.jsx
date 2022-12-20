import React from "react";
import Card from "../../components/card/Card";
import "./blog.css";

import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <h1 className="blog__heading gradient__text">
        A lot is happening,
        <br />
        We are blogging about it.
      </h1>
      <div className="blog__content">
        <div className="blog__content-groupA">
          <Card
            date={"Sep 26, 2021"}
            title={`GPT-3 and Open AI is the future. Let us exlore how it is?`}
            subtext={`Read Full Article`}
            img={blog01}
          />
        </div>
        <div className="blog__content-groupB">
          <Card
            date={"Sep 26, 2021"}
            title={`GPT-3 and Open AI is the future. Let us exlore how it is?`}
            subtext={`Read Full Article`}
            img={blog02}
          />
          <Card
            date={"Sep 26, 2021"}
            title={`GPT-3 and Open AI is the future. Let us exlore how it is?`}
            subtext={`Read Full Article`}
            img={blog03}
          />
          <Card
            date={"Sep 26, 2021"}
            title={`GPT-3 and Open AI is the future. Let us exlore how it is?`}
            subtext={`Read Full Article`}
            img={blog04}
          />
          <Card
            date={"Sep 26, 2021"}
            title={`GPT-3 and Open AI is the future. Let us exlore how it is?`}
            subtext={`Read Full Article`}
            img={blog05}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
