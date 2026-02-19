import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = {
    "Languages": ["Python", "Java", "C++"],
    "AI/ML": [
      "LLMs (OpenAI GPT, BERT, Transformers)", "RAG", "NLP", "Agentic AI",
      "LangChain", "LangGraph", "MCP Server", "PyTorch", "TensorFlow",
      "Scikit-learn", "Hugging Face", "FAISS", "Elasticsearch"
    ],
    "Data Engineering": ["Kafka", "Spark", "Hadoop", "Hive", "Redis", "MongoDB", "MySQL", "Data Lakes"],
    "Cloud & MLOps": ["AWS (EC2, S3, SageMaker, Lambda)", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD"],
    "Software Engineering": ["FastAPI", "Flask", "Django", "SpringBoot", "Node.js", "React", "GraphQL", "Linux", "Git"]
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-[#6e6e73] max-w-2xl mx-auto">
            AI Engineer engineering life; Building AI agents and Agentic systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">
              "Zero to One" AI Engineer
            </h3>
            <p className="text-[#6e6e73] leading-relaxed text-lg">
              Building AI agents and Agentic systems from ground up.
              I architect and build production-grade AI agents with complete Agent observability.
            </p>
            <ul className="text-[#6e6e73] leading-relaxed text-lg list-disc list-outside pl-6 space-y-2">
              <li>Built AI agents at Noveum.ai that monitor and fix AI agents as a founding AI Engineer.</li>
              <li>Built the Chatbot Engine at Yellow.ai that scales RAG pipelines and powers AI agents.</li>
              <li>Built AI infrastructure at Rakuten that enables AI agent development.</li>
            </ul>

            <div className="flex items-center gap-6 pt-6">
              <a
                href="https://noveum.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-24 h-24 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#0071e3] hover:shadow-md transition-all overflow-hidden"
                title="Noveum.ai"
              >
                <img
                  src="/noveum-logo.png"
                  alt="Noveum.ai"
                  className="w-full h-full object-contain p-2"
                />
              </a>
              <a
                href="https://yellow.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-24 h-24 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#0071e3] hover:shadow-md transition-all overflow-hidden"
                title="Yellow.ai"
              >
                <img
                  src="/yellow-logo.png"
                  alt="Yellow.ai"
                  className="w-full h-full object-contain p-2"
                />
              </a>
              <a
                href="https://rakuten.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-24 h-24 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#0071e3] hover:shadow-md transition-all overflow-hidden"
                title="Rakuten"
              >
                <img
                  src="/rakuten-logo.png"
                  alt="Rakuten"
                  className="w-full h-full object-contain p-2"
                />
              </a>
            </div>
           
            <div className="flex flex-wrap gap-2 pt-4">
              <a
                href="https://noveum.ai/en/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium shadow-sm hover:border-[#0071e3] hover:text-[#0071e3] transition-colors"
              >
                Noveum — AI agent building & evaluation
              </a>
              <a
                href="https://sunnom.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium shadow-sm hover:border-[#0071e3] hover:text-[#0071e3] transition-colors"
              >
                Sunnom — Mental Wellness application
              </a>
              <a
                href="https://pypi.org/project/promptval/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium shadow-sm hover:border-[#0071e3] hover:text-[#0071e3] transition-colors"
              >
                PromptVal — PyPI package for prompt validation
              </a>
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
