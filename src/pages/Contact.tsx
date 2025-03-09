
import { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="page-container">
        <main className="pt-20">
          <section id="contact" className="section-container">
            <h2 className="section-title">... Contact ...</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-slide-right" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-mono text-2xl font-semibold text-off-white mb-6">Get in touch</h3>
                
                <p className="text-light-gray mb-8">
                  Have a question or want to work together? Feel free to reach out to me.
                  I'm currently open to new opportunities and collaborations.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="text-light-gray mr-4" size={20} />
                    <a 
                      href="mailto:joywadhonkar4@gmail.com" 
                      className="text-light-gray hover:text-off-white transition-colors"
                    >
                      joywadhonkar4@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="text-light-gray mr-4" size={20} />
                    <a 
                      href="tel:+919067921783" 
                      className="text-light-gray hover:text-off-white transition-colors"
                    >
                      +91 906-792-1783
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Github className="text-light-gray mr-4" size={20} />
                    <a 
                      href="https://github.com/JoyCode4" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-gray hover:text-off-white transition-colors"
                    >
                      github.com/JoyCode4
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin className="text-light-gray mr-4" size={20} />
                    <a 
                      href="https://www.linkedin.com/in/jayesh-wadhonkar-184539168" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-gray hover:text-off-white transition-colors"
                    >
                      linkedin.com/in/jayesh-wadhonkar-184539168
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-left" style={{ animationDelay: '0.3s' }}>
                <form onSubmit={handleSubmit} className="glass-card p-8">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-light-gray text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-medium-gray/30 border border-white/10 rounded-md px-4 py-2 text-off-white focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-light-gray text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-medium-gray/30 border border-white/10 rounded-md px-4 py-2 text-off-white focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-light-gray text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-medium-gray/30 border border-white/10 rounded-md px-4 py-2 text-off-white resize-none focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="neo-blur hover-lift w-full flex items-center justify-center px-6 py-3 text-off-white font-medium disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PageTransition>
  );
};

export default Contact;
