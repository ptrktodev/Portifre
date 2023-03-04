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
          <Fire /> Portfire
        </h2>

        <div>
          <div className="navBox">
            <a href="https://google.com">
              <Git />
            </a>
            <li>
              <Insta />
            </li>
            <li>
              <Linkedin />
            </li>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
