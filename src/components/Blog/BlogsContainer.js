// Styled
import styled from "styled-components";

const BlogsContainer = () => {
  return (
    <Blogs>
      <div className="container">
        {/* <h1>test</h1> */}
        <div className="blogs-wrapper">
          <h3>test</h3>
        </div>
      </div>
    </Blogs>
  );
};

const Blogs = styled.main`
  background-color: transparent;
  color: #374251;
  position: absolute;
  top: calc(8vh + 4rem);
  width: 100%;
  z-index: 0;
  /* padding: 4rem 0; */

  /* .blogs-wrapper {
    background-color: red;
  } */

  .container {
    position: relative;
    z-index: 1;
  }

  .container::before {
    content: "";
    position: absolute;
    top: 0;
    /* left: -10%; */
    left: 0;
    /* right: -10%; */
    right: 0;
    /* width: 100%; */
    height: inherit;
    background-color: #fff;
    z-index: 0;
  }

  .blogs-wrapper {
    position: relative;
    padding: 4rem 0;
  }
`;

export default BlogsContainer;
