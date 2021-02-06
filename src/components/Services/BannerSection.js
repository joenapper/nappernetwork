// Styled
import styled from "styled-components";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltRight,
  faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons";

const BannerSection = () => {
  return (
    <Banner>
      <div className="container">
        <h2 className="extended-title desk">
          Reach{" "}
          <FontAwesomeIcon className="next-step" icon={faLongArrowAltRight} />{" "}
          Engage{" "}
          <FontAwesomeIcon className="next-step" icon={faLongArrowAltRight} />{" "}
          Convert
        </h2>
      </div>
      <h2 className="extended-title mob">
        <p>Reach</p>
        <FontAwesomeIcon className="next-step" icon={faLongArrowAltDown} />{" "}
        <p>Engage</p>
        <FontAwesomeIcon className="next-step" icon={faLongArrowAltDown} />{" "}
        <p>Convert</p>
      </h2>
    </Banner>
  );
};

const Banner = styled.section`
  background-color: #8bd0f2;
  padding: 4rem 0;
  text-align: center;

  .mob {
    display: none;
  }

  .extended-title {
    margin: 0;
  }

  .next-step {
    font-size: 3rem;
  }

  @media (max-width: 1024px) {
    .next-step,
    .extended-title {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 1165px) {
    .container {
      width: 80%;
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 90%;
    }
  }

  @media (max-width: 600px) {
    .desk {
      display: none;
    }

    .mob {
      display: block;
    }
  }

  @media (max-width: 550px) {
    .next-step,
    .extended-title {
      font-size: 1.5rem;
    }
  }
`;

export default BannerSection;
