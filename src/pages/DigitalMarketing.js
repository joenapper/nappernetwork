// Components
import HeroDMSection from "../components/DigitalMarketing/HeroDMSection";
import ServiceDetails from "../components/DigitalMarketing/ServiceDetails";
import ContactSection from "../components/Home/ContactSection";
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
      <HeroDMSection />
      <ServiceDetails />
      <ContactSection />
    </main>
  );
};

export default DigitalMarketing;
