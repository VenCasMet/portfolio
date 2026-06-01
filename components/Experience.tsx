"use client";

import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Software Engineer Intern",
    company: "Starlight Tech Services Pvt Ltd",
    period: "Mar 2026 – Present",
    bullets: [
      "Built scalable backend services for a PERN application with REST APIs, PostgreSQL schemas, and asynchronous media processing.",
      "Designed image optimization workflows using Python and WebP to reduce asset sizes by up to 80%.",
      "Implemented performance-driven media pipelines focused on reliability, storage efficiency, and real-time progress tracking.",
    ],
    tech: "PostgreSQL • Express.js • React • Node.js • Python • WebP",
  },
  {
    role: "Software Engineer Intern",
    company: "Synexoo",
    period: "Jan 2025 – Mar 2025",
    bullets: [
      "Delivered backend features for a social platform using Node.js, Express.js, and MongoDB.",
      "Built user profile management, follow systems, and optimized query performance.",
      "Developed real-time chat using Socket.io with stable event handling and reconnect logic.",
    ],
    tech: "Node.js • Express.js • MongoDB • Socket.io • JavaScript",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-20 md:py-28 bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Experience</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
            Real engineering experience across product, backend, and AI systems.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Industry experience delivering full-stack platforms, scalable APIs, and media-first backend solutions.
          </p>
        </motion.div>

        <div className="relative pl-8">
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-cyan-300/20 via-slate-500/25 to-transparent" />
          <div className="space-y-10">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20, y: 24 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-500/5"
              >
                <div className="absolute -left-4 top-10 h-8 w-8 rounded-full bg-slate-950 border border-cyan-300/20 shadow-lg shadow-cyan-500/10" />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-sm text-cyan-300">{item.company}</p>
                  </div>
                  <p className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200">
                    {item.period}
                  </p>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-slate-400">Tech Stack: {item.tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
