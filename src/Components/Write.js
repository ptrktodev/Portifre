import React, { useState, useEffect } from "react";
import "../Sass/scss/_Write.scss";

const MachineWriting = ({ fullText, speed }) => {
  const [text, setText] = useState("");

  const updateText = () => {
    const Array = fullText.split("");
    console.log(Array);
    let teste = "";
    Array.forEach((el, i) => {
      let time = speed * i;
      setTimeout(() => {
        setText((teste += el));
      }, time);
    });
  };

  useEffect(() => {
    updateText();
  }, []);

  return <h1 className="h1Gradient">{text}</h1>;
};

export default MachineWriting;
