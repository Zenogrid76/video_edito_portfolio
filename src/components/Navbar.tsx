import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Why Me", href: "#why-me" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Always close mobile menu after click
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-effect py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Scales down on small phones */}
          <a
            href="#"
            className="font-display text-xl xs:text-2xl sm:text-3xl text-foreground tracking-wider flex items-center"
          >
            MAHMUD REZA MAHIM<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm lg:text-base font-medium tracking-wide uppercase"
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="px-6"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-3 rounded-lg hover:bg-accent/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 py-6 glass-effect rounded-2xl shadow-2xl animate-fade-in-up border border-border/50">
            <div className="flex flex-col gap-2 px-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-4 px-4 rounded-lg text-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300 font-medium tracking-wide"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 mt-2 border-t border-border/30">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => scrollToSection("#contact")}
                  className="w-full py-6 text-base font-semibold"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};