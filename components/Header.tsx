'use client';
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container py-5 flex items-center justify-between">
        <a href="#" className="font-bold text-lg">Halim<span className="text-brand">.dev</span></a>
        <nav className="flex items-center gap-3">
          <a className="btn" href="#projects">Projects</a>
          <a className="btn" href="#experience">Experience</a>
          <a className="btn" href="#skills">Skills</a>
          <a className="btn" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
