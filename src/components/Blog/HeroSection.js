// Styled
import styled from "styled-components";
// Components
import Wave from "../Wave";
// Animation
import { motion } from "framer-motion";
import { container } from "../LogoAnimations";

const HeroSection = () => {
  return (
    <HeroContainer variants={container} initial="hidden" animate="show">
      {/* <motion.h1 variants={fade}>Blog</motion.h1> */}
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
`;

export default HeroSection;
