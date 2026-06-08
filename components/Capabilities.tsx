import React from "react";
import Section from "./Section";
import { Sparkles, Database, Server } from "lucide-react";
import GlowCard from "./GlowCard";

type Capability = {
  glowColor: "cyan" | "purple" | "pink";
  icon: React.ComponentType<{ className?: string }>;
  brandClass: string;
  title: string;
  description: string;
  skills: string[];
};

const capabilitiesList: Capability[] = [
  {
    glowColor: "cyan",
    icon: Sparkles,
    brandClass: "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20",
    title: "Frontend & Client Apps",
    description: "Crafting responsive web interfaces and reusable component systems using modern rendering libraries.",
    skills: ["HTML & CSS", "JavaScript", "TypeScript", "React 19", "Next.js 15", "Framer Motion", "Tailwind CSS v4", "Redux Toolkit"],
  },
  {
    glowColor: "purple",
    icon: Database,
    brandClass: "bg-brand-purple/10 text-brand-purple border border-brand-purple/20",
    title: "Backend & Databases",
    description: "Developing lightweight server scripts, data APIs, and maintaining relational and document databases.",
    skills: ["Node.js", "Express APIs", "PostgreSQL", "MongoDB", "MySQL", "Laravel", "Flask"],
  },
  {
    glowColor: "pink",
    icon: Server,
    brandClass: "bg-brand-pink/10 text-brand-pink border border-brand-pink/20",
    title: "DevOps & Tools (Learning)",
    description: "Familiarizing myself with core containerization concepts and deployment steps to align with modern engineering workflows.",
    skills: ["Docker Basics", "Git & GitHub", "CI/CD Flows", "Linux Shell", "Vercel", "Netlify"],
  },
];

export default function Capabilities() {
  return (
    <Section id="skills" title="Technical Capabilities">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilitiesList.map((cap) => {
          const Icon = cap.icon;
          return (
            <GlowCard key={cap.title} glowColor={cap.glowColor} className="p-4 sm:p-6 hover:-translate-y-0.5 hover:shadow-lg">
              <div className="space-y-4">
                <div className={`${cap.brandClass} p-2.5 rounded-xl w-fit`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-primary font-display">{cap.title}</h3>
                <p className="text-xs text-secondary leading-relaxed">{cap.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {cap.skills.map((skill) => (
                    <span key={skill} className="badge text-[10px]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
          );
        })}
      </div>
    </Section>
  );
}
