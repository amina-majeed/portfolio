import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["C#", "ASP.NET Core", "HTML5", "CSS3", "JavaScript", "TypeScript", "jQuery", "Angular", "React"],
      gradient: "bg-skill-gradient"
    },
    {
      title: "Backend & Database",
      skills: ["ASP.NET Core", "Web API", "Entity Framework", "Dapper", "MS SQL", "SQL Server", "MySQL"],
      gradient: "bg-hero-gradient"
    },
    {
      title: "Tools & Cloud",
      skills: ["Visual Studio", "VS Code", "Git", "Azure", "AWS", "Docker", "Kubernetes", "Postman"],
      gradient: "bg-text-gradient"
    },
    {
      title: "Methodologies",
      skills: ["Agile", "Scrum", "TDD", "DDD", "Clean Architecture", "MVC", "RESTful APIs"],
      gradient: "bg-skill-gradient"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-text-gradient bg-clip-text text-transparent">Skills</span>
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
                  period: "2019 - Present",
                  title: "Full Stack .NET Core Developer",
                  company: "Freelance & Projects",
                  description: "Building modern web applications with ASP.NET Core, C#, and JavaScript frameworks"
                },
                {
                  period: "Backend Specialist",
                  title: "API & Microservices Developer",
                  company: "Various Projects",
                  description: "Developed RESTful APIs and microservices using ASP.NET Core Web API and Entity Framework"
                },
                {
                  period: "Frontend Expert",
                  title: "UI/UX Developer",
                  company: "Client Projects",
                  description: "Built interactive user interfaces with React, Angular, and responsive design principles"
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