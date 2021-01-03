import { useState } from "react";
// Styled
import styled from "styled-components";
// Components
import Burger from "./Burger";
// Images
import logo from "../../media/logo.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const addBackground = () => {
    if (window.scrollY > 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", addBackground);

  return (
    <Header navbar={navbar}>
      <Nav>
        <a href="https://www.google.com">
          <img src={logo} alt="" srcset="" />
        </a>
        <Burger />
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 2;
  transition: all 0.1s ease-in-out;
  background: ${({ navbar }) => (navbar ? "#374251" : "transparent")};
`;

const Nav = styled.nav`
  width: 60%;
  margin: auto;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 1.1rem;
    letter-spacing: 2px;
  }

  @media (max-width: 1400px) {
    width: 70%;

    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 1156px) {
    width: 80%;
  }

  @media (max-width: 1000px) {
    width: 90%;

    a {
      font-size: 0.9rem;
    }
  }
`;

export default Navbar;
