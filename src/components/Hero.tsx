import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Code, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const titles = [
    'Full Stack Developer',
    'Software Architect', 
    'Tech Lead',
    'Problem Solver'
  ];
  
  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let titleIndex = 0;

    const typeWriter = () => {
      const currentTitle = titles[titleIndex];
      
      if (isDeleting) {
        currentText = currentTitle.substring(0, currentText.length - 1);
      } else {
        currentText = currentTitle.substring(0, currentText.length + 1);
      }
      
      setText(currentText);
      
      if (!isDeleting && currentText === currentTitle) {
        setTimeout(() => isDeleting = true, 2000);
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
      }
      
      const speed = isDeleting ? 100 : 150;
      setTimeout(typeWriter, speed);
    };
    
    typeWriter();
  }, []);

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mesh-gradient"
    >
      {/* Sophisticated animated background */}
      <div className="absolute inset-0">
        {/* Floating orbs with enhanced glow */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-accent/15 rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-[hsl(var(--hero-gradient-accent))]/10 rounded-full mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMiIgZmlsbD0iIzMzNzNkYyIvPgo8L3N2Zz4=')] animate-shimmer"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          {/* Main heading with sophisticated gradient */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight">
            <span className="bg-text-gradient bg-clip-text text-transparent drop-shadow-lg">
              Amna Majeed
            </span>
          </h1>
          
          {/* Animated typewriter effect */}
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-10 text-muted-foreground">
            <div className="inline-block relative">
              <span className="bg-text-gradient bg-clip-text text-transparent font-bold">
                {text}
              </span>
              <span className="animate-pulse text-primary ml-1">|</span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
          
          {/* Enhanced description */}
          <p className="text-sm md:text-lg text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed">
            Elite <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-lg">Full Stack Developer</span> with 5+ years of experience architecting scalable solutions and leading high-performance teams. 
            <br className="hidden md:block" />
            Expertise in <span className="text-accent font-bold bg-accent/10 px-2 py-1 rounded-lg">.NET, Python, Cloud Architecture</span> & cutting-edge web technologies.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <Button 
              size="lg" 
              className="group px-10 py-5 text-xl font-bold bg-hero-gradient hover:shadow-elegant text-primary-foreground shadow-glow transition-all duration-500 hover:scale-110 relative overflow-hidden"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <Code className="mr-3 h-6 w-6 relative z-10" />
              <span className="relative z-10">Explore Portfolio</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group px-10 py-5 text-xl font-bold border-primary/30 text-primary hover:bg-primary/5 hover:border-primary hover:shadow-glow transition-all duration-500 hover:scale-110 bg-card/10 backdrop-blur-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageSquare className="mr-3 h-6 w-6 group-hover:text-accent transition-colors" />
              Let's Collaborate
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex gap-8 justify-center">
            <a 
              href="https://github.com/amina-majeed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-card-gradient backdrop-blur-xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-125 hover:shadow-elegant relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <Github className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
            </a>
            <a 
              href="https://www.linkedin.com/in/amna-majeed-96403a2a2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-card-gradient backdrop-blur-xl border border-accent/20 hover:border-accent/50 transition-all duration-500 hover:scale-125 hover:shadow-elegant relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <Linkedin className="h-7 w-7 text-muted-foreground group-hover:text-accent transition-colors relative z-10" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="group p-5 rounded-2xl bg-card-gradient backdrop-blur-xl border border-[hsl(var(--hero-gradient-accent))]/20 hover:border-[hsl(var(--hero-gradient-accent))]/50 transition-all duration-500 hover:scale-125 hover:shadow-elegant relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[hsl(var(--hero-gradient-accent))]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <Mail className="h-7 w-7 text-muted-foreground group-hover:text-[hsl(var(--hero-gradient-accent))] transition-colors relative z-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center bg-card/10 backdrop-blur-sm shadow-glow">
          <div className="w-1.5 h-4 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;