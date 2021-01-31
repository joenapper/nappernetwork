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
        </p>
        <p>
          If you want clear results, check out our services, and get in touch.
        </p>
      </div>
    </About>
  );
};

const About = styled.section`
  background: #fff;
  color: #374251;
  padding: 4rem 0rem;
`;

export default AboutSection;
