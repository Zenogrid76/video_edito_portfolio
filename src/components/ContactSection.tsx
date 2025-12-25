import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  Send,
  Youtube,
  Instagram,
  Github,
  MapPin,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Success
        toast({
          title: "Message Sent! 🎉",
          description:
            "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // API returned error (e.g. invalid key, spam detected)
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      // Network error, CORS, or unexpected issue
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong",
        description:
          "Your message couldn't be sent. Please try again later or email me directly at mahmud.rezamahim@mahim.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
    <section id="contact" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Get In Touch</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            LET'S <span className="gradient-text">CONNECT</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your
            vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl text-foreground mb-6">
                CONTACT INFO
              </h3>
              <div className="space-y-4">
              <a
    href="mailto:mahmud.rezamahim@gmail.com"
    className="flex items-center gap-4 p-4 rounded-xl glass-effect hover:bg-card/70 transition-colors duration-300 group"
  >
    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
      <Mail className="w-5 h-5 text-primary-foreground" />
    </div>
    <div className="min-w-0 flex-1">  {/* Key: allows truncation and prevents forced wrap */}
      <div className="text-xs sm:text-sm text-muted-foreground">Email</div>
      <div className="text-sm sm:text-base text-foreground group-hover:text-primary transition-colors truncate">  {/* Smaller on mobile + truncate */}
        mahmud.rezamahim@gmail.com
      </div>
    </div>
  </a>

                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-4 p-4 rounded-xl glass-effect hover:bg-card/70 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="text-foreground group-hover:text-primary transition-colors">
                      + (880) 1925257958
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl glass-effect">
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Location
                    </div>
                    <div className="text-foreground">Available Worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-display text-2xl text-foreground mb-6">
                FOLLOW ME
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden input for the access key */}
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />

            {/* Optional: redirect after success (replace with your thank-you page or keep empty) */}
            <input
              type="hidden"
              name="redirect"
              value="https://yourportfolio.com/thanks"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <Input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-[150px]"
            />

            {/* Optional honeypot spam protection (recommended) */}
            <div className="hidden">
              <Input type="text" name="botcheck" />
            </div>

            <Button
              type="submit"
              variant="default"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
