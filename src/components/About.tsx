import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces with attention to detail."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Optimizing applications for speed and seamless user experience."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "Working effectively in teams and communicating complex ideas clearly."
    }
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Elegant background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            About <span className="text-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl md:text-2xl text-elegant max-w-4xl mx-auto">
            <span className="text-primary font-semibold">Passionate Software Architect</span> crafting enterprise-grade solutions with <span className="text-accent font-semibold">precision</span> and <span className="text-[hsl(190_95%_65%)] font-semibold">innovation</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gradient bg-clip-text text-transparent">
                My Professional Journey
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-elegant">
                  Leading <span className="text-primary font-semibold">high-performance development teams</span> at Nastron Solutions, I architect and deliver enterprise-grade solutions that scale. With 5+ years of deep technical expertise, I've mastered the full spectrum of modern software development.
                </p>
                <p className="text-lg text-elegant">
                  From <span className="text-accent font-semibold">complex healthcare systems</span> with HIPAA compliance to <span className="text-[hsl(190_95%_65%)] font-semibold">real-time data platforms</span> processing terabytes of solar energy data — I transform ambitious ideas into robust, production-ready applications.
                </p>
                <p className="text-lg text-elegant">
                  My technical leadership extends beyond code: <span className="text-primary font-semibold">mentoring teams</span>, optimizing cloud infrastructure on IONOS and GoDaddy VPS, and leveraging cutting-edge AI tools to accelerate development cycles while maintaining the highest quality standards.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-elegant hover:card-elevated group transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold mb-3 text-lg">{feature.title}</h4>
                  <p className="text-sm text-elegant leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional stats or achievements section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="card-elegant p-8 group hover:card-elevated transition-all duration-500">
            <div className="text-4xl font-bold text-gradient bg-clip-text text-transparent mb-2">5+</div>
            <div className="text-lg font-semibold mb-2">Years Experience</div>
            <div className="text-sm text-muted-foreground">Enterprise Development</div>
          </div>
          <div className="card-elegant p-8 group hover:card-elevated transition-all duration-500">
            <div className="text-4xl font-bold text-gradient bg-clip-text text-transparent mb-2">20+</div>
            <div className="text-lg font-semibold mb-2">Projects Delivered</div>
            <div className="text-sm text-muted-foreground">Production Applications</div>
          </div>
          <div className="card-elegant p-8 group hover:card-elevated transition-all duration-500">
            <div className="text-4xl font-bold text-gradient bg-clip-text text-transparent mb-2">10+</div>
            <div className="text-lg font-semibold mb-2">Technologies</div>
            <div className="text-sm text-muted-foreground">Mastered Stacks</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;