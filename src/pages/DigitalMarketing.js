// Styled
import styled from "styled-components";
// Components
import ServiceItemHero from "../components/Services/ServiceItemHero";
import ServiceTitle from "../components/Services/ServiceTitle";
import ServiceItem from "../components/Services/ServiceItem";
import ServiceItemAlt from "../components/Services/ServiceItemAlt";
import ContactSection from "../components/Home/ContactSection";
// Images
import DigitalMarketingHero from "../media/digital-marketing-hero.png";
import SEOImg from "../media/seo.png";
import EmailMarketingImg from "../media/email-marketing.png";
import PPCImg from "../media/ppc.png";
// Helmet
import { Helmet } from "react-helmet-async";

const DigitalMarketing = () => {
  return (
    <main>
      <Helmet>
        <title>Napper Network - Digital Marketing</title>
        <meta
          name="description"
          content="At Napper Network, we provide effective digital marketing strategies to engage and convert customers."
        />
      </Helmet>
      <ServiceItemHero
        title="Digital Marketing"
        text="Focusing on results, we provide effective digital marketing strategies to engage and convert customers."
        background={`url(${DigitalMarketingHero})`}
      />
      <ServiceDetail>
        <div className="container">
          <ServiceTitle title="Digital Marketing Services" />
          <ServiceItem
            title="SEO"
            text="We provide effective search engine optimisation strategies to improve
        the visibility of your website."
            bulletOne="Provide a detailed SEO audit of your Website."
            bulletTwo="Implement key words to gain more site visits."
            bulletThree="Help you understand how SEO works."
            background={`url(${SEOImg})`}
          />

          <ServiceItemAlt
            title="Email Marketing"
            text="We provide effective marketing strategies to convert prospects into customers and one-time buyers into loyal, returning customers."
            bulletOne="Build an email list full of targeted customers."
            bulletTwo="Optimise your emails for the highest open rate and click through rate."
            bulletThree="Automate the process of nurturing your leads."
            background={`url(${EmailMarketingImg})`}
          />

          <ServiceItem
            title="Pay-Per-Click Advertising"
            text="We create successful 'PPC' campaigns to drive traffic to your website,
          increase conversions and boost brand recognition."
            bulletOne="Analyse competitors and identify targeted keywords."
            bulletTwo="Write effective ad copy to increase quality score and reduce cost
          per acquisition."
            bulletThree="Build PPC landing pages optimised for conversion."
            background={`url(${PPCImg})`}
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

export default DigitalMarketing;
