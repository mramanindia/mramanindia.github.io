import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = {
    "Languages": ["Python", "Java"],
    "Agentic AI": [
      "Agent System Architecture", "Multi-Agent Orchestration", "AI Agent Observability",
      "Trace-Driven Evaluation", "LLM-as-Judge", "Tool/Function Calling",
      "Memory-Augmented Agents", "Prompt Optimization", "LangChain", "LangGraph"
    ],
    "Infrastructure": [
      "FastAPI", "Microservices", "Async Workflows", "Docker", "Kubernetes",
      "AWS", "ClickHouse", "Redis", "CI/CD", "Linux", "Git"
    ]
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-[#6e6e73] max-w-2xl mx-auto">
            AI Engineer building agent observability and evaluation systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">
              Founding AI Engineer at Noveum.ai
            </h3>
            <p className="text-[#6e6e73] leading-relaxed text-lg">
              Building the core engine powering AI agent tracing, LLM-as-judge evaluation,
              and synthetic testing. Previously scaled RAG pipelines at Yellow.ai and
              contributed to observability infrastructure at Rakuten.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium shadow-sm">
                Noveum Trace SDK — Open-source agent observability
              </span>
              <span className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium shadow-sm">
                Sunnom — Agentic AI companionship platform
              </span>
              <span className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium shadow-sm">
                PromptVal — PyPI package for prompt validation
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card
                key={category}
                className="bg-white border-slate-200/80 shadow-sm card-hover hover:border-slate-200"
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold text-[#1d1d1f] mb-3 text-sm uppercase tracking-wider text-slate-500">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium border border-slate-100 hover:bg-slate-100/80 transition-colors"
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
