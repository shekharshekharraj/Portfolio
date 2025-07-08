import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Wrench, Brain, Smartphone, Repeat, Package } from "lucide-react";
import { skills, coreCompetencies } from "@/lib/data";

export default function Skills() {
  const getSkillIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code className="w-6 h-6 text-blue-600" />;
      case "Web Technologies":
        return <Globe className="w-6 h-6 text-green-600" />;
      case "Tools & Platforms":
        return <Wrench className="w-6 h-6 text-purple-600" />;
      default:
        return <div className="w-6 h-6 bg-slate-200 rounded" />;
    }
  };

  const getCompetencyIcon = (title: string) => {
    switch (title) {
      case "DSA & Problem Solving":
        return <Brain className="w-8 h-8 text-blue-600" />;
      case "Responsive Design":
        return <Smartphone className="w-8 h-8 text-green-600" />;
      case "RESTful APIs":
        return <Repeat className="w-8 h-8 text-purple-600" />;
      case "OOP":
        return <Package className="w-8 h-8 text-orange-600" />;
      default:
        return <div className="w-8 h-8 bg-slate-200 rounded" />;
    }
  };

  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`w-3 h-3 rounded-full ${
              dot <= level ? "bg-blue-600" : "bg-slate-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory) => (
            <Card key={skillCategory.category} className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    {getSkillIcon(skillCategory.category)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{skillCategory.category}</h3>
                </div>
                
                {skillCategory.category === "Languages" ? (
                  <div className="space-y-3">
                    {skillCategory.items.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <span className="text-slate-700">{skill.name}</span>
                        {renderSkillLevel(skill.level || 4)}
                      </div>
                    ))}
                  </div>
                ) : skillCategory.category === "Web Technologies" ? (
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill) => (
                      <Badge key={skill.name} variant="outline" className="text-sm">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {skillCategory.items.map((skill) => (
                      <div key={skill.name} className="flex items-center">
                        <span className="text-slate-700">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Core Competencies */}
        <Card className="mt-12 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Core Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreCompetencies.map((competency) => (
                <div key={competency.title} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    {getCompetencyIcon(competency.title)}
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">{competency.title}</h4>
                  <p className="text-sm text-slate-600">{competency.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
