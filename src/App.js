// Components
import GlobalStyle from "./components/GlobalStyle";
import Navbar from "./components/Nav/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import BannerSection from "./components/BannerSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* ADD MENU TEXT NEXT TO BURGER */}
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BannerSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
