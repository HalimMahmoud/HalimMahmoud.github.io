import React from "react";
import Section from "./Section";
import { Sparkles, Briefcase } from "lucide-react";
import GlowCard from "./GlowCard";

type ExperienceItem = {
  glowColor: "cyan" | "purple" | "pink";
  icon: React.ComponentType<{ className?: string }>;
  dotClass: string;
  title: string;
  titleHoverClass: string;
  companyOrProgram: string;
  companyClass: string;
  duration: string;
  description: React.ReactNode;
  tags: string[];
};

const experienceList: ExperienceItem[] = [
  {
    glowColor: "cyan",
    icon: Sparkles,
    dotClass: "text-brand-cyan group-hover:border-brand-cyan/80 group-hover:text-brand-cyan",
    title: "Frontend React Developer Trainee (Job Simulation Bootcamp)",
    titleHoverClass: "group-hover:text-brand-cyan",
    companyOrProgram: "Upskilling Program",
    companyClass: "text-brand-purple",
    duration: "Feb 2025 - Jun 2025",
    description: (
      <>
        Collaborated in cross-functional agile Scrum teams using <strong>GitHub</strong>, <strong>Jira</strong>, and <strong>Trello</strong> to build scalable frontend web projects. Applied agile workflows, engineered secure client-side authentication mechanisms, and integrated modern third-party APIs and services.
      </>
    ),
    tags: ["React 19", "Next.js 15", "TypeScript", "Agile Scrum", "Auth Workflows", "API Integration"],
  },
  {
    glowColor: "purple",
    icon: Briefcase,
    dotClass: "text-brand-purple group-hover:border-brand-purple/80 group-hover:text-brand-purple",
    title: "Senior Bank Teller (Level A)",
    titleHoverClass: "group-hover:text-brand-purple",
    companyOrProgram: "National Bank of Egypt (NBE)",
    companyClass: "text-brand-cyan",
    duration: "Nov 2020 - Present",
    description: (
      <>
        Orchestrate high-volume cash operations, manage ledger administration, coordinate vault security, and execute precise ATM feeding and daily settlements. Handled complex client transactions under rigorous regulatory risk compliance.
      </>
    ),
    tags: ["Cash Management", "Vault Administration", "ATM Settlement", "Ledger Auditing", "Risk Avoidance"],
  },
  {
    glowColor: "pink",
    icon: Briefcase,
    dotClass: "text-brand-pink group-hover:border-brand-pink/80 group-hover:text-brand-pink",
    title: "Customer Support Specialist",
    titleHoverClass: "group-hover:text-brand-pink",
    companyOrProgram: "elmenus (FoodTech Startup)",
    companyClass: "text-brand-purple",
    duration: "Jul 2019 - Oct 2020",
    description: (
      <>
        Delivered an optimized customer ordering and delivery journey at a leading food tech startup. Triaged real-time platform inquiries, resolved restaurant partner technical bottlenecks, and synchronized delivery logs. Managed high-volume ticket resolution using <strong>HappyFox</strong> and facilitated real-time customer/partner chat operations via <strong>Slack</strong> and <strong>Intercom</strong>.
      </>
    ),
    tags: ["FoodTech Startup", "HappyFox Ticketing", "Slack", "Intercom", "Dispatch Ops"],
  },
  {
    glowColor: "cyan",
    icon: Briefcase,
    dotClass: "text-brand-cyan group-hover:border-brand-cyan/80 group-hover:text-brand-cyan",
    title: "Customer Service Trainee",
    titleHoverClass: "group-hover:text-brand-cyan",
    companyOrProgram: "Abu Dhabi Islamic Bank (ADIB)",
    companyClass: "text-brand-purple",
    duration: "Jul 2018 - Aug 2018",
    description: (
      <>
        Guided retail banking clients regarding standard financial products and bank accounts. Handled service requests and resolved customer complaints efficiently in compliance with banking standards, strengthening client relationships and analytical problem-solving.
      </>
    ),
    tags: ["ADIB Training", "Financial Products", "Client Services", "Complaint Resolution"],
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="relative ml-3 sm:ml-4 md:ml-8 pl-5 sm:pl-6 md:pl-10 space-y-8 sm:space-y-12 py-4">
        {/* Glowing timeline track */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-pink opacity-25 dark:opacity-35" />
        
        {experienceList.map((exp, idx) => {
          const Icon = exp.icon;
          return (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <span className={`${exp.dotClass} absolute -left-[31px] sm:-left-[35px] md:-left-[51px] top-1.5 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-theme-bg border border-theme-border transition-colors z-10 shadow-sm backdrop-blur-md`}>
                <Icon className="w-3.5 h-3.5" />
              </span>
              <GlowCard glowColor={exp.glowColor} className="p-4 sm:p-6 hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-primary pb-3">
                  <div>
                    <h3 className={`${exp.titleHoverClass} font-bold text-base text-primary transition-colors`}>
                      {exp.title}
                    </h3>
                    <p className={`${exp.companyClass} text-xs font-semibold mt-1`}>{exp.companyOrProgram}</p>
                  </div>
                  <span className="text-[9px] sm:text-[10px] px-2 sm:px-3 py-1 rounded-full border border-primary bg-theme-bg-secondary/40 text-secondary font-mono w-fit whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
                <p className="mt-4 text-xs text-secondary leading-relaxed">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="badge text-[9px] py-0.5 px-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
