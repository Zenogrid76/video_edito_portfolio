import {
  Check,
  Clock,
  MessageCircle,
  Lightbulb,
  Heart,
  Zap,
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "5+ Years Experience",
    description:
      "Battle-tested expertise across hundreds of projects in diverse industries.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Efficient workflows and dedication to meeting tight deadlines without sacrificing quality.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "Regular updates, responsive feedback loops, and transparent project management.",
  },
  {
    icon: Lightbulb,
    title: "Creative Storytelling",
    description:
      "Every edit is crafted to captivate audiences and convey your unique message.",
  },
  {
    icon: Heart,
    title: "Client-Focused Mindset",
    description:
      "Your vision is my priority. I go above and beyond to exceed expectations.",
  },
  {
    icon: Check,
    title: "Results-Driven",
    description:
      "Content designed not just to look great, but to achieve your business goals.",
  },
];

export const WhyMeSection = () => {
  return (
    <section id="why-me" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Check className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              The Difference
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            WHY <span className="gradient-text">HIRE ME?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            More than just technical skills—I bring passion, reliability, and a
            commitment to excellence.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full glass-effect mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
