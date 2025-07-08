import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, Code, Laptop, Medal, ExternalLink } from "lucide-react";
import { education, achievements, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education & Achievements</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            My academic background and key accomplishments
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Education</h3>
                <p className="text-slate-600">Academic Background</p>
              </div>
            </div>
            
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">{education.university}</h4>
                    <p className="text-cyan-600 font-semibold">{education.degree}</p>
                    <p className="text-slate-600">{education.location}</p>
                  </div>
                  <Badge className="bg-blue-600 text-white">
                    {education.years}
                  </Badge>
                </div>
                
                <div className="flex items-center">
                  <span className="text-slate-600 mr-2">CGPA:</span>
                  <span className="text-2xl font-bold text-green-600">{education.cgpa}</span>
                  <span className="text-slate-500 ml-1">/10</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Achievements */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Achievements</h3>
                <p className="text-slate-600">Coding Accomplishments</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-l-4 border-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Medal className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">{achievement.title}</h4>
                        <p className="text-slate-600 text-sm mb-2">{achievement.date}</p>
                        <p className="text-slate-700">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((certification, index) => (
              <Card key={index} className="border border-slate-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      {certification.type === "kotlin" ? (
                        <div className="text-blue-600 text-xl">K</div>
                      ) : (
                        <div className="text-purple-600 text-xl">N</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 mb-2">{certification.title}</h4>
                      <p className="text-sm text-slate-600 mb-3">{certification.date}</p>
                      <a 
                        href={certification.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm font-semibold inline-flex items-center"
                      >
                        View Certificate <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
