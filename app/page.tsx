import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import RepoCard from "@/components/RepoCard";
import type { Repo } from "@/types";

async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch(`https://api.github.com/users/HalimMahmoud/repos`, {
    cache: "no-store",
  });
  const data = await res.json();

  return Array.isArray(data) ? data : [];
}

export default async function Page() {
  const repos = await fetchRepos();
  const pinnedNames = new Set([
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

  const highlighted = repos.filter((r) =>
    pinnedNames.has(r.name.toLowerCase())
  );
  const others = repos
    .filter((r) => !pinnedNames.has(r.name.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main>
      <Header />
      <Hero />

      <Section id="projects" title="Highlighted Projects">
        {highlighted.length === 0 ? (
          <p className="text-slate-600">
            No highlighted repos found yet — once your GitHub repo names match
            the list, they’ll appear here automatically.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlighted.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </Section>
      {/* 
      <Section id="repos" title="More Repositories">
        {others.length === 0 ? (
          <p className="text-slate-600">No other repositories yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </Section> */}

      <Section id="experience" title="Experience">
        <ul className="space-y-4">
          <li className="card p-5">
            <h3 className="font-semibold">
              Upskilling — Frontend React Developer Trainee (Job Simulation
              Bootcamp)
            </h3>
            <p className="text-sm text-slate-600">Feb 2025 – Jun 2025</p>
            <p className="mt-2 text-sm">
              Collaborating in teams to build frontend projects using
              GitHub/Jira/Trello, applying agile practices, implementing
              authentication workflows and integrating third-party services.
            </p>
          </li>
          <li className="card p-5">
            <h3 className="font-semibold">
              National Bank of Egypt (NBE) — Senior Bank Teller (Level A)
            </h3>
            <p className="text-sm text-slate-600">Nov 2020 – Present</p>
            <p className="mt-2 text-sm">
              Cash management, vault support, ATM feeding & settlement, and
              handling customer transactions.
            </p>
          </li>
          <li className="card p-5">
            <h3 className="font-semibold">
              elmenus — Customer Support Specialist
            </h3>
            <p className="text-sm text-slate-600">Jul 2019 – Oct 2020</p>
            <p className="mt-2 text-sm">
              Delightful ordering experience, technical support for restaurants,
              smooth deliveries.
            </p>
          </li>
          <li className="card p-5">
            <h3 className="font-semibold">
              Abu Dhabi Islamic Bank (ADIB) — Customer Service Trainee
            </h3>
            <p className="text-sm text-slate-600">Jul 2018 – Aug 2018</p>
            <p className="mt-2 text-sm">
              Guiding customers on products and services, handling requests,
              resolving complaints.
            </p>
          </li>
        </ul>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card p-5">
            <h3 className="font-semibold">Frontend</h3>
            <p className="text-sm mt-2">
              HTML, CSS, JavaScript, TypeScript, React 19, Next.js, React
              Router.
            </p>
            <p className="text-sm mt-1">
              Tailwind, Material UI, Shadcn, Bootstrap, Semantic UI.
            </p>
            <p className="text-sm mt-1">
              Context API, Redux Toolkit, Zustand, Valtio.
            </p>
            <p className="text-sm mt-1">React Hook Form, Formik.</p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold">Backend & Tools</h3>
            <p className="text-sm mt-2">
              Node.js (Express, Next.js APIs), Firebase, Flask, Laravel.
            </p>
            <p className="text-sm mt-1">
              MongoDB, Firestore, PostgreSQL, MySQL.
            </p>
            <p className="text-sm mt-1">Vite, Webpack. Git</p>
            <p className="text-sm mt-1">
              Netlify, Firebase Hosting, GitHub Pages.
            </p>
          </div>
        </div>
      </Section>

      <Section id="education" title="Education & Courses">
        <ul className="space-y-4">
          <li className="card p-5">
            <h3 className="font-semibold">
              Bachelor's Degree from Faculty of Commerce English Section
              (Business Administration) — Cairo University
            </h3>
            <p className="text-sm text-slate-600">2019</p>
          </li>
          <li className="card p-5">
            <h3 className="font-semibold">
              Advanced Web Development Nanodegree — Udacity
            </h3>
            <p className="text-sm text-slate-600">2020</p>
          </li>
          <li className="card p-5">
            <h3 className="font-semibold">
              React Job Simulation Bootcamp — Upskilling
            </h3>
            <p className="text-sm text-slate-600">2025</p>
          </li>
          <li className="card p-5">
            <h3 className="font-semibold">Advanced DevOps — Kimit Academy</h3>
            <p className="text-sm text-slate-600">In progress</p>
          </li>
        </ul>
      </Section>

      <Section id="contact" title="Contact">
        <div className="card p-5">
          <p className="text-sm">
            Email:{" "}
            <a className="underline" href="mailto:halimmahmoud50@gmail.com">
              halimmahmoud50@gmail.com
            </a>
          </p>
          <p className="text-sm mt-1">
            Phone:{" "}
            <a className="underline" href="tel:+201121202539">
              +20 112 120 2539
            </a>
          </p>
          <p className="text-sm mt-1">
            Address: 28 El‑Oroba Street, New Maadi, Cairo
          </p>
          <div className="mt-3 flex gap-3">
            <a
              className="btn"
              href="https://github.com/HalimMahmoud"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn"
              href="https://www.linkedin.com/in/abdelhalimmahmoudnasr"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t">
        <div className="container py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Abdel‑Halim Mahmoud Nasr — Built with
          Next.js & Tailwind.
        </div>
      </footer>
    </main>
  );
}
