import Branding from "../components/Branding";
import CallToAction from "../components/CallToAction";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TeamSelection from "../components/TeamSelection";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Branding/>
      <TeamSelection/>
      <FAQ/>
      <CallToAction/>
      <Footer/>
    </>
  );
};

export default Home;
