import { Youtube, Instagram, Github } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Youtube,
      href: "https://www.youtube.com/@Zenogrid",
      label: "YouTube",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/zenogrid/",
      label: "Instagram",
    },
    { icon: Github, href: "https://github.com/Zenogrid76", label: "GitHub" },
  ];

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-2xl text-foreground tracking-wider"
          >
            MAHIM<span className="text-primary">.</span>
          </a>

          {/* Copyright */}
          <div className="flex items-center gap-15 text-sm text-muted-foreground">
            <span>© {currentYear} Mahmud Reza Mahim.</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
