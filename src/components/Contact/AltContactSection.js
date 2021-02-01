// Styled
import styled from "styled-components";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const AltContactSection = () => {
  return (
    <AltContact>
      <div className="container">
        <h2>Alternatively,</h2>
        <span>Get in touch via social media</span>
        <div className="row">
          <FontAwesomeIcon className="alt-icon" icon={faFacebook} />
          <FontAwesomeIcon className="alt-icon" icon={faTwitter} />
          <FontAwesomeIcon className="alt-icon" icon={faInstagram} />
          <FontAwesomeIcon className="alt-icon" icon={faLinkedinIn} />
          <FontAwesomeIcon className="alt-icon" icon={faPinterest} />
        </div>
      </div>
    </AltContact>
  );
};

const AltContact = styled.section`
  padding: 4rem 0rem;

  .alt-icon {
    font-size: 4rem;
  }
`;

export default AltContactSection;
