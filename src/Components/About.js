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
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="aboutTitle">
          <h1>Know about </h1> <h1 className="h1Gradient">Me</h1>
        </div>
        <div className="aboutText">
          <p>
            I'm a web developer looking for new opportunities and professional
            growth. Passionate about technology and creating amazing projects on
            the web. I am always studying to improve my skills and stay up to
            date with the latest trends. I have experience in different
            technologies and programming languages, including HTML, CSS,
            JavaScript, and ReactJS.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
