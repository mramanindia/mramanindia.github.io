import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="text-center max-w-4xl mx-auto z-10">
        <div className="mb-6 opacity-0 animate-fade-in-up delay-100 flex flex-col items-center justify-center gap-5 sm:gap-6 sm:mb-8">
          <img
            id="character-source"
            src="/aman_character.png"
            alt="Aman India"
            className="w-[138px] h-[138px] sm:w-[161px] sm:h-[161px] object-cover object-top flex-shrink-0"
          />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1d1d1f] tracking-tight opacity-0 animate-fade-in-up delay-200">
            Aman India
          </h1>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#86868b] font-normal mb-8 opacity-0 animate-fade-in-up delay-300">
          AI Engineer
        </h2>
        <p className="text-lg sm:text-xl text-[#6e6e73] mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up delay-400">
          Specializing in{" "}
          <span className="text-[#1d1d1f] font-medium">Agentic AI</span>,{" "}
          <span className="text-[#1d1d1f] font-medium">AI agent building</span>, and{" "}
          <span className="text-[#1d1d1f] font-medium">RAG systems</span>.
          Engineering AI agents with LangChain, LangGraph, and modern tooling.
        </p>

        <div className="opacity-0 animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="px-8 py-3 text-base font-medium bg-[#1d1d1f] hover:bg-[#424245] text-white rounded-full transition-all duration-300"
          >
            Explore My Work
          </Button>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-[#1d1d1f] transition-all duration-300 h-11 w-11"
              asChild
            >
              <a href="https://github.com/mramanindia" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-[#1d1d1f] transition-all duration-300 h-11 w-11"
              asChild
            >
              <a href="https://linkedin.com/in/mramanindia" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-[#1d1d1f] transition-all duration-300 h-11 w-11"
              asChild
            >
              <a href="mailto:amanindiamuzz@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div
          className="opacity-0 animate-fade-in delay-600 cursor-pointer"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-6 w-6 mx-auto text-[#86868b] hover:text-[#1d1d1f] transition-colors animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
