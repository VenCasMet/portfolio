"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ResumeButton from "@/components/ResumeButton";

const badges = ["Full Stack Developer", "AI/ML Enthusiast", "Backend Engineering"];
const stats = [
  { value: "12+", label: "Projects" },
  { value: "1600+", label: "LeetCode" },
  { value: "2", label: "Internships" },
  { value: "500+", label: "DSA Problems" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:p-10">
      <div className="pointer-events-none absolute -right-16 top-12 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-8 h-72 w-72 rounded-full bg-slate-400/10 blur-3xl" />

      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/95">Software Engineer</p>

          <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl">
            Hi, I’m Piyush.
            <br />
            I build modern web and AI systems.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I create high-performance applications, intelligent media solutions, and scalable backend systems for real-world products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 backdrop-blur-sm">
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <ResumeButton />
            <a href="https://github.com/VenCasMet" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-cyan-300 hover:bg-cyan-500/15 hover:text-cyan-100">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/piyush-sharma-921b77258/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-cyan-300 hover:bg-cyan-500/15 hover:text-cyan-100">
              LinkedIn
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <motion.div key={stat.label} whileHover={{ y: -6 }} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center text-white/95 transition">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="space-y-6">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/90 shadow-2xl shadow-cyan-500/10">
            <div className="relative h-[420px] w-full">
              <Image src="/profile.jpeg" alt="Piyush Sharma" fill priority className="object-cover" />
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-xl shadow-cyan-500/5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">currently building</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">MediaFlux</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              An AI-powered media optimization platform that streamlines image compression, WebP conversion, and cloud-based asset delivery.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "Node.js", "PostgreSQL", "Python", "Oracle Cloud", "WebP"].map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
