// Styled
import styled from "styled-components";
// Components
import BlogItem from "./BlogItem";

const BlogsContainer = () => {
  return (
    <section>
      <Blogs>
        <div className="container">
          <div className="blogs-wrapper">
            <h2>Welcome to our Blog</h2>
            <div className="row">
              <div className="button">Online Presence</div>
              <div className="button">Design</div>
              <div className="button">SEO</div>
              {/* <input
                className="button"
                type="search"
                name=""
                id=""
                placeholder="Search our blogs.."
              /> */}
              <div className="button coming-soon">More coming soon!</div>
            </div>
            <BlogItem
              title="Benefits of investing in UX design"
              date="October 3, 2020"
              text="User experience design (UX design) is the process of supporting user behaviour by designing interfaces focusing on usability, usefulness and..."
            />
            <BlogItem
              title="Why You Should Invest In An Online Presence"
              date="July 22, 2020"
              text="As a business, your goals are most likely to generate leads, make sales and increase awareness of your company. The vast majority of your pote..."
            />
          </div>
        </div>
      </Blogs>
      <SpaceSaver></SpaceSaver>
    </section>
  );
};

const Blogs = styled.main`
  background-color: transparent;
  color: #374251;
  position: absolute;
  /* top: calc(8vh + 4rem); */
  top: 23vh;
  width: 100%;
  z-index: 0;

  .container {
    position: relative;
    z-index: 1;
  }

  .container::before {
    content: "";
    position: absolute;
    top: 0;
    left: -10%;
    /* left: 0; */
    right: -10%;
    /* right: 0; */
    /* width: 100%; */
    height: inherit;
    background-color: #fff;
    z-index: 0;
    border: 1px solid #374251;
  }

  h2 {
    text-align: center;
  }

  .blogs-wrapper {
    position: relative;
    padding: 4rem 0;
  }

  .button {
    border: 1px solid #374251;
  }

  .button:nth-child(1) {
    min-width: 239px;
  }

  .row {
    justify-content: start;
  }

  .row div {
    margin-right: 2rem;
  }

  input,
  .coming-soon {
    flex-grow: 1;
    /* Placeholder below */
    background-color: #374251;
    color: #fff;
    cursor: revert;
  }
`;

const SpaceSaver = styled.div`
  height: 50vh;
  background-color: #fff;
`;

export default BlogsContainer;
