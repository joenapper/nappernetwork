// Styled
import styled from "styled-components";
// Router
import { Link } from "react-router-dom";

const RightNav = ({ open, setOpen }) => {
  const closeNav = () => setOpen(false);
  return (
    <NavList open={open}>
      <li>
        <Link to="/" onClick={closeNav}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/careers">Careers</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </NavList>
  );
};

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  li {
    margin-left: 3rem;
  }

  a::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background-color: #8bd0f2;
    transition: width 0.4s;
  }

  a:hover::after {
    width: 100%;
  }

  @media (max-width: 1600px) {
    li {
      margin-left: 2rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    background-color: #374251;
    border-left: 1px solid #7f8e94;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 70vw;
    transition: transform 0.5s ease-in-out;

    li {
      margin: 0;
    }
  }
`;

export default RightNav;
