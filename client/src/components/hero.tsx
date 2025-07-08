import { Button } from "@/components/ui/button";
import { MapPin, Mail, Download, Eye } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would be served from public folder
    link.download = 'Raj_Shekhar_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="animate-in slide-in-from-left duration-500">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Raj Shekhar
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Full Stack Developer passionate about building scalable web applications with{" "}
                <span className="font-semibold text-blue-600">React</span>,{" "}
                <span className="font-semibold text-blue-600">Node.js</span>, and{" "}
                <span className="font-semibold text-blue-600">MongoDB</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button onClick={scrollToProjects} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg">
                  <Eye className="w-4 h-4 mr-2" />
                  View My Work
                </Button>
                <Button 
                  onClick={downloadResume} 
                  variant="outline" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-slate-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-cyan-500" />
                  <span>Jalandhar, Punjab</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-cyan-500" />
                  <span>shekharshekharraj2220@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl animate-in zoom-in duration-700 delay-200">
              <div className="text-white text-8xl">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
