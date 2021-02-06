// Styled
import styled from "styled-components";
// Images
import WhyUsImg from "../../media/why-us-img.png";
// Animations
import { motion } from "framer-motion";
import { fade } from "../LogoAnimations";
import { useScroll } from "../useScroll";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// Router
import { Link } from "react-router-dom";

const AboutSection = (props) => {
  const [element, controls] = useScroll();
  return (
    <About>
      <motion.div
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
        className="container"
      >
        <div className="about-text">
          <h2>
            <span className="secondary">Why</span> Us?
          </h2>
          <p>
            Driven by a passionate and creative team, Napper Network is a fully
            managed Digital Marketing and Web Development agency based in
            Sheffield. We take our time to understand your business so we can
            design and deliver a tailored, quality approach for your company,
            big or small. Whether you require one or multiple services, we can
            provide a bespoke solution to suit your needs.
          </p>
          <div className="button-container">
            <Link to="/about" className="button button-alt">
              Find out more{" "}
              <FontAwesomeIcon
                className="chevron-right"
                icon={faChevronRight}
              />
            </Link>
          </div>
        </div>
        <div className="img-container">
          <img src={WhyUsImg} alt="" />
        </div>
      </motion.div>
    </About>
  );
};

const About = styled.section`
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
    linear-gradient(92deg, rgb(255, 255, 255), rgb(255, 255, 255));
  color: #374251;
  padding: 4rem 0;
  position: relative;

  .container {
    display: flex;
    align-items: center;
  }

  .about-text {
    width: 60%;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .img-container {
    width: 35%;
    margin-left: 5%;
    display: flex;
    justify-content: flex-end;
  }

  img {
    z-index: 1;
  }

  @media (max-width: 1170px) {
    .about-text {
      width: 55%;
    }

    .img-container {
      width: 40%;
      margin-left: 5%;
    }
  }

  @media (max-width: 1025px) {
    .about-text {
      width: 100%;
    }

    .img-container {
      display: none;
    }
  }
`;

export default AboutSection;
