// Components
import MetaData from "../components/MetaData";
import ServiceItemHero from "../components/Services/ServiceItemHero";
import ServiceTitle from "../components/Services/ServiceTitle";
import ServiceItem from "../components/Services/ServiceItem";
import ServiceItemAlt from "../components/Services/ServiceItemAlt";
import ContactSection from "../components/Home/ContactSection";
// Styled
import styled from "styled-components";
// Images
import SocialMediaHero from "../media/social-media-hero.png";
import SocialMediaManagementImg from "../media/social-media-management.png";
import ContentCreationImg from "../media/content-creation.png";
import AdvertisingImg from "../media/advertising.png";

const SocialMedia = () => {
  return (
    <>
      <MetaData
        title="Social Media"
        description="At Napper Network, we provide efficient social media marketing strategies to boost your awareness, improve conversion rates and increase brand loyalty."
      />

      <ServiceItemHero
        title="Social Media"
        text="We provide efficient social media marketing strategies to boost your awareness, improve conversion rates and increase brand loyalty."
        background={`url(${SocialMediaHero})`}
      />
      <ServiceDetail>
        <div className="container">
          <ServiceTitle title="Social Media Services" />
          <ServiceItem
            title="Social Media Management"
            text="We can create and manage a variety of social profiles to improve your online presence."
            bulletOne="Develop social media strategies aligned with business goals."
            bulletTwo="Engage with audience to build relationships and increase reach."
            bulletThree="Create and optimise content schedule to increase visibility."
            background={`url(${SocialMediaManagementImg})`}
          />

          <ServiceItemAlt
            title="Content Creation"
            text="We create valuable, relevant and consistent content to drive profitable customer action."
            bulletOne="Create entertaining and educational content to engage target audience."
            bulletTwo="Write compelling copy to generate traffic."
            bulletThree="Optimise content for specific platforms."
            background={`url(${ContentCreationImg})`}
          />

          <ServiceItem
            title="Advertising"
            text="We develop paid social strategies to amplify your reach, boost brand awareness and drive greater results."
            bulletOne="Deliver effective campaigns across multiple platforms."
            bulletTwo="Generate quality leads by creating targeted ads."
            bulletThree="Monitor campaigns to improve performance and increase ROI."
            background={`url(${AdvertisingImg})`}
          />
        </div>
      </ServiceDetail>
      <ContactSection />
    </>
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

export default SocialMedia;
