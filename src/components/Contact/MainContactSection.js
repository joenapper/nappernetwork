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
        "background-color: #374251 !important; color: #fff !important";
      submit.style.cursor = "default";
      e.target.reset();
    }, 1200);
  }
  return (
    <MainContact id="service">
      <h2 className="secondary">We would love to hear from you.</h2>
      <motion.form
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
        onSubmit={sendEmail}
      >
        <input
          className="info"
          type="text"
          id="name"
          placeholder="Your Name *"
          name="name"
          required
        />
        <input
          className="info"
          type="email"
          id="email"
          placeholder="Your Email *"
          name="email"
          required
        />
        <input
          className="info"
          type="text"
          id="company"
          placeholder="Your Company (If Applicable)"
          name="company"
        />
        <input
          className="info"
          type="number"
          id="telephone"
          placeholder="Your Telephone Number"
          name="telephone"
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="What would you like to talk about?"
          required
        ></textarea>
        <div className="button-container">
          <input
            id="submit"
            className="button button-alt"
            type="submit"
            value="Send Message"
          />
        </div>
      </motion.form>
    </MainContact>
  );
};

const MainContact = styled.section`
  padding: 4rem 0rem;
  color: #374251;

  h2 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .info,
  textarea {
    width: 50%;
    padding: 1rem;
    margin: 0rem auto 1rem auto;
    background: none;
    border: 1px solid #374251;
    font-family: "Montserrat", sans-serif;
    color: #374251;
    font-size: 1rem;
    flex-basis: 45%;
  }

  /* textarea {
    resize: vertical;
    min-height: 100px;
    max-height: 1600px;
  } */

  .button-container {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: flex-end;
  }

  input[type="submit"] {
    transition: all 0.25s ease, color 1ms;
  }

  input[type="submit"].is-loading {
    border-radius: 50%;
    background: transparent;
    color: transparent;
    border: 3px solid #374251;
    border-left-color: #fff;
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

  @media (max-width: 1300px) {
    .info,
    textarea {
      width: 60%;
    }
  }

  @media (max-width: 1100px) {
    .info,
    textarea {
      width: 70%;
    }

    .button-container {
      width: 70%;
    }
  }

  @media (max-width: 768px) {
    input[type="submit"].is-loading {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  @media (max-width: 500px) {
    .info,
    textarea {
      width: 80%;
    }

    .button-container {
      width: 80%;
    }
  }

  @media (max-width: 450px) {
    .info,
    textarea {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 375px) {
    .info,
    textarea {
      width: 100%;
    }

    .button-container {
      width: 100%;
    }
  }
`;

export default MainContactSection;
