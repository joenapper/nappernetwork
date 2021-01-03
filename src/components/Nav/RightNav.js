// Styled
import styled from "styled-components";

const RightNav = ({ open }) => {
  return (
    <NavList open={open}>
      <li>
        <a href="https://www.google.com">Home</a>
      </li>
      <li>
        <a href="https://www.google.com">About</a>
      </li>
      <li>
        <a href="https://www.google.com">Services</a>
      </li>
      <li>
        <a href="https://www.google.com">Blog</a>
      </li>
      <li>
        <a href="https://www.google.com">Careers</a>
      </li>
      <li>
        <a href="https://www.google.com">Contact</a>
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

  @media (max-width: 1000px) {
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
