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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastSpawnRef.current < 60) return;
      lastSpawnRef.current = now;

      const cursorX = e.clientX;
      const cursorY = e.clientY;
      const newParticles: Particle[] = [];

      // Bucket of water dumped - splashes outward in all directions, scatters on floor
      const count = Math.floor(randomBetween(12, 22));
      for (let i = 0; i < count; i++) {
        // Full 360° scatter - water goes everywhere
        const angle = randomBetween(0, Math.PI * 2);
        // Irregular distances: some droplets close, some far (organic splash)
        const distance = randomBetween(80, 380);
        const endX = cursorX + Math.cos(angle) * distance;
        const endY = cursorY + Math.sin(angle) * distance;

        const colorData = COLORS[Math.floor(Math.random() * COLORS.length)];

        newParticles.push({
          id: particleIdRef.current++,
          startX: cursorX,
          startY: cursorY,
          endX,
          endY,
          size: randomBetween(20, 65),
          color: colorData.bg,
          opacity: colorData.opacity,
          createdAt: now,
        });
      }

      setParticles((prev) => [...prev, ...newParticles]);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
