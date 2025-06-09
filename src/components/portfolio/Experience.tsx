
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "Yellow.ai",
      position: "SDE - AI/ML (NLP team)",
      duration: "May 2024 – Present",
      location: "Bengaluru, Karnataka",
      achievements: [
        "Designed and deployed scalable pipeline for document parsing, chunking, embedding generation, and Elasticsearch indexing",
        "Optimized 5+ NLP microservices by upgrading to Python 3.12.9 — reduced image size by 66%, improved build times by 60%",
        "Strengthened platform security by integrating HashiCorp Vault for secure secret management",
        "POC on Prompt Automation for LLM-RAGs with comprehensive DSPY Library research",
        "Daily on-call management resolving service failures, bot issues, API fixes, and backend challenges"
      ],
      skills: ["Python", "LLMs", "RAG Systems", "Flask", "FastAPI", "Kafka", "Microservices", "MongoDB", "Elasticsearch", "Redis", "Kubernetes", "Docker", "AWS"]
    },
    {
      company: "Rakuten",
      position: "Software Engineer - SixthSense Observability",
      duration: "Jan 2023 – April 2024",
      location: "Bengaluru, Karnataka",
      achievements: [
        "Achieved 98.8% reduction in system query response time (2.5s to 30ms) by implementing Redis cache over Presto query engine",
        "Built end-to-end Chatbot using LLMs and open source pre-trained models for enhanced user experience",
        "Conducted POC on Hadoop Ecosystem including Hive, Spark, Kafka, Flink, and specialized tools like Druid and Iceberg"
      ],
      skills: ["Python", "Spring Boot", "Vue.js", "Data Engineering", "MySQL", "Elasticsearch", "GraphQL", "Hadoop", "Kafka"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105 border-white/20">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl text-white">{exp.position}</CardTitle>
                    <p className="text-lg font-semibold text-purple-300 mt-1">{exp.company}</p>
                    <p className="text-sm text-white/70">{exp.location}</p>
                  </div>
                  <span className="text-sm font-medium text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    {exp.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/80">
                      <span className="text-purple-400 mt-1.5 text-xs">●</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white rounded text-xs border border-white/20"
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
    </section>
  );
};

export default Experience;
