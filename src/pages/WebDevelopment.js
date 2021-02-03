// Styled
import styled from "styled-components";
// Components
import ServiceItemHero from "../components/Services/ServiceItemHero";
import ServiceTitle from "../components/Services/ServiceTitle";
import ServiceItem from "../components/Services/ServiceItem";
import ServiceItemAlt from "../components/Services/ServiceItemAlt";
import ContactSection from "../components/Home/ContactSection";
// Images
import WebDevelopmentHero from "../media/web-development-hero.png";
import BespokeWebsitesImg from "../media/bespoke-websites.png";
import WebDesignImg from "../media/web-design.png";
import HostingImg from "../media/hosting.png";
// Helmet
import { Helmet } from "react-helmet-async";

const WebDevelopment = () => {
  return (
    <main>
      <Helmet>
        <title>Napper Network - Web Development</title>
        <meta
          name="description"
          content="At Napper Network, we focus on user experience. Creating bespoke websites to improve your online presence and set you apart from competitors."
        />
      </Helmet>
      <ServiceItemHero
        title="Web Development"
        text="Focusing on user experience, we create bespoke websites to improve your online presence and set you apart from competitors."
        background={`url(${WebDevelopmentHero})`}
      />
      <ServiceDetail>
        <div className="container">
          <ServiceTitle title="Web Development Services" />
          <ServiceItem
            title="Bespoke Websites"
            text="We create completely  unique, modern websites that will rank highly in organic search results and help grow your business."
            bulletOne="Use modern technologies to create fast and powerful websites."
            bulletTwo="Work with you to ensure content improves SEO and boosts interactivity."
            bulletThree="Deliver a unique website to stay ahead of the competition."
            background={`url(${BespokeWebsitesImg})`}
          />

          <ServiceItemAlt
            title="Modern Web Design"
            text="We specialise in modern web design to improve user experience and increase conversions."
            bulletOne="Create a web design to keep leads on your page."
            bulletTwo="Modernise your existing site to correspond to new design trends."
            bulletThree="Improve how new and existing customers perceive your brand."
            background={`url(${WebDesignImg})`}
          />

          <ServiceItem
            title="Hosting &#38; Maintenance"
            text="Our hosting services optimise the performance of your website and reduce loading time."
            bulletOne="Provide custom domain names and SSL certificates."
            bulletTwo="Guarantee live updates with automatic scaling."
            bulletThree="Provide reliable hosting with ongoing support."
            background={`url(${HostingImg})`}
          />
        </div>
      </ServiceDetail>
      <ContactSection />
    </main>
  );
};

const ServiceDetail = styled.section`
  padding: 4rem 0rem;
  background-image: linear-gradient(
      216deg,
      rgba(77, 77, 77, 0.05) 0%,
      rgba(77, 77, 77, 0.05) 25%,
      rgba(42, 42, 42, 0.050980392156862744) 25%,
      rgba(42, 42, 42, 0.050980392156862744) 38%,
      rgba(223, 223, 223, 0.05) 38%,
      rgba(223, 223, 223, 0.05) 75%,
      rgba(36, 36, 36, 0.05) 75%,
      rgba(36, 36, 36, 0.05) 100%
    ),
    linear-gradient(
      44deg,
      rgba(128, 128, 128, 0.05) 0%,
      rgba(128, 128, 128, 0.05) 34%,
      rgba(212, 212, 212, 0.05) 34%,
      rgba(212, 212, 212, 0.05) 57%,
      rgba(25, 25, 25, 0.05) 57%,
      rgba(25, 25, 25, 0.05) 89%,
      rgba(135, 135, 135, 0.05) 89%,
      rgba(135, 135, 135, 0.05) 100%
    ),
    linear-gradient(
      241deg,
      rgba(55, 55, 55, 0.05) 0%,
      rgba(55, 55, 55, 0.05) 14%,
      rgba(209, 209, 209, 0.05) 14%,
      rgba(209, 209, 209, 0.05) 60%,
      rgba(245, 245, 245, 0.05) 60%,
      rgba(245, 245, 245, 0.05) 69%,
      rgba(164, 164, 164, 0.05) 69%,
      rgba(164, 164, 164, 0.05) 100%
    ),
    linear-gradient(
      249deg,
      rgba(248, 248, 248, 0.05) 0%,
      rgba(248, 248, 248, 0.05) 32%,
      rgba(148, 148, 148, 0.05) 32%,
      rgba(148, 148, 148, 0.05) 35%,
      rgba(202, 202, 202, 0.05) 35%,
      rgba(202, 202, 202, 0.05) 51%,
      rgba(181, 181, 181, 0.05) 51%,
      rgba(181, 181, 181, 0.05) 100%
    ),
    linear-gradient(92deg, rgb(255, 255, 255), rgb(255, 255, 255));
`;

export default WebDevelopment;
