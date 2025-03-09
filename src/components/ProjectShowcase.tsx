
import { useState, useEffect } from 'react';
import { Play, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  year: string;
  images: string[];
  githubUrl: string;
  liveUrl?: string;
}

interface ProjectShowcaseProps {
  project: Project;
}

const ProjectShowcase = ({ project }: ProjectShowcaseProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add animation delay to make it look nice
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [project.id]);
  
  return (
    <div className={`w-full transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column - Project info */}
        <div className="col-span-1 lg:col-span-4 flex flex-col">
          <h3 className="text-3xl font-mono font-bold text-white mb-4">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-mono bg-white/10 text-white px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-white/80 mb-6 font-light">{project.description}</p>
          
          <p className="text-white/60 mb-8 text-sm">{project.longDescription}</p>
          
          {/* GitHub and Live links */}
          <div className="flex gap-4 mt-auto mb-6 lg:mb-0">
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
        
        {/* Right column - Images gallery */}
        <div className="col-span-1 lg:col-span-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative h-full">
            {/* Main large image */}
            <div className="col-span-1 md:col-span-8 md:col-start-1 row-span-1 md:row-span-2 relative rounded-2xl overflow-hidden group mb-4 md:mb-0">
              <img 
                src={project.images[0]} 
                alt={`${project.title} screenshot 1`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              <div className="absolute bottom-4 right-4">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white/90 transition-colors shadow-lg">
                  <Play size={20} className="text-black ml-1" />
                </div>
              </div>
            </div>
            
            {/* Secondary images in a flex layout for mobile, grid for larger screens */}
            <div className="md:hidden flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-32 relative rounded-2xl overflow-hidden group">
                  <img 
                    src={image} 
                    alt={`${project.title} screenshot ${index + 2}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  <div className="absolute bottom-3 right-3">
                    <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white/90 transition-colors shadow-lg">
                      <Play size={16} className="text-black ml-0.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Desktop secondary images */}
            {project.images[1] && (
              <div className="hidden md:block md:col-span-4 md:col-start-9 relative rounded-2xl overflow-hidden group">
                <img 
                  src={project.images[1]} 
                  alt={`${project.title} screenshot 2`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <div className="absolute bottom-3 right-3">
                  <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white/90 transition-colors shadow-lg">
                    <Play size={16} className="text-black ml-0.5" />
                  </div>
                </div>
              </div>
            )}
            
            {/* Third image - bottom right (desktop only) */}
            {project.images[2] && (
              <div className="hidden md:block md:col-span-4 md:col-start-9 md:row-start-2 relative rounded-2xl overflow-hidden group">
                <img 
                  src={project.images[2]} 
                  alt={`${project.title} screenshot 3`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <div className="absolute bottom-3 right-3">
                  <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white/90 transition-colors shadow-lg">
                    <Play size={16} className="text-black ml-0.5" />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Background circle decoration */}
          <div className="absolute -bottom-40 -right-40 w-96 h-96 border border-white/5 rounded-full hidden lg:block"></div>
          <div className="absolute -bottom-60 -right-60 w-120 h-120 border border-white/3 rounded-full hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
