import { useEffect, useRef, useState } from "react";

const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

const MouseGradient = () => {
  const [blobPositions, setBlobPositions] = useState(() =>
    Array(6)
      .fill(null)
      .map(() => ({ x: 400, y: 400 }))
  );
  const mouseRef = useRef({ x: 400, y: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const lagFactors = [0.08, 0.06, 0.05, 0.04, 0.03, 0.02];
    let animationId: number;

    const animate = () => {
      const { x: mx, y: my } = mouseRef.current;
      const time = Date.now() * 0.0003;

      setBlobPositions((prev) =>
        prev.map((blob, i) => {
          const lag = lagFactors[i];
          const newX = lerp(blob.x, mx, lag);
          const newY = lerp(blob.y, my, lag);
          const drift = 120 * Math.sin(time + i * 1.2);
          return {
            x: newX + drift * 0.5,
            y: newY + drift * 0.3 * (i % 2 === 0 ? 1 : -1),
          };
        })
      );

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Fluid colors - 20% reduced intensity
  const blobs = [
    { size: 700, blur: 100, opacity: 0.72, gradient: "radial-gradient(circle, #93c5fd 0%, #a78bfa 40%, #c084fc 70%, transparent 85%)" },
    { size: 600, blur: 90, opacity: 0.68, gradient: "radial-gradient(circle, #f9a8d4 0%, #fbbf24 35%, #fb923c 65%, transparent 85%)" },
    { size: 550, blur: 85, opacity: 0.64, gradient: "radial-gradient(circle, #a78bfa 0%, #67e8f9 40%, #34d399 70%, transparent 85%)" },
    { size: 500, blur: 80, opacity: 0.6, gradient: "radial-gradient(circle, #fde047 0%, #86efac 45%, #7dd3fc 75%, transparent 85%)" },
    { size: 450, blur: 75, opacity: 0.56, gradient: "radial-gradient(circle, #67e8f9 0%, #fda4af 40%, #c4b5fd 70%, transparent 85%)" },
    { size: 400, blur: 70, opacity: 0.52, gradient: "radial-gradient(circle, #86efac 0%, #e9d5ff 45%, #fbcfe8 75%, transparent 85%)" },
  ];

  return (
    <div className="absolute inset-0 overflow-visible">
      {/* Base - light tint so fluid shows on any background */}
      <div className="absolute inset-0 bg-slate-100/64" />

      {/* Large static orbs - 20% reduced intensity */}
      <div className="absolute -top-60 -right-60 w-[600px] h-[600px] rounded-full blur-[100px] bg-blue-300/64" />
      <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] rounded-full blur-[90px] bg-purple-300/56" />
      <div className="absolute bottom-1/3 right-1/4 w-[550px] h-[550px] rounded-full blur-[95px] bg-pink-300/56" />
      <div className="absolute top-2/3 left-1/4 w-[450px] h-[450px] rounded-full blur-[85px] bg-cyan-300/48" />
      <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full blur-[80px] bg-amber-200/48" />

      {/* Cursor-following fluid blobs */}
      {blobs.map((blob, i) => {
        const pos = blobPositions[i];
        const half = blob.size / 2;
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: blob.size,
              height: blob.size,
              left: pos.x - half,
              top: pos.y - half,
              opacity: blob.opacity,
              filter: `blur(${blob.blur}px)`,
              background: blob.gradient,
            }}
          />
        );
      })}
    </div>
  );
};

export default MouseGradient;
