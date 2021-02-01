// Styled
import styled from "styled-components";
// Components
import Wave from "../Wave";
// import MainContactSection from "./MainContactSection";
// Animation
import { motion } from "framer-motion";
import { container, fade } from "../LogoAnimations";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  return (
    <HeroContainer variants={container} initial="hidden" animate="show">
      <div className="container hero-wrapper">
        <motion.div variants={fade}>
          <FontAwesomeIcon className="alt-icon" icon={faFacebook} />
        </motion.div>
        <motion.div variants={fade}>
          <FontAwesomeIcon className="alt-icon" icon={faTwitter} />
        </motion.div>
        <motion.div variants={fade}>
          <FontAwesomeIcon className="alt-icon" icon={faInstagram} />
        </motion.div>
        <motion.div variants={fade}>
          <FontAwesomeIcon className="alt-icon" icon={faLinkedinIn} />
        </motion.div>
        <motion.div variants={fade}>
          <FontAwesomeIcon className="alt-icon" icon={faPinterest} />
        </motion.div>
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
    display: flex;
    /* flex-direction: column; */
    height: 100%;
    justify-content: space-around;
    align-items: center;
    text-transform: uppercase;
    font-family: "Kollektif";
    /* ss */
    /* position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 25%);
    background-color: #fff;
    color: #8bd0f2;
    width: 60%;
    z-index: 1; */
  }

  h2 {
    font-size: 5rem;
    margin: 0rem 1rem 0rem 0rem;
  }

  /* .Typewriter {
  
    color: #8bd0f2;
  } */

  .alt-icon {
    font-size: 4rem;
  }
`;

export default HeroSection;
