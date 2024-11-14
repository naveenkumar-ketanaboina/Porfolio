import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-black text-center py-6">
        <p className="text-gray-400">© {new Date().getFullYear()} DevName. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;