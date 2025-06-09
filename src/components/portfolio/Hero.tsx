
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="h-8 w-8 text-white/30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1s'}}>
        <div className="w-4 h-4 bg-white/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{animationDelay: '3s'}}>
        <div className="w-6 h-6 border-2 border-white/20 rounded-full"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto z-10">
        <div className="animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-4 border border-white/20">
              AI/ML Engineer
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Aman Prasad
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-8 animate-pulse-glow">
            AI/ML Engineer & Software Developer
          </h2>
          <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Specializing in <span className="text-white font-semibold">LLMs</span>, <span className="text-white font-semibold">RAG systems</span>, and <span className="text-white font-semibold">Agentic AI</span>. Building scalable ML solutions 
            with modern technologies and microservices architecture.
          </p>
        </div>
        
        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            onClick={scrollToAbout}
            size="lg" 
            className="px-8 py-3 text-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white transition-all duration-300 hover:scale-105"
          >
            Explore My Work
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-110" asChild>
              <a href="https://github.com/amanprasad" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-white" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-110" asChild>
              <a href="https://linkedin.com/in/amanprasad" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-110" asChild>
              <a href="mailto:amanindiamuzz@gmail.com">
                <Mail className="h-5 w-5 text-white" />
              </a>
            </Button>
          </div>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-white/60 cursor-pointer hover:text-white transition-colors" onClick={scrollToAbout} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
