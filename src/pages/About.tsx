
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';

const About = () => {
  const skills = [
    'Java', 'OOPs', 'HTML', 'CSS', 'JavaScript', 'ReactJS'
  ];

  const education = [
    {
      degree: 'BE in Computer Science',
      institution: 'TSSM BSCOER',
      year: '2021-2024',
      score: 'CGPA: 9.04'
    },
    {
      degree: 'HSC',
      institution: 'N.M.V. Junior College Pune',
      year: '2020',
      score: '68.62%'
    },
    {
      degree: 'SSC',
      institution: 'Vidya Niketan English Medium School',
      year: '2018',
      score: '82.60%'
    }
  ];

  return (
    <PageTransition>
      <div className="page-container">
        <main className="pt-20">
          <section id="about" className="section-container">
            <h2 className="section-title">... About me ...</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6 animate-slide-right" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-mono text-2xl font-semibold text-off-white">Hello! I'm Jayesh, a <span className="text-gradient">software engineer</span>.</h3>
                
                <p className="text-light-gray">
                  I specialize in building exceptional digital experiences that are both functional and visually appealing. 
                  Currently, I'm focused on developing accessible, responsive web applications.
                </p>
                
                <p className="text-light-gray">
                  With 6 months of experience at Yardi, I've honed my skills in creating efficient, scalable, and maintainable code.
                </p>

                <p className="text-light-gray">
                  I'm passionate about continuous learning and staying updated with the latest technologies and best practices in 
                  software development.
                </p>
                
                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 neo-blur hover-lift text-off-white font-medium"
                  >
                    <span>Get in touch</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
              
              <div className="space-y-8 animate-slide-left" style={{ animationDelay: '0.3s' }}>
                <div className="glass-card p-6 space-y-4">
                  <h4 className="font-mono text-lg font-medium text-off-white">Technical Skills</h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span 
                        key={skill}
                        className="inline-block text-sm font-mono bg-medium-gray/40 text-off-white px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <h5 className="font-mono text-sm font-medium text-off-white mt-4">Languages</h5>
                  <p className="text-light-gray text-sm">English, Hindi, Marathi</p>
                </div>
                
                <div className="glass-card p-6 space-y-4">
                  <h4 className="font-mono text-lg font-medium text-off-white">Education</h4>
                  
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-medium-gray pl-4 space-y-1">
                        <h5 className="text-off-white font-medium">{edu.degree}</h5>
                        <p className="text-light-gray text-sm">{edu.institution}</p>
                        <div className="flex justify-between text-xs">
                          <span className="text-light-gray">{edu.year}</span>
                          <span className="text-light-gray">{edu.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="glass-card p-6 space-y-4">
                  <h4 className="font-mono text-lg font-medium text-off-white">Experience</h4>
                  
                  <div className="border-l-2 border-medium-gray pl-4 space-y-1">
                    <h5 className="text-off-white font-medium">Software Engineer</h5>
                    <p className="text-light-gray text-sm">Yardi</p>
                    <p className="text-xs text-light-gray">6 months</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PageTransition>
  );
};

export default About;
