import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = {
    "Languages & Backend": [
      "Python", "Java", "C++", "FastAPI", "Flask", "Microservices", "Kafka", "Spring Boot"
    ],
    "AI/ML & Tools": [
      "LLMs", "RAG Systems", "Agentic AI", "NLP", "TensorFlow", "PyTorch", "Git", "Linux", "HashiCorp Vault", "Minio"
    ],
    "Databases, Cloud & DevOps": [
      "MongoDB", "MySQL", "Elasticsearch", "Redis", "AWS", "Azure", "Docker", "Kubernetes", "Jenkins"
    ]
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              AI/ML Engineer with Full-Stack Expertise
            </h3>
            <p className="text-white/80 leading-relaxed">
              Engineering AI Projects and my life in parallel at Yellow.ai. Specializing in 
              Large Language Models, RAG systems, Agentic AI and Software development with Python.


              
              </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white rounded-full text-sm border border-white/20">
                Building Mental health platform harnessing LLMs - Sunnom.in
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white rounded-full text-sm border border-white/20">
               X - Rakuten
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white rounded-full text-sm border border-white/20">
                TYSAL Community Founder
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="glass-effect hover:bg-white/20 transition-all duration-300 hover:scale-105 border-white/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
