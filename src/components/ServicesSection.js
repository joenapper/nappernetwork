// Styled
import styled from "styled-components";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
//
import test1 from "../media/sample1.png";
import test2 from "../media/sample2.png";
import test3 from "../media/sample3.png";
// Animations
import { motion } from "framer-motion";
import { fade } from "./LogoAnimations";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  return (
    <Services>
      <div className="container">
        {/* <h2>What We Do</h2> */}
        <div className="row">
          <motion.a
            ref={element}
            variants={fade}
            animate={controls}
            initial="hidden"
            className="card"
          >
            <div className="service-icon-container">
              <img className="service-icon" src={test1} alt="" srcset="" />
            </div>
            <h4>
              Web Development
              <FontAwesomeIcon
                className="chevron-right"
                icon={faChevronRight}
              />
            </h4>
            <p>
              We deliver bespoke web design and development that simply cannot
              be replicated by "out-the-box" alternatives.
            </p>
            {/* <li>
                <h4>Web Development</h4>
              </li>
              <li>
                <p>Modern Web Design</p>
              </li>
              <li>
                <p>Mobile Optimisation</p>
              </li>
              <li>
                <p>Detailed SEO Audits</p>
              </li>
              <li>
                <p>Hosting / Maintenance</p>
              </li>
              <li>
                <p>Ongoing Support</p>
              </li>
              <li>
                <button>Find Out More</button>
              </li> */}
          </motion.a>

          <motion.a
            ref={element2}
            variants={fade}
            animate={controls2}
            initial="hidden"
            className="card"
          >
            <div className="service-icon-container">
              <img className="service-icon" src={test2} alt="" srcset="" />
            </div>
            <h4>
              Online Marketing
              <FontAwesomeIcon
                className="chevron-right"
                icon={faChevronRight}
              />
            </h4>
            <p>
              We deliver bespoke web design and development that simply cannot
              be replicated by "out-the-box" alternatives.
            </p>
          </motion.a>

          <motion.a
            ref={element3}
            variants={fade}
            animate={controls3}
            initial="hidden"
            className="card"
          >
            <div className="service-icon-container">
              <img className="service-icon" src={test3} alt="" srcset="" />
            </div>
            <h4>
              Social Media
              <FontAwesomeIcon
                className="chevron-right"
                icon={faChevronRight}
              />
            </h4>
            <p>
              We deliver bespoke web design and development that simply cannot
              be replicated by "out-the-box" alternatives.
            </p>
          </motion.a>
        </div>
      </div>
    </Services>
  );
};

const Services = styled.section`
  background: #fff;
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
    background-color: purple;
  }

  .card h4 {
    padding: 0.5rem 0 1rem 0;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
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

  /* @media (max-width: 768px) {
    .container {
      width: 90%;
    }
  } */

  @media (max-width: 510px) {
    /* .container {
      width: 90%;
    } */

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
