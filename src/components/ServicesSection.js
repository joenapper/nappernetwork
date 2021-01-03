// Styled
import styled from "styled-components";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
//
import test1 from "../media/sample1.png";
import test2 from "../media/sample2.png";
import test3 from "../media/sample3.png";

const ServicesSection = () => {
  return (
    <Services>
      <div className="container">
        {/* <h2>What We Do</h2> */}
        <div className="row">
          <a className="card">
            <div className="service-icon-container">
              <img className="service-icon" src={test1} alt="" srcset="" />
            </div>
            <h4>
              Web Development
              <FontAwesomeIcon
                className="chevron-right"
                icon={faChevronRight}
              />
            </h4>
            <p>
              We deliver bespoke web design and development that simply cannot
              be replicated by "out-the-box" alternatives.
            </p>
            {/* <li>
                <h4>Web Development</h4>
              </li>
              <li>
                <p>Modern Web Design</p>
              </li>
              <li>
                <p>Mobile Optimisation</p>
              </li>
              <li>
                <p>Detailed SEO Audits</p>
              </li>
              <li>
                <p>Hosting / Maintenance</p>
              </li>
              <li>
                <p>Ongoing Support</p>
              </li>
              <li>
                <button>Find Out More</button>
              </li> */}
          </a>

          <a className="card">
            <div className="service-icon-container">
              <img className="service-icon" src={test2} alt="" srcset="" />
            </div>
            <h4>
              Online Marketing
              <FontAwesomeIcon
                className="chevron-right"
                icon={faChevronRight}
              />
            </h4>
            <p>
              We deliver bespoke web design and development that simply cannot
              be replicated by "out-the-box" alternatives.
            </p>
          </a>

          <a className="card">
            <div className="service-icon-container">
              <img className="service-icon" src={test3} alt="" srcset="" />
            </div>
            <h4>
              Social Media
              <FontAwesomeIcon
                className="chevron-right"
                icon={faChevronRight}
              />
            </h4>
            <p>
              We deliver bespoke web design and development that simply cannot
              be replicated by "out-the-box" alternatives.
            </p>
          </a>
        </div>
      </div>
    </Services>
  );
};

const Services = styled.section`
  background: #fff;
  color: #374251;
  padding: 4rem 0rem;

  .card {
    flex-basis: 30%;
    cursor: pointer;
  }

  .card:hover h4 {
    text-decoration: underline;
  }

  .service-icon-container {
    height: 200px;
    width: 100%;
    background-color: #8bd0f2;
    display: flex;
  }

  .service-icon {
    height: 150px;
    width: 150px;
    margin: auto auto;
  }

  .card:nth-child(2) .service-icon-container {
    background-color: #7f8e94;
  }

  .card:nth-child(3) .service-icon-container {
    background-color: purple;
  }

  .card h4 {
    padding: 0.5rem 0 1rem 0;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }

  .chevron-right {
    margin-left: 0.4rem;
    font-size: 1rem;
  }

  .card:nth-child(1) .chevron-right {
    color: #8bd0f2;
  }

  .card:nth-child(2) .chevron-right {
    color: #7f8e94;
  }

  .card:nth-child(3) .chevron-right {
    color: purple;
  }

  .card p {
  }

  .card button {
  }
`;

export default ServicesSection;
