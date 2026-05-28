import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Repo } from "@/types";

async function fetchRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/HalimMahmoud/repos`,
      {
        headers: {
          "User-Agent": "Halim-Portfolio",
        },
        next: { revalidate: 3600 } // Cache for 1 hour in Next.js 16
      }
    );
    if (!res.ok) {
      console.warn("GitHub API responded with status:", res.status);
      return [];
    }
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
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

  return (
    <main className="min-h-screen relative transition-colors duration-300">
      <Header />
      <Hero />
      <Projects highlighted={highlighted} />
      <Capabilities />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
