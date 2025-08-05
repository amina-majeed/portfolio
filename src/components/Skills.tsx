import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["C#", "ASP.NET Core", "HTML", "CSS", "JavaScript", "jQuery", "Angular", "React"],
      gradient: "bg-skill-gradient"
    },
    {
      title: "Databases & Technologies",
      skills: ["MS SQL", "Entity Framework", "MVC", "Web API", "Code First", "Model First", "Database First"],
      gradient: "bg-hero-gradient"
    },
    {
      title: "Tools & Platforms",
      skills: ["Visual Studio", "Jira", "Git", "AI Productivity Tools"],
      gradient: "bg-text-gradient"
    },
    {
      title: "Server Management",
      skills: ["IONOS", "SmarterASP.NET", "GoDaddy VPS"],
      gradient: "bg-skill-gradient"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build 
            exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:scale-105 border border-border/50"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center">
                  <div className={`w-4 h-4 rounded-full ${category.gradient} mr-3`}></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Experience</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  period: "May 2025 - Present",
                  title: "Team Lead",
                  company: "Nastron Solutions",
                  description: "Leading a cross-functional team of developers and engineers to design and deliver scalable software solutions for solar energy data management and automation. Responsible for overseeing project execution, client communication, and integrating FTP, API, and cloud-based data pipelines."
                },
                {
                  period: "Sep 2024 - May 2025",
                  title: "Full Stack .NET Core MVC Developer",
                  company: "Meditaz LLC",
                  description: "Responsible for developing whole frontend for their EHR and as a team lead responsible for team tasks. Develop and maintain web applications utilizing ASP.NET Core, C#, HTML, CSS, JavaScript, and MS SQL."
                },
                {
                  period: "March 2022 - October 2024",
                  title: "Full Stack .NET Core MVC Developer",
                  company: "Teleric Corporation",
                  description: "Developed and maintained web applications utilizing ASP.NET Core, C#, HTML, CSS, JavaScript, and MS SQL. Managed website servers including IONOS, SmarterASP.NET, and GoDaddy VPS for optimal performance."
                },
                {
                  period: "2019 - 2022",
                  title: "Desktop Application Developer",
                  company: "Techstep Sahiwal",
                  description: "Designed and developed desktop applications with focus on inventory management and business solutions."
                }
              ].map((exp, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2"></div>
                  <div className="flex-grow">
                    <div className="bg-card/30 p-6 rounded-lg border border-border/50">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-lg font-semibold">{exp.title}</h4>
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                      </div>
                      <p className="text-accent font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;