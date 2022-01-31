// Helmet
import { Helmet } from "react-helmet-async";
// Components
import HeroSection from "../components/Contact/HeroSection";
import MainContact from "../components/Contact/MainContact";

const Contact = () => {
  return (
    <main>
      <Helmet>
        <title>Napper Network - Contact</title>
        <meta
          name="description"
          content="Napper Network is a Sheffield based digital marketing and web development agency."
        />
      </Helmet>

      <HeroSection />
      <MainContact />
    </main>
  );
};

export default Contact;
