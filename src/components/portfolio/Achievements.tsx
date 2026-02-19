import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

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

const achievements = [
  <span key="noveum">Published <a href="https://pypi.org/project/noveum-trace/" target="_blank" rel="noopener noreferrer" className="text-[#0071e3] hover:underline">Noveum Trace SDK</a> on PyPI</span>,
  <span key="promptval">Published <a href="https://pypi.org/project/promptval/" target="_blank" rel="noopener noreferrer" className="text-[#0071e3] hover:underline">PromptVal</a> on PyPI</span>,
  "Hackathon Winner — HyBrid Search (LLM-RAG search engine)",
  <span key="dspy">Technical blog on <a href="https://medium.com/@mramanindia" target="_blank" rel="noopener noreferrer" className="text-[#0071e3] hover:underline">Medium</a></span>,
  <span key="sunnom">Founder — <a href="https://sunnom.in" target="_blank" rel="noopener noreferrer" className="text-[#0071e3] hover:underline">Sunnom</a> mental wellness platform</span>
];

const Achievements = () => {
  const isMobile = useIsMobile();

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Achievements
          </h2>
          <p className="text-[#6e6e73] max-w-2xl mx-auto">
            Highlights and milestones
          </p>
        </div>

        <div className="space-y-6">
          <Card className="liquid-glass card-hover rounded-2xl border-white/70">
            {isMobile ? (
              <Collapsible defaultOpen={false}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-[#1d1d1f]">Achievements & Education</h3>
                    <CollapsibleTrigger asChild>
                      <button className="flex items-center gap-1.5 text-sm font-medium text-[#0071e3] hover:underline">
                        View details
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </CollapsibleTrigger>
                  </div>
                </CardContent>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <ul className="space-y-4 mb-6">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-[#0071e3] mt-1 text-sm shrink-0">✦</span>
                          <span className="text-[#6e6e73] text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-slate-200/60">
                      <h4 className="font-semibold text-[#1d1d1f] mb-2">Education</h4>
                      <p className="text-[#0071e3] font-medium">Lovely Professional University</p>
                      <p className="text-sm text-[#6e6e73] mt-1">
                        Bachelor of Technology in Computer Science and Engineering
                      </p>
                      <p className="text-sm text-[#6e6e73]">CGPA: 9.0/10 | CR — 4 consecutive semesters</p>
                      <p className="text-xs text-[#86868b] mt-2">Punjab, India</p>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <CardContent className="p-6">
                <ul className="space-y-4 mb-6">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#0071e3] mt-1 text-sm">✦</span>
                      <span className="text-[#6e6e73]">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-slate-200/60">
                  <h4 className="font-semibold text-[#1d1d1f] mb-2">Education</h4>
                  <p className="text-[#0071e3] font-medium">Lovely Professional University</p>
                  <p className="text-sm text-[#6e6e73] mt-1">
                    Bachelor of Technology in Computer Science and Engineering
                  </p>
                  <p className="text-sm text-[#6e6e73]">CGPA: 9.0/10 | CR — 4 consecutive semesters</p>
                  <p className="text-xs text-[#86868b] mt-2">Punjab, India</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
