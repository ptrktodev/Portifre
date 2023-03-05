import React, { useState, useEffect } from "react";

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

  return <p>{text}</p>;
};

export default MachineWriting;
