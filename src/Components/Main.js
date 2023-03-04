import React from "react";
import "./Main.css";
import Card from "./CardsProjects/Card";

import Cine from "../assets/cine.png";
import Little from "../assets/little.png";
import Picsure from "../assets/picsure.png";

import { ReactComponent as Hand } from "../assets/hand.svg";

const Main = () => {
  return (
    <main className="container">
      <div className="main">
        <div className="mainMe">
          <h1>
            Welcome <Hand />
          </h1>
          <h2>I'm Web Developer</h2>
        </div>
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
