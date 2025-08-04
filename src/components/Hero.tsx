import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Code, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
const Hero = () => {
  const [text, setText] = useState('');
  const titles = ['Full Stack Developer', 'Software Architect', 'Tech Lead', 'Problem Solver'];
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
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mesh-gradient">
      {/* Professional animated background */}
      <div className="absolute inset-0">
        {/* Floating orbs with sophisticated glow */}
        <div className="absolute top-32 left-20 w-[32rem] h-[32rem] bg-primary/15 rounded-full mix-blend-screen filter blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute top-48 right-24 w-[28rem] h-[28rem] bg-accent/12 rounded-full mix-blend-screen filter blur-3xl animate-float-delayed opacity-60"></div>
        <div className="absolute bottom-32 left-1/3 w-[24rem] h-[24rem] bg-[hsl(190_95%_65%)]/8 rounded-full mix-blend-screen filter blur-3xl animate-float opacity-50" style={{
        animationDelay: "4s"
      }}></div>
        
        {/* Elegant geometric grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjM2NmYxIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiM2MzY2ZjEiIG9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')] animate-pulse"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <div className="animate-fade-up">
          {/* Premium heading with sophisticated gradient */}
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-black mb-12 tracking-tighter leading-none">
            <span className="text-gradient bg-clip-text text-transparent drop-shadow-xl">
              Amna Majeed
            </span>
          </h1>
          
          {/* Professional typewriter effect */}
          <div className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-12 text-muted-foreground">
            <div className="inline-block relative">
              <span className="text-gradient bg-clip-text text-transparent font-semibold">
                {text}
              </span>
              <span className="animate-pulse text-primary ml-2 text-3xl md:text-5xl">|</span>
            </div>
          </div>
          
          {/* Professional description */}
          <div className="max-w-5xl mx-auto mb-20">
            <p className="text-lg md:text-xl lg:text-2xl text-elegant mb-6">
              <span className="text-primary font-semibold">Elite Software Architect</span> and <span className="text-accent font-semibold">Team Lead</span> with 5+ years delivering enterprise-grade solutions
            </p>
            <p className="text-base md:text-lg text-muted-foreground/90">
              Specializing in <span className="text-primary font-medium">.NET Core</span>, <span className="text-accent font-medium">Python</span>, and <span className="text-[hsl(190_95%_65%)] font-medium">Cloud Architecture</span> — transforming complex challenges into scalable, high-performance systems
            </p>
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
            <Button 
              size="lg" 
              className="btn-primary group px-12 py-6 text-lg font-semibold rounded-xl relative overflow-hidden transform transition-all duration-500 hover:scale-105 shadow-2xl" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
              <Code className="mr-3 h-5 w-5 relative z-10" />
              <span className="relative z-10">Explore Portfolio</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group px-12 py-6 text-lg font-semibold rounded-xl border-2 border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/70 transition-all duration-500 hover:scale-105 bg-card/20 backdrop-blur-xl shadow-xl" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageSquare className="mr-3 h-5 w-5 group-hover:text-accent transition-colors duration-300" />
              Let's Connect
            </Button>
          </div>

          {/* Professional Social Links */}
          <div className="flex gap-6 justify-center relative z-20">
            <a 
              href="https://github.com/amina-majeed" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-6 rounded-2xl card-elegant hover:border-primary/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <Github className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10" />
            </a>
            <a 
              href="https://www.linkedin.com/in/amna-majeed-96403a2a2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-6 rounded-2xl card-elegant hover:border-accent/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <Linkedin className="h-8 w-8 text-muted-foreground group-hover:text-accent transition-colors duration-300 relative z-10" />
            </a>
            <a 
              href="mailto:mmham57@gmail.com" 
              className="group p-6 rounded-2xl card-elegant hover:border-[hsl(190_95%_65%)]/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(190_95%_65%)]/10 to-[hsl(190_95%_65%)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Mail className="h-8 w-8 text-muted-foreground group-hover:text-[hsl(190_95%_65%)] transition-colors duration-300 relative z-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
};
export default Hero;