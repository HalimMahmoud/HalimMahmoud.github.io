import React from "react";
import Link from "next/link";
import { MoveLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-theme-bg text-primary flex flex-col items-center justify-center p-4">
      <div className="card p-8 max-w-md w-full text-center space-y-6">
        <div className="p-3 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 w-fit mx-auto">
          <Terminal className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold font-display tracking-tight text-primary">404</h1>
          <h2 className="text-lg font-bold text-secondary">Page Not Found</h2>
          <p className="text-xs text-secondary leading-relaxed">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <Link 
          href="/" 
          className="btn-primary w-full text-xs font-semibold px-4 py-2 flex items-center justify-center gap-2"
        >
          <MoveLeft className="w-4 h-4 text-inherit" />
          <span>Return Home</span>
        </Link>
      </div>
    </main>
  );
}
