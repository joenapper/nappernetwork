// Styled
import styled from "styled-components";
// Images
import logo from "../media/napper-network-complete.png";

const FooterSection = () => {
  return (
    <Footer>
      <div className="container">
        <div className="top-footer">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer-hr"></div>

        <div className="btm-footer">
          <img className="logo" src={logo} alt="" srcset="" />
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
    height: 100px;
  }
`;

export default FooterSection;
