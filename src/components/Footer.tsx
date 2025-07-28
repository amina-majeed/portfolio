import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-text-gradient bg-clip-text text-transparent mb-4">
              Portfolio
            </div>
            <p className="text-muted-foreground mb-4">
              Full Stack .NET Core Developer passionate about creating robust software solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/amina-majeed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/amna-majeed-96403a2a2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development', 
                'Frontend Development', 
                'Backend Development', 
                'UI/UX Design', 
                'Consulting'
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm flex items-center">
            © {currentYear} Amina Majeed. Made with 
            <Heart className="mx-1 h-4 w-4 text-red-500" fill="currentColor" />
            and lots of coffee.
          </div>
          <div className="text-muted-foreground text-sm mt-4 md:mt-0">
            Built with ASP.NET Core, C# & Modern Technologies
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;