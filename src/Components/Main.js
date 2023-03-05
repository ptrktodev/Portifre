import React from "react";
import "./Main.css";
import Card from "./CardsProjects/Card";

import Cine from "../assets/cine.png";
import Little from "../assets/little.png";
import Picsure from "../assets/picsure.png";

import { ReactComponent as Hand } from "../assets/hand.svg";
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
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1>
            Welcome <Hand />
          </h1>
          <h2>I'm Web Developer</h2>
        </motion.div>
        <div className="Cards">
          <Card
            img={Cine}
            name="CineMagic"
            descr="No universo do CineMagic você obtém informações sobre filmes e Séries."
            link="https://cinemagic.bohr.io/"
          />

          <Card
            img={Picsure}
            name="PicSure"
            descr="Nessa pequena galeria você tem acesso a milhões de imagens."
            link="https://picsure.bohr.io/"
          />

          <Card
            img={Little}
            name="Little Links"
            descr="Um projeto que contem links rápidos para que você possa me conhecer mais."
            link="https://littlelinks.bohr.io/"
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
