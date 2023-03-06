import React, { useEffect } from "react";
import "./Main.css";
import Card from "./CardsProjects/Card";

import Cine from "../assets/cine.png";
import Little from "../assets/little.png";
import Picsure from "../assets/picsure.png";

import { useInView } from "react-intersection-observer"; /* para fazer a animação ser acionada quando o elemento estiver visível na tela */
import { motion } from "framer-motion";

const Main = () => {
  const [ref, inView] = useInView({
    // inView indica se o el esta visivel na tela.
    threshold: 0.1, // 10% visível para ativar a animação
    triggerOnce: false, // aciona a animação apenas uma vez
  });

  return (
    <main className="container">
      <div className="main">
        <motion.div
          className="mainMe"
          ref={ref}
          initial={{ opacity: 0, y: -100 }} // valor inicial da animação
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }} // valor final da animação
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>See at my</h1>
          <h1 className="h1Gradient">Projects</h1>
        </motion.div>
        <div className="Cards">
          <Card
            img={Cine}
            name="CineMagic"
            descr="In the universe of CineMagic you get information about movies and series."
            link="https://cinemagic.bohr.io/"
          />

          <Card
            img={Picsure}
            name="PicSure"
            descr="In this small gallery you have access to millions of images."
            link="https://picsure.bohr.io/"
          />

          <Card
            img={Little}
            name="Little Links"
            descr="A project that contains quick links so you can get to know me more."
            link="https://littlelinks.bohr.io/"
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
