// Components
import HeroSection from "../components/Contact/HeroSection";
// import MainContactSection from "../components/Contact/MainContactSection";
// import AltContactSection from "../components/Contact/AltContactSection";
// import ContactTitle from "../components/Contact/ContactTitle";
import MainContact from "../components/Contact/MainContact";
// Helmet
import { Helmet } from "react-helmet-async";

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
      {/* <ContactTitle /> */}
      {/* <MainContactSection /> */}
      {/* <AltContactSection /> */}
    </main>
  );
};

export default Contact;
