import { Button } from "@/components/ui/button";
import { Play, ChevronDown, ViewIcon } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { CountUp } from "@/components/CountUp";

// Replace with your actual Google Drive resume link
const RESUME_DOWNLOAD_URL =
  "https://drive.google.com/file/d/1FBdob2F0CXcdWnF00hvZLJjEh9rr5tF6/view?usp=drive_link";

export const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div
        className="absolute top-1/3 right-20 w-3 h-3 bg-primary/50 rounded-full animate-float"
        style={{ animationDelay: ".5s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">
              Available for Projects
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-slide-up">
            <span className="text-foreground">Cinematic Video Editing</span>
            <br />
            <span className="gradient-text">That Elevates Brands</span>
            <br />
            <span className="text-foreground">& Captivates Audience</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: "" }}
          >
            7+ years crafting high-impact videos for brands and creators
            worldwide.
            <span className="text-foreground"> 350+ projects. 10M+ views.</span>
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "" }}
          >
            <Button variant="default" size="lg" onClick={scrollToContact}>
              Hire Me
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToPortfolio}>
              <Play className="w-5 h-5" />
              View Portfolio
            </Button>
            <Button
              variant="default"
              size="lg"
              className="text-foreground hover:text-primary border border-border/50 hover:border-primary/50"
              asChild
            >
              <a
                href={RESUME_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ViewIcon className="w-5 h-5" />
                View Resume
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto animate-fade-in-up">
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl text-primary">
                <CountUp end={5} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Years Exp.</div>
            </div>

            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl text-primary">
                <CountUp end={350} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>

            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl text-primary">
                <CountUp end={10} suffix="M+" />
              </div>
              <div className="text-sm text-muted-foreground">Views</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute gap-10 bottom-8 left-1/2 -translate-x-1/2 animate-bounce py-10">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
