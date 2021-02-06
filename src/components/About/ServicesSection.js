// Styled
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <Services>
      <div className="container">
        <h2>
          Our <span className="primary">Services</span>
        </h2>
        <div className="row">
          <div className="card">
            <h3>Web Development</h3>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </div>
          <div className="card">
            <h3>Digital Marketing</h3>
            <p>SEO</p>
            <p>Email Marketing</p>
            <p>PPC</p>
          </div>
          <div className="card">
            <h3>Social Media</h3>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </div>
        </div>
      </div>
    </Services>
  );
};

const Services = styled.section`
  background-color: #8bd0f2;
  padding: 4rem 0;
  text-align: center;
`;

export default ServicesSection;
