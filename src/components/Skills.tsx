import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  GitBranch,
  Brain,
  Server
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    skills: ["React.js", "JavaScript", "HTML5", "CSS3"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend Development", 
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js", "Django", "Python", "RESTful APIs"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Database & Storage",
    icon: <Database className="w-6 h-6" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    color: "from-purple-500 to-violet-500"
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["AWS", "EC2", "S3", "Lambda"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "OpenAI API"],
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Tools & Workflow",
    icon: <GitBranch className="w-6 h-6" />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
    color: "from-indigo-500 to-blue-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-card hover-lift group">
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <CardTitle className="text-lg text-navy group-hover:text-accent transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className="text-xs bg-secondary/30 text-navy border-navy/20 hover:bg-navy/10 hover:border-navy/40 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Proficiency Levels */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-navy mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: "React.js / JavaScript", level: 75 },
              { skill: "Python / Django", level: 85 },
              { skill: "Node.js ", level: 70 },
              { skill: "AWS Cloud Services", level: 75 },
              { skill: "MongoDB / Database", level: 85 },
              { skill: "Machine Learning / AI", level: 80 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm font-medium text-navy">
                  <span>{item.skill}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-accent h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;