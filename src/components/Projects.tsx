import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import nlpImage from "@/assets/project-nlp.jpg";
import foodImage from "@/assets/project-food.jpg";
import netflixImage from "@/assets/project-netflix.jpg";
import dictionaryImage from "@/assets/project-dictionary.jpg";

const projects = [
  {
    title: "NLP Resume Screening App",
    description: "An intelligent resume screening application using Natural Language Processing to analyze and rank resumes based on job requirements. Features automated keyword extraction, skill matching, and candidate scoring.",
    image: nlpImage,
    technologies: ["Python", "Django", "NLP", "Machine Learning", "React.js", "PostgreSQL"],
    githubUrl: "https://github.com/VyshnaviTeeguri/Resume_Screening",
    featured: true
  },
  {
    title: "Food Delivery Web App",
    description: "A comprehensive food delivery platform with restaurant management, order tracking, and real-time notifications. Includes user authentication, payment integration, and responsive design.",
    image: foodImage,
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API", "Socket.io"],
    githubUrl: "https://github.com/VyshnaviTeeguri/Food-Delivery-App",
    featured: true
  },
  {
    title: "Netflix UI Clone",
    description: "A pixel-perfect recreation of Netflix's user interface with modern React components. Features include movie browsing, search functionality, and responsive design across all devices.",
    image: netflixImage,
    technologies: ["React.js", "CSS3", "JavaScript", "API Integration", "Responsive Design"],
    githubUrl: "https://github.com/VyshnaviTeeguri/Netflix",
    featured: false
  },
  {
    title: "Dictionary Application",
    description: "An interactive dictionary app with word definitions, pronunciations, and examples. Includes search history, bookmarks, and offline functionality for enhanced user experience.",
    image: dictionaryImage,
    technologies: ["HTML5", "CSS3", "JavaScript", "Dictionary API", "Local Storage"],
    githubUrl: "https://github.com/VyshnaviTeeguri/Dictionary_App",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my latest work and technical expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`project-card group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button 
                      size="sm" 
                      className="btn-primary" 
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-navy group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs bg-secondary/50 text-navy border-navy/20 hover:bg-navy/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-secondary" asChild>
            <a href="https://github.com/VyshnaviTeeguri" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
