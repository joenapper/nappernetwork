// Styled
import styled from "styled-components";

const BannerSection = ({ text }) => {
  return (
    <Banner>
      <div className="container">
        <h2 className="extended-title">{text}</h2>
      </div>
    </Banner>
  );
};

const Banner = styled.section`
  background-color: #8bd0f2;
  padding: 4rem 0;
  text-align: center;

  .extended-title {
    margin: 0;
  }

  @media (max-width: 1024px) {
    .extended-title {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 1165px) {
    .container {
      width: 80%;
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 90%;
    }
  }

  @media (max-width: 550px) {
    .extended-title {
      font-size: 1.5rem;
    }
  }
`;

export default BannerSection;
