import { useState } from "react";
// Styled
import styled from "styled-components";
// Components
import Burger from "./Burger";

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
        <a href="https://www.google.com">Home</a>
        <Burger />
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 1;
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
`;

export default Navbar;
