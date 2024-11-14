import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, image, tech, demo, github }) => (
  <div className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={demo} target="_blank" rel="noopener noreferrer" 
           className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
          <ExternalLink size={16} /> Demo
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
          <Github size={16} /> Code
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart and payment integration",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "Node.js", "MongoDB"],
      demo: "https://demo.com",
      github: "https://github.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "Firebase", "Tailwind"],
      demo: "https://demo.com",
      github: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;