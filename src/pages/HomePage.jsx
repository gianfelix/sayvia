import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, behavior: "instant" });

    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", "/");
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <ValuesSection />
      <PackagesSection />
      <OrderFlow />
      <FAQSection />
      {/* <Testimonials /> */}
      {/* <CTASection /> */}
      <Footer />
    </>
  );
};

export default HomePage;
