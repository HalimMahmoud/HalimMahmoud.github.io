import React from "react";
import Section from "./Section";
import RepoCard from "./RepoCard";
import type { Repo } from "@/types";

type ProjectsProps = {
  highlighted: Repo[];
};

export default function Projects({ highlighted }: ProjectsProps) {
  return (
    <Section id="projects" title="Highlighted Projects">
      {highlighted.length === 0 ? (
        <div className="card bg-card-secondary border border-primary p-8 text-center max-w-lg mx-auto">
          <p className="text-sm text-secondary">
            No highlighted repos loaded yet. Once your GitHub repos match the pinned list, they'll appear here dynamically with real-time stars and fork metadata.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlighted.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </Section>
  );
}
