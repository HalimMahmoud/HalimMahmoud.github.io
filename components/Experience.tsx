import React from "react";
import Section from "./Section";
import { Sparkles, Briefcase } from "lucide-react";
import GlowCard from "./GlowCard";

export default function Experience() {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="relative ml-4 md:ml-8 pl-6 md:pl-10 space-y-12 py-4">
        {/* Glowing timeline track */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-pink opacity-25 dark:opacity-35" />
        
        {/* Exp 1 */}
        <div className="relative group">
          {/* Timeline dot */}
          <span className="absolute -left-[35px] md:-left-[51px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-theme-bg border border-theme-border text-brand-cyan group-hover:border-brand-cyan/80 group-hover:text-brand-cyan transition-colors z-10 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <GlowCard glowColor="cyan" className="p-6 hover:-translate-y-0.5 hover:shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-primary pb-3">
              <div>
                <h3 className="font-bold text-base text-primary group-hover:text-brand-cyan transition-colors">
                  Frontend React Developer Trainee (Job Simulation Bootcamp)
                </h3>
                <p className="text-xs text-brand-purple font-semibold mt-1">Upskilling Program</p>
              </div>
              <span className="text-[10px] px-3 py-1 rounded-full border border-primary bg-secondary text-secondary font-mono w-fit">
                Feb 2025 – Jun 2025
              </span>
            </div>
            <p className="mt-4 text-xs text-secondary leading-relaxed">
              Collaborated in cross-functional agile Scrum teams using <strong>GitHub</strong>, <strong>Jira</strong>, and <strong>Trello</strong> to build scalable frontend web projects. Applied agile workflows, engineered secure client-side authentication mechanisms, and integrated modern third-party APIs and services.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge text-[9px] py-0.5 px-2">React 19</span>
              <span className="badge text-[9px] py-0.5 px-2">Next.js 15</span>
              <span className="badge text-[9px] py-0.5 px-2">TypeScript</span>
              <span className="badge text-[9px] py-0.5 px-2">Agile Scrum</span>
              <span className="badge text-[9px] py-0.5 px-2">Auth Workflows</span>
              <span className="badge text-[9px] py-0.5 px-2">API Integration</span>
            </div>
          </GlowCard>
        </div>

        {/* Exp 2 */}
        <div className="relative group">
          {/* Timeline dot */}
          <span className="absolute -left-[35px] md:-left-[51px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-theme-bg border border-theme-border text-brand-purple group-hover:border-brand-purple/80 group-hover:text-brand-purple transition-colors z-10 shadow-sm backdrop-blur-md">
            <Briefcase className="w-3.5 h-3.5" />
          </span>
          <GlowCard glowColor="purple" className="p-6 hover:-translate-y-0.5 hover:shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-primary pb-3">
              <div>
                <h3 className="font-bold text-base text-primary group-hover:text-brand-purple transition-colors">
                  Senior Bank Teller (Level A)
                </h3>
                <p className="text-xs text-brand-cyan font-semibold mt-1">National Bank of Egypt (NBE)</p>
              </div>
              <span className="text-[10px] px-3 py-1 rounded-full border border-primary bg-secondary text-secondary font-mono w-fit">
                Nov 2020 – Present
              </span>
            </div>
            <p className="mt-4 text-xs text-secondary leading-relaxed">
              Orchestrate high-volume cash operations, manage ledger administration, coordinate vault security, and execute precise ATM feeding and daily settlements. Handled complex client transactions under rigorous regulatory risk compliance.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge text-[9px] py-0.5 px-2">Cash Management</span>
              <span className="badge text-[9px] py-0.5 px-2">Vault Administration</span>
              <span className="badge text-[9px] py-0.5 px-2">ATM Settlement</span>
              <span className="badge text-[9px] py-0.5 px-2">Ledger Auditing</span>
              <span className="badge text-[9px] py-0.5 px-2">Risk Avoidance</span>
            </div>
          </GlowCard>
        </div>

        {/* Exp 3 */}
        <div className="relative group">
          {/* Timeline dot */}
          <span className="absolute -left-[35px] md:-left-[51px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-theme-bg border border-theme-border text-brand-pink group-hover:border-brand-pink/80 group-hover:text-brand-pink transition-colors z-10 shadow-sm backdrop-blur-md">
            <Briefcase className="w-3.5 h-3.5" />
          </span>
          <GlowCard glowColor="pink" className="p-6 hover:-translate-y-0.5 hover:shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-primary pb-3">
              <div>
                <h3 className="font-bold text-base text-primary group-hover:text-brand-pink transition-colors">
                  Customer Support Specialist
                </h3>
                <p className="text-xs text-brand-purple font-semibold mt-1">elmenus (FoodTech Startup)</p>
              </div>
              <span className="text-[10px] px-3 py-1 rounded-full border border-primary bg-secondary text-secondary font-mono w-fit">
                Jul 2019 – Oct 2020
              </span>
            </div>
            <p className="mt-4 text-xs text-secondary leading-relaxed">
              Delivered an optimized customer ordering and delivery journey at a leading food tech startup. Triaged real-time platform inquiries, resolved restaurant partner technical bottlenecks, and synchronized delivery logs. Managed high-volume ticket resolution using <strong>HappyFox</strong> and facilitated real-time customer/partner chat operations via <strong>Slack</strong> and <strong>Intercom</strong>.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge text-[9px] py-0.5 px-2">FoodTech Startup</span>
              <span className="badge text-[9px] py-0.5 px-2">HappyFox Ticketing</span>
              <span className="badge text-[9px] py-0.5 px-2">Slack</span>
              <span className="badge text-[9px] py-0.5 px-2">Intercom</span>
              <span className="badge text-[9px] py-0.5 px-2">Dispatch Ops</span>
            </div>
          </GlowCard>
        </div>

        {/* Exp 4 */}
        <div className="relative group">
          {/* Timeline dot */}
          <span className="absolute -left-[35px] md:-left-[51px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-theme-bg border border-theme-border text-brand-cyan group-hover:border-brand-cyan/80 group-hover:text-brand-cyan transition-colors z-10 shadow-sm backdrop-blur-md">
            <Briefcase className="w-3.5 h-3.5" />
          </span>
          <GlowCard glowColor="cyan" className="p-6 hover:-translate-y-0.5 hover:shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-primary pb-3">
              <div>
                <h3 className="font-bold text-base text-primary group-hover:text-brand-cyan transition-colors">
                  Customer Service Trainee
                </h3>
                <p className="text-xs text-brand-purple font-semibold mt-1">Abu Dhabi Islamic Bank (ADIB)</p>
              </div>
              <span className="text-[10px] px-3 py-1 rounded-full border border-primary bg-secondary text-secondary font-mono w-fit">
                Jul 2018 – Aug 2018
              </span>
            </div>
            <p className="mt-4 text-xs text-secondary leading-relaxed">
              Guided retail banking clients regarding standard financial products and bank accounts. Handled service requests and resolved customer complaints efficiently in compliance with banking standards, strengthening client relationships and analytical problem-solving.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge text-[9px] py-0.5 px-2">ADIB Training</span>
              <span className="badge text-[9px] py-0.5 px-2">Financial Products</span>
              <span className="badge text-[9px] py-0.5 px-2">Client Services</span>
              <span className="badge text-[9px] py-0.5 px-2">Complaint Resolution</span>
            </div>
          </GlowCard>
        </div>

      </div>
    </Section>
  );
}
