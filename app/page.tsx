import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen relative transition-colors duration-300">
      <Header />
      <Hero />
      <Projects />
      <Capabilities />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
