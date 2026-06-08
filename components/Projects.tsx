"use client";

import { use, Suspense } from "react";
import Section from "./Section";
import RepoCard from "./RepoCard";
import type { Repo } from "@/types";

const PINNED = new Set([
  "quiz",
  "hotel-booking-app",
  "task-management-app",
  "food-discovery-app",
  "drag-and-drop-task-manager",
  "store",
  "udemy-clone",
  "money-counter",
  "drivers",
  "counter",
]);

async function fetchRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/HalimMahmoud/repos?per_page=100&sort=pushed",
      { headers: { "User-Agent": "Halim-Portfolio" } }
    );
    if (!res.ok) return [];
    const data: Repo[] = await res.json();
    return data.filter((r) => PINNED.has(r.name.toLowerCase()));
  } catch {
    return [];
  }
}

// Created once at module level - stable reference, no re-fetch on re-render
const reposPromise = fetchRepos();

// ── Inner component that suspends until the promise resolves ──
function RepoGrid() {
  const repos = use(reposPromise);

  if (repos.length === 0) {
    return (
      <div className="card bg-card-secondary border border-primary p-8 text-center max-w-lg mx-auto">
        <p className="text-sm text-secondary">
          No highlighted repos found. Once your GitHub repos match the pinned list
          they'll appear here with live stars and fork counts.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

// ── Skeleton shown while the promise is pending ──
function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="card h-48 animate-pulse bg-theme-bg-secondary/60" />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Highlighted Projects">
      <Suspense fallback={<LoadingSkeleton />}>
        <RepoGrid />
      </Suspense>
    </Section>
  );
}
