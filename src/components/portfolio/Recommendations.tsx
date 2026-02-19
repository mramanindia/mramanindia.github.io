import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Quote, Linkedin, ChevronDown } from "lucide-react";

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

const Recommendations = () => {
  const isMobile = useIsMobile();
  const recommendations = [
    {
      name: "Vinay Kornapalli",
      role: "Yellow.ai",
      linkedin: "https://www.linkedin.com/in/vinay-kornapalli-96b176127",
      text: "It has been an absolute pleasure working with Aman. He is exceptionally curious, quick to grasp new concepts, and consistently willing to take on fresh challenges with enthusiasm. His proactive mindset, coupled with the ability to effectively utilize advanced tools and technologies, makes him an invaluable asset to any team. During his time at Yellow, Aman played a pivotal role in streamlining our MLOps pipelines and significantly strengthening our overall security posture. His contributions were not only technically impactful but also deeply appreciated across multiple teams. I wholeheartedly recommend Aman and have no doubt he will continue to achieve great success in his career."
    },
    {
      name: "Balaji Ramachandran",
      role: "Rakuten India",
      linkedin: "https://www.linkedin.com/in/balaji-swe",
      text: "Aman demonstrates a keen interest in learning and consistently seeks out new challenges. His enthusiasm for exploring new technologies and his proactive approach to problem-solving are commendable. Aman is diligent in documenting his work. He is not afraid to seek help when needed, which shows his commitment to personal and professional growth. His use of tools like ChatGPT to enhance his work further highlights his innovative mindset. Aman's positive attitude and willingness to learn make him a valuable team member. I believe that with the right guidance and environment, Aman has the potential to excel and make significant contributions."
    }
  ];

  return (
    <section id="recommendations" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="container mx-auto max-w-[68rem]">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Recommendations
          </h2>
          <p className="text-[#6e6e73] max-w-2xl mx-auto">
            What colleagues say about working with me
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {recommendations.map((rec, index) => (
            <Card
              key={index}
              className="liquid-glass card-hover rounded-2xl border-white/70"
            >
              <CardContent className="p-6 sm:p-8">
                {isMobile ? (
                  <Collapsible defaultOpen={false}>
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <p className="font-semibold text-[#1d1d1f]">{rec.name}</p>
                          <p className="text-sm text-[#86868b]">{rec.role}</p>
                        </div>
                        <CollapsibleTrigger asChild>
                          <button className="flex items-center gap-1.5 text-sm font-medium text-[#0071e3] hover:underline shrink-0">
                            View more
                            <ChevronDown className="h-4 w-4" />
                          </button>
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent>
                        <Quote className="h-8 w-8 text-[#0071e3]/30 mb-2" />
                        <blockquote className="text-[#6e6e73] leading-relaxed text-sm mb-4">
                          "{rec.text}"
                        </blockquote>
                        <a
                          href={rec.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#0071e3] hover:underline text-sm font-medium"
                        >
                          <Linkedin className="h-4 w-4" />
                          View on LinkedIn
                        </a>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                ) : (
                  <>
                    <Quote className="h-10 w-10 text-[#0071e3]/30 mb-4" />
                    <blockquote className="text-[#6e6e73] leading-relaxed text-lg mb-6">
                      "{rec.text}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-[#1d1d1f]">{rec.name}</p>
                        <p className="text-sm text-[#86868b]">{rec.role}</p>
                      </div>
                      <a
                        href={rec.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#0071e3] hover:underline text-sm font-medium"
                      >
                        <Linkedin className="h-5 w-5" />
                        View on LinkedIn
                      </a>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center mt-8">
          <a
            href="https://www.linkedin.com/in/mramanindia/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0071e3] hover:underline text-sm font-medium"
          >
            View all recommendations on LinkedIn →
          </a>
        </p>
      </div>
    </section>
  );
};

export default Recommendations;
