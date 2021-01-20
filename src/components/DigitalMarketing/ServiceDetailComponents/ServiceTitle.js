// Styled
import styled from "styled-components";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// Smooth Scroll
import AnchorLink from "react-anchor-link-smooth-scroll";

const ServiceTitle = () => {
  return (
    <Title>
      <h2 className="extended-title">Digital Marketing Services</h2>
      <AnchorLink offset="100" href="#service">
        <FontAwesomeIcon className="chevron-down" icon={faChevronDown} />
      </AnchorLink>
    </Title>
  );
};

const Title = styled.div`
  color: #374251;
  text-align: center;

  .chevron-down {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export default ServiceTitle;
