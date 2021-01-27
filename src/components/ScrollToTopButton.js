// Styled
import styled from "styled-components";
// Smooth Scroll
import AnchorLink from "react-anchor-link-smooth-scroll";

const ScrollToTopButton = () => {
  return (
    <ScrollToTop>
      <AnchorLink offset="1000000" href="#navbar">
        <h1>Back to top</h1>
      </AnchorLink>
    </ScrollToTop>
  );
};

const ScrollToTop = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 2;
`;

export default ScrollToTopButton;
