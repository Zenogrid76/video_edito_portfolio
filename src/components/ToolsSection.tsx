import { Wrench } from "lucide-react";

const tools = [
  {
    name: "Premiere Pro",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
    category: "Video Editing",
  },
  {
    name: "After Effects",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
    category: "Motion Graphics",
  },
  {
    name: "Photoshop",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    category: "Image Editing",
  },
  {
    name: "Illustrator",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
    category: "Vector Graphics",
  },
  {
    name: "Affinity",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Affinity_%28App%29_Logo.svg",
    category: "Vector Graphics",
  },
];

export const ToolsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">My Arsenal</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            TOOLS & <span className="gradient-text">SKILLS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-standard software mastered over years of professional work.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="group text-center hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl glass-effect p-3 sm:p-4 mb-2 sm:mb-4 group-hover:glow-effect transition-all duration-300">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xs sm:text-sm font-medium text-foreground">{tool.name}</div>
              <div className="text-xs text-muted-foreground hidden sm:block">{tool.category}</div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="font-display text-xl sm:text-2xl text-foreground mb-4 sm:mb-6">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              "Color Grading",
              "Sound Design",
              "Visual Effects",
              "3D Animation",
              "Storyboarding",
              "Keyframe Animation",
              "Green Screen",
              "Audio Mixing",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-effect text-xs sm:text-sm text-foreground hover:bg-primary/10 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
