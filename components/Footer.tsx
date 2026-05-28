import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-primary bg-secondary relative z-10 animate-fade-in">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © {new Date().getFullYear()} Abdel-Halim Mahmoud Nasr. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px]">
          <span>Powered by</span>
          <span className="text-primary font-semibold">Next.js 16</span>
          <span>&</span>
          <span className="gradient-text font-bold">Tailwind v4</span>
        </div>
      </div>
    </footer>
  );
}
