// Styled
import styled from "styled-components";
// Media
// import nn1 from "../media/napper-network-infinite.png";
import nn2 from "../../media/napper-network-text.png";
import nn3 from "../../media/napper-network-globe.png";
import nn4 from "../../media/napper-network-text-2.png";
import nn5 from "../../media/napper-network-blue-wave.png";
import nn6 from "../../media/napper-network-left-wave.png";
import nn7 from "../../media/napper-network-right-wave.png";
import LogoInfinite from "../../media/napper-network-infinite.png";
import LogoMainText from "../../media/napper-network-text-globe.png";
import LogoSubText from "../../media/napper-network-text-2.png";
// Components
import Wave from "../Wave";
// Animation
import { motion } from "framer-motion";
import {
  container,
  // blueWave,
  // leftWave,
  // rightWave,
  fade,
} from "../LogoAnimations";

const HeroSection = () => {
  return (
    <HeroContainer variants={container} initial="hidden" animate="show">
      {/* <motion.img
        variants={fade}
        className="hero-image"
        src={nn5}
        alt=""
        srcset=""
      />
      <motion.img
        variants={fade}
        className="hero-image"
        src={nn6}
        alt=""
        srcset=""
      />
      <motion.img
        variants={fade}
        className="hero-image"
        src={nn7}
        alt=""
        srcset=""
      />
      <motion.img
        variants={fade}
        className="hero-image"
        src={nn2}
        alt=""
        srcset=""
      />
      <motion.img
        variants={fade}
        className="hero-image"
        src={nn3}
        alt=""
        srcset=""
      />
      <motion.img
        variants={fade}
        className="hero-image"
        src={nn4}
        alt=""
        srcset=""
      /> */}
      <motion.img
        variants={fade}
        className="hero-image"
        src={LogoInfinite}
        alt=""
        srcset=""
      />
      <motion.img
        variants={fade}
        className="hero-image"
        src={LogoMainText}
        alt=""
        srcset=""
      />
      <motion.img
        variants={fade}
        className="hero-image"
        src={LogoSubText}
        alt=""
        srcset=""
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
    /* bottom: 0; */
    left: 50%;
    transform: translate(-50%, -50%);
    /* transform: translate(-50%, 33%); */
    max-width: 80%;
  }

  @media (max-width: 1000px) {
    height: 70vh;
  }

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

export default HeroSection;
