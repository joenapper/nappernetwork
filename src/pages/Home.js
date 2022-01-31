// Components
import MetaData from "../components/MetaData";
import HeroSection from "../components/Home/HeroSection";
import ServicesSection from "../components/Home/ServicesSection";
import BannerSection from "../components/Home/BannerSection";
import AboutSection from "../components/Home/AboutSection";
import ContactSection from "../components/Home/ContactSection";

const Home = () => {
  return (
    <main>
      <MetaData title="Home" />

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
