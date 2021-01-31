import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <div className="container">
        <p>
          Driven by a passionate and creative team, Napper Network is a fully
          managed digital design and development agency based in Sheffield. We
          take our time to understand your business so we can design and deliver
          a tailored, quality approach for your company, big or small.
          <br />
          If you want clear results, check out our services, and get in touch.
        </p>
      </div>
    </About>
  );
};

const About = styled.section`
  background: #fff;
  color: #374251;
  /* padding: 4rem 0rem; */
  height: 20vh;
  position: relative;

  p {
    width: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.5;
  }
`;

export default AboutSection;
