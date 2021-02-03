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
  const submit = document.getElementById("submit");

  function sendEmail(e) {
    e.preventDefault();

    if (submit.value === "Sent") {
      console.log("Refresh page to submit again");
    } else {
      submit.disabled = true;
      submit.classList.remove("button");
      submit.classList.add("is-loading");

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
    }
    setTimeout(() => {
      submit.classList.remove("is-loading");
      submit.classList.add("button");
      submit.value = "Sent";
      submit.style =
        "background-color: #fff !important; color: #374251 !important";
      submit.style.cursor = "default";
      e.target.reset();
    }, 1200);
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
            <input
              id="submit"
              className="button"
              type="submit"
              value="Send Message"
            />
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

  .inputs {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-right: 1rem;
  }

  .inputs input,
  textarea {
    /* padding: 1rem 0rem; */
    padding: 1rem;
    margin-bottom: 1rem;
    background: none;
    border: none;
    outline: none;
    /* border-bottom: 1px solid black; */
    border: 1px solid #f4f4f4;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    font-size: 1rem;
    flex-grow: 1;
  }

  input::placeholder,
  textarea::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
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
    -webkit-text-fill-color: #fff;
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

  input[type="submit"] {
    transition: all 0.25s ease, color 1ms;
  }

  input[type="submit"].is-loading {
    border-radius: 50%;
    background: transparent;
    color: transparent;
    border: 3px solid #fff;
    border-left-color: #374251;
    animation: rotating 2s 0.25s linear infinite;
    animation-delay: 0s;
    width: 3.5rem;
    height: 3.5rem;
  }

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    .row {
      flex-direction: column;
    }

    .inputs {
      margin: 0;
    }

    input[type="submit"].is-loading {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

export default ContactSection;
