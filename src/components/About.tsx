import { Card } from "@/components/ui/card";
import headshot from "@/assets/headshot.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Building tomorrow's technology today
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={headshot}
                alt="Vyshnavi Teeguri"
                className="w-80 h-80 object-cover rounded-2xl shadow-large hover-glow transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-80 h-80 bg-gradient-accent rounded-2xl opacity-20 -z-10"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a passionate Computer Science and Engineering undergraduate at VVIT College, 
                driven by the endless possibilities of technology. My journey spans full-stack 
                development, cloud computing, and artificial intelligence.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Through internships and hands-on projects, I've gained expertise in React.js, 
                Django, Node.js, and cloud platforms like AWS. I believe in writing clean, 
                efficient code and creating user-centric solutions.
              </p>
            </div>
            
            <Card className="p-6 bg-white border-l-4 border-l-accent">
              <h3 className="text-xl font-semibold text-navy mb-3">Current Focus</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Full-stack web development with modern frameworks</li>
                <li>• Machine Learning and Natural Language Processing</li>
                <li>• Building scalable, user-friendly applications</li>
              </ul>
            </Card>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-accent">6+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;