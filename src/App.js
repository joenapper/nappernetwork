import { lazy, Suspense } from "react";
// Components
import GlobalStyle from "./components/GlobalStyle";
// Router
import { Switch, Route } from "react-router-dom";
// Animations
import ScrollTop from "./components/ScrollTop";

// Components
const Navbar = lazy(() => import("./components/Nav/Navbar"));
const FooterSection = lazy(() => import("./components/FooterSection"));
// Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));
const SocialMedia = lazy(() => import("./pages/SocialMedia"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <div className="App">
      <ScrollTop />
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
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

          <Route path="/web-development">
            <WebDevelopment />
          </Route>

          <Route path="/digital-marketing">
            <DigitalMarketing />
          </Route>

          <Route path="/social-media">
            <SocialMedia />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

        <FooterSection />
      </Suspense>
    </div>
  );
}

export default App;
