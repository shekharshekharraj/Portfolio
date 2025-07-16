import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Raj Shekhar</h3>
            <p className="text-slate-300">Full Stack Developer | Building the future one line of code at a time</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <button onClick={() => scrollToSection("home")} className="text-slate-300 hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-slate-300 hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-slate-300 hover:text-white transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("education")} className="text-slate-300 hover:text-white transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-slate-300 hover:text-white transition-colors">
              Contact
            </button>
          </div>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="https://www.linkedin.com/in/raj-shekhar~/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-600 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/shekharshekharraj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-600 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="mailto:shekharshekharraj2220@gmail.com"
              className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          
          <div className="border-t border-slate-600 pt-6">
            <p className="text-slate-400 text-sm">
              © 2024 Raj Shekhar. All rights reserved. Built with <span className="text-red-400">❤</span> using React, Node.js & MongoDB
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
