// Styled
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import { container, fade } from "../LogoAnimations";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <HeroContainer variants={container} initial="hidden" animate="show">
      <div className="hero-wrapper">
        <motion.h2 variants={fade}>We</motion.h2>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Create")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Analyse")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Strategise")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Design")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Develop")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled(motion.main)`
  height: 80vh;
  width: 100%;
  position: relative;
  background-image: radial-gradient(
    circle at center center,
    rgb(55, 66, 81),
    rgb(30, 37, 45)
  );

  .hero-wrapper {
    /* position: relative;
    top: 50%;
    left: 50%;
    transform: translate(50%, 50%); */
    display: flex;
    height: 100%;
    /* text-align: center; */
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: "Kollektif";
  }

  h2 {
    font-size: 5rem;
    margin-right: 1rem;
  }

  .Typewriter {
    font-size: 5rem;
    color: #8bd0f2;
  }
`;

export default HeroSection;
