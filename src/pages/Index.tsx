import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import Recommendations from "@/components/portfolio/Recommendations";
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

      {/* Layer 2: Glass screen - frosted overlay, content on top (written on glass) */}
      <div
        id="main-scroll"
        className="fixed inset-0 z-10 overflow-y-auto overflow-x-hidden"
        style={{
          background: "rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.25)",
        }}
      >
        <div className="relative min-h-screen">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Achievements />
            <Recommendations />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
