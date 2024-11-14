import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Code Assistant",
      description: "Built a production-grade AI code assistant using LLMs and RAG, supporting multiple programming languages with context-aware suggestions.",
      tech: ["Python", "PyTorch", "FastAPI", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Distributed Task Processing",
      description: "Designed and implemented a scalable distributed task processing system handling millions of daily jobs.",
      tech: ["Go", "RabbitMQ", "PostgreSQL", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Real-time Analytics Platform",
      description: "Created a high-performance analytics platform processing real-time data streams with ML-powered insights.",
      tech: ["Python", "Apache Kafka", "ClickHouse", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-900">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-800 text-emerald-500 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-emerald-500 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white hover:text-emerald-500 transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}