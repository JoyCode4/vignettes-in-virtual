
import PageTransition from '@/components/PageTransition';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Todo-Manager',
      description: 'Cloud-based Todo storage with CRUD functionalities. Build with ReactJS and Firebase for seamless user experience and real-time updates.',
      imageUrl: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
      tags: ['React', 'Firebase', 'CRUD', 'Cloud Storage'],
      githubUrl: 'https://github.com/JoyCode4',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'DNoteBook',
      description: 'Cloud NoteSaver with authentication, JWT token, and bcrypt.js security. Allows users to securely store and manage their notes online.',
      imageUrl: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80',
      tags: ['JWT', 'bcrypt.js', 'Auth', 'Cloud Storage'],
      githubUrl: 'https://github.com/JoyCode4',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'NewsApp',
      description: 'A React-based news application fetching real-time category-based news. Users can browse news articles by various categories and get the latest updates.',
      imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
      tags: ['React', 'API', 'Real-time', 'News'],
      githubUrl: 'https://github.com/JoyCode4',
      liveUrl: '#'
    }
  ];

  return (
    <PageTransition>
      <div className="page-container">
        <main className="pt-20">
          <section id="projects" className="section-container">
            <h2 className="section-title">... Projects ...</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    tags={project.tags}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    isEven={index % 2 === 0}
                  />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </PageTransition>
  );
};

export default Projects;
