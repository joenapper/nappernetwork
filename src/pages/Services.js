// Components
// import UnderMaintenance from "../components/UnderMaintenance";
// import HeroDMSection from "../components/DigitalMarketing/HeroDMSection";
import HeroSection from "../components/Services/HeroSection";
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
    </main>
  );
};

export default Services;
