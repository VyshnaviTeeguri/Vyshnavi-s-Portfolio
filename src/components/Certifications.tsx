import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Star, Trophy } from "lucide-react";

const certifications = [
  {
    title: "Meta Full-Stack Engineer Certificate",
    issuer: "Meta (via Coursera)",
    date: "June 2025",
    status: "Certified",
    description: "Comprehensive certification program covering full-stack software engineering, including frontend, backend, databases, APIs, version control, and deployment.",
    skills: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs", "Full-Stack Development", "Git/GitHub"],
    featured: true,
    imageUrl: "/certificates/meta-fullstack.png"
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL (IIT Madras)",
    date: "October 2024",
    status: "Certified",
    description: "Successfully completed a 12-week NPTEL course covering fundamentals of machine learning, supervised & unsupervised algorithms, and applications.",
    skills: ["Python", "Machine Learning", "Data Analysis", "Neural Networks"],
    featured: true,
    imageUrl: "/certificates/nptel-ml.png"
  },
  {
    title: "AWS Solutions Architecture Job Simulation",
    issuer: "Amazon Web Services (via Forage)",
    date: "June 2025",
    status: "Completed",
    description: "Completed a practical job simulation focused on designing a simple, scalable hosting architecture, gaining hands-on experience in AWS cloud solutions.",
    skills: ["Cloud Architecture", "Scalability", "AWS Hosting Solutions"],
    featured: true,
    imageUrl: "/certificates/aws-simulation.png"
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "March 2024",
    status: "Completed",
    description: "Successfully cleared the HackerRank SQL (Basic) skill certification test.",
    skills: ["SQL", "Databases", "Queries"],
    featured: true,
    imageUrl: "/certificates/sql-basic.png"
  },
  {
    title: "TCS iON Career Edge – Young Professional",
    issuer: "TCS iON (Tata Consultancy Services)",
    date: "April 2025",
    status: "Completed",
    description: "Successfully completed the TCS iON Career Edge – Young Professional course covering Communication, Soft Skills, Career Guidance, Resume Writing, Interview Skills, Business Etiquette, IT Fundamentals, and AI Overview.",
    skills: [
      "Communication Skills",
      "Presentation Skills",
      "Soft Skills",
      "Resume Writing",
      "Interview Skills",
      "Business Etiquette",
      "Accounting Fundamentals",
      "IT Foundational Skills",
      "Artificial Intelligence (Overview)"
    ],
    featured: true,
    imageUrl: "/certificates/tcs-ion-career-edge.png"
  },
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM (Coursera)",
    date: "May 2025",
    status: "Completed",
    description: "Successfully completed the IBM Skills Network course on Developing Front-End Apps with React, offered via Coursera.",
    skills: ["React.js", "Front-End Development", "JavaScript", "Web Applications"],
    featured: true,
    imageUrl: "/certificates/ibm-react.png",
    verifyUrl: "https://coursera.org/verify/D17X0BZZFWQ"
  }
];

// 🏆 Achievements Data
const achievements = [
  {
  title: "TCS CodeVita Season 12",
  description: "Secured a global rank of 3768, demonstrating strong coding and problem-solving skills.",
  year: "2024"
  },
  {
    title: "Adobe India Hackathon",
    description: "Cleared Round 1 (Online MCQ + Coding Assessment) showcasing programming and analytical ability.",
    year: "2024"
  },
  {
    title: "Academic Excellence",
    description: "Maintained a strong CGPA of 8.53 in B.Tech (Computer Science and Engineering).",
    year: "2025"
  },
  {
    title: "LeetCode Problem Solving",
    description: "Achieved a 100+ day streak on LeetCode, consistently practicing data structures and algorithms.",
    year: "2025"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Hover over a card to flip and view the certificate</p>
        </div>

        {/* Certifications Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <div key={index} className="group [perspective:1000px]">
              <div className="relative w-full h-[320px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* Front Side */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <Card className="w-full h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="bg-accent/10 p-2 rounded-lg">
                            <Award className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-navy flex items-center gap-2">
                              {cert.title}
                              {cert.featured && (
                                <Star className="w-4 h-4 text-accent fill-current" />
                              )}
                            </CardTitle>
                            <CardDescription className="text-gray-600 font-medium">
                              {cert.issuer}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge
                          variant={cert.status === "Certified" ? "default" : "secondary"}
                          className={
                            cert.status === "Certified"
                              ? "bg-accent text-white"
                              : "bg-navy/10 text-navy"
                          }
                        >
                          {cert.status}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-700 mb-2 leading-relaxed">
                        {cert.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs bg-secondary/50 text-navy border-navy/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" /> {cert.date}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-contain rounded-lg shadow-lg bg-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Trophy className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-bold text-navy text-center">Key Achievements</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white border-l-4 border-l-accent hover-lift">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-navy mb-1">{achievement.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs bg-accent/10 text-accent border-accent/20 shrink-0 ml-2"
                    >
                      {achievement.year}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
