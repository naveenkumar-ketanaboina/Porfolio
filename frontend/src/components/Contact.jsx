import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-300">naveenkumar.ketenaboina@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-400" size={24} />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-300">+1 640 204 9553</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" size={24} />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-300">Cleveland, OH</p>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;