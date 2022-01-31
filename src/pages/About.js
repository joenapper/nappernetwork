// Components
import MetaData from "../components/MetaData";
import HeroSection from "../components/About/HeroSection";
import AboutSection from "../components/About/AboutSection";
import ProcessSection from "../components/About/ProcessSection";
import ContactSection from "../components/Home/ContactSection";
// Images
import AboutImg from "../media/about.png";

const About = () => {
  return (
    <>
      <MetaData title="About" />

      <HeroSection />
      <AboutSection
        titleMain="About"
        titleSec="Us?"
        text="Driven by a passionate and creative team, Napper Network is a fully
            managed digital design and development agency based in Sheffield. We
            take our time to understand your business so we can design and
            deliver a tailored, quality approach for your company, big or small.
            If you want clear results, check out our services, and
              get in touch.
            "
        image={AboutImg}
        imageAlt="Online presence"
      />
      <ProcessSection />
      <ContactSection />
    </>
  );
};

export default About;
