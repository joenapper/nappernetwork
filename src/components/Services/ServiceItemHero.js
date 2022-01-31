// Styled
import styled from "styled-components";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// Router
import { Link } from "react-router-dom";
// Animation
import { motion } from "framer-motion";
import { fade } from "../LogoAnimations";

const ServiceItemHero = ({ background, title, text }) => {
  return (
    <HeroContainer style={{ background: background }}>
      <div className="container">
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          className="service-text-container"
        >
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="button-container">
            <Link to="/contact" className="button">
              Enquire Now{" "}
              <FontAwesomeIcon
                className="chevron-right"
                icon={faChevronRight}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  height: 80vh;
  width: 100%;
  position: relative;
  padding-top: 8vh;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -30%;
    background-image: linear-gradient(
        216deg,
        rgba(77, 77, 77, 0.05) 0%,
        rgba(77, 77, 77, 0.05) 25%,
        rgba(42, 42, 42, 0.050980392156862744) 25%,
        rgba(42, 42, 42, 0.050980392156862744) 38%,
        rgba(223, 223, 223, 0.05) 38%,
        rgba(223, 223, 223, 0.05) 75%,
        rgba(36, 36, 36, 0.05) 75%,
        rgba(36, 36, 36, 0.05) 100%
      ),
      linear-gradient(
        44deg,
        rgba(128, 128, 128, 0.05) 0%,
        rgba(128, 128, 128, 0.05) 34%,
        rgba(212, 212, 212, 0.05) 34%,
        rgba(212, 212, 212, 0.05) 57%,
        rgba(25, 25, 25, 0.05) 57%,
        rgba(25, 25, 25, 0.05) 89%,
        rgba(135, 135, 135, 0.05) 89%,
        rgba(135, 135, 135, 0.05) 100%
      ),
      linear-gradient(
        241deg,
        rgba(55, 55, 55, 0.05) 0%,
        rgba(55, 55, 55, 0.05) 14%,
        rgba(209, 209, 209, 0.05) 14%,
        rgba(209, 209, 209, 0.05) 60%,
        rgba(245, 245, 245, 0.05) 60%,
        rgba(245, 245, 245, 0.05) 69%,
        rgba(164, 164, 164, 0.05) 69%,
        rgba(164, 164, 164, 0.05) 100%
      ),
      linear-gradient(
        249deg,
        rgba(248, 248, 248, 0.05) 0%,
        rgba(248, 248, 248, 0.05) 32%,
        rgba(148, 148, 148, 0.05) 32%,
        rgba(148, 148, 148, 0.05) 35%,
        rgba(202, 202, 202, 0.05) 35%,
        rgba(202, 202, 202, 0.05) 51%,
        rgba(181, 181, 181, 0.05) 51%,
        rgba(181, 181, 181, 0.05) 100%
      ),
      linear-gradient(92deg, rgb(55, 66, 81), rgb(55, 66, 81));
    height: 100%;
    width: 85%;
    transform: skewX(35deg);
    z-index: 1;
  }

  .service-text-container {
    height: 100%;
    width: 60%;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .service-text-container h2 {
    font-size: 5rem;
    text-transform: uppercase;
  }

  .service-text-container p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    width: 80%;
    margin-right: 20%;
  }

  .button-container {
    width: 80%;
    margin-right: 20%;
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 1700px) {
    &::after {
      width: 95%;
    }
  }

  @media (max-width: 1600px) {
    .service-text-container h2 {
      font-size: 5rem;
    }
  }

  @media (max-width: 1350px) {
    .service-text-container p,
    .button-container {
      width: 90%;
      margin-right: 10%;
    }
  }

  @media (max-width: 1165px) {
    .service-text-container h2 {
      font-size: 4rem;
    }

    .service-text-container p {
      width: 100%;
      margin-right: 0%;
    }

    .button-container {
      width: 100%;
      margin-right: 0%;
    }
  }

  @media (max-width: 1000px) {
    &::after {
      width: 150%;
      left: -70%;
    }

    .service-text-container h2 {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 768px) {
    .service-text-container {
      width: 70%;
    }

    .service-text-container h2 {
      font-size: 3rem;
    }

    .service-text-container p {
      font-size: 1rem;
      line-height: 1.4;
    }
  }

  @media (max-width: 542px) {
    height: 60vh;

    &::after {
      width: 100%;
      left: 0;
      transform: skewX(0deg);
    }

    .service-text-container {
      width: 100%;
    }

    .service-text-container h2 {
      width: 90%;
      margin-right: 30%;
      font-size: 2.25rem;
    }
  }
`;

export default ServiceItemHero;
