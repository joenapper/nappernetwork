// Styled
import styled from "styled-components";

const BannerSection = () => {
  return (
    <Banner>
      <div className="container">
        <h2>
          Driven by results, we create successful marketing solutions for
          businesses.
        </h2>
      </div>
    </Banner>
  );
};

const Banner = styled.section`
  background-color: #8bd0f2;
  padding: 4rem 0;
  text-align: center;
`;

export default BannerSection;
