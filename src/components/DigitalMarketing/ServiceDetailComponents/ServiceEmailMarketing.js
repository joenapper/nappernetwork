// Styled
import styled from "styled-components";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
// Images
import EmailMarketingImg from "../../../media/email-marketing.png";

const ServiceEmailMarketing = () => {
  return (
    <EmailMarketing>
      <h2>Email Marketing</h2>
      <p>
        We provide effective search engine optimisation strategies to improve
        the visablility of your website.
      </p>
      <h3>We can:</h3>
      <ul className="we-can">
        <li>
          <FontAwesomeIcon className="bullet-point" icon={faDotCircle} />
          <p>Something about EmailMarketing...</p>
        </li>
        <li>
          <FontAwesomeIcon className="bullet-point" icon={faDotCircle} />
          <p>Something about EmailMarketing...</p>
        </li>
        <li>
          <FontAwesomeIcon className="bullet-point" icon={faDotCircle} />
          <p>Something about EmailMarketing...</p>
        </li>
      </ul>
    </EmailMarketing>
  );
};

const EmailMarketing = styled.div`
  width: 50%;
  padding: 4rem 4rem 4rem 0rem;
  margin: 8rem 0rem;
  position: relative;
  color: #374251;
  text-align: left;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 100%;
    height: 100%;
    width: 50vw;
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
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 10%;
    left: 110%;
    height: 80%;
    width: 90%;
    background: url(${EmailMarketingImg}) center no-repeat;
    background-size: cover;
  }

  h2 {
    margin: 1rem 0rem 2rem 0rem;
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
    width: 100%;
    margin: 418px 0% 8rem 0%;
    padding: 4rem 0rem;

    &::before {
      display: none;
    }

    &::after {
      top: -100%;
      left: 0;
      height: 100%;
      min-height: 418px;
      width: 100%;
    }

    h2 {
      margin-top: -1rem;
    }
  }
`;

export default ServiceEmailMarketing;
