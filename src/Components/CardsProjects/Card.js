import React from "react";
import "./Card.css";
import { motion } from "framer-motion";
import Btn1 from "../Button1/Btn1";

const Card = ({ img, name, descr, link }) => {
  return (
    <motion.div
      class="card"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div class="card-image">
        <img src={img} />
      </div>
      <div class="category">
        {" "}
        <h2 className="categoryh2Gradient">{name}</h2>{" "}
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
