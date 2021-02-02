// Styled
import styled from "styled-components";
// Router
import { Link } from "react-router-dom";
// Animation
import { motion } from "framer-motion";
import { fade } from "../LogoAnimations";
import { useScroll } from "../useScroll";

const AboutSection = () => {
  const [element, controls] = useScroll();
  return (
    <About>
      <motion.div
        className="container"
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <p>
          Driven by a passionate and creative team, Napper Network is a fully
          managed digital design and development agency based in Sheffield. We
          take our time to understand your business so we can design and deliver
          a tailored, quality approach for your company, big or small.
          <br />
          If you want clear results, check out our services, and{" "}
          <Link to="/contact">get in touch.</Link>
        </p>
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
  padding: 4rem 0rem;
  min-height: 20vh;
  font-size: 1.2rem;

  p {
    line-height: 1.5;
  }

  a {
    color: #8bd0f2;
    text-decoration: underline;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

export default AboutSection;
