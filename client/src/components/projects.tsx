import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Github, ShoppingCart, MessageCircle, Smartphone } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const getProjectIcon = (title: string) => {
    switch (title) {
      case "GLAMGRAIL":
        return <ShoppingCart className="w-16 h-16 text-purple-600" />;
      case "REALTALK":
        return <MessageCircle className="w-16 h-16 text-blue-600" />;
      case "EduVerify":
        return <Smartphone className="w-16 h-16 text-orange-600" />;
      default:
        return <div className="w-16 h-16 bg-slate-200 rounded" />;
    }
  };

  const getProjectBackground = (title: string) => {
    switch (title) {
      case "GLAMGRAIL":
        return "bg-gradient-to-br from-pink-100 to-purple-100";
      case "REALTALK":
        return "bg-gradient-to-br from-green-100 to-blue-100";
      case "EduVerify":
        return "bg-gradient-to-br from-orange-100 to-red-100";
      default:
        return "bg-slate-100";
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className={`h-48 ${getProjectBackground(project.title)} flex items-center justify-center`}>
                {getProjectIcon(project.title)}
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="secondary" className="text-sm">
                    {project.duration}
                  </Badge>
                </div>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <ul className="text-sm text-slate-600 mb-4 space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
                
                <div className="flex space-x-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="outline" className="text-sm">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
