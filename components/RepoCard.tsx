import Link from "next/link";
import type { Repo } from "@/types";

export default function RepoCard({ repo }: { repo: Repo }) {
  const updated = new Date(repo.pushed_at).toLocaleDateString();

  return (
    <div className="card p-5 h-full flex flex-col">
      {/* Header with name + badges */}
      <div className="flex items-start justify-between">
        <h3 className="font-semibold text-lg capitalize">
          <Link href={repo.html_url} target="_blank">
            {repo.name.split("-").join(" ")}
          </Link>
        </h3>

        <div className="flex gap-2">
          {repo.homepage && (
            <Link
              href={repo.homepage}
              target="_blank"
              className="badge bg-blue-100 hover:bg-blue-200 text-blue-700"
            >
              Preview
            </Link>
          )}
          {repo.video_url && (
            <Link
              href={repo.video_url}
              target="_blank"
              className="badge bg-red-100 hover:bg-red-200 text-red-700"
            >
              Video
            </Link>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="mt-2 text-sm text-slate-600 min-h-10">
        {repo.description || "No description provided."}
      </p>

      {/* Footer badges */}
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-600">
        {repo.language && <span className="badge">{repo.language}</span>}
        <span className="badge">★ {repo.stargazers_count}</span>
        <span className="badge">Forks {repo.forks_count}</span>
        <span className="ml-auto">Updated {updated}</span>
      </div>
    </div>
  );
}
