// Components
import HeroSection from "../components/Blog/HeroSection";
import BlogsContainer from "../components/Blog/BlogsContainer";
import ContactSection from "../components/Home/ContactSection";

const About = () => {
  return (
    <main>
      <Helmet>
        <title>Napper Network - Blog</title>
        <meta
          name="description"
          content="Napper Network is a Sheffield based digital marketing and web development agency."
        />
      </Helmet>
      <HeroSection />
      <BlogsContainer />
      <ContactSection />
    </main>
  );
};

// const container = {
//   height: "60vh",
// };

export default About;
