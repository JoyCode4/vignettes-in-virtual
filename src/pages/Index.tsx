
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { useEffect, useRef } from 'react';

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
      <div className="page-container">
        <main className="flex flex-col justify-center min-h-screen relative overflow-hidden">
          {/* Background decorative circles */}
          <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full border border-white/5 opacity-30" />
          <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[40%] rounded-full border border-white/5 opacity-30" />
          
          {/* Main content */}
          <div className="section-container flex flex-col justify-center pt-20 md:pt-0">
            <div 
              ref={textRef}
              className="opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gradient">
                Software 
                <br />
                Engineer
              </h1>
              
              <div className="max-w-2xl mb-8">
                <p className="text-light-gray text-lg md:text-xl mb-6">
                  I'm Jayesh Wadhonkar, a passionate software engineer focused on creating clean, efficient, and user-friendly applications.
                </p>
                
                <p className="text-light-gray text-md mb-8">
                  My goal is to write maintainable, clean, and understandable code to make development was enjoyable.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 neo-blur hover-lift text-off-white font-medium"
                >
                  <span>View my work</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-light-gray hover:text-off-white hover:border-white/20 transition-colors font-medium"
                >
                  Contact me
                </Link>
              </div>
              
              <div className="flex space-x-5 mt-12">
                <a 
                  href="https://github.com/JoyCode4" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-gray hover:text-off-white transition-all hover:-translate-y-1"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/jayesh-wadhonkar-184539168" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-gray hover:text-off-white transition-all hover:-translate-y-1"
                >
                  LinkedIn
                </a>
                <a 
                  href="mailto:joywadhonkar4@gmail.com"
                  className="text-light-gray hover:text-off-white transition-all hover:-translate-y-1"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default Index;
