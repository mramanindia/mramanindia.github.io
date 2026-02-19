import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "recommendations", label: "Recommendations" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);
    // Small delay so sheet closes before scroll (helps on mobile)
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      const scrollContainer = document.getElementById("main-scroll");
      if (element && scrollContainer) {
        const elementTop = element.getBoundingClientRect().top + scrollContainer.scrollTop;
        const offset = 80; // Account for sticky nav height
        scrollContainer.scrollTo({
          top: elementTop - offset,
          behavior: "smooth",
        });
      } else if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll");
    const handleScroll = () => {
      const scrollTop = scrollContainer?.scrollTop ?? window.scrollY;
      setScrolled(scrollTop > 20);
      const triggerPoint = scrollTop + 100;

      for (const section of navItems) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = scrollTop + rect.top;
          const elementBottom = elementTop + element.offsetHeight;
          if (triggerPoint >= elementTop && triggerPoint < elementBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    scrollContainer?.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-white/95 backdrop-blur-md border-b border-slate-200/80",
        scrolled && "shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-semibold text-lg text-[#1d1d1f] tracking-tight">
            Aman India
          </div>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative py-1",
                  activeSection === item.id
                    ? "text-[#1d1d1f] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1d1d1f] after:rounded-full"
                    : "text-[#86868b] hover:text-[#1d1d1f]"
                )}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://sunnom.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#0071e3] hover:underline"
            >
              Visit Sunnom
            </a>
          </div>

          {/* Mobile nav - hamburger menu */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6 text-[#1d1d1f]" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <nav className="flex flex-col gap-1 pt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "text-left px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        activeSection === item.id
                          ? "bg-slate-100 text-[#1d1d1f]"
                          : "text-[#6e6e73] hover:bg-slate-50 hover:text-[#1d1d1f]"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                  <a
                    href="https://sunnom.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-lg text-base font-medium text-[#0071e3] hover:bg-slate-50 text-left"
                  >
                    Visit Sunnom
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
