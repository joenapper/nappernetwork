// Styled
import styled from "styled-components";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faObjectGroup,
  faLaptopCode,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

const ProcessSection = () => {
  return (
    <Process>
      <div className="container">
        <h2>
          The <span className="secondary">Process</span>
        </h2>
        <div className="step">
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
        </div>
        <div className="step step2">
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
        </div>
        <div className="step">
          <h3>
            <FontAwesomeIcon icon={faServer} className="step-icon" /> Deploy
          </h3>
          <p>
            After you have approved our designs we will deploy everything for
            you and continue to monitor our services and strategies to keep up
            with the dynamic platforms.
          </p>
        </div>
      </div>
    </Process>
  );
};

const Process = styled.section`
  background-color: #fff;
  color: #374251;
  padding: 4rem 0;

  h2 {
    text-align: center;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .step {
    width: 80%;
    border-bottom: 1px solid #374251;
    margin-bottom: 2rem;
  }

  .step p {
    padding: 0 5%;
    margin-bottom: 1rem;
  }

  .step2 {
    margin-left: 20%;
    text-align: right;
  }

  .step-icon {
    font-size: 1em;
    color: #374251;
  }
`;

export default ProcessSection;
