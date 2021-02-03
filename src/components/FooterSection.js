// Styled
import styled from "styled-components";
// Images
import logo from "../media/footer-logo.png";
// Router
import { Link } from "react-router-dom";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <Footer>
      <div className="container">
        <div className="top-footer">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          {/* <Link to="/blog">Blog</Link> */}
          {/* <Link to="/careers">Careers</Link> */}
          <Link to="/contact">Contact</Link>
          {/* <Link to="/privacy-policy">Privacy Policy</Link> */}
        </div>

        <div className="footer-hr"></div>

        <div className="btm-footer">
          <img className="logo" src={logo} alt="Napper Network" />
          <p>All Rights Reserved &copy; 2021 NapperNetwork</p>
          {/* <p>Socials</p> */}
          <div className="socials">
            <FontAwesomeIcon className="icon" icon={faFacebook} />
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <FontAwesomeIcon className="icon" icon={faInstagram} />
            <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
            <FontAwesomeIcon className="icon" icon={faPinterest} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

const Footer = styled.footer`
  background-color: #fff;
  color: #374251;
  padding: 4rem 0rem;

  .top-footer {
    display: flex;
    justify-content: space-between;
    /* flex-wrap: wrap; */
  }

  .top-footer a:hover {
    text-decoration: underline;
  }

  .footer-hr {
    width: 100%;
    height: 1px;
    background-color: #8bd0f2;
    /* margin: 2rem 0rem; */
    margin: 2rem 0rem 0.5rem 0rem;
  }

  .btm-footer {
    text-align: center;
  }

  .socials {
    display: flex;
    justify-content: center;
  }

  .icon {
    margin: 1rem 1rem 0rem 1rem;
    cursor: pointer;
    font-size: 1rem;
  }

  .logo {
    /* height: 100px; */
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

    .top-footer a {
      /* margin: 0 1rem; */
    }
  }
`;

export default FooterSection;
