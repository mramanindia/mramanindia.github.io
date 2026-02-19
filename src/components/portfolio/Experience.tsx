import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
};

type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
  location: string;
  achievements: (string | JSX.Element)[];
  skills: string[];
};

const ExpandedExperienceCard = ({ exp }: { exp: ExperienceItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CardHeader className="pb-2">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg text-[#1d1d1f] font-semibold">
              {exp.company}
            </CardTitle>
            <span className="text-xs font-medium text-slate-600 liquid-glass-tag px-3 py-1.5 rounded-full shrink-0">
              {exp.duration}
            </span>
          </div>
          <p className="text-sm font-medium text-[#0071e3]">{exp.position}</p>
          <p className="text-xs text-[#86868b]">{exp.location}</p>
          <CollapsibleTrigger asChild>
            <button className="flex items-center gap-1.5 text-sm font-medium text-[#0071e3] hover:underline mt-2 w-fit">
              {open ? "View less" : "View details"}
              {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </CollapsibleTrigger>
        </div>
      </CardHeader>
      <CollapsibleContent>
        <CardContent className="pt-0">
          <ul className="space-y-3 mb-4">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-3 text-[#6e6e73] text-sm">
                <span className="text-[#0071e3] mt-1.5 text-xs shrink-0">●</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 liquid-glass-tag text-slate-600 rounded-lg text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </CollapsibleContent>
    </Collapsible>
  );
};

const experiences: ExperienceItem[] = [
    {
      company: "Noveum.ai",
      position: "Founding AI Engineer (Senior AI Engineer)",
      duration: "Oct 2025 – Present",
      location: "Remote - San Francisco, California, United States",
      achievements: [
        <>Built the core engine powering <strong>Noveum.ai</strong> (<strong>Noveum Trace SDK</strong>, <strong>NovaEval</strong>, <strong>NovaPilot</strong>, <strong>NovaGen</strong>, <strong>Noveum-SDK</strong>), delivering end-to-end AI agent tracing, LLM-as-judge evaluation, score-driven failure analysis with automated remediation, and comprehensive pre-production synthetic testing (<a href="https://noveum.ai/en/docs" target="_blank" rel="noopener noreferrer" className="text-[#0071e3] hover:underline">Docs</a>).</>,
        <>Architected and published the open-source <strong>Noveum Trace SDK</strong> (<a href="https://pypi.org/project/noveum-trace/" target="_blank" rel="noopener noreferrer" className="text-[#0071e3] hover:underline">PyPI</a>), a real-time agent observability layer requiring minimal integration with LangChain, LangGraph, and LiveKit; auto-captures traces, LLM/tool calls, token usage, cost, and latency with structured span tracking to power evaluation and optimization workflows.</>,
        <>Built <strong>NovaEval</strong>, a hybrid LLM and rule-based evaluation engine implementing <strong>74+ evaluation metrics</strong> across RAG quality, tool selection, security checks, voice evaluations, and system prompt validation; reduced evaluation costs by <strong>50%</strong> via batched LLM API optimization.</>,
        <>Engineered <strong>NovaPilot</strong>, an AI-driven evaluation analytics engine that analyzes patterns in agent evaluations and provides automated remediation recommendations; optimized report generation time by <strong>80%</strong> through parallel score processing and batched LLM execution.</>,
        <>Engineered <strong>NovaGen</strong>, a synthetic multi-persona testing agent running <strong>7+ parallel personas</strong> with <strong>&lt;2s</strong> per-turn latency using trace-aware adaptive questioning; delivers comprehensive node-level coverage and behavioral validation beyond manual testing limits.</>,
        <><strong>Tech Stack:</strong> Python, Agentic Orchestration (LangChain, LangGraph, Custom Controllers), RAG, LLM APIs (Gemini, Anthropic, OpenAI), Prompt Engineering, FastAPI, Async Workflows, Docker, Kubernetes, AWS</>
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

const Experience = () => {
  const isMobile = useIsMobile();

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-[#6e6e73] max-w-2xl mx-auto">
            Building AI agents and Agentic AI systems
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="liquid-glass card-hover rounded-2xl border-white/70"
            >
              {isMobile ? (
                <ExpandedExperienceCard exp={exp} />
              ) : (
                <>
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
                      <span className="text-sm font-medium text-slate-600 liquid-glass-tag px-4 py-2 rounded-full">
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
                          className="px-3 py-1 liquid-glass-tag text-slate-600 rounded-xl text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
