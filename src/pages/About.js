// Components
import HeroSection from "../components/About/HeroSection";
import AboutSection from "../components/About/AboutSection";
// import ServicesSection from "../components/About/ServicesSection";
import ProcessSection from "../components/About/ProcessSection";
import ContactSection from "../components/Home/ContactSection";
// Helmet
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <main>
      <Helmet>
        <title>Napper Network - About</title>
        <meta
          name="description"
          content="Napper Network is a Sheffield based digital marketing and web development agency."
        />
      </Helmet>
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <ProcessSection />
      <ContactSection />
    </main>
  );
};

export default About;
