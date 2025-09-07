import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="fade-in">
          <h1 className="hero-title mb-6">Teeguri Vyshnavi</h1>
          <p className="hero-subtitle mb-4">
            Full-Stack Developer | AI & Cloud Enthusiast
          </p>
          <p className="hero-tagline mb-8">
            Passionate Computer Science undergraduate specializing in
            full-stack development, cloud technologies, and AI innovations.
            Building scalable solutions that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* Resume Download Button */}
            <a href="/Vyshnavi_T_Resume.pdf" download>
              <Button className="btn-primary group">
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>

            
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-accent rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/30 rounded-full opacity-30 blur-lg animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
