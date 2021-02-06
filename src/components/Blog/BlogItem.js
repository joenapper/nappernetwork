// Styled
import styled from "styled-components";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const BlogItem = (props) => {
  return (
    <Blog>
      <div className="test"></div>
      <div className="blog-text">
        <h3>{props.title}</h3>
        <div>
          <FontAwesomeIcon icon={faCalendarAlt} /> {props.date}
        </div>
        <p>{props.text}</p>
      </div>
    </Blog>
  );
};

const Blog = styled.div`
  margin: 4rem 0;
  display: flex;
  border: 1px solid #374251;

  .test {
    width: 300px;
    height: 200px;
    background-color: #8bd0f2;
  }

  .blog-text {
    margin: 2rem 2rem 2rem 3rem;
  }

  .blog-text div {
    margin-bottom: 1rem;
  }
`;

export default BlogItem;
