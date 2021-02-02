// Components
// import ServiceItemHero from "../components/Services/ServiceItemHero";
import HeroSection from "../components/Services/HeroSection";
import ServicesSection from "../components/Home/ServicesSection";
import ProcessSection from "../components/Services/ProcessSection";
import ContactSection from "../components/Home/ContactSection";
// Helmet
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <main>
      <Helmet>
        <title>Napper Network - Services</title>
        <meta
          name="description"
          content="Napper Network is a Sheffield based digital marketing and web development agency."
        />
      </Helmet>
      <HeroSection />
      {/* <ServiceItemHero
        title="Services"
        text="At Napper Network we offer a wide range of services to suit your business needs."
      /> */}
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
};

export default Services;
