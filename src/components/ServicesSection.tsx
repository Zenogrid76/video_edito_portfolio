import { Card, CardContent } from "@/components/ui/card";
import {
  Film,
  Sparkles,
  Video,
  Megaphone,
  Smartphone,
  MapPin,
} from "lucide-react";

const services = [
  {
    icon: Film,
    title: "YouTube Video Editing",
    description:
      "Professional editing for vlogs, tutorials, reviews, and long-form content that keeps viewers engaged.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics & Animation",
    description:
      "Eye-catching animations, intros, outros, and visual effects that elevate your brand identity.",
  },
  {
    icon: Video,
    title: "Cashcow / Faceless Videos",
    description:
      "Optimized content for faceless YouTube channels with compelling visuals and storytelling.",
  },
  {
    icon: Megaphone,
    title: "SAAS Explainer Videos",
    description:
      "SaaS explainer videos that help you communicate your product's value and benefits to your audience.",
  },
  {
    icon: Smartphone,
    title: "Social Media Reels & Shorts",
    description:
      "Scroll-stopping vertical content optimized for Instagram, TikTok, and YouTube Shorts.",
  },
  {
    icon: MapPin,
    title: "Map Animations & Explainers",
    description:
      "Custom animated maps, infographics, and explainer videos that simplify complex concepts.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">What I Offer</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            MY <span className="gradient-text">SERVICES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive video production services tailored to your needs. From
            concept to final delivery, I handle every aspect of post-production.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="hover-lift group cursor-pointer gradient-card border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
