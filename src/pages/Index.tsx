
import { ArrowRight, ArrowLeft, Github, Linkedin, Facebook, Instagram, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { useEffect, useRef } from 'react';
import TypewriterText from '@/components/TypewriterText';

const Index = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const text = textRef.current;
    if (!text) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            text.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(text);
    
    return () => {
      if (text) observer.unobserve(text);
    };
  }, []);

  return (
    <PageTransition>
      <div className="page-container bg-dark-gray text-white">
        {/* Header Section with Title */}
        <section className="section-container pt-32 pb-16 relative">
          {/* Animated background gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-purple-600/10 to-blue-600/5 rounded-full blur-[100px] -z-10"></div>
          
          <div ref={textRef} className="opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between">
              <div className="mb-12 lg:mb-0">
                <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                  <h1 className="font-mono text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 md:mb-0 relative">
                    <span className="block">Full-stack</span>
                    <span className="block">Developer</span>
                    <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-600 to-blue-500"></div>
                  </h1>
                  
                  <div className="ml-0 md:ml-4 p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <TypewriterText 
                      texts={[
                        "Hello! I'm Jayesh",
                        "I build amazing websites",
                        "React & Node Expert",
                        "UI/UX Enthusiast"
                      ]}
                      typingSpeed={70}
                      delayBetweenTexts={2000}
                      className="text-xl md:text-2xl font-mono"
                      glowColor="#9b87f5"
                    />
                  </div>
                </div>
                
                <p className="text-light-gray text-lg max-w-xl mt-8 mb-8 leading-relaxed">
                  My goal is to write maintainable, clean, and understandable code to make the development process enjoyable.
                </p>
                
                {/* Social Media Links */}
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://github.com/JoyCode4" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20 shadow-lg hover:shadow-purple-500/20"
                  >
                    <Github size={18} className="text-purple-300" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/jayesh-wadhonkar-184539168" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20 shadow-lg hover:shadow-blue-500/20"
                  >
                    <Linkedin size={18} className="text-blue-300" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20 shadow-lg hover:shadow-green-500/20"
                  >
                    <MessageSquare size={18} className="text-green-300" />
                    <span>Message</span>
                  </a>
                  <a 
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20 shadow-lg hover:shadow-blue-500/20"
                  >
                    <Facebook size={18} className="text-blue-300" />
                    <span>Facebook</span>
                  </a>
                  <a 
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20 shadow-lg hover:shadow-pink-500/20"
                  >
                    <Instagram size={18} className="text-pink-300" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
              
              {/* Projects CTA */}
              <div className="relative">
                <Link
                  to="/projects"
                  className="flex items-center justify-between px-6 py-3 w-60 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:brightness-110 transition-all duration-300 font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-600/40"
                >
                  <span>Projects</span>
                  <div className="bg-white text-purple-700 rounded-full h-8 w-8 flex items-center justify-center">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Carousel Preview */}
        <section className="section-container py-12 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-purple-600/5 to-blue-600/5 blur-[100px] -z-10"></div>
          
          <h2 className="text-2xl font-mono mb-8 font-semibold text-center relative">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Featured Projects</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"></div>
          </h2>
          
          <div className="relative flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
            <ProjectPreview 
              title="The simplest example is golang" 
              image="/placeholder.svg"
              direction="left"
            />
            <ProjectPreview 
              title="The simplest example is Kafka + golang" 
              image="/lovable-uploads/8f3d275c-e991-40b6-bf06-424c43e1d996.png"
              direction="none"
            />
            <ProjectPreview 
              title="The simplest example is Kafka + golang" 
              image="/placeholder.svg"
              direction="right"
            />
          </div>
        </section>
        
        {/* About Section */}
        <section className="section-container py-16 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 to-purple-600/5 blur-[100px] -z-10"></div>
          
          <h2 className="text-3xl font-mono mb-10 font-semibold text-center relative">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About me</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
          </h2>
          
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-xl mb-4">Hello! I'm Jayesh, I'm a <span className="font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">full-stack developer</span>.</h3>
              <p className="text-light-gray">More than 1 year experience.</p>
              
              {/* Skills Cards */}
              <div className="mt-12 space-y-6">
                <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                  <h4 className="mb-4 text-purple-300">Front-end</h4>
                  <div className="flex flex-wrap gap-2">
                    {["TypeScript", "React", "Vue", "CSS", "Redux Toolkit", "Next.js", "HTML", "Jest", "GraphQL", "React Native", "TailwindCSS", "Express"].map((skill) => (
                      <span key={skill} className="text-sm text-gray-400 hover:text-white transition-colors duration-300">/ {skill} </span>
                    ))}
                  </div>
                </div>
                
                <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <h4 className="mb-4 text-blue-300">Styles</h4>
                  <div className="flex flex-wrap gap-2">
                    {["SCSS", "SASS", "PostCSS", "Ant.UI", "MUI", "Material UI"].map((skill) => (
                      <span key={skill} className="text-sm text-gray-400 hover:text-white transition-colors duration-300">/ {skill} </span>
                    ))}
                  </div>
                </div>
                
                <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                  <h4 className="mb-4 text-green-300">Back-end</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Golang", "SQL", "ORM", "PostgreSQL", "MySQL", "MongoDB", "JDBC", "Redis", "Kafka", "Node", "Rest", "Typescript", "Microservices"].map((skill) => (
                      <span key={skill} className="text-sm text-gray-400 hover:text-white transition-colors duration-300">/ {skill} </span>
                    ))}
                  </div>
                </div>
                
                <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                  <h4 className="mb-4 text-orange-300">DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Nginx", "Brctf", "Docker", "CI/CD", "AWS", "Bash"].map((skill) => (
                      <span key={skill} className="text-sm text-gray-400 hover:text-white transition-colors duration-300">/ {skill} </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="h-72 bg-gray-800 rounded-xl overflow-hidden shadow-xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 border border-white/5">
                <img 
                  src="/placeholder.svg" 
                  alt="Jayesh Wadhonkar" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Work Experience Section */}
              <div className="mt-12">
                <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Work</h2>
                
                <div className="space-y-px backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl overflow-hidden shadow-lg">
                  <WorkExperience 
                    period="2023 - Present"
                    duration="6 months"
                    company="Yardi"
                    position="Software Engineer"
                    technologies="React & Java"
                  />
                  <WorkExperience 
                    period="2022 - 2023"
                    duration="1 year internship"
                    company="Sample Company"
                    position="Frontend developer"
                    technologies="React"
                  />
                </div>
                
                <div className="mt-4 text-right">
                  <p className="text-light-gray">Work experience</p>
                  <p className="font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">1 year 6 months</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

