import React from "react";
import "./Header.css";
import { ReactComponent as Git } from "../assets/github.svg";
import { ReactComponent as Insta } from "../assets/instagram.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Fire } from "../assets/fire.svg";

const Header = () => {
  return (
    <header className="Header">
      <div className="container nav">
        <h2>
          <Fire />
          Portfire
        </h2>
        <div className="navBox">
          <a href="https://github.com/ptrktodev" target="_blank">
            <Git />
          </a>
          <a href="https://www.instagram.com/ptrk.io/" target="_blank">
            <Insta />
          </a>
          <a
            href="https://linkedin.com/in/patrick-rodriguez-tech"
            target="_blank"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
