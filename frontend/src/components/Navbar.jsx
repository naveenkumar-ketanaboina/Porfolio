import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-blue-400">NK</h1>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white">Contact</button>
          </div>
          <button className="md:hidden">
            <Menu className="text-gray-300" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;