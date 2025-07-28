import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
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
      image: project2,
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
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-text-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of some of my recent work. Each project represents a unique challenge 
            and demonstrates different aspects of my development skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:scale-105 border border-border/50 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <Card 
              key={index} 
              className="group bg-card/30 hover:bg-card/50 transition-all duration-300 hover:scale-105 border border-border/50"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="p-2 hover:text-primary">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="p-2 hover:text-primary">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
