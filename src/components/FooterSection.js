// Styled
import styled from "styled-components";
// Images
import logo from "../media/logo-alt.png";
// Router
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <Footer>
      <div className="container">
        <div className="top-footer">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>

        <div className="footer-hr"></div>

        <div className="btm-footer">
          <img className="logo" src={logo} alt="Napper Network" />
          <p>All Rights Reserved &copy; 2020 NapperNetwork</p>
          <p>Socials</p>
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
    flex-wrap: wrap;
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
      margin: 0 1rem;
    }
  }
`;

export default FooterSection;
