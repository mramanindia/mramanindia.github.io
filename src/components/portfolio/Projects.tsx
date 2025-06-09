
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Sunnom – Mental Health LLM Assistant",
      period: "May 2025 – Present",
      description: "Building an end-to-end mental health platform using Agentic AI and LLMs for comprehensive mental health support.",
      tech: ["Python", "FastAPI", "LLMs", "Agentic AI", "Node.js", "MongoDB", "Redis", "Docker"],
      status: "In Development",
      type: "Personal Project"
    },
    {
      title: "HyBrid Search: LLM-RAG Search Engine",
      period: "February 2025",
      description: "Hybrid search engine combining traditional search capabilities with LLMs and RAG systems for intelligent searching. Won hackathon competition.",
      tech: ["Python", "FastAPI", "Node.js", "LLMs", "Web Scraping", "RAG Systems", "Vector Search"],
      status: "🏆 Hackathon Winner",
      type: "Competition Project"
    },
    {
      title: "Document Cognition Service",
      period: "2024",
      description: "Scalable pipeline for document parsing, chunking, embedding generation, and Elasticsearch indexing at Yellow.ai.",
      tech: ["Python", "Elasticsearch", "NLP", "Document Processing", "Microservices"],
      status: "Production",
      type: "Professional Project"
    }
  ];

  const achievements = [
    "10+ International Freelancing Projects",
    "Microsoft Learn Student Ambassador",
    "3⭐ CodeChef (Rating: 1613)",
    "Global Rank 554 at CodeChef April Long Challenge",
    "TYSAL Community Founder (200+ active members)",
    "Conducted 20+ live events mentoring 2000+ students"
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projects & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Featured Projects</h3>
            {projects.map((project, index) => (
              <Card key={index} className="glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105 border-white/20">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:gap-4 gap-1 mt-2">
                        <span className="text-sm text-white/70">{project.period}</span>
                        <span className="text-sm font-medium text-purple-300">{project.type}</span>
                      </div>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white rounded-full border border-white/20">
                      {project.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-white rounded text-xs backdrop-blur-sm border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Achievements & Leadership</h3>
            <Card className="glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105 border-white/20">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1 text-sm">✨</span>
                      <span className="text-white/80">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-purple-400/30 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-white mb-2">Education</h4>
                <p className="text-purple-300 font-medium">Lovely Professional University</p>
                <p className="text-sm text-white/80">
                  Bachelor's of Science in Computer Science and Engineering
                </p>
                <p className="text-sm text-white/80">CGPA: 9.0/10</p>
                <p className="text-xs text-white/70 mt-2">
                  CR for 4 consecutive semesters
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
