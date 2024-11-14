import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-12">
            Interested in collaboration or have a project in mind? Let's discuss how we can work together.
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
          </div>
          <form className="max-w-lg mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}