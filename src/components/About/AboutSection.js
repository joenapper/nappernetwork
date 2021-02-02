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
  background: #fff;
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
