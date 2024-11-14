import React from 'react';
import { Database, Server, Cloud, Brain, Code, Lock } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: "Backend Development",
      description: "Python, Node.js, Go, PostgreSQL, MongoDB, Redis",
      color: "border-blue-500"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "AI & Machine Learning",
      description: "PyTorch, TensorFlow, LangChain, Transformers, RAG",
      color: "border-purple-500"
    },
    {
      icon: <Server className="w-8 h-8 text-emerald-500" />,
      title: "System Architecture",
      description: "Microservices, Event-Driven, Distributed Systems",
      color: "border-emerald-500"
    },
    {
      icon: <Cloud className="w-8 h-8 text-sky-500" />,
      title: "Cloud & DevOps",
      description: "AWS, Docker, Kubernetes, CI/CD, Terraform",
      color: "border-sky-500"
    },
    {
      icon: <Code className="w-8 h-8 text-amber-500" />,
      title: "API Development",
      description: "REST, GraphQL, gRPC, WebSockets",
      color: "border-amber-500"
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: "Security & Performance",
      description: "OAuth, JWT, Rate Limiting, Caching",
      color: "border-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg bg-gray-800 border-l-4 ${skill.color} hover:transform hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{skill.title}</h3>
              </div>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}