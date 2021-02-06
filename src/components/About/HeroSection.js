// Styled
import styled from "styled-components";
// Components
import Wave from "../Wave";
// Animation
import { motion } from "framer-motion";
import { container, fade } from "../LogoAnimations";
// Typewriter
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <HeroContainer variants={container} initial="hidden" animate="show">
      <motion.div variants={fade} className="hero-wrapper">
        <motion.h2 variants={fade}>We</motion.h2>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Design")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Develop")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Analyse")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Strategise")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Promote")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Create")
              .pauseFor(1500)
              .deleteAll()
              .start();
          }}
        />
      </motion.div>
      <Wave />
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
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: "Kollektif", sans-serif;
  }

  h2 {
    font-size: 5rem;
    margin: 0rem 1rem 0rem 0rem;
  }

  .Typewriter {
    font-size: 5rem;
    color: #8bd0f2;
    font-family: "Kollektif", sans-serif;
    font-weight: bolder;
  }

  @media (max-width: 1000px) {
    height: 70vh;

    h2,
    .Typewriter {
      font-size: 4rem;
    }
  }

  @media (max-width: 768px) {
    height: 60vh;

    h2,
    .Typewriter {
      font-size: 3rem;
    }
  }

  @media (max-width: 400px) {
    h2,
    .Typewriter {
      font-size: 2rem;
    }
  }
`;

export default HeroSection;
