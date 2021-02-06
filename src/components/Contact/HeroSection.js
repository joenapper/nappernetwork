// Styled
import styled from "styled-components";
// Components
import Wave from "../Wave";
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
    height: 100%;
    justify-content: space-around;
    align-items: center;
    text-transform: uppercase;
    font-family: "Kollektif";
  }

  .alt-icon {
    font-size: 4rem;
  }

  @media (max-width: 1000px) {
    height: 70vh;
  }

  @media (max-width: 925px) {
    .alt-icon {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 768px) {
    height: 60vh;

    .alt-icon {
      font-size: 3rem;
    }
  }

  @media (max-width: 500px) {
    .alt-icon {
      font-size: 2rem;
    }
  }
`;

export default HeroSection;
