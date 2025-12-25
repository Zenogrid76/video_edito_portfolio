import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "YouTube Creator",
    content:
      "Mahim transformed my channel completely. His editing style brought so much energy and professionalism to my videos. Views increased by 300% after we started working together!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    content:
      "Working with Mahim was a game-changer for our brand. He understood our vision immediately and delivered promotional videos that exceeded all expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Content Strategist",
    content:
      "Reliable, creative, and incredibly talented. Mahim consistently delivers high-quality work on tight deadlines. He's our go-to editor for all video projects now.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Client Love</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            WHAT CLIENTS <span className="gradient-text">SAY</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="glass-effect rounded-2xl p-8 md:p-12 text-center">
              {/* Quote icon */}
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div>
                <div className="font-display text-xl text-foreground">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="default" size="lg" onClick={prev}>
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-8 bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <Button variant="default" size="lg" onClick={next}>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
