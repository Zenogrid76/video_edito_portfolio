import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type VideoSource =
  | { type: "youtube"; id: string }
  | { type: "gdrive"; id: string };

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  video: VideoSource;
  description: string;
  tools: string[];
  result: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Brand Commercial",
    category: "Commercial",
    thumbnail:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    video: { type: "youtube", id: "dQw4w9WgXcQ" }, // Replace with actual ID
    description:
      "A high-energy commercial for a tech startup featuring dynamic motion graphics and cinematic color grading.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    result: "500K+ views, 15% conversion increase",
  },
  {
    id: 2,
    title: "YouTube Documentary",
    category: "YouTube",
    thumbnail:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
    video: { type: "youtube", id: "jNQXAC9IVRw" }, // Replace with actual ID
    description:
      "A 30-minute documentary exploring urban culture with compelling storytelling and immersive sound design.",
    tools: ["Premiere Pro", "After Effects", "Audition"],
    result: "1.2M views, Featured on YouTube Trending",
  },
  {
    id: 3,
    title: "Motion Graphics Reel",
    category: "Motion Graphics",
    thumbnail:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
    video: { type: "gdrive", id: "YOUR_GDRIVE_FILE_ID" }, // Replace with Google Drive file ID
    description:
      "A showcase of animated logos, transitions, and visual effects created for various clients.",
    tools: ["After Effects", "Illustrator", "Cinema 4D"],
    result: "Portfolio piece showcasing capabilities",
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "Social Media",
    thumbnail:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop",
    video: { type: "youtube", id: "9bZkp7q19f0" }, // Replace with actual ID
    description:
      "A series of vertical video ads optimized for Instagram Reels and TikTok.",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    result: "2M+ combined views, 8% engagement rate",
  },
  {
    id: 5,
    title: "Music Video Edit",
    category: "Music Video",
    thumbnail:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    video: { type: "gdrive", id: "YOUR_GDRIVE_FILE_ID" }, // Replace with Google Drive file ID
    description:
      "A visually stunning music video with synchronized edits, color grading, and VFX.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    result: "800K views on YouTube",
  },
  {
    id: 6,
    title: "Explainer Animation",
    category: "Animation",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    video: { type: "youtube", id: "ZXsQAXx_ao0" }, // Replace with actual ID
    description:
      "An engaging 2D animated explainer video for a SaaS product launch.",
    tools: ["After Effects", "Illustrator"],
    result: "Used in product launch, 40% demo signups",
  },
  {
    id: 7,
    title: "Podcast Video Production",
    category: "Podcast",
    thumbnail:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop",
    video: { type: "gdrive", id: "YOUR_GDRIVE_FILE_ID" }, // Replace with Google Drive file ID
    description:
      "Full podcast episode production with multi-cam editing, graphics overlays, and dynamic captions.",
    tools: ["Premiere Pro", "After Effects", "Audition"],
    result: "Weekly series with 50K+ regular viewers",
  },
  {
    id: 8,
    title: "Product Launch Video",
    category: "Product",
    thumbnail:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
    video: { type: "youtube", id: "YOUR_YOUTUBE_ID" }, // Replace with actual ID
    description:
      "Cinematic product reveal video with 3D animations and sleek transitions for an e-commerce brand.",
    tools: ["After Effects", "Cinema 4D", "Premiere Pro"],
    result: "Featured in product launch, 200% pre-order increase",
  },
  {
    id: 9,
    title: "Travel Vlog Edit",
    category: "Vlog",
    thumbnail:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    video: { type: "gdrive", id: "YOUR_GDRIVE_FILE_ID" }, // Replace with Google Drive file ID
    description:
      "Engaging travel vlog with cinematic transitions, color grading, and storytelling pacing.",
    tools: ["Premiere Pro", "LumaFusion", "DaVinci Resolve"],
    result: "Part of viral travel series with 3M+ total views",
  },
];

// Video player component that handles both YouTube and Google Drive
const VideoPlayer = ({
  video,
  title,
}: {
  video: VideoSource;
  title: string;
}) => {
  if (video.type === "youtube") {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${video.id}?rel=0`}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  // Google Drive embed
  return (
    <iframe
      src={`https://drive.google.com/file/d/${video.id}/preview`}
      title={title}
      className="w-full h-full"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  );
};

export const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null
  );

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Featured Work</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            MY <span className="gradient-text">PORTFOLIO</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my range and expertise in video
            editing and motion graphics.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer hover-lift"
              onClick={() => setSelectedProject(item)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center button-shadow">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-xs text-primary font-medium mb-1">
                  {item.category}
                </div>
                <div className="font-display text-xl text-foreground">
                  {item.title}
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full glass-effect text-xs text-foreground">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-2xl bg-card border-border">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-3xl text-foreground">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-primary">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden bg-black">
                  <VideoPlayer
                    video={selectedProject.video}
                    title={selectedProject.title}
                  />
                </div>

                <p className="text-muted-foreground">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="text-sm text-muted-foreground mb-1">
                    Result
                  </div>
                  <div className="text-foreground font-medium">
                    {selectedProject.result}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
