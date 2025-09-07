import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
  title: "Full Stack Development Intern (MERN)",
  company: "SmartBridge (in collaboration with APSCHE & MongoDB)",
  location: "Remote",
  duration: "Jun 2025 - Jul 2025",
  type: "Internship",
  description: [
    "Completed a 2-month intensive internship on Full Stack Development (MERN).",
    "Built dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js.",
    "Developed RESTful APIs and implemented CRUD operations for real-world projects.",
    "Applied industry best practices for performance optimization, security, and scalability."
  ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Git"]
  },

  {
    title: "Machine Learning Intern",
    company: "Internship Studio",
    location: "Remote",
    duration: "Jun 2024 - Jul 2024",
    type: "Internship",
    description: [
      "Completed a 5-week intensive internship in Machine Learning.",
      "Worked on practical ML projects involving data preprocessing, model building, and evaluation.",
      "Gained hands-on experience with supervised and unsupervised learning algorithms.",
      "Applied Python libraries such as scikit-learn, pandas, and matplotlib for ML workflows."
    ],
    technologies: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib"]
  },

  {
    title: "GenAI Technical Support Intern",
    company: "AI Innovations Lab",
    location: "Remote",
    duration: "Jun 2024 - Nov 2024",
    type: "Internship",
    description: [
      "Provided technical support and guidance to students and teams working on Generative AI projects.",
      "Resolved queries related to AI model integration, prompt engineering, and API usage.",
      "Assisted in troubleshooting errors during project development and deployment.",
      "Contributed to smooth execution of the internship program by coordinating with mentors and learners."
    ],
    technologies: ["Generative AI", "OpenAI API", "Prompt Engineering", "Python", "LLMs"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Practical experience gained through meaningful internships
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-medium hidden md:block"></div>
                  
                  <Card className="md:ml-16 hover-lift">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl text-navy flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-accent" />
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-gray-700 mt-1">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 shrink-0">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 mt-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {exp.description.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-gray-700 leading-relaxed flex items-start">
                            <span className="text-accent mr-3 mt-1">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="text-xs bg-secondary/50 text-navy border-navy/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;