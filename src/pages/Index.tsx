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
        <section className="section-container pt-32 pb-16">
          <div ref={textRef} className="opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between">
              <div className="mb-12 lg:mb-0">
                <h1 className="font-mono text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6">
                  <span className="block">Full-stack</span>
                  <span className="block">Developer</span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-mono text-light-gray mb-6 flex items-center">
                  <TypewriterText 
                    texts={[
                      "Hello! I'm Jayesh, I'm a full-stack developer.",
                      "I build web applications with React and Node.js.",
                      "I love creating clean, maintainable code."
                    ]}
                    typingSpeed={70}
                    delayBetweenTexts={2000}
                    className="text-gradient"
                  />
                </h2>
                
                <p className="text-light-gray text-lg max-w-xl mb-8">
                  My goal is to write maintainable, clean, and understandable code to process development was enjoyable.
                </p>
                
                {/* Social Media Links */}
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://github.com/JoyCode4" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black/30 rounded-full text-white hover:bg-white/10 transition-colors"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/jayesh-wadhonkar-184539168" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black/30 rounded-full text-white hover:bg-white/10 transition-colors"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black/30 rounded-full text-white hover:bg-white/10 transition-colors"
                  >
                    <MessageSquare size={18} />
                    <span>Message</span>
                  </a>
                  <a 
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black/30 rounded-full text-white hover:bg-white/10 transition-colors"
                  >
                    <Facebook size={18} />
                    <span>Facebook</span>
                  </a>
                  <a 
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-black/30 rounded-full text-white hover:bg-white/10 transition-colors"
                  >
                    <Instagram size={18} />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
              
              {/* Projects CTA */}
              <div className="relative">
                <Link
                  to="/projects"
                  className="flex items-center justify-between px-6 py-3 w-60 bg-white text-black rounded-full hover:bg-white/90 transition-colors font-medium"
                >
                  <span>Projects</span>
                  <div className="bg-black text-white rounded-full h-8 w-8 flex items-center justify-center">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Carousel Preview */}
        <section className="section-container py-12 overflow-hidden">
          <div className="relative flex space-x-4 overflow-x-auto pb-6 scrollbar-hide">
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
        <section className="section-container py-16">
          <h2 className="text-2xl mb-6">... About me ...</h2>
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-xl mb-4">Hello! I'm Jayesh, I'm a <span className="font-semibold">full-stack developer</span>.</h3>
              <p className="text-light-gray">More than 1 year experience.</p>
              
              {/* Skills Cards */}
              <div className="mt-12 space-y-6">
                <div className="bg-black/20 border border-white/10 rounded-xl p-6">
                  <h4 className="mb-4">Front-end</h4>
                  <div className="flex flex-wrap gap-2">
                    {["TypeScript", "React", "Vue", "CSS", "Redux Toolkit", "Next.js", "HTML", "Jest", "GraphQL", "React Native", "TailwindCSS", "Express"].map((skill) => (
                      <span key={skill} className="text-sm text-gray-400">/ {skill} </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-black/20 border border-white/10 rounded-xl p-6">
                  <h4 className="mb-4">Styles</h4>
                  <div className="flex flex-wrap gap-2">
                    {["SCSS", "SASS", "PostCSS", "Ant.UI", "MUI", "Material UI"].map((skill) => (
                      <span key={skill} className="text-sm text-gray-400">/ {skill} </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-black/20 border border-white/10 rounded-xl p-6">
                  <h4 className="mb-4">Back-end</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Golang", "SQL", "ORM", "PostgreSQL", "MySQL", "MongoDB", "JDBC", "Redis", "Kafka", "Node", "Rest", "Typescript", "Microservices"].map((skill) => (
                      <span key={skill} className="text-sm text-gray-400">/ {skill} </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-black/20 border border-white/10 rounded-xl p-6">
                  <h4 className="mb-4">DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Nginx", "Brctf", "Docker", "CI/CD", "AWS", "Bash"].map((skill) => (
                      <span key={skill} className="text-sm text-gray-400">/ {skill} </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="h-72 bg-gray-800 rounded-xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Jayesh Wadhonkar" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Work Experience Section */}
              <div className="mt-12">
                <h2 className="text-6xl font-bold mb-6">Work</h2>
                
                <div className="space-y-px">
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
                  <p className="font-semibold">1 year 6 months</p>
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
    <div className="flex-shrink-0 w-80 h-32 relative rounded-xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 z-20 p-4 flex flex-col justify-between">
        <p className="text-sm text-white">{title}</p>
        <div className="flex justify-between items-center">
          <button className="text-xs text-white bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors">
            Read more
          </button>
          <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center">
            {direction === 'left' && <ArrowLeft size={12} className="text-black" />}
            {direction === 'right' && <ArrowRight size={12} className="text-black" />}
            {direction === 'none' && <ArrowRight size={12} className="text-black" />}
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
    <div className="flex py-4 border-t border-white/10 hover:bg-white/5 transition-colors">
      <div className="w-1/3 text-light-gray">
        <div>{period}</div>
        <div className="text-xs">{duration}</div>
      </div>
      <div className="w-1/3">{company}</div>
      <div className="w-1/3 text-right">
        <div>{position}</div>
        <div className="text-light-gray">{technologies}</div>
      </div>
    </div>
  );
};

export default Index;
