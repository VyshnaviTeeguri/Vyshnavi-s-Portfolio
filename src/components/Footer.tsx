import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/VyshnaviTeeguri",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "www.linkedin.com/in/vyshnaviteeguri",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:teegurivyshnavi@gmail.com",
      label: "Email"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              Vyshnavi Teeguri
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Full-Stack Developer passionate about creating innovative solutions 
              with modern technologies and AI.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { label: "About", id: "about" },
                { label: "Projects", id: "projects" },
                { label: "Experience", id: "experience" },
                { label: "Skills", id: "skills" },
                { label: "Certifications", id: "certifications"},
                { label: "Contact", id: "contact" }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-accent transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="space-y-3 mb-6">
              <p className="text-gray-300">teegurivyshnavi@gmail.com</p>
              <p className="text-gray-300">Guntur, Andhra Pradesh, India</p>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg text-white hover:bg-accent hover:text-navy transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} Vyshnavi Teeguri. All rights reserved.
            </p>
            
            <p className="text-gray-300 text-sm flex items-center gap-1">
              Built using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;