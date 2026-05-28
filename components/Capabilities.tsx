import React from "react";
import Section from "./Section";
import { Sparkles, Database, Server } from "lucide-react";
import GlowCard from "./GlowCard";

export default function Capabilities() {
  return (
    <Section id="skills" title="Technical Capabilities">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Frontend */}
        <GlowCard glowColor="cyan" className="p-6 hover:-translate-y-0.5 hover:shadow-lg">
          <div className="space-y-4">
            <div className="p-2.5 rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 w-fit">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-primary font-display">Frontend & Client Apps</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Crafting responsive web interfaces and reusable component systems using modern rendering libraries.
            </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="badge text-[10px]">HTML & CSS</span>
            <span className="badge text-[10px]">JavaScript</span>
            <span className="badge text-[10px]">TypeScript</span>
            <span className="badge text-[10px]">React 19</span>
            <span className="badge text-[10px]">Next.js 15</span>
            <span className="badge text-[10px]">Framer Motion</span>
            <span className="badge text-[10px]">Tailwind CSS v4</span>
            <span className="badge text-[10px]">Redux Toolkit</span>
          </div>
        </div>
      </GlowCard>

        {/* Card 2: Backend */}
        <GlowCard glowColor="purple" className="p-6 hover:-translate-y-0.5 hover:shadow-lg">
          <div className="space-y-4">
            <div className="p-2.5 rounded-xl bg-brand-purple/10 text-brand-purple border border-brand-purple/20 w-fit">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-primary font-display">Backend & Databases</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Developing lightweight server scripts, data APIs, and maintaining relational and document databases.
            </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="badge text-[10px]">Node.js</span>
            <span className="badge text-[10px]">Express APIs</span>
            <span className="badge text-[10px]">PostgreSQL</span>
            <span className="badge text-[10px]">MongoDB</span>
            <span className="badge text-[10px]">MySQL</span>
            <span className="badge text-[10px]">Laravel</span>
            <span className="badge text-[10px]">Flask</span>
          </div>
        </div>
      </GlowCard>

        {/* Card 3: DevOps */}
        <GlowCard glowColor="pink" className="p-6 hover:-translate-y-0.5 hover:shadow-lg">
          <div className="space-y-4">
            <div className="p-2.5 rounded-xl bg-brand-pink/10 text-brand-pink border border-brand-pink/20 w-fit">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-primary font-display">DevOps & Tools (Learning)</h3>
            <p className="text-xs text-secondary leading-relaxed">
              Familiarizing myself with core containerization concepts and deployment steps to align with modern engineering workflows.
            </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="badge text-[10px]">Docker Basics</span>
            <span className="badge text-[10px]">Git & GitHub</span>
            <span className="badge text-[10px]">CI/CD Flows</span>
            <span className="badge text-[10px]">Linux Shell</span>
            <span className="badge text-[10px]">Vercel</span>
            <span className="badge text-[10px]">Netlify</span>
          </div>
        </div>
      </GlowCard>

      </div>
    </Section>
  );
}
