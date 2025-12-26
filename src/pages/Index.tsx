import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
//import { ShowreelSection } from "@/components/ShowreelSection";
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
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      
      {/* Showreel Section - Set enabled={true} when you have a showreel ready */}
      {/* <ShowreelSection
        enabled={false}
        videoSource={{ type: "youtube", id: "YOUR_SHOWREEL_ID" }}
      /> */}

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
