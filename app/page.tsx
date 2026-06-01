import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contacts";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.14),transparent_40%)]" />

      <main className="relative mx-auto min-h-screen max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <Navbar />

        <div className="pt-20">
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Achievements />
          <SectionDivider />
          <Contact />
          <SectionDivider />
          <Footer />
        </div>
      </main>
    </div>
  );
}
