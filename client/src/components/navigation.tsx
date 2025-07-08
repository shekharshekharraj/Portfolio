import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/90 backdrop-blur-md"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-slate-800">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Raj Shekhar
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-slate-600 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-slate-600 hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-slate-600 hover:text-blue-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("education")} className="text-slate-600 hover:text-blue-600 transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-slate-600 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://linkedin.com/in/raj-shekhar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/shekharshekharraj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-slate-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("home")} className="text-slate-600 hover:text-blue-600 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection("projects")} className="text-slate-600 hover:text-blue-600 transition-colors text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection("skills")} className="text-slate-600 hover:text-blue-600 transition-colors text-left">
                Skills
              </button>
              <button onClick={() => scrollToSection("education")} className="text-slate-600 hover:text-blue-600 transition-colors text-left">
                Education
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-slate-600 hover:text-blue-600 transition-colors text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
