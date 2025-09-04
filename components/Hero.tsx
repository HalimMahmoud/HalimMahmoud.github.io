'use client';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="container py-16 md:py-24">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight"
      >
        Abdel‑Halim Mahmoud Nasr
      </motion.h1>
      <p className="mt-4 text-lg md:text-xl text-slate-600">
        Front‑End Developer — React & Node.js. I build modern UIs and smooth user experiences.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a className="btn" href="mailto:halimmahmoud50@gmail.com">Email</a>
        <a className="btn" href="https://github.com/HalimMahmoud" target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href="https://www.linkedin.com/in/abdelhalimmahmoudnasr" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="btn" href="/Halim-Resume.pdf" download>Resume</a>
      </div>
    </section>
  );
}
