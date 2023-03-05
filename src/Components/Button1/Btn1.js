import React from "react";
import "./Btn1.css";

const Btn1 = ({ title }) => {
  return (
    <button class="cta">
      <span class="hover-underline-animation"> {title} </span>
    </button>
  );
};

export default Btn1;
