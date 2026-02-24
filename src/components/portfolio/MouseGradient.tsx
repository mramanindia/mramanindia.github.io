import { useEffect, useRef, useState } from "react";

// Bright, highly visible colors
const COLORS = [
  { bg: "#2563eb", opacity: 0.95 }, // blue
  { bg: "#db2777", opacity: 0.95 }, // pink
  { bg: "#7c3aed", opacity: 0.95 }, // purple
  { bg: "#ca8a04", opacity: 0.95 }, // amber
  { bg: "#0891b2", opacity: 0.95 }, // cyan
  { bg: "#16a34a", opacity: 0.95 }, // green
  { bg: "#ea580c", opacity: 0.95 }, // orange
  { bg: "#9333ea", opacity: 0.95 }, // violet
];

const LIFESPAN_MS = 2000;

type Particle = {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
  color: string;
  opacity: number;
  createdAt: number;
};

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);

const MouseGradient = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastSpawnRef = useRef(0);
  const particleIdRef = useRef(0);

  const spawnParticlesAt = (clientX: number, clientY: number, throttle = true) => {
    const now = Date.now();
    if (throttle && now - lastSpawnRef.current < 60) return;
    lastSpawnRef.current = now;

    const newParticles: Particle[] = [];
    const count = Math.floor(randomBetween(12, 22));
    for (let i = 0; i < count; i++) {
      const angle = randomBetween(0, Math.PI * 2);
      const distance = randomBetween(80, 380);
      const endX = clientX + Math.cos(angle) * distance;
      const endY = clientY + Math.sin(angle) * distance;
      const colorData = COLORS[Math.floor(Math.random() * COLORS.length)];
      newParticles.push({
        id: particleIdRef.current++,
        startX: clientX,
        startY: clientY,
        endX,
        endY,
        size: randomBetween(10, 52),
        color: colorData.bg,
        opacity: colorData.opacity,
        createdAt: now,
      });
    }
    setParticles((prev) => [...prev, ...newParticles]);
  };

  // Welcome burst: fluid under character for 3 sec on first load
  useEffect(() => {
    if (typeof sessionStorage === "undefined") return;
    if (sessionStorage.getItem("welcomeFluidShown")) return;

    const startWelcomeBurst = () => {
      const character = document.getElementById("character-source");
      if (!character) return;

      let burstCount = 0;
      const maxBursts = 25; // ~3 sec at 120ms interval
      const interval = setInterval(() => {
        const characterEl = document.getElementById("character-source");
        if (!characterEl || burstCount >= maxBursts) {
          clearInterval(interval);
          sessionStorage.setItem("welcomeFluidShown", "1");
          return;
        }
        const r = characterEl.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        // Slight random offset to simulate cursor moving under character
        const offsetX = randomBetween(-25, 25);
        const offsetY = randomBetween(-25, 25);
        spawnParticlesAt(cx + offsetX, cy + offsetY, false);
        burstCount++;
      }, 120);
    };

    const timer = setTimeout(startWelcomeBurst, 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      spawnParticlesAt(e.clientX, e.clientY);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) spawnParticlesAt(e.touches[0].clientX, e.touches[0].clientY);
    };
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) spawnParticlesAt(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setParticles((prev) => prev.filter((p) => now - p.createdAt < LIFESPAN_MS));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-visible pointer-events-none">
      {/* Base - light tint */}
      <div className="absolute inset-0 bg-slate-100/64" />

      {/* Water splash - scatters outward like bucket dumped on floor */}
      {particles.map((p) => {
        const dx = p.endX - p.startX;
        const dy = p.endY - p.startY;

        return (
          <div
            key={p.id}
            className="absolute rounded-full animate-fluid-scatter"
            style={{
              left: p.startX - p.size / 2,
              top: p.startY - p.size / 2,
              width: p.size,
              height: p.size,
              background: `radial-gradient(circle, ${p.color} 0%, ${p.color}ee 35%, ${p.color}99 60%, transparent 85%)`,
              opacity: p.opacity,
              filter: "blur(3px)",
              ["--dx" as string]: `${dx}px`,
              ["--dy" as string]: `${dy}px`,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
};

export default MouseGradient;
