import AboutUsSection from "@/components/AboutUs";
import BrandSection from "@/components/Brands";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonalsSection";

export default function Home() {

  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <BrandSection />
      <PortfolioSection />
      <TestimonialsSection />
      <Footer />
     
    </div>
  );
}
