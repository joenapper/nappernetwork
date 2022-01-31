// Styled
import styled from "styled-components";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// Images
import WebDevelopmentIcon from "../../media/WebDevelopmentIcon.png";
import DigitalMarketingIcon from "../../media/DigitalMarketingIcon.png";
import SocialMediaIcon from "../../media/SocialMediaIcon.png";
// Animations
import { motion } from "framer-motion";
import { fade } from "../LogoAnimations";
import { useScroll } from "../useScroll";
// Router
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  return (
    <Services id="services">
      <div className="container">
        <div className="row">
          <motion.div
            ref={element}
            variants={fade}
            animate={controls}
            initial="hidden"
            className="card"
          >
            <Link to="/web-development">
              <div className="service-icon-container">
                <img
                  className="service-icon"
                  src={WebDevelopmentIcon}
                  alt="Napper Network Web Development"
                />
              </div>
              <h4>
                Web Development
                <FontAwesomeIcon
                  className="chevron-right"
                  icon={faChevronRight}
                />
              </h4>
            </Link>
          </motion.div>

          <motion.div
            ref={element2}
            variants={fade}
            animate={controls2}
            initial="hidden"
            className="card"
          >
            <Link to="digital-marketing">
              <div className="service-icon-container">
                <img
                  className="service-icon"
                  src={DigitalMarketingIcon}
                  alt="Napper Network Digital Marketing"
                />
              </div>
              <h4>
                Digital Marketing
                <FontAwesomeIcon
                  className="chevron-right"
                  icon={faChevronRight}
                />
              </h4>
            </Link>
          </motion.div>

          <motion.div
            ref={element3}
            variants={fade}
            animate={controls3}
            initial="hidden"
            className="card"
          >
            <Link to="social-media">
              <div className="service-icon-container">
                <img
                  className="service-icon"
                  src={SocialMediaIcon}
                  alt="Napper Network Social Media"
                />
              </div>
              <h4>
                Social Media
                <FontAwesomeIcon
                  className="chevron-right"
                  icon={faChevronRight}
                />
              </h4>
            </Link>
          </motion.div>
        </div>
      </div>
    </Services>
  );
};

const Services = styled.section`
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
  padding: 4rem 0rem;

  .card {
    flex-basis: 30%;
    cursor: pointer;
  }

  .card:hover h4 {
    text-decoration: underline;
  }

  .service-icon-container {
    height: 200px;
    width: 100%;
    background-color: #8bd0f2;
    display: flex;
  }

  .service-icon {
    height: 150px;
    width: 150px;
    margin: auto auto;
  }

  .card:nth-child(2) .service-icon-container {
    background-color: #7f8e94;
  }

  .card:nth-child(3) .service-icon-container {
    background-color: #af6b8c;
  }

  .card h4 {
    padding: 0.5rem 0 1rem 0;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chevron-right {
    margin-left: 0.4rem;
    font-size: 1rem;
  }

  .card:nth-child(1) .chevron-right {
    color: #8bd0f2;
  }

  .card:nth-child(2) .chevron-right {
    color: #7f8e94;
  }

  .card:nth-child(3) .chevron-right {
    color: purple;
  }

  .card p {
  }

  .card button {
  }

  @media (max-width: 1165px) {
    .row {
      justify-content: center;
    }

    .card {
      flex-basis: 45%;
    }

    .card:nth-child(1) {
      margin-right: 5%;
    }

    .card:nth-child(2) {
      margin-left: 5%;
    }

    .card:nth-child(3) {
      margin-top: 3rem;
    }
  }

  @media (max-width: 521px) {
    .row {
      flex-direction: column;
    }

    .card {
      flex-basis: 100%;
    }

    .card:nth-child(1),
    .card:nth-child(2),
    .card:nth-child(3) {
      margin: 0;
    }

    .card:nth-child(1),
    .card:nth-child(2) {
      margin-bottom: 3rem;
    }
  }
`;

export default ServicesSection;
