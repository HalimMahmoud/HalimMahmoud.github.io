"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Terminal, Sun, Moon } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setIsScrolled(window.scrollY > 20);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Mount theme selector
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none"
    >
      <div
        className={`w-full max-w-5xl transition-all duration-300 ease-in-out flex items-center justify-between pointer-events-auto ${
          isScrolled
            ? "mt-4 py-2 px-6 rounded-full bg-theme-bg/75 border border-theme-border backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20"
            : "mt-0 py-5 px-0 border-b border-transparent"
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-1.5 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-purple text-slate-950 font-bold group-hover:scale-105 transition-transform duration-200">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-lg font-display tracking-tight text-primary">
            Halim<span className="gradient-text font-semibold">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <a className="btn text-xs font-semibold px-4 py-2 hover:border-brand-cyan/30" href="#projects">
            Projects
          </a>
          <a className="btn text-xs font-semibold px-4 py-2 hover:border-brand-purple/30" href="#skills">
            Capabilities
          </a>
          <a className="btn text-xs font-semibold px-4 py-2 hover:border-brand-pink/30" href="#experience">
            Experience
          </a>
          <a className="btn text-xs font-semibold px-4 py-2 hover:border-brand-cyan/30" href="#education">
            Credentials
          </a>
          
          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="btn p-2.5 rounded-xl border border-theme-border bg-theme-bg-secondary/60 text-secondary hover:text-primary hover:border-brand-cyan/30 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          )}

          <a className="btn-primary text-xs font-semibold px-4 py-2 ml-2" href="#contact">
            Contact
          </a>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-theme-border bg-theme-bg-secondary/60 text-secondary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-theme-border bg-theme-bg-secondary/60 text-secondary hover:text-primary"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-b border-theme-border bg-theme-bg/95 backdrop-blur-xl px-4 py-6 space-y-3 pointer-events-auto"
        >
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="block btn text-center w-full"
            href="#projects"
          >
            Projects
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="block btn text-center w-full"
            href="#skills"
          >
            Capabilities
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="block btn text-center w-full"
            href="#experience"
          >
            Experience
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="block btn text-center w-full"
            href="#education"
          >
            Credentials
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="block btn-primary text-center w-full"
            href="#contact"
          >
            Contact
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
