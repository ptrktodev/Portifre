import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; /* para fazer a animação ser acionada quando o elemento estiver visível na tela */

const About = () => {
  const [ref, inView] = useInView({
    // inView indica se o el esta visivel na tela.
    threshold: 0.1, // 10% visível para ativar a animação
    triggerOnce: false, // aciona a animação apenas uma vez
  });
  return (
    <div className="container">
      <motion.div
        ref={ref}
        className="About"
        initial={{ opacity: 0, y: 100 }} // valor inicial da animação
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }} // valor final da animação
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="aboutTitle">
          <h1>Meet </h1> <h1 className="h1Gradient"> Patrick Rodriguez</h1>
        </div>
        <div className="aboutText">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
