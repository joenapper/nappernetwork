// Components
import GlobalStyle from "./components/GlobalStyle";
import Navbar from "./components/Nav/Navbar";
import FooterSection from "./components/FooterSection";
// import ScrollToTopButton from "./components/ScrollToTopButton";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import SocialMedia from "./pages/SocialMedia";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
// Router
import { Switch, Route } from "react-router-dom";
// Animations
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Navbar />
      {/* <ScrollToTopButton /> */}

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/services">
          <Services />
        </Route>
        <Route path="/web-development">
          <WebDevelopment />
        </Route>
        <Route path="/digital-marketing">
          <DigitalMarketing />
        </Route>
        <Route path="/social-media">
          <SocialMedia />
        </Route>

        <Route path="/blog">
          <Blog />
        </Route>

        <Route path="/careers">
          <Careers />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      {/* Potential space save - if contact section is in same place on every page just add here */}
      <FooterSection />
    </div>
  );
}

export default App;
