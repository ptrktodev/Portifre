import React from "react";
import "../Sass/scss/_Me.scss";
import "../Sass/scss/_About.scss";
import Image from "../assets/me1.png";
import Write from "./Write";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; /* para fazer a animação ser acionada quando o elemento estiver visível na tela */

const Me = () => {
  const [ref, inView] = useInView({
    // inView indica se o el esta visivel na tela.
    threshold: 0.1, // 10% visível para ativar a animação
    triggerOnce: false, // aciona a animação apenas uma vez
  });

  return (
    <main className="container">
      <div className="MenuApresentacao">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }} // valor inicial da animação
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // valor final da animação
          transition={{ duration: 1, ease: "easeOut" }}
          className="MenuApresentacaoDiv1"
        >
          <img src={Image} />
        </motion.div>
        <motion.div
          ref={ref}
          className="MenuApresentacaoDiv2"
          initial={{ opacity: 0, x: 100 }} // valor inicial da animação
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // valor final da animação
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="h1">Hello! I'm </h1>
          <h1>
            {" "}
            <Write
              fullText="Patrick Rodriguez"
              secondText="teste"
              speed="180"
            />{" "}
          </h1>
          <h1 className="h1">I'm Web Developer</h1>
          <p>
            Currently, I'm looking for the first opportunity, but in the
            meantime...
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Me;
