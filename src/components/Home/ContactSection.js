// Styled
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { fade } from "../LogoAnimations";
import { useScroll } from "../useScroll";
// EmailJS
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

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
    <Contact>
      <div className="container">
        <motion.h2
          ref={element}
          variants={fade}
          animate={controls}
          initial="hidden"
        >
          Get In <span className="secondary">Touch.</span>
        </motion.h2>
        <motion.form
          ref={element2}
          variants={fade}
          animate={controls2}
          initial="hidden"
          onSubmit={sendEmail}
        >
          <div className="row">
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
          </div>
          <div className="row">
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
          <div className="button-container">
            <input className="button" type="submit" value="Send Message" />
          </div>
        </motion.form>
      </div>
    </Contact>
  );
};

const Contact = styled.section`
  padding: 4rem 0rem;

  h2 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .row input,
  textarea {
    padding: 1rem 0rem;
    margin-bottom: 1rem;
    background: none;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    font-size: 1rem;
    flex-basis: 45%;
  }

  input {
    background: none;
    border: none;
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    opacity: 1; /* Firefox */
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #fff;
  }

  input::-ms-input-placeholder,
  textarea::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #fff;
  }

  /* Removes chrome defaults from autocomplete */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px #374251 inset !important;
    -webkit-box-shadow: 0 0 0 30px #374251 inset !important;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
    max-height: 600px;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
  }

  .button {
    background-color: #fff;
    border: 1px solid #fff;
  }

  .button:hover {
    background-color: #374251;
  }

  @media (max-width: 1165px) {
    .container {
      width: 80%;
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 70%;
    }

    .row {
      flex-direction: column;
    }
  }
`;

export default ContactSection;
