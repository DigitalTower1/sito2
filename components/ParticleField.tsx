"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 120;

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    const particles = Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
      x: Math.random(),
      y: Math.random(),
      depth: Math.random() * 0.9 + 0.1,
      drift: Math.random() * 0.0006 + 0.0002,
      size: Math.random() * 2 + 0.5,
      hue: index % 2 === 0 ? 198 : 18
    }));

    const resize = () => {
      const { innerWidth, innerHeight, devicePixelRatio } = window;
      canvas.width = innerWidth * devicePixelRatio;
      canvas.height = innerHeight * devicePixelRatio;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const { innerWidth, innerHeight } = window;
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      particles.forEach((particle) => {
        particle.y += particle.drift * particle.depth * 60;
        if (particle.y > 1.1) {
          particle.y = -0.1;
          particle.x = Math.random();
        }

        const x = particle.x * innerWidth;
        const y = particle.y * innerHeight;

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, particle.size * 12);
        gradient.addColorStop(0, `hsla(${particle.hue}, 85%, 62%, ${0.5 * particle.depth})`);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(x - 20, y - 20, 40, 40);
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 mix-blend-screen opacity-70"
    />
  );
}
