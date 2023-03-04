import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="About">
        <div className="aboutTitle">
          <h1>Meet </h1> <h1 className="h1Gradient"> Patrick Rodriguez</h1>
        </div>
        <div className="aboutText">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
