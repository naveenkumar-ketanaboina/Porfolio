import React from 'react';
import { Brain, Database, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex space-x-4 mb-6">
            <Terminal className="w-12 h-12 text-emerald-500" />
            <Database className="w-12 h-12 text-blue-500" />
            <Brain className="w-12 h-12 text-purple-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Full Stack & <span className="text-emerald-500">GenAI</span> Developer
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-8">
            Crafting robust backend systems and innovative AI solutions. 
            Specializing in scalable architectures, machine learning, and cutting-edge AI implementations.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg transition-colors">
              Get in Touch
            </a>
            <a href="#projects" className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-lg transition-colors">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}