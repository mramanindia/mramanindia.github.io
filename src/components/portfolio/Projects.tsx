import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Sunnom — Companionship & Daily Journal",
      period: "May 2025 – Present",
      description: "Designed and built an end-to-end companionship platform leveraging Agentic AI, LLMs, and RAG pipelines for personalized, context-aware support.",
      tech: ["Python", "FastAPI", "LLMs", "Agentic AI", "Node.js", "PostgreSQL", "Redis", "Docker", "React"],
      status: "Founder",
      type: "Personal Project"
    },
    {
      title: "PromptVal — Prompt Validation & Auto-Optimization",
      period: "Jan 2026",
      description: "Open-source prompt validation and auto-fix package that analyzes prompts, detects structural and semantic issues, and rewrites them into standardized prompt-engineering formats. Published on PyPI.",
      tech: ["Python", "PyPI", "Prompt Engineering", "LLMs"],
      status: "Open Source",
      type: "Published Package"
    },
    {
      title: "Noveum Trace SDK",
      period: "2025",
      description: "Open-source real-time agent observability layer for LangChain, LangGraph, and LiveKit. Auto-captures traces, LLM/tool calls, token usage, cost, and latency with structured span tracking.",
      tech: ["Python", "LangChain", "LangGraph", "LiveKit", "PyPI"],
      status: "Published",
      type: "Noveum.ai"
    },
    {
      title: "HyBrid Search — LLM-RAG Search Engine",
      period: "Feb 2025",
      description: "Developed a Retrieval-Augmented Generation (RAG) pipeline by scraping content from URLs and PDFs, indexing for both keyword-based and semantic retrieval. Implemented a hybrid search engine combining traditional search with LLM-based contextual understanding.",
      tech: ["Python", "FastAPI", "Node.js", "LLMs", "RAG", "Web-parsing", "Chunking", "Indexing"],
      status: "Hackathon Winner",
      type: "Hackathon"
    }
  ];

  const achievements = [
    "Published Noveum Trace SDK on PyPI",
    "Published PromptVal on PyPI",
    "Hackathon Winner — HyBrid Search (LLM-RAG search engine)",
    "Technical blog on prompt automation (DSPy)",
    "Technical blog on SixthSense observability",
    "Founder — Sunnom companionship platform"
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Projects & Achievements
          </h2>
          <p className="text-[#6e6e73] max-w-2xl mx-auto">
            Building the future of AI agents and observability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">
              Featured Projects
            </h3>
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white border-slate-200/80 shadow-sm card-hover hover:border-slate-200"
              >
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-[#1d1d1f] font-semibold">
                        {project.title}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:gap-4 gap-1 mt-2">
                        <span className="text-sm text-[#86868b]">{project.period}</span>
                        <span className="text-sm font-medium text-[#0071e3]">
                          {project.type}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-medium px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full">
                      {project.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6e6e73] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-xs font-medium border border-slate-100"
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
            <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">
              Achievements
            </h3>
            <Card className="bg-white border-slate-200/80 shadow-sm card-hover hover:border-slate-200">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#0071e3] mt-1 text-sm">✦</span>
                      <span className="text-[#6e6e73]">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200/80 shadow-sm card-hover hover:border-slate-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-[#1d1d1f] mb-2">Education</h4>
                <p className="text-[#0071e3] font-medium">Lovely Professional University</p>
                <p className="text-sm text-[#6e6e73] mt-1">
                  Bachelor of Technology in Computer Science and Engineering
                </p>
                <p className="text-sm text-[#6e6e73]">CGPA: 9.0/10</p>
                <p className="text-xs text-[#86868b] mt-2">Punjab, India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
