// Components
// import ServiceItemHero from "../components/Services/ServiceItemHero";
import HeroSection from "../components/Services/HeroSection";
import ServicesSection from "../components/Home/ServicesSection";
import BannerSection from "../components/Services/BannerSection";
import AboutSection from "../components/About/AboutSection";
import ContactSection from "../components/Home/ContactSection";
// Helmet
import { Helmet } from "react-helmet-async";
// Images
import ServicesImg from "../media/services.png";

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
      <BannerSection />
      <AboutSection
        titleMain="Bespoke"
        titleSec="Solutions"
        text="We provide bespoke packages to suit your businesses goals and requirements. By taking time to understand your business, we can deliver effective strategies specific to your industry by conducting competitor analysis to maximise customer acquisition and increase conversions.  Whether you require one or multiple services, our expert team can create a solution for you!"
        image={ServicesImg}
      />
      <ContactSection />
    </main>
  );
};

export default Services;
