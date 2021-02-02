// Styled
import styled from "styled-components";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faObjectGroup,
  faLaptopCode,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
// Animation
import { motion } from "framer-motion";
import { fade } from "../LogoAnimations";
import { useScroll } from "../useScroll";

const ProcessSection = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  return (
    <Process>
      <div className="container">
        <motion.h2
          ref={element}
          variants={fade}
          animate={controls}
          initial="hidden"
        >
          The <span>Process</span>
        </motion.h2>
        {/* <motion.div
          ref={element2}
          variants={fade}
          animate={controls2}
          initial="hidden"
          className="step"
        >
          <h3>
            <FontAwesomeIcon icon={faObjectGroup} className="step-icon" />{" "}
            Design
          </h3>
          <p>
            The first step of our process is to fully understand your business’
            goals and needs, we believe this is the most important step so we
            can figure out if our services will benefit you and create a
            specific plan. We will then create and deliver a proposal tailored
            to your business.
          </p>
        </motion.div>
        <motion.div
          ref={element3}
          variants={fade}
          animate={controls3}
          initial="hidden"
          className="step step2"
        >
          <h3 className="right">
            Develop{" "}
            <FontAwesomeIcon icon={faLaptopCode} className="step-icon" />
          </h3>
          <p>
            Once everything is agreed upon we will take care of everything for
            you from design to developing software. We take time to fully
            develop and test our services to ensure your business gets the best
            return on investment. We will also create long-term marketing and
            SEO strategies.
          </p>
        </motion.div>
        <motion.div
          ref={element4}
          variants={fade}
          animate={controls4}
          initial="hidden"
          className="step"
        >
          <h3>
            <FontAwesomeIcon icon={faServer} className="step-icon" /> Deploy
          </h3>
          <p>
            After you have approved our designs we will deploy everything for
            you and continue to monitor our services and strategies to keep up
            with the dynamic platforms.
          </p>
        </motion.div> */}
      </div>
    </Process>
  );
};

const Process = styled.section`
  background-color: #8bd0f2;
  color: #374251;
  padding: 4rem 0;

  h2 {
    text-align: center;
  }

  span {
    color: #fff;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .step {
    width: 80%;
    border-bottom: 1px solid #fff;
    margin-bottom: 2rem;
  }

  .step p {
    padding: 0 5%;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .step2 {
    margin-left: 20%;
    text-align: right;
  }

  .step-icon {
    font-size: 1em;
    color: #f4f4f4;
  }

  @media (max-width: 550px) {
    h3 {
      font-size: 1.5rem;
    }

    .step {
      width: 100%;
    }

    .step p {
      font-size: 1rem;
    }

    .step2 {
      margin-left: 0%;
    }
  }
`;

export default ProcessSection;
