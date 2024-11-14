import React from 'react';
import { Github, Linkedin, Mail, Terminal, Cpu, Database, Brain } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-emerald-500" />
            <span className="text-white font-bold text-xl">DevName</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-gray-300 hover:text-emerald-500 transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-emerald-500 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-emerald-500 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-emerald-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}