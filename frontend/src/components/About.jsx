import React, { useEffect, useState } from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';
import axios from 'axios';

const About = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    // Make sure the URL is pointing to your Django backend
    axios.get('http://127.0.0.1:8000/info/api/skills/')
      .then((response) => {
        setSkills(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the skills:', error);
      });
  }, []);
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            About Me
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Get to know me!</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a Full Stack Developer with a passion for creating beautiful, functional, 
              and user-friendly websites and applications. I have a strong foundation in 
              front-end & back-end development, and I'm skilled in creating responsive 
              websites that offer a smooth user experience.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm open to job opportunities where I can contribute, learn and grow. If you 
              have a good opportunity that matches my skills and experience, don't hesitate 
              to contact me.
            </p>
            <a href="#contact" className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-medium transition-all transform hover:scale-105">
              Contact Me
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill.id}
                  className="px-4 py-2 bg-gray-800 text-blue-400 rounded-full text-sm hover:bg-gray-700 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 bg-gray-800 rounded-xl transform hover:scale-105 transition-all">
            <Code size={40} className="text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-300">2 years of development experience</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl transform hover:scale-105 transition-all">
            <Briefcase size={40} className="text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <p className="text-gray-300">5+ completed projects</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl transform hover:scale-105 transition-all">
            <GraduationCap size={40} className="text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-300">Master's (Computer Science)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;