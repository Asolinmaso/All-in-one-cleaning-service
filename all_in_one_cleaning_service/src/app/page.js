import AboutUsSection from "./components/AboutUs";
import BookingForm from "./components/BookingForm";
import BrandSection from "./components/Brands";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import Slider from "./components/Slider";
import TestimonialsSection from "./components/TestimonalsSection";

export default function Home() {
  return (
    <div>
    <HeroSection />
    <AboutUsSection />
    <BrandSection />
    <ServicesSection />
    <PortfolioSection />
    <TestimonialsSection />
    <Footer />
    <BookingForm />
    <Slider />
    </div>
  );
}
