// Components
import HeroSection from "../components/Home/HeroSection";
import ServicesSection from "../components/Home/ServicesSection";
import BannerSection from "../components/Home/BannerSection";
import AboutSection from "../components/Home/AboutSection";
import ContactSection from "../components/Home/ContactSection";
// Helmet
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Napper Network - Home</title>
        <meta
          name="description"
          content="Napper Network is a Sheffield based digital marketing and web development agency."
        />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <BannerSection
        text="Driven by results, we create successful marketing solutions for
          businesses."
      />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Home;
