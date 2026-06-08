import React from "react";
import Section from "./Section";
import { GraduationCap, Award, CheckCircle2, Server } from "lucide-react";
import GlowCard from "./GlowCard";

export default function Education() {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Edu 1 */}
        <GlowCard glowColor="cyan" className="p-5 hover:-translate-y-0.5 hover:shadow-lg">
          <div className="flex gap-4">
            <div className="p-2.5 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan h-fit shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-wider font-bold text-brand-cyan">Bachelor's Degree</span>
              <h3 className="font-bold text-sm text-primary">Cairo University, English Section</h3>
              <p className="text-xs text-secondary">Business Administration Major (Class of 2019)</p>
            </div>
          </div>
        </GlowCard>

        {/* Edu 2 */}
        <GlowCard glowColor="purple" className="p-5 hover:-translate-y-0.5 hover:shadow-lg">
          <div className="flex gap-4">
            <div className="p-2.5 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple h-fit shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-wider font-bold text-brand-purple">Developer Nanodegree</span>
              <h3 className="font-bold text-sm text-primary">Advanced Web Development | Udacity</h3>
              <p className="text-xs text-secondary">Intensive front-to-back systems and API design certifications.</p>
            </div>
          </div>
        </GlowCard>

        {/* Edu 3 */}
        <GlowCard glowColor="pink" className="p-5 hover:-translate-y-0.5 hover:shadow-lg">
          <div className="flex gap-4">
            <div className="p-2.5 rounded-xl bg-brand-pink/10 border border-brand-pink/20 text-brand-pink h-fit shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-wider font-bold text-brand-pink">Bootcamp Graduate</span>
              <h3 className="font-bold text-sm text-primary">React Job Simulation Bootcamp | Upskilling</h3>
              <p className="text-xs text-secondary">Team-focused Agile engineering, complex git flow, and automated integrations.</p>
            </div>
          </div>
        </GlowCard>

        {/* Edu 4 */}
        <GlowCard glowColor="cyan" className="p-5 hover:-translate-y-0.5 hover:shadow-lg">
          <div className="flex gap-4">
            <div className="p-2.5 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan h-fit shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-wider font-bold text-brand-cyan">Ongoing Training</span>
              <h3 className="font-bold text-sm text-primary">Advanced DevOps | Kimit Academy</h3>
              <p className="text-xs text-secondary">Learning multi-stage Dockerfiles and containerized builds (Work in progress).</p>
            </div>
          </div>
        </GlowCard>

      </div>
    </Section>
  );
}
