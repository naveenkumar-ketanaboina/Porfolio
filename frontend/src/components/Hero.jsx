import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <div className="space-y-6 animate-fadeIn">
          <h2 className="text-xl md:text-2xl text-blue-400">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Naveen Kumar Ketanaboina
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light">
            Full Stack Developer
          </p>
          <div className="flex gap-8 justify-center items-center mt-12">
            <a href="#projects" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-medium transition-all transform hover:scale-105">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full font-medium transition-all transform hover:scale-105">
              Contact Me
            </a>
          </div>
          <div className="flex gap-6 justify-center mt-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/naveen-kumar-ketanaboina-3558a0245/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:naveenkumar.ketanaboina@gmail.com"
               className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} className="text-blue-400" />
      </div>
    </section>
  );
};

export default Hero;