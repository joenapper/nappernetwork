import { useState } from "react";
// Styled
import styled from "styled-components";
// Components
import Burger from "./Burger";
// Images
import Logo from "../../media/nav-logo.png";
// Router
import { Link } from "react-router-dom";

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
        <Link to="/">
          <img className="logo" src={Logo} alt="Napper Network" />
        </Link>
        <Burger />
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 5;
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
    display: flex;
    /* font-size: 1.1rem; */
    /* letter-spacing: 2px; */
  }

  .logo {
    max-width: 250px;
  }

  @media (max-width: 1640px) {
    .logo {
      max-width: 200px;
    }
  }

  @media (max-width: 1400px) {
    width: 70%;

    /* a {
      font-size: 1rem;
    } */
  }

  @media (max-width: 1150px) {
    .logo {
      max-width: 150px;
    }
  }

  /* @media (max-width: 1156px) {
    width: 80%;
  } */

  @media (max-width: 1000px) {
    width: 90%;

    a {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 550px) {
    .logo {
      max-width: 200px;
    }
  }
`;

export default Navbar;
