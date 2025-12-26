import { useState } from "react";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
    "id": 1,
    "title": "Motion Graphics",
    "category": "Educational / Motion Graphics",
    "thumbnail": "https://img.youtube.com/vi/eRmStDFRXpA/maxresdefault.jpg",
    "video": { "type": "youtube", "id": "eRmStDFRXpA" },
    "description": "A comprehensive technical tutorial featuring clean screencast editing, dynamic UI callouts, and structured overlays to simplify complex workflows.",
    "tools": ["Premiere Pro", "After Effects", "Affinity Designer"],
    "result": "4+ hours of high-retention educational content with a cinematic intro hook."
},
  {
    id: 2,
    title: "Facecam Video",
    category: "Facecam",
    thumbnail:
      "/images/facecam.png",
    video: { type: "gdrive", id: "17XRc0qy7IA3lSqg2T4UOrkC81XvNaQY9" }, // Replace with actual ID
    description:
      "Engaging facecam-style editing featuring seamless jump cuts, text callouts, and background music leveling for maximum audience engagement.",
    tools: ["Premiere Pro", "After Effects", "Audition"],
    result: "High-retention social media content optimized for mobile viewing.",
  },
  {
  id: 3,
  title: "Real Estate Testimonial",
  category: "Client Testimonial / Real Estate",
  thumbnail:
    "https://i.ytimg.com/vi/Xh5bxjK2QDQ/maxresdefault.jpg",
  video: { type: "youtube", id: "Xh5bxjK2QDQ" },
  description:
    "A professionally crafted testimonial video showcasing a satisfied client sharing their positive experience with a real estate company’s services. Designed to build trust, highlight quality service, and enhance brand credibility through authentic customer feedback.",
  tools: ["Premiere Pro", "After Effects", "Audition"],
  result: "Enhanced brand trust and social proof, helping convert prospects into clients"
}
,
{
  id: 4,
  title: "Animated Documentary",
  category: "Cashcow / Motion Graphics / Documentary",
  thumbnail:
    "/images/Documentry_animation.png",
  video: { type: "gdrive", id: "1lIuEMFdwMBiD_IDhRz9FGAzBZ074Sbc8" },
  description:
    "An animated cashcow-style documentary built using still images and archival visuals, enhanced with smooth camera movements, cinematic transitions, animated typography, and motion graphics to deliver engaging, narration-driven storytelling.",
  tools: ["Premiere Pro", "After Effects", "Photoshop"],
  result:
    "High-retention documentary content that transforms static visuals into an immersive viewing experience optimized for YouTube cashcow channels."
}
,
  {
  id: 5,
  title: "Map Animation",
  category: "Motion Graphics / Map Animation",
  thumbnail:
    "/images/Map_animation.PNG", // replace after uploading or generate thumbnail
  video: { type: "gdrive", id: "1_QAip9zPP56AzOJ_naX6Xq5DZzcC148h" },
  description:
    "A dynamic map animation crafted using Adobe After Effects and GeoLayers, with final editing and pacing done in Premiere Pro. The animation features smooth camera movements, zooms, route highlights, and geographic visual storytelling that brings static map data to life for engaging documentary or explainer-style content.",
  tools: ["After Effects", "Premiere Pro", "GeoLayers"],
  result: "Professional, visually engaging map animation that enhances spatial storytelling and audience engagement"
}
,
 {
  id: 6,
  title: "Tech Product Review",
  category: "Tech Review / Product Video",
  thumbnail:
    "https://i.ytimg.com/vi/uvIAeLhNzH4/maxresdefault.jpg",
  video: { type: "youtube", id: "uvIAeLhNzH4" },
  description:
    "A detailed tech review of the Anker Soundcore R50i featuring on-camera presentation, clean product shots, and subtle light animations to highlight key features. The edit balances facecam segments with b-roll, smooth transitions, and visual callouts to deliver an engaging and informative product review.",
  tools: ["Premiere Pro", "After Effects"],
  result:
    "Professional tech review content designed to boost viewer engagement, product understanding, and brand trust."
}
,
  {
  id: 7,
  title: "Xbox Series S Review",
  category: "Tech Review / Gaming",
  thumbnail:
    "https://i.ytimg.com/vi/ggHQ0qvTntw/maxresdefault.jpg",
  video: { type: "youtube", id: "ggHQ0qvTntw" },
  description:
    "An in-depth tech review of the Xbox Series S, combining on-camera presentation with gameplay footage and animated highlights to explain the console’s features, performance, and value proposition. The edit balances personal commentary, engaging b-roll, and visual callouts to deliver an informative and viewer-friendly review.",
  tools: ["Premiere Pro", "After Effects"],
  result:
    "High-quality gaming review content optimized for audience retention and tech enthusiast engagement."
}
,
 {
  id: 8,
  title: "Cash Cow Documentary Edit",
  category: "Cashcow / YouTube Automation",
  thumbnail:
    "/images/cashcow-edit.png", // replace with your custom thumbnail or hosted image
  video: { type: "gdrive", id: "17oJVnf_BOZGw8biP7a6RQSl-F9DH84Wg" },
  description:
    "An engaging cashcow-style YouTube video created using carefully sourced stock and Creative Commons footage from YouTube. The edit features full on-screen captions, dynamic pacing, visual variety, and sound design to maintain viewer attention while delivering clear, narration-driven storytelling.",
  tools: ["Premiere Pro", "After Effects", "Photoshop"],
  result:
    "High-retention cashcow content optimized for YouTube automation, improved watch time, and audience engagement through captions and fast-paced visual storytelling."
}
,
 {
  id: 14,
  title: "3D Animation",
  category: "Motion Graphics / 3D Animation",
  thumbnail:
    "images/3d_animation.png",
  video: { type: "gdrive", id: "1dS0-n9d1c_qPlcxkB3wciGyylI6wwtQM" },
  description:
    "A visually dynamic motion graphics project combining 3D animated elements with map-based animation to illustrate spatial movement and geographic storytelling. The edit features smooth camera transitions, depth-enhanced 3D assets, and stylized motion effects to elevate narrative clarity and visual impact.",
  tools: ["After Effects", "GeoLayers", "Cinema 4D", "Premiere Pro"],
  result:
    "High-quality animated map content that blends 3D visual elements with geographic animation, enhancing engagement and conveying complex spatial information effectively."
}
,
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
