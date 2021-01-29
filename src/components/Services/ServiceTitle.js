// Styled
import styled from "styled-components";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// Smooth Scroll
import AnchorLink from "react-anchor-link-smooth-scroll";

const ServiceTitle = (props) => {
  return (
    <Title>
      <h2 className="extended-title">{props.title}</h2>
      <AnchorLink offset="100" href="#service">
        <FontAwesomeIcon className="chevron-down" icon={faChevronDown} />
      </AnchorLink>
    </Title>
  );
};

const Title = styled.div`
  color: #374251;
  text-align: center;

  h2 {
    font-size: 2rem;
  }

  .chevron-down {
    font-size: 2rem;
    cursor: pointer;
  }

  @media (max-width: 521px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export default ServiceTitle;
