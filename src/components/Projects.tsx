import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import solarProject from '@/assets/solar-project.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Electronic Health Record (EHR) System",
      description: "Developed a HIPAA-compliant EHR system with secure access to patient data, role-based control, and HL7/FHIR interoperability. Led frontend development and team coordination.",
      image: project1,
      technologies: ["ASP.NET Core", "C#", "MS SQL", "HL7", "FHIR", "HTML/CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      role: "Full Stack Developer & Team Lead",
      type: "Web Application"
    },
    {
      title: "Solar Plant Data Ingestion System",
      description: "Led the backend development of a data ingestion platform integrating FTP/API/manual uploads from solar plants. Built admin dashboard, real-time file handling, and access controls.",
      image: solarProject,
      technologies: ["Django", "Python", "MongoDB", "JavaScript", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      role: "Team Lead",
      type: "Data Platform"
    },
    {
      title: "E-Commerce Platform",
      description: "Built a scalable e-commerce platform with secure checkout, product management, and order tracking. Integrated payment gateway and user-friendly admin panel.",
      image: project3,
      technologies: ["ASP.NET Core", "C#", "MS SQL", "Razor Pages"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      role: "Full Stack Developer",
      type: "Web Application"
    },
    {
      title: "Learning Management System (LMS)",
      description: "Developed a complete LMS with course management, student enrollment, quizzes, and live chat/video streaming.",
      technologies: ["ASP.NET Core", "JavaScript", "SignalR", "SQL Server"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      role: "Full Stack Developer",
      type: "Web Platform"
    },
    {
      title: "Inventory Management System",
      description: "Designed and developed a desktop-based inventory tracker with real-time stock updates, supplier management, and report generation.",
      technologies: ["C#", "Windows Forms/WPF", "SQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      role: "Developer",
      type: "Desktop Application"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work across different technology stacks and domains, from healthcare to energy management.
          </p>
        </div>

        {/* .NET Stack Projects */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <h3 className="text-3xl font-bold text-foreground">.NET Stack</h3>
            <div className="flex-1 h-px bg-border"></div>
            <div className="flex gap-2 text-sm text-muted-foreground">
              <Badge variant="outline" className="border-primary/30 text-primary">ASP.NET Core</Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">C#</Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">MS SQL</Badge>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.technologies.includes("ASP.NET Core")).map((project, index) => (
              <Card 
                key={index} 
                className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg hover:from-card/90 hover:to-card/60 transition-all duration-700 hover:scale-[1.02] border border-primary/20 overflow-hidden shadow-2xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {project.image && (
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                )}
                
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                      {project.title}
                    </CardTitle>
                    {project.role && (
                      <Badge variant="outline" className="text-xs whitespace-nowrap border-accent/50 text-accent">
                        {project.role}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-muted/50 hover:bg-primary/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Python/Django Stack Projects */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-12 bg-gradient-to-r from-accent to-primary rounded-full"></div>
            <h3 className="text-3xl font-bold text-foreground">Python Stack</h3>
            <div className="flex-1 h-px bg-border"></div>
            <div className="flex gap-2 text-sm text-muted-foreground">
              <Badge variant="outline" className="border-accent/30 text-accent">Django</Badge>
              <Badge variant="outline" className="border-accent/30 text-accent">Python</Badge>
              <Badge variant="outline" className="border-accent/30 text-accent">MongoDB</Badge>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.filter(p => p.technologies.includes("Python")).map((project, index) => (
              <Card 
                key={index} 
                className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg hover:from-card/90 hover:to-card/60 transition-all duration-700 hover:scale-[1.01] border border-accent/20 overflow-hidden shadow-2xl hover:shadow-accent/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="lg:flex lg:items-center">
                  {project.image && (
                    <div className="lg:w-1/2 relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/90 via-background/30 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 backdrop-blur-sm">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                  )}
                  
                  <div className="lg:w-1/2 lg:p-8 relative z-10">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-3">
                        <CardTitle className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                          {project.title}
                        </CardTitle>
                        {project.role && (
                          <Badge variant="outline" className="text-xs whitespace-nowrap border-primary/50 text-primary">
                            {project.role}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs bg-muted/50 hover:bg-accent/20 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button size="sm" className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-medium">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="outline" className="border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop Applications */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-12 bg-gradient-to-r from-muted-foreground to-foreground rounded-full"></div>
            <h3 className="text-3xl font-bold text-foreground">Desktop Applications</h3>
            <div className="flex-1 h-px bg-border"></div>
            <div className="flex gap-2 text-sm text-muted-foreground">
              <Badge variant="outline" className="border-muted-foreground/30">C#</Badge>
              <Badge variant="outline" className="border-muted-foreground/30">WPF</Badge>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.technologies.includes("Windows Forms/WPF")).map((project, index) => (
              <Card 
                key={index} 
                className="group bg-gradient-to-br from-card/60 to-card/30 hover:from-card/70 hover:to-card/40 transition-all duration-500 hover:scale-105 border border-border/50 hover:border-foreground/20 shadow-lg hover:shadow-xl"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
                  </div>
                  {project.type && (
                    <Badge variant="secondary" className="text-xs w-fit bg-muted/30">
                      {project.type}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-6">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-muted-foreground/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="p-2 hover:text-primary hover:bg-primary/10">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 hover:text-primary hover:bg-primary/10">
                      <Github className="h-4 w-4" />
                    </Button>
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

export default Projects;
