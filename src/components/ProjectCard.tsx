
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  isEven?: boolean;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  githubUrl,
  liveUrl,
  isEven = false
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group glass-card overflow-hidden ${isEven ? 'bg-medium-gray/20' : 'bg-medium-gray/30'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        <div className="relative overflow-hidden w-full h-48 sm:h-64">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-gray via-transparent to-transparent opacity-90" />
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <div className="mb-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="inline-block text-xs font-mono bg-medium-gray/40 text-off-white px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-mono font-bold text-off-white mb-2">{title}</h3>
          
          <p className="text-light-gray text-sm mb-6 flex-grow">{description}</p>
          
          <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
            <div className="flex space-x-4">
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-gray hover:text-off-white transition-colors flex items-center gap-1 text-sm font-medium"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
              
              {liveUrl && (
                <a 
                  href={liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-light-gray hover:text-off-white transition-colors flex items-center gap-1 text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  <span>Live</span>
                </a>
              )}
            </div>
            
            <span 
              className={`text-xs font-mono transition-all duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              View details →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
