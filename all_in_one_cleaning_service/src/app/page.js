import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonalsSection";

export default function Home() {
  return (
    <div>
    <HeroSection />
    <ServicesSection />
    <PortfolioSection />
    <TestimonialsSection />
    </div>
  );
}
