import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ExternalLink, ChevronDown } from "lucide-react";

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

const Projects = () => {
  const isMobile = useIsMobile();
  const projects = [
    {
      title: "Sunnom — Daily journal and Companionship Application",
      period: "May 2025 – Present",
      description: "Designed and built Sunnom, an end-to-end companionship platform leveraging Agentic AI, LLMs, and RAG pipelines for personalized, context-aware support.",
      tech: ["Python", "FastAPI", "LLMs", "Agentic AI", "Node.js", "PostgreSQL", "Redis", "Docker", "React"],
      status: "Founder",
      type: "Personal Project",
      url: "https://sunnom.in"
    },
    {
      title: "PromptVal — Prompt Validation & Auto-Optimization",
      period: "Jan 2026",
      description: "Open-source prompt validation and auto-fix package that analyzes prompts, detects structural and semantic issues, and rewrites them into standardized prompt-engineering formats. Published on PyPI.",
      tech: ["Python", "PyPI", "Prompt Engineering", "LLMs"],
      status: "Open Source",
      type: "Published Package",
      url: "https://pypi.org/project/promptval/"
    },
    {
      title: "Noveum Trace SDK",
      period: "2025",
      description: "Open-source real-time agent observability layer for LangChain, LangGraph, and LiveKit. Auto-captures traces, LLM/tool calls, token usage, cost, and latency with structured span tracking.",
      tech: ["Python", "LangChain", "LangGraph", "LiveKit", "PyPI"],
      status: "Published",
      type: "Noveum.ai",
      url: "https://pypi.org/project/noveum-trace/"
    },
    {
      title: "HyBrid Search — LLM-RAG Search Engine",
      period: "Feb 2025",
      description: "Developed a Retrieval-Augmented Generation (RAG) pipeline by scraping content from URLs and PDFs, indexing for both keyword-based and semantic retrieval. Implemented a hybrid search engine combining traditional search with LLM-based contextual understanding. Hackathon Winner at Yellow.ai.",
      tech: ["Python", "FastAPI", "Node.js", "LLMs", "RAG", "Web-parsing", "Chunking", "Indexing"],
      status: "Hackathon Winner",
      type: "Yellow.ai Hackathon",
      url: "https://yellow.ai"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="container mx-auto max-w-[68rem]">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Projects
          </h2>
          <p className="text-[#6e6e73] max-w-2xl mx-auto">
            Building the future of AI agents
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="liquid-glass card-hover rounded-2xl border-white/70"
            >
              {isMobile ? (
                <Collapsible defaultOpen={false}>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-base text-[#1d1d1f] font-semibold">
                          {project.title}
                        </CardTitle>
                        <span className="text-xs font-medium px-2.5 py-1 liquid-glass-tag text-slate-600 rounded-full shrink-0">
                          {project.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs text-[#86868b]">
                        <span>{project.period}</span>
                        <span className="text-[#0071e3] font-medium">{project.type}</span>
                      </div>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-[#0071e3] hover:underline w-fit"
                        >
                          Visit <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <CollapsibleTrigger asChild>
                        <button className="flex items-center gap-1.5 text-sm font-medium text-[#0071e3] hover:underline w-fit">
                          View details
                          <ChevronDown className="h-4 w-4" />
                        </button>
                      </CollapsibleTrigger>
                    </div>
                  </CardHeader>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <p className="text-[#6e6e73] text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 liquid-glass-tag text-slate-600 rounded-lg text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <>
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-[#1d1d1f] font-semibold">
                          {project.url ? (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#0071e3] transition-colors inline-flex items-center gap-1.5 group"
                            >
                              {project.title}
                              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          ) : (
                            project.title
                          )}
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row sm:gap-4 gap-1 mt-2">
                          <span className="text-sm text-[#86868b]">{project.period}</span>
                          <span className="text-sm font-medium text-[#0071e3]">
                            {project.type}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-medium px-3 py-1.5 liquid-glass-tag text-slate-600 rounded-full">
                        {project.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6e6e73] mb-4">{project.description}</p>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0071e3] hover:underline mb-4"
                      >
                        Visit project <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 liquid-glass-tag text-slate-600 rounded-xl text-xs font-medium"
                        >
                          {tech}
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

export default Projects;
