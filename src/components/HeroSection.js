// Styled
import styled from "styled-components";
// Media
import nn1 from "../media/napper-network-infinite.png";
import nn2 from "../media/napper-network-text.png";
import nn3 from "../media/napper-network-globe.png";
import nn4 from "../media/napper-network-text-2.png";
import nn5 from "../media/napper-network-blue-wave.png";
import nn6 from "../media/napper-network-left-wave.png";
import nn7 from "../media/napper-network-right-wave.png";
// Components
import Wave from "./Wave";
// Animation
import { motion } from "framer-motion";
import {
  container,
  blueWave,
  leftWave,
  rightWave,
  fade,
} from "./LogoAnimations";

const HeroSection = () => {
  return (
    <HeroContainer variants={container} initial="hidden" animate="show">
      <motion.img
        variants={blueWave}
        className="hero-image"
        src={nn5}
        alt=""
        srcset=""
      />
      <motion.img
        variants={leftWave}
        className="hero-image"
        src={nn6}
        alt=""
        srcset=""
      />
      <motion.img
        variants={rightWave}
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
      <img className="hero-image" src={nn3} alt="" srcset="" />
      <motion.img
        variants={fade}
        className="hero-image"
        src={nn4}
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

  .hero-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default HeroSection;
