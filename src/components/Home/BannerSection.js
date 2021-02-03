// Styled
import styled from "styled-components";

const BannerSection = (props) => {
  // setTimeout(() => {
  //   const title = document.querySelector(".extended-title");
  //   const titleStringValue = title.innerHTML;
  //   if (
  //     titleStringValue === "Reach - Enhance - Convert"
  //     // title.style.display === "block"
  //   ) {
  //     console.log("yes");
  //     title.innerHTML = "Reach </br> Enhance </br> Convert";
  //   }
  // }, 100);

  return (
    <Banner>
      <div className="container">
        <h2 className="extended-title">{props.text}</h2>
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

  /* @media (max-width: 650px) {
    .extended-title {
      display: block;
    }
  } */

  @media (max-width: 550px) {
    .extended-title {
      font-size: 1.5rem;
    }
  }
`;

export default BannerSection;
