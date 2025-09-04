import Link from "next/link";
import type { Repo } from "@/types";

export default function RepoCard({ repo }: { repo: Repo }) {
  const updated = new Date(repo.pushed_at).toLocaleDateString();
  return (
    <div className="card p-5 h-full flex flex-col">
      <div className="flex-1">
        <h3 className="font-semibold text-lg">
          <Link href={repo.html_url} target="_blank" className="capitalize">
            {repo.name.split("-").join(" ")}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-slate-600 min-h-10">
          {repo.description || "No description provided."}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-slate-600">
        {repo.language && <span className="badge">{repo.language}</span>}
        <span className="badge">★ {repo.stargazers_count}</span>
        <span className="badge">Forks {repo.forks_count}</span>
        <span className="ml-auto">Updated {updated}</span>
      </div>
    </div>
  );
}
