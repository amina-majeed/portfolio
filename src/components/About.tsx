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
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-text-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate Full Stack .NET Core Developer with expertise in building modern web applications 
            using ASP.NET Core, C#, and JavaScript frameworks. Creating clean, efficient, and scalable 
            solutions that deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 5 years of hands-on experience, I specialize in developing responsive web applications, 
              RESTful APIs, and database-driven solutions. Currently working as a Team Lead at Nastron Solutions, 
              leading development teams and delivering innovative software solutions across multiple technology stacks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise includes server management with IONOS, SmarterASP.NET, and GoDaddy VPS, along with 
              utilizing AI tools to enhance productivity. I have completed advanced training in C# programming, 
              full stack web development, and agile project management to stay current with industry best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 hover:bg-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;