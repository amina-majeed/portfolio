import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import dataScienceProject from '@/assets/data-science-project.jpg';
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
      image: dataScienceProject,
      technologies: ["Django", "Python", "MongoDB", "JavaScript", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      role: "Team Lead",
      type: "Data Platform"
    },
    {
      title: "Faishon360 – Online Clothing Store",
      description: "Designed and developed a responsive e-commerce site featuring a product catalog, cart, order system, and user dashboard. Focused on performance, usability, and secure payment integration.",
      image: project3,
      technologies: ["E-commerce", "UX/UI", "Responsive Web Design", "Admin Panel", "Payment Integration"],
      liveUrl: "http://faishon360.com/home/",
      githubUrl: "#",
      featured: true,
      role: "Full Stack Developer",
      type: "E-commerce"
    },
    {
      title: "AllExams – Online Testing Platform",
      description: "Built a complete online testing system for academic and licensing exams. Includes secure logins, role-based access, real-time scoring, and certificate generation.",
      technologies: ["Exam System", "Security", "PDF Certificates", "Real-Time Logic", "Authentication"],
      liveUrl: "https://allexams.net",
      githubUrl: "#",
      featured: true,
      role: "Backend + Frontend Developer",
      type: "Testing Platform"
    },
    {
      title: "Urological Health Associates – Medical Clinic Website",
      description: "Developed a static informational website for doctors running a Urological Health Associates clinic. Features patient information, medical services details, and contact information for the urology practice.",
      technologies: ["Healthcare", "Static Website", "Medical Information", "Responsive Design", "HIPAA"],
      liveUrl: "https://uhaaz.com",
      githubUrl: "#",
      featured: false,
      role: "Frontend Developer",
      type: "Healthcare"
    },
    {
      title: "Align Environmental Solutions",
      description: "Built a comprehensive environmental consultancy website with a powerful admin panel that allows complete content customization. Users can create new sections, modify text colors, and control every aspect of the website through the admin interface.",
      technologies: ["Admin Panel", "Content Management", "Customizable UI", "SEO Optimization", "Case Studies"],
      liveUrl: "https://alignenv.com",
      githubUrl: "#",
      featured: false,
      role: "Full Stack Developer",
      type: "Consultancy"
    },
    {
      title: "BEY Manufacturing",
      description: "Created a professional site to showcase BEY Manufacturing's products and capabilities. Custom layout with structured content and lead capture.",
      technologies: ["Company Profile", "UI Layout", "Contact Forms", "Lead Generation"],
      liveUrl: "https://beymfg.com",
      githubUrl: "#",
      featured: false,
      role: "Web Developer",
      type: "Corporate"
    },
    {
      title: "IMPAC PAC – Political Party Website",
      description: "Developed a comprehensive political action committee website for IMPAC PAC in the US. Built to engage voters, promote candidates, and facilitate political contributions with secure donation systems.",
      technologies: ["Political Campaign", "Donation System", "Voter Engagement", "Content Management"],
      liveUrl: "https://societyfortechnology.com",
      githubUrl: "#",
      featured: false,
      role: "Developer",
      type: "Political"
    },
    {
      title: "Regrow Trees – Non-Profit Initiative",
      description: "Built a donation-driven tree-planting platform for a sustainability initiative. Designed to inspire action and track progress.",
      technologies: ["Nonprofit", "Donation System", "Environmental Design", "Progress Tracking"],
      liveUrl: "https://regrow-trees.com/",
      githubUrl: "#",
      featured: false,
      role: "Designer & Developer",
      type: "Non-Profit"
    },
    {
      title: "N5Store – Full WooCommerce Store",
      description: "Full WooCommerce store (WordPress) with cart, reviews & mobile optimization. Complete e-commerce solution featuring product management, customer reviews system, responsive design, and optimized mobile shopping experience.",
      technologies: ["WooCommerce", "WordPress", "E-commerce", "Mobile Optimization", "Cart System", "Reviews"],
      liveUrl: "https://n5store.com",
      githubUrl: "#",
      featured: false,
      role: "Full Stack Developer",
      type: "E-commerce"
    },
    {
      title: "E1T1 Creative Coaching App",
      description: "Built a full-featured Flutter mobile app for E1T1 — a coaching and referral-based platform combining MLM compensation, fan engagement, and music submission rewards. The app includes multi-tiered progression, real-time commission tracking, coaching session scheduling, and fan conversion bonuses. Integrated Firebase backend and custom compensation logic.",
      image: "/lovable-uploads/bc42ac15-55bc-4d62-8512-98153dddae0f.png",
      technologies: ["Flutter", "iOS", "Mobile App", "Dart", "Firebase", "MLM System"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      role: "Mobile App Developer",
      type: "Mobile Application"
    },
    {
      title: "Inventory Management System",
      description: "Comprehensive desktop application for inventory tracking, stock management, and supply chain optimization. Features real-time inventory updates, barcode scanning, automated reorder points, and detailed reporting with multi-location support.",
      technologies: [".NET Framework", "WinForms", "C#", "SQL Server", "Crystal Reports", "Barcode Integration"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      role: "Desktop Developer",
      type: "Desktop Application"
    },
    {
      title: "School Management System",
      description: "Complete educational institution management solution handling student records, attendance tracking, grade management, fee collection, and parent-teacher communication. Includes automated report generation and academic calendar management.",
      technologies: [".NET Framework", "WinForms", "C#", "SQL Server", "Report Generation", "Data Management"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      role: "Desktop Developer",
      type: "Desktop Application"
    },
    {
      title: "ERP Management System",
      description: "Enterprise resource planning desktop application integrating accounting, human resources, procurement, and project management modules. Features role-based access control, workflow automation, and comprehensive business intelligence dashboards.",
      technologies: [".NET Framework", "WinForms", "C#", "SQL Server", "Business Intelligence", "Workflow Automation"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      role: "Desktop Developer",
      type: "Desktop Application"
    }
  ];

  return (
    <section id="projects" className="py-40 px-6 bg-gradient-to-b from-background/50 via-background to-background/90 relative overflow-hidden">
      {/* Professional background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-[40rem] h-[40rem] bg-accent/8 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-[36rem] h-[36rem] bg-primary/8 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-[hsl(190_95%_65%)]/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-8xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter">
            Elite <span className="text-gradient bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-elegant max-w-5xl mx-auto">
            Crafting <span className="text-primary font-semibold">enterprise-grade systems</span> across healthcare, energy, and e-commerce — from <span className="text-accent font-semibold">HIPAA-compliant platforms</span> to <span className="text-[hsl(190_95%_65%)] font-semibold">real-time data infrastructure</span>
          </p>
        </div>

        {/* .NET Stack Projects */}
        <div className="mb-40">
          <div className="flex items-center gap-8 mb-20">
            <div className="h-3 w-20 bg-gradient-primary rounded-full shadow-2xl"></div>
            <h3 className="text-5xl lg:text-6xl font-black text-gradient bg-clip-text text-transparent">.NET Ecosystem</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-border via-border/50 to-transparent"></div>
            <div className="flex gap-4 text-sm">
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 px-4 py-2 font-medium">ASP.NET Core</Badge>
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 px-4 py-2 font-medium">C#</Badge>
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 px-4 py-2 font-medium">MS SQL</Badge>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {projects.filter(p => p.technologies.includes("ASP.NET Core") || (!p.technologies.includes("Python") && !p.technologies.includes("Flutter"))).map((project, index) => (
              <Card 
                key={index} 
                className="group relative card-elegant hover:card-elevated transition-all duration-700 hover:scale-[1.02] border border-primary/40 hover:border-primary/60 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
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
                
                <CardHeader className="relative z-10 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text">
                      {project.title}
                    </CardTitle>
                    {project.role && (
                      <Badge variant="outline" className="text-sm whitespace-nowrap border-accent/60 text-accent bg-accent/10 px-3 py-1">
                        {project.role}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 p-8 pt-0">
                  <p className="text-elegant mb-8 text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-sm bg-muted/60 hover:bg-primary/20 transition-colors px-3 py-1 font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl && project.liveUrl !== "#" ? (
                      <Button size="lg" asChild className="btn-primary font-semibold px-6 py-3 rounded-xl">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-5 w-5" />
                          View Project
                        </a>
                      </Button>
                    ) : (
                      <Button size="lg" className="btn-primary font-semibold px-6 py-3 rounded-xl">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        View Project
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Python/Django Stack Projects */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-2 w-16 bg-skill-gradient rounded-full shadow-glow"></div>
            <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Python Ecosystem</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
            <div className="flex gap-3 text-sm">
              <Badge variant="outline" className="border-accent/40 text-accent bg-accent/5 px-3 py-1">Django</Badge>
              <Badge variant="outline" className="border-accent/40 text-accent bg-accent/5 px-3 py-1">Python</Badge>
              <Badge variant="outline" className="border-accent/40 text-accent bg-accent/5 px-3 py-1">MongoDB</Badge>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.filter(p => p.technologies.includes("Python")).map((project, index) => (
              <Card 
                key={index} 
                className="group relative bg-card-gradient backdrop-blur-2xl hover:shadow-elegant transition-all duration-700 hover:scale-[1.02] border border-accent/30 hover:border-accent/50 overflow-hidden shadow-card"
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
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile Applications */}
        <div className="mb-20">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-2 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-glow"></div>
            <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Mobile Solutions</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
            <div className="flex gap-3 text-sm">
              <Badge variant="outline" className="border-purple-500/40 text-purple-500 bg-purple-500/5 px-3 py-1">Flutter</Badge>
              <Badge variant="outline" className="border-purple-500/40 text-purple-500 bg-purple-500/5 px-3 py-1">Mobile</Badge>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.filter(p => p.technologies.includes("Flutter")).map((project, index) => (
              <Card 
                key={index} 
                className="group relative bg-card-gradient backdrop-blur-2xl hover:shadow-elegant transition-all duration-700 hover:scale-[1.02] border border-purple-500/30 hover:border-purple-500/50 overflow-hidden shadow-card"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="lg:flex lg:items-center">
                  {project.image && (
                    <div className="lg:w-1/3 relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/90 via-background/30 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-500 border-purple-500/30 backdrop-blur-sm">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                  )}
                  
                  <div className="lg:w-2/3 lg:p-8 relative z-10">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-3">
                        <CardTitle className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                          {project.title}
                        </CardTitle>
                        {project.role && (
                          <Badge variant="outline" className="text-xs whitespace-nowrap border-purple-500/50 text-purple-500">
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
                          <Badge key={techIndex} variant="secondary" className="text-xs bg-muted/50 hover:bg-purple-500/20 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button size="sm" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          App Store
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
        <div className="mb-20">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-2 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-glow"></div>
            <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Desktop Applications</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
            <div className="flex gap-3 text-sm">
              <Badge variant="outline" className="border-blue-500/40 text-blue-500 bg-blue-500/5 px-3 py-1">WinForms</Badge>
              <Badge variant="outline" className="border-blue-500/40 text-blue-500 bg-blue-500/5 px-3 py-1">.NET Framework</Badge>
              <Badge variant="outline" className="border-blue-500/40 text-blue-500 bg-blue-500/5 px-3 py-1">SQL Server</Badge>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.filter(p => p.type === "Desktop Application").map((project, index) => (
              <Card 
                key={index} 
                className="group relative bg-card-gradient backdrop-blur-2xl hover:shadow-elegant transition-all duration-700 hover:scale-[1.03] border border-blue-500/30 hover:border-blue-500/50 overflow-hidden shadow-card"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-500 border-blue-500/30 backdrop-blur-sm text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  {project.role && (
                    <Badge variant="outline" className="text-xs border-cyan-500/50 text-cyan-500 w-fit">
                      {project.role}
                    </Badge>
                  )}
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-muted/50 hover:bg-blue-500/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
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
