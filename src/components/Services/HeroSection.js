// Styled
import styled from "styled-components";
// Components
import Wave from "../Wave";
// Animation
import { motion } from "framer-motion";
import { container, fade } from "../LogoAnimations";
// Images
import ServicesHero from "../../media/services-hero.png";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// Smooth Scroll
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeroSection = () => {
  return (
    <HeroContainer variants={container} initial="hidden" animate="show">
      <div className="container">
        <div className="services-hero">
          <motion.h2 variants={fade}>Services</motion.h2>
          <motion.p variants={fade}>
            At Napper Network we offer a wide range of services to suit your
            business needs.
          </motion.p>
          <motion.div variants={fade} className="button-container">
            <AnchorLink offset="100" href="#services" className="button">
              Find out more{" "}
              <FontAwesomeIcon className="chevron-right" icon={faChevronDown} />
            </AnchorLink>
          </motion.div>
        </div>
      </div>
      <Wave />
    </HeroContainer>
  );
};

const HeroContainer = styled(motion.main)`
  height: 80vh;
  width: 100%;
  position: relative;
  background: url(${ServicesHero}) center no-repeat;
  background-size: cover;
  /* background-image: radial-gradient(
    circle at center center,
    rgb(55, 66, 81),
    rgb(30, 37, 45)
  ); */

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: radial-gradient(
      circle at center center,
      rgb(55, 66, 81),
      rgb(30, 37, 45)
    );
    opacity: 0.75;
  }

  .services-hero {
    height: 100%;
    width: 60%;
    margin: auto;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    font-size: 6rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    /* width: 80%; */
    /* margin-right: 20%; */
  }

  .button-container {
    /* width: 80%; */
    /* margin-right: 20%; */
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 1000px) {
    height: 70vh;

    .services-hero {
      width: 80%;
    }

    h2 {
      font-size: 4rem;
    }
  }

  @media (max-width: 768px) {
    height: 60vh;

    /* .services-hero {
      width: 80%;
    } */

    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export default HeroSection;
