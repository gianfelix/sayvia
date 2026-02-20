import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ValuesSection from "../components/ValuesSection";
import PackagesSection from "../components/PackagesSection";
import OrderFlow from "../components/OrderFlow";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ValuesSection />
      <PackagesSection />
      <OrderFlow />
      <FAQSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
};

export default HomePage;
