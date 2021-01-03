// Styled
import styled from "styled-components";
// Images
import sample from "../media/sample.png";

const AboutSection = () => {
  return (
    <About>
      <div className="container">
        <div className="about-text">
          <h2>
            <span className="secondary">Why</span> Us?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            temporibus facere repellendus sequi impedit odio accusamus nihil
            repudiandae? Eveniet dolorum dolorem consequuntur! Quis quasi
            molestiae veritatis quos laudantium sint laborum accusantium
            consequatur aut facere cum nihil, temporibus fugit dicta corporis
            incidunt id, culpa, commodi labore assumenda? Quibusdam in ipsum
            iusto excepturi iure. Veniam illo amet nulla perferendis quidem sed
            mollitia tempore, quisquam possimus error? Commodi dignissimos
            consequatur provident ab iusto at debitis quasi, aut fuga officiis
            dolorum ullam aliquid maxime!
          </p>
          <button>Find Out More</button>
        </div>

        <img src={sample} alt="" srcset="" />
      </div>
    </About>
  );
};

const About = styled.section`
  background-color: #fff;
  color: #374251;
  padding: 4rem 0;
  position: relative;

  ::before {
    content: "";
    display: block;
    position: absolute;
    background-color: #7f8e94;
    width: 100%;
    top: 4rem;
    bottom: 4rem;
    left: 50%;
    transform: skewX(5deg);
    z-index: 0;
  }

  .container {
    display: flex;
  }

  .about-text {
    width: 40%;
  }

  h2 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  img {
    width: 60%;
    z-index: 1;
  }
`;

export default AboutSection;