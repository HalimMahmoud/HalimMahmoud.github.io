"use client";

import React, { useState } from "react";
import Section from "./Section";
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import GlowCard from "./GlowCard";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <Section id="contact" title="Get in Touch">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card left: Details */}
        <GlowCard glowColor="cyan" className="lg:col-span-2 p-6 hover:-translate-y-0.5 hover:shadow-lg">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-primary font-display">Let's collaborate!</h3>
            <p className="text-xs text-secondary leading-relaxed">
              If you are looking for a dedicated and precision-focused Full-Stack Developer specializing in React and Next.js who builds type-safe applications and writes clean codebase files, I would love to hear from you.
            </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div 
              onClick={() => copyToClipboard("halimmahmoud50@gmail.com", "email")}
              className="flex items-center justify-between p-3 bg-secondary rounded-xl border border-primary hover:border-brand-cyan/40 transition-colors cursor-pointer group/item"
              title="Click to copy email"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-secondary uppercase tracking-wider">Email Address</h4>
                  <span className="text-xs font-semibold text-primary mt-0.5 block hover:underline">
                    halimmahmoud50@gmail.com
                  </span>
                </div>
              </div>
              <button 
                className="p-1.5 rounded-lg border border-transparent text-secondary hover:text-primary hover:bg-theme-bg/60 transition-colors"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5 opacity-40 group-hover/item:opacity-100 transition-opacity" />}
              </button>
            </div>

            <div 
              onClick={() => copyToClipboard("+201121202539", "phone")}
              className="flex items-center justify-between p-3 bg-secondary rounded-xl border border-primary hover:border-brand-purple/40 transition-colors cursor-pointer group/item"
              title="Click to copy phone"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-secondary uppercase tracking-wider">Phone Number</h4>
                  <span className="text-xs font-semibold text-primary mt-0.5 block hover:underline">
                    +20 112 120 2539
                  </span>
                </div>
              </div>
              <button 
                className="p-1.5 rounded-lg border border-transparent text-secondary hover:text-primary hover:bg-theme-bg/60 transition-colors"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5 opacity-40 group-hover/item:opacity-100 transition-opacity" />}
              </button>
            </div>

            <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl border border-primary sm:col-span-2">
              <div className="p-2 rounded-lg bg-brand-pink/10 text-brand-pink border border-brand-pink/20">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-secondary uppercase tracking-wider">Address</h4>
                <span className="text-xs font-semibold text-primary mt-0.5 block">
                  Cairo, Egypt
                </span>
              </div>
            </div>

          </div>
        </div>
      </GlowCard>

        {/* Quick social card right */}
        <GlowCard glowColor="purple" className="p-6 hover:-translate-y-0.5 hover:shadow-lg flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="font-bold text-primary text-base">Direct Channels</h3>
            <p className="text-[11px] text-secondary mt-2 leading-relaxed">
              Connect with me on LinkedIn to check my career timeline or check my raw commit schedules directly on GitHub.
            </p>
          </div>

          <div className="space-y-2 pt-4">
            <a 
              href="https://github.com/HalimMahmoud" 
              target="_blank" 
              rel="noreferrer"
              className="btn w-full text-xs flex justify-between items-center hover:border-brand-cyan/40"
            >
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>

            <a 
              href="https://www.linkedin.com/in/abdelhalimmahmoudnasr" 
              target="_blank" 
              rel="noreferrer"
              className="btn w-full text-xs flex justify-between items-center hover:border-brand-purple/40"
            >
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Network</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </GlowCard>

      </div>
    </Section>
  );
}
