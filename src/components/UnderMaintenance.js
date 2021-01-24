// Styled
import styled from "styled-components";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

const UnderMaintenance = () => {
  return (
    <Maintenance>
      <FontAwesomeIcon className="placeholder" icon={faTools} />
      <h2>This page is currently under maintenance.</h2>
      <p>Sorry for the inconvenience.</p>
    </Maintenance>
  );
};

const Maintenance = styled.main`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .placeholder {
    font-size: 15rem;
  }
`;

export default UnderMaintenance;
