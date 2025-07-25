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
      description: "Developed a full-featured EHR system enabling secure, real-time access to patient data including medical history, prescriptions, lab results, and imaging. Implemented role-based access control, audit trails, and data encryption to ensure HIPAA compliance.",
      image: project1,
      technologies: ["ASP.NET Core", "C#", "MS SQL", "HL7", "FHIR"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Online Learning Management System",
      description: "Developed a comprehensive web-based platform for managing online courses, student enrollments, and assessments. Integrated real-time chat and video streaming features.",
      image: project2,
      technologies: ["ASP.NET Core", "JavaScript", "MS SQL", "SignalR"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "E-commerce Platform Development",
      description: "Built and deployed a scalable e-commerce website using ASP.NET Core, incorporating secure payment gateways, product catalogs, and order management.",
      image: project3,
      technologies: ["ASP.NET Core", "C#", "MS SQL", "Payment Gateway"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Inventory Management System",
      description: "Designed and developed a desktop application to track inventory levels, manage supplier information, and generate real-time inventory reports.",
      technologies: ["C#", "Desktop Application", "MS SQL", "Reporting"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Faishon360.com",
      description: "Fashion e-commerce platform with modern design and user experience.",
      technologies: ["ASP.NET Core", "JavaScript", "CSS"],
      liveUrl: "https://faishon360.com",
      githubUrl: "#",
      featured: false
    },
    {
      title: "C-Hub Development Platform",
      description: "Development and learning platform for programmers and tech enthusiasts.",
      technologies: ["ASP.NET Core", "C#", "Web API"],
      liveUrl: "https://c-hub.net/",
      githubUrl: "#",
      featured: false
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
