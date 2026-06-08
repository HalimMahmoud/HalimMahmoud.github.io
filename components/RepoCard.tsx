"use client";

import React from "react";
import Link from "next/link";
import { 
  Star, GitFork, ExternalLink, Calendar, Code,
  Hotel, ShoppingBag, ClipboardList, Utensils,
  GraduationCap, Calculator, Car, PlusCircle, HelpCircle
} from "lucide-react";
import type { Repo } from "@/types";
import GlowCard from "./GlowCard";

function getRepoIcon(name: string, description: string | null) {
  const normName = name.toLowerCase();
  
  if (normName.includes("hotel")) return <Hotel className="w-4 h-4" />;
  if (normName.includes("store") || normName.includes("shop")) return <ShoppingBag className="w-4 h-4" />;
  if (normName.includes("task") || normName.includes("todo") || normName.includes("drag-and-drop") || normName.includes("manager")) return <ClipboardList className="w-4 h-4" />;
  if (normName.includes("food") || normName.includes("restaurant") || normName.includes("recipe") || normName.includes("discover")) return <Utensils className="w-4 h-4" />;
  if (normName.includes("udemy") || normName.includes("learn") || normName.includes("clone") || normName.includes("course")) return <GraduationCap className="w-4 h-4" />;
  if (normName.includes("money") || normName.includes("calc") || normName.includes("coin")) return <Calculator className="w-4 h-4" />;
  if (normName.includes("driver") || normName.includes("car") || normName.includes("taxi")) return <Car className="w-4 h-4" />;
  if (normName.includes("quiz") || normName.includes("test") || normName.includes("exam")) return <HelpCircle className="w-4 h-4" />;
  if (normName.includes("counter")) return <PlusCircle className="w-4 h-4" />;

  // Extract starting emoji if present in the description
  if (description) {
    const emojiRegex = /^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/u;
    const match = description.match(emojiRegex);
    if (match) {
      return <span className="text-xs font-semibold leading-none select-none">{match[0]}</span>;
    }
  }

  return <Code className="w-4 h-4" />;
}

function cleanDescription(description: string | null): string {
  if (!description) return "";
  // Strip leading emoji and any subsequent whitespace
  const emojiRegex = /^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)\s*/u;
  return description.replace(emojiRegex, "");
}

export default function RepoCard({ repo }: { repo: Repo }) {
  const updated = new Date(repo.pushed_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const isDemo = repo?.homepage?.endsWith(".gif");
  const cleanedDesc = cleanDescription(repo.description);
  
  const getGlowColorForRepo = (name: string): "cyan" | "purple" | "pink" => {
    const normName = name.toLowerCase();
    if (normName.includes("hotel") || normName.includes("store") || normName.includes("shop")) return "cyan";
    if (normName.includes("task") || normName.includes("todo") || normName.includes("drag-and-drop") || normName.includes("manager")) return "purple";
    return "pink";
  };

  return (
    <GlowCard 
      glowColor={getGlowColorForRepo(repo.name)}
      className="p-4 sm:p-6 h-full hover:-translate-y-1 hover:shadow-xl group"
    >
      {/* Decorative top grid overlay - highly subtle */}
      <div className="absolute inset-0 bg-theme-bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300 tech-grid-bg rounded-xl" />

      <div className="space-y-4">
        {/* Header with name + live/demo badge */}
        <div className="flex items-start justify-between gap-2">
          <div className="p-2 rounded-lg bg-theme-bg-secondary border border-theme-border text-brand-cyan group-hover:text-brand-purple group-hover:border-brand-purple/40 transition-colors flex items-center justify-center min-w-8 min-h-8">
            {getRepoIcon(repo.name, repo.description)}
          </div>

          {repo.homepage && (
            <Link
              href={repo.homepage}
              target="_blank"
              className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full border transition-colors ${
                isDemo
                  ? "bg-brand-pink/10 border-brand-pink/30 text-brand-pink hover:bg-brand-pink/20"
                  : "bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan/20"
              }`}
            >
              <span>{isDemo ? "GIF Demo" : "Live Demo"}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </Link>
          )}
        </div>

        {/* Title */}
        <div>
          <h3 className="font-bold text-base text-primary group-hover:text-brand-cyan capitalize tracking-tight transition-colors">
            <Link href={repo.html_url} target="_blank" className="flex items-center gap-1.5 hover:underline">
              <span>{repo.name.split("-").join(" ")}</span>
              <ArrowIcon />
            </Link>
          </h3>
          
          {/* Description */}
          <p className="mt-2 text-xs text-secondary line-clamp-3 leading-relaxed min-h-12">
            {cleanedDesc || "No description provided. Click the link above to view code files on GitHub."}
          </p>
        </div>
      </div>

      {/* Footer Meta Details */}
      <div className="relative z-10 mt-6 pt-4 border-t border-theme-border flex flex-wrap items-center justify-between gap-3 text-[10px] text-secondary">
        <div className="flex items-center gap-3">
          {repo.language && (
            <span className="badge text-[10px] py-0.5 px-2">
              {repo.language}
            </span>
          )}
          
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400/20" />
            <span>{repo.stargazers_count}</span>
          </div>

          <div className="flex items-center gap-1">
            <GitFork className="w-3 h-3 text-secondary" />
            <span>{repo.forks_count}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 font-mono text-[9px]">
          <Calendar className="w-3 h-3" />
          <span>{updated}</span>
        </div>
      </div>
    </GlowCard>
  );
}

function ArrowIcon() {
  return (
    <svg 
      className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-brand-cyan" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
