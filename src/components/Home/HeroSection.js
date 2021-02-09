// Styled
import styled from "styled-components";
// Media
import LogoInfinite from "../../media/napper-network-infinite.png";
import LogoMainText from "../../media/napper-network-text-globe.png";
import LogoSubText from "../../media/napper-network-text-2.png";
// Components
import Wave from "../Wave";
// Animation
import { motion } from "framer-motion";
import { container, fade } from "../LogoAnimations";

const HeroSection = () => {
  return (
    <HeroContainer variants={container} initial="hidden" animate="show">
      <motion.img
        variants={fade}
        className="hero-image"
        src={LogoInfinite}
        alt="Napper Network"
      />
      <motion.img
        variants={fade}
        className="hero-image"
        src={LogoMainText}
        alt="Napper Network"
      />
      <motion.img
        variants={fade}
        className="hero-image"
        src={LogoSubText}
        alt="Napper Network"
      />
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

  .hero-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 60%;
  }

  @media (max-width: 1400px) {
    .hero-image {
      max-width: 70%;
    }
  }

  @media (max-width: 1000px) {
    height: 70vh;
  }

  @media (max-width: 768px) {
    height: 60vh;

    .hero-image {
      max-width: 80%;
    }
  }
`;

export default HeroSection;
