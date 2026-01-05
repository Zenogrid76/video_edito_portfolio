import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ShowreelSection } from "@/components/Showreel";
import { WhyMeSection } from "@/components/WhyMeSection";
import { ToolsSection } from "@/components/ToolsSection";
//import { TestimonialsSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ShowreelSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <WhyMeSection />
      <ToolsSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