// Project Preview Component
const ProjectPreview = ({ title, image, direction }: { title: string, image: string, direction: 'left' | 'right' | 'none' }) => {
  return (
    <div className="flex-shrink-0 w-80 h-32 relative rounded-xl overflow-hidden group shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 z-20 p-4 flex flex-col justify-between">
        <p className="text-sm text-white">{title}</p>
        <div className="flex justify-between items-center">
          <button className="text-xs text-white bg-purple-600/80 px-3 py-1 rounded-full hover:bg-purple-500 transition-colors">
            Read more
          </button>
          <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
            {direction === 'left' && <ArrowLeft size={12} className="text-purple-700" />}
            {direction === 'right' && <ArrowRight size={12} className="text-purple-700" />}
            {direction === 'none' && <ArrowRight size={12} className="text-purple-700" />}
          </div>
        </div>
      </div>
    </div>
  );
};

// Work Experience Component
const WorkExperience = ({ 
  period, 
  duration, 
  company, 
  position, 
  technologies 
}: { 
  period: string, 
  duration: string, 
  company: string, 
  position: string, 
  technologies: string 
}) => {
  return (
    <div className="flex py-4 px-6 border-t border-white/10 hover:bg-white/5 transition-colors">
      <div className="w-1/3 text-light-gray">
        <div>{period}</div>
        <div className="text-xs">{duration}</div>
      </div>
      <div className="w-1/3 font-medium text-blue-300">{company}</div>
      <div className="w-1/3 text-right">
        <div className="font-medium text-purple-300">{position}</div>
        <div className="text-light-gray">{technologies}</div>
      </div>
    </div>
  );
};

export default Index;
