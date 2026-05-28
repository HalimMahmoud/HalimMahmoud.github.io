"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Sparkles, FileText, Code } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import GlowCard from "./GlowCard";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid-bg">
      {/* Soft visual background glows - floating organically */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-cyan/4 dark:bg-brand-cyan/6 blur-[120px] pointer-events-none transition-all duration-300 animate-float-1" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-purple/4 dark:bg-brand-purple/6 blur-[140px] pointer-events-none transition-all duration-300 animate-float-2" />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Text Left */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Visual Badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-theme-border bg-theme-bg-secondary/60 backdrop-blur-md text-xs font-semibold text-secondary"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              <span>Available for Full-Stack / React Developer roles</span>
            </motion.div>

            {/* Core Display Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-primary leading-[1.1]"
            >
              Building Modern, <br />
              <span className="gradient-text">Full-Stack</span> <br />
              Web Applications
            </motion.h1>

            {/* Paragraph Bio */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Hi, I'm <strong className="text-primary font-semibold">Abdel-Halim Mahmoud Nasr (Halim)</strong>. 
              A dedicated Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript. I design high-performance user interfaces and build robust, type-safe backend APIs to deliver seamless end-to-end web applications.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <a className="btn-primary text-xs flex items-center gap-1.5 shadow-md shadow-brand-cyan/5 group" href="#projects">
                <span>View My Work</span>
                <Code className="w-3.5 h-3.5 text-inherit" />
              </a>
              <a className="btn text-xs flex items-center gap-1.5" href="/Abdelhalim Mahmoud@Frontend Developer.pdf" download>
                <FileText className="w-3.5 h-3.5 text-secondary" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Badges */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4 text-secondary pt-2"
            >
              <span className="text-xs uppercase tracking-wider font-bold">Find me on</span>
              <div className="flex gap-2">
                <a 
                  href="https://github.com/HalimMahmoud" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg border border-theme-border bg-theme-bg-secondary/40 hover:text-primary hover:border-brand-cyan/40 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/abdelhalimmahmoudnasr" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg border border-theme-border bg-theme-bg-secondary/40 hover:text-primary hover:border-brand-cyan/40 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Stack (Bento/Tech Grid) */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 w-full max-w-md lg:max-w-none grid grid-cols-2 gap-4 relative"
          >
            {/* Background glowing sphere - very subtle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/2 via-brand-purple/2 to-transparent rounded-3xl filter blur-xl pointer-events-none" />

            {/* Metric Card 1: Front-End */}
            <GlowCard glowColor="cyan" className="p-5 hover:-translate-y-0.5 hover:shadow-lg">
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-brand-cyan/5 to-transparent rounded-bl-3xl group-hover:scale-110 transition-transform pointer-events-none" />
              <div className="p-2 rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 w-fit">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold text-primary mt-4 font-display">Full-Stack</h3>
              <p className="text-xs text-secondary mt-1 leading-snug">Designing modern, type-safe web applications with React, Next.js, Node.js, and database APIs.</p>
            </GlowCard>

            {/* Metric Card 2: Precision */}
            <GlowCard glowColor="purple" className="p-5 hover:-translate-y-0.5 hover:shadow-lg">
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-brand-purple/5 to-transparent rounded-bl-3xl group-hover:scale-110 transition-transform pointer-events-none" />
              <div className="p-2 rounded-xl bg-brand-purple/10 text-brand-purple border border-brand-purple/20 w-fit">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold text-primary mt-4 font-display">Detail Focus</h3>
              <p className="text-xs text-secondary mt-1 leading-snug">Ensuring high code quality, robust error handling, and strict type-safety across the codebase.</p>
            </GlowCard>

            {/* Metric Card 3: DevOps */}
            <GlowCard glowColor="pink" className="p-5 col-span-2 hover:-translate-y-0.5 hover:shadow-lg">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-pink/5 to-transparent rounded-bl-3xl group-hover:scale-110 transition-transform pointer-events-none" />
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-brand-pink/10 text-brand-pink border border-brand-pink/20 shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">DevOps learning (In Progress)</h4>
                  <p className="text-xs text-secondary mt-1 leading-relaxed">
                    Currently upskilling in containerization (Docker) and deployment pipelines to collaborate more effectively with engineering and release teams.
                  </p>
                </div>
              </div>
            </GlowCard>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
