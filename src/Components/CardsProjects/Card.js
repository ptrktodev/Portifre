import React from "react";
import "./Card.css";
import { ReactComponent as Hand } from "../../assets/handarrow.svg";

const Card = ({ img, name, descr, link }) => {
  return (
    <div class="card">
      <div class="card-image">
        <img src={img} />
      </div>
      <div class="category">
        {" "}
        <h3>{name}</h3>{" "}
      </div>
      <div class="heading">
        {" "}
        {descr}
        <div class="author">
          {" "}
          <a href={link} target="_blank">
            <Hand />
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
