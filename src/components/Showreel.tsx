import { Play } from "lucide-react";

interface ShowreelSectionProps {
  enabled?: boolean;
  videoSource?: {
    type: "youtube" | "gdrive";
    id: string;
  };
}

export const ShowreelSection = ({ 
  enabled = true, 
  videoSource = { type: "youtube", id: "28XuB5fm390" } 
}: ShowreelSectionProps) => {
  if (!enabled) return null;

  const getVideoEmbed = () => {
    if (videoSource.type === "youtube") {
      return `https://www.youtube.com/embed/${videoSource.id}?rel=0&autoplay=1&mute=1`;
    }
    return `https://drive.google.com/file/d/${videoSource.id}/preview`;
  };

  return (
    <section id="showreel" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Watch My Work</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            MY <span className="gradient-text">SHOWREEL</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated compilation of my best work showcasing my editing style, motion graphics, and creative vision.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden glass-effect p-1">
            <div className="w-full h-full rounded-xl overflow-hidden bg-black">
              <iframe
                src={getVideoEmbed()}
                title="Showreel"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          {/* Stats under video */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4 rounded-xl glass-effect">
              <div className="font-display text-2xl md:text-3xl gradient-text">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-4 rounded-xl glass-effect">
              <div className="font-display text-2xl md:text-3xl gradient-text">350+</div>
              <div className="text-sm text-muted-foreground">Projects Done</div>
            </div>
            <div className="text-center p-4 rounded-xl glass-effect">
              <div className="font-display text-2xl md:text-3xl gradient-text">10M+</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
