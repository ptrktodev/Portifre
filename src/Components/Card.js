import React from "react";
import "../Sass/scss/_Card.scss";
import { motion } from "framer-motion";
import Btn1 from "./Btn1";

const Card = ({ img, name, descr, link }) => {
  return (
    <motion.div class="card">
      <div class="card-image">
        <img src={img} />
      </div>
      <div class="category">
        {" "}
        <h2>{name}</h2>{" "}
      </div>
      <div class="heading">
        {" "}
        {descr}
        <div class="author">
          {" "}
          <a href={link} target="_blank">
            <Btn1 title="Visit" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
