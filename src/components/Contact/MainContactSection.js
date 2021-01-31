// Styled
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { fade } from "../LogoAnimations";
import { useScroll } from "../useScroll";
// EmailJS
import emailjs from "emailjs-com";

const MainContactSection = () => {
  const [element, controls] = useScroll();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "rosie", e.target, process.env.REACT_APP_SECRET_KEY)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <MainContact>
      <div className="container">
        <h2>Send us a message</h2>
        <motion.form
          ref={element}
          variants={fade}
          animate={controls}
          initial="hidden"
          onSubmit={sendEmail}
        >
          <div className="row">
            <div className="inputs">
              <input
                type="text"
                id="name"
                placeholder="Your Name *"
                name="name"
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email *"
                name="email"
                required
              />
              <input
                type="text"
                id="company"
                placeholder="Your Company (If Applicable)"
                name="company"
              />
              <input
                type="number"
                id="telephone"
                placeholder="Your Telephone Number"
                name="telephone"
              />
            </div>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="What would you like to talk about?"
              required
            ></textarea>
          </div>
          <div className="button-container">
            <input className="button" type="submit" value="Send Message" />
          </div>
        </motion.form>
      </div>
    </MainContact>
  );
};

const MainContact = styled.section`
  padding: 4rem 0rem;
  color: #374251;
  background-color: #fff;

  .inputs {
    display: flex;
    flex-direction: column;
    width: 45%;
  }

  textarea {
    /* width: 50%; */
    flex-grow: 1;
    margin-left: 1rem;
  }

  .row input,
  textarea {
    padding: 1rem 0rem;
    margin-bottom: 1rem;
    background: none;
    border: 1px solid #374251;
    /* border: none; */
    /* outline: none; */
    /* border-bottom: 1px solid black; */
    font-family: "Montserrat", sans-serif;
    color: #374251;
    font-size: 1rem;
    flex-basis: 45%;
  }

  input::placeholder,
  textarea::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #374251;
    opacity: 1; /* Firefox */
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #374251;
  }

  input::-ms-input-placeholder,
  textarea::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #374251;
  }

  /* Removes chrome defaults from autocomplete */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px #374251 inset !important;
    -webkit-box-shadow: 0 0 0 30px #374251 inset !important;
  }

  /* textarea {
    resize: vertical;
    min-height: 100px;
    max-height: 600px;
  } */

  .button-container {
    display: flex;
    justify-content: flex-end;
  }
`;

export default MainContactSection;
