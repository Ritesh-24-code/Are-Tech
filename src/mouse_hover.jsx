

import { useEffect, useRef } from "react";

export default function NeonCursor() {
  const dotsRef = useRef([]);

  useEffect(() => {
    const dots = dotsRef.current;

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Shorter trail
    const trail = Array(8)
      .fill()
      .map(() => ({
        x: mouse.x,
        y: mouse.y,
      }));

    let animationFrame;

    const animate = () => {
      trail[0].x += (mouse.x - trail[0].x) * 0.35;
      trail[0].y += (mouse.y - trail[0].y) * 0.35;

      for (let i = 1; i < trail.length; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.35;
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.35;
      }

      dots.forEach((dot, i) => {
        if (!dot) return;

        const scale = (trail.length - i) / trail.length;

        dot.style.transform = `
          translate(${trail[i].x}px, ${trail[i].y}px)
          translate(-50%, -50%)
          scale(${scale})
        `;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="absolute rounded-full blur-md"
          style={{
            width: "28px",
            height: "28px",
            background: "linear-gradient(135deg, #1ab0eb, #1940ec)",
            boxShadow: "0 0 20px rgba(26,176,235,0.6)",
          }}
        />
      ))}
    </div>
  );
}