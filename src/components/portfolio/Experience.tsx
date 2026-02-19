import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "Noveum.ai",
      position: "Founding AI Engineer (Senior AI Engineer)",
      duration: "Oct 2025 – Present",
      location: "Remote - San Francisco, California",
      achievements: [
        "Built the core engine powering Noveum.ai (Noveum Trace SDK, NovaEval, NovaPilot, NovaGen) — end-to-end AI agent tracing, LLM-as-judge evaluation, score-driven failure analysis, and synthetic testing",
        "Architected and published open-source Noveum Trace SDK (PyPI), a real-time agent observability layer for LangChain, LangGraph, and LiveKit with structured span tracking",
        "Built NovaEval, a hybrid LLM and rule-based evaluation engine with 74+ metrics across RAG quality, tool selection, security; reduced evaluation costs by 50% via batched LLM optimization",
        "Engineered NovaPilot for AI-driven evaluation analytics and automated remediation; optimized report generation by 80% through parallel processing",
        "Engineered NovaGen, a synthetic multi-persona testing agent with 7+ parallel personas and <2s per-turn latency"
      ],
      skills: ["Python", "LangChain", "LangGraph", "Agentic AI", "FastAPI", "Docker", "Kubernetes", "AWS", "RAG", "LLM APIs"]
    },
    {
      company: "Yellow.ai",
      position: "AI Engineer - NLP team",
      duration: "May 2024 – Sep 2025",
      location: "Remote - San Mateo, California",
      achievements: [
        "Owned end-to-end development of a scalable RAG pipeline — 40% lower ingestion latency with Kafka-based streaming, 25% better retrieval via adaptive semantic chunking, OpenAI embeddings, and FAISS–Elasticsearch hybrid; engineered RESTful APIs with fault tolerance and 100% automated test coverage",
        "Built LLM lifecycle pipelines with monitoring, drift detection, CI/CD-driven retraining, and fine-tuned BERT models for domain-specific NLP (name validation, search suggestions, and others)",
        "Optimized 5+ NLP microservices with Python 3.12.9, UV, and multi-stage Docker builds (66% smaller images, 60% faster builds, reduced costs); strengthened security via HashiCorp Vault for secret management",
        "Researched and prototyped prompt automation for LLM-RAG pipelines on DSPy — published technical blog post"
      ],
      skills: ["Python", "LLMs", "RAG", "BERT", "Flask", "FastAPI", "Kafka", "MongoDB", "Elasticsearch", "Redis", "Kubernetes", "Docker", "AWS"]
    },
    {
      company: "Rakuten",
      position: "AI Engineer - SixthSense Observability",
      duration: "Jan 2023 – Apr 2024",
      location: "Bengaluru, Karnataka",
      achievements: [
        "Reduced query response latency by 98.8% (2.5s → 30ms) through Redis caching over Presto and by integrating Presto with Elasticsearch + Amazon S3, enabling sub-second analytics at scale",
        "Designed and deployed end-to-end APIs for OpenSearch data retention and lifecycle management (PoC → production), achieving 30% reduction in storage costs and improved query efficiency via automated lifecycle policies with 100% test coverage",
        "Explored large-scale data ecosystems with POCs on Hadoop, Hive, Spark, Trino, Flink, and Iceberg for real-time/Big Data processing in AI pipelines"
      ],
      skills: ["Python", "Java", "LLMs", "SpringBoot", "Vue.js", "Data Engineering", "GraphQL", "Elasticsearch", "Redis", "Presto", "AWS"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-[#6e6e73] max-w-2xl mx-auto">
            Building AI agent infrastructure and observability systems
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-white border-slate-200/80 shadow-sm card-hover hover:border-slate-200"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <CardTitle className="text-xl text-[#1d1d1f] font-semibold">
                      {exp.position}
                    </CardTitle>
                    <p className="text-lg font-medium text-[#0071e3] mt-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-[#86868b] mt-0.5">{exp.location}</p>
                  </div>
                  <span className="text-sm font-medium text-slate-600 bg-slate-100 px-4 py-2 rounded-full">
                    {exp.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#6e6e73]">
                      <span className="text-[#0071e3] mt-1.5 text-xs">●</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-xs font-medium border border-slate-100"
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
