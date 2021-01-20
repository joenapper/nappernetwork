// Components
import GlobalStyle from "./components/GlobalStyle";
import Navbar from "./components/Nav/Navbar";
import FooterSection from "./components/FooterSection";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import DigitalMarketing from "./pages/DigitalMarketing";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
// Router
import { Switch, Route } from "react-router-dom";
//import DigitalMarketing from "./pages/DigitalMarketing";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* ADD MENU TEXT NEXT TO BURGER */}
      <Navbar />

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
        <Route path="/digital-marketing">
          <DigitalMarketing />
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
