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
      {/* <motion.h1 variants={fade}>Contact</motion.h1> */}
      <div className="hero-wrapper">
        <motion.h2 variants={fade}>Get in touch!</motion.h2>
        {/* <p>We would love to hear from you</p> */}
        {/* <p>Get in touch!</p> */}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("We would love to hear from you")
              .pauseFor(2000)
              .start();
          }}
        />
      </div>
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
    /* position: relative;
    top: 50%;
    left: 50%;
    transform: translate(50%, 50%); */
    display: flex;
    flex-direction: column;
    height: 100%;
    /* text-align: center; */
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: "Kollektif";
  }

  h2 {
    font-size: 5rem;
    margin: 0rem 1rem 0rem 0rem;
  }

  .Typewriter {
    /* font-size: 5rem; */
    color: #8bd0f2;
  }
`;

export default HeroSection;
