// Styled
import styled from "styled-components";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
// Animations
import { motion } from "framer-motion";
import { fade } from "../LogoAnimations";
import { useScroll } from "../useScroll";

const ServiceItemAlt = ({
  title,
  text,
  bulletOne,
  bulletTwo,
  bulletThree,
  background,
}) => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <ItemAlt>
      <motion.div
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
        className="service-text"
      >
        <h2>{title}</h2>
        <p>{text}</p>
        <h3>We can:</h3>
        <ul className="we-can">
          <li>
            <FontAwesomeIcon className="bullet-point" icon={faDotCircle} />
            <p>{bulletOne}</p>
          </li>
          <li>
            <FontAwesomeIcon className="bullet-point" icon={faDotCircle} />
            <p>{bulletTwo}</p>
          </li>
          <li>
            <FontAwesomeIcon className="bullet-point" icon={faDotCircle} />
            <p>{bulletThree}</p>
          </li>
        </ul>
      </motion.div>
      <motion.div
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
        className="service-image"
      >
        <div className="img-container" style={{ background: background }}></div>
      </motion.div>
    </ItemAlt>
  );
};

const ItemAlt = styled.div`
  padding: 2rem 0rem;
  display: flex;
  align-items: center;
  position: relative;
  color: #374251;

  .service-text {
    width: 50%;
    padding-right: 2rem;
  }

  .service-image {
    height: 40vh;
    width: 100%;
    margin-right: -50%;
    position: relative;
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
    box-shadow: 1px 1px 5px 1px rgba(77, 77, 77, 0.05);
  }

  .img-container {
    position: absolute;
    top: 2rem;
    right: 50%;
    bottom: 2rem;
    left: 2rem;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
  }

  h2 {
    margin-bottom: 2rem;
    font-family: "Kollektif-Bold", sans-serif;
    text-align: right;
  }

  p {
    color: #374251;
    line-height: 1.5;
    font-size: 1.2rem;
  }

  .we-can {
    color: #374251;
    width: 90%;
    margin: auto;
  }

  .we-can li {
    display: flex;
    align-items: center;
    padding: 0.5rem 0rem;
  }

  .we-can li p {
    line-height: 1;
  }

  .bullet-point {
    color: #374251;
    font-size: 0.75rem;
    margin-right: 0.5rem;
  }

  h3 {
    margin: 1rem 0rem 0.5rem 0rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    .service-image {
      width: 100%;
      margin: 0;
      order: 1;
    }

    .img-container {
      left: 2rem;
    }

    .service-text {
      width: 100%;
      padding: 0;
      order: 2;
    }

    h2 {
      margin-top: 1rem;
    }
  }

  @media (max-width: 768px) {
    .img-container {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }

  @media (max-width: 521px) {
    .service-image {
      height: 250px;
    }
  }

  @media (max-width: 421px) {
    padding: 0rem;
  }
`;

export default ServiceItemAlt;
