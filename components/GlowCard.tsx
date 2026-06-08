"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple" | "pink";
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "cyan",
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse movements with spring physics for fluid interpolation
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  // Get color gradient based on choice
  const getGlowColor = () => {
    switch (glowColor) {
      case "purple":
        return "var(--brand-purple)";
      case "pink":
        return "var(--brand-pink)";
      case "cyan":
      default:
        return "var(--brand-cyan)";
    }
  };

  const backgroundGradient = useMotionTemplate`
    radial-gradient(
      280px circle at ${smoothMouseX}px ${smoothMouseY}px,
      ${getGlowColor()},
      transparent 80%
    )
  `;

  const borderGradient = useMotionTemplate`
    radial-gradient(
      180px circle at ${smoothMouseX}px ${smoothMouseY}px,
      ${getGlowColor()},
      transparent 80%
    )
  `;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`card relative overflow-hidden group cursor-pointer ${className}`}
    >
      {/* Dynamic Glow Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-[0.18] dark:group-hover:opacity-[0.26] transition-opacity duration-300 z-0"
        style={{
          background: backgroundGradient,
        }}
      />

      {/* Dynamic Glowing Border Frame */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-40 dark:group-hover:opacity-60 transition-opacity duration-300 z-10"
        style={{
          border: "1px solid transparent",
          backgroundImage: borderGradient,
          backgroundClip: "border-box",
          maskImage: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "destination-out",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-20 h-full w-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
