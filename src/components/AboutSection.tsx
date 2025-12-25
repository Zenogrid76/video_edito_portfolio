import { Sparkles } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">About Me</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              MAHMUD REZA
              <br />
              <span className="gradient-text">MAHIM</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                I'm a passionate{" "}
                <span className="text-foreground font-medium">
                  Video Editor & Motion Graphics Designer
                </span>{" "}
                with over 5 years of experience transforming ideas into
                captivating visual stories.
              </p>
              <p>
                From YouTube content to commercial productions, I've helped
                brands and creators reach millions of viewers through strategic
                editing, creative storytelling, and stunning visual effects. My
                work isn't just about cutting footage—it's about creating
                emotional connections that drive results.
              </p>
              <p>
                I believe in{" "}
                <span className="text-primary">clear communication</span>,{" "}
                <span className="text-primary">meeting deadlines</span>, and
                going above and beyond to exceed expectations. When you work
                with me, you're not just getting an editor—you're getting a
                creative partner dedicated to your success.
              </p>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-border">
              <div>
                <div className="font-display text-2xl text-primary">350+</div>
                <div className="text-sm text-muted-foreground">
                  Finished Project
                </div>
              </div>
              <div>
                <div className="font-display text-2xl text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  On-Time Delivery
                </div>
              </div>
              <div>
                <div className="font-display text-2xl text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="order-1 md:order-2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute inset-4 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-2xl" />

              {/* Main visual placeholder */}
              <div className="absolute inset-8 gradient-card rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="src/assets/image.png"
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-effect px-4 py-3 rounded-xl animate-float">
                <div className="text-sm font-medium text-foreground">
                  10M+ Views
                </div>
                <div className="text-xs text-muted-foreground">
                  Across Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
