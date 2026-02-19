import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Navigation from "@/components/portfolio/Navigation";
import MouseGradient from "@/components/portfolio/MouseGradient";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Layer 1: Fluid colors - full screen, vibrant background */}
      <div className="fixed inset-0 z-0">
        <MouseGradient />
      </div>

      {/* Layer 2: Glass screen - frosted overlay, content on top */}
      <div
        className="fixed inset-0 z-10 overflow-y-auto border border-white/30"
        style={{
          background: "rgba(255, 255, 255, 0.35)",
          backdropFilter: "blur(28px) saturate(200%)",
          WebkitBackdropFilter: "blur(28px) saturate(200%)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.5)",
        }}
      >
        <div className="relative min-h-screen">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
