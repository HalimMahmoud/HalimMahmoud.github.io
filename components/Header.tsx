"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Terminal, Sun, Moon, Code, Cpu, Briefcase, GraduationCap, Mail } from "lucide-react";

const navItems = [
  { label: "Projects",     href: "#projects",    icon: Code },
  { label: "Capabilities", href: "#skills",      icon: Cpu },
  { label: "Experience",   href: "#experience",  icon: Briefcase },
  { label: "Credentials",  href: "#education",   icon: GraduationCap },
];

export default function Header() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted]             = useState(false);
  const [theme, setTheme]                 = useState("dark");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
    if (latest > 60) setMobileMenuOpen(false);
  });

  useEffect(() => {
    // Initial scroll state
    setIsScrolled(window.scrollY > 20);

    // Theme init
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* ── Top Bar ── */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 transition-all duration-300 pointer-events-none"
      >
        <div
          className={`w-full max-w-5xl transition-all duration-300 ease-in-out flex items-center justify-between pointer-events-auto ${
            isScrolled
              ? "mt-3 sm:mt-4 py-2 px-4 sm:px-6 rounded-full bg-theme-bg/80 border border-theme-border backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20"
              : "mt-0 py-4 sm:py-5 px-0 border-b border-transparent"
          }`}
        >
          {/* Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-purple text-slate-950 font-bold group-hover:scale-105 transition-transform duration-200">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-base sm:text-lg font-display tracking-tight text-primary">
              Halim<span className="gradient-text font-semibold">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="btn text-xs font-semibold px-4 py-2 hover:border-brand-cyan/30"
                href={item.href}
              >
                {item.label}
              </a>
            ))}

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

          {/* Mobile Controls */}
          <div className="flex items-center gap-1.5 md:hidden">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl border border-theme-border bg-theme-bg-secondary/60 text-secondary hover:text-primary transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="p-2 rounded-xl border border-theme-border bg-theme-bg-secondary/60 text-secondary hover:text-primary transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Full-Screen Drawer ── rendered outside header so it spans 100vw ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.nav
              key="drawer"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 right-0 z-[45] md:hidden"
              style={{ paddingTop: "4.5rem" }}
            >
              <div className="mx-3 rounded-2xl border border-theme-border bg-theme-bg/95 backdrop-blur-2xl shadow-2xl shadow-black/20 dark:shadow-black/50 overflow-hidden">

                {/* Nav links */}
                <div className="px-3 pt-4 pb-2 space-y-1">
                  {navItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.2 }}
                        className="group flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold text-secondary hover:text-primary hover:bg-theme-bg-secondary/60 border border-transparent hover:border-theme-border transition-all duration-200"
                      >
                        <span className="p-1.5 rounded-lg bg-theme-bg-secondary border border-theme-border text-brand-cyan group-hover:text-brand-purple group-hover:border-brand-purple/30 transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <span>{item.label}</span>
                        {/* Subtle right-arrow */}
                        <svg
                          className="ml-auto w-3.5 h-3.5 text-secondary/40 group-hover:text-brand-cyan group-hover:translate-x-0.5 transition-all duration-200"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="mx-4 my-2 h-px bg-theme-border/60" />

                {/* CTA + bottom meta */}
                <div className="px-3 pb-4 pt-1">
                  <motion.a
                    href="#contact"
                    onClick={closeMenu}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.22 }}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple font-semibold text-sm text-[var(--btn-primary-text)] shadow-md shadow-brand-cyan/10 hover:opacity-90 active:scale-[0.98] transition-all duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    Get in Touch
                  </motion.a>

                  {/* Quick info strip */}
                  <p className="text-center text-[10px] text-secondary/60 mt-3 font-mono tracking-wide">
                    Available · Full-Stack / React Developer
                  </p>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
