"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Database, Trophy } from "lucide-react";

const expertise = [
  {
    title: "Full Stack Engineering",
    icon: <Code2 size={24} />,
    tech: "React • Next.js • Node.js • PostgreSQL",
    description:
      "Building scalable web applications, real-time systems, and modern user experiences.",
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain size={24} />,
    tech: "Python • LLMs • NLP • ML Models",
    description:
      "Developing intelligent systems using machine learning, local LLMs, and AI-powered workflows.",
  },
  {
    title: "Backend Systems",
    icon: <Database size={24} />,
    tech: "NestJS • Redis • APIs • Security",
    description:
      "Designing secure backend architectures, authentication systems, and asynchronous workflows.",
  },
  {
    title: "Problem Solving",
    icon: <Trophy size={24} />,
    tech: "500+ Problems • LeetCode 1600+",
    description:
      "Strong DSA foundation with competitive programming and optimization experience.",
  },
];

const stats = [
  { value: "12+", label: "Projects Delivered" },
  { value: "800+", label: "Problems Solved" },
  { value: "2", label: "Internships" },
  { value: "1600+", label: "LeetCode Rating" },
];

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 md:py-28 bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">About</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
            Engineering with clarity, scale, and AI-driven impact.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            I build robust products, intelligent services, and performance-first systems that bring real business value.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold text-white">
            Building software at the intersection of full-stack development and AI.
          </h3>
          <p className="mt-4 text-slate-300 leading-relaxed">
            From production-ready web platforms and media optimization systems to AI assistants, machine learning solutions, and scalable backend architectures.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-cyan-500/5 transition-all duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                {item.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-cyan-300">{item.tech}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 text-center text-white shadow-lg shadow-cyan-500/5 transition-all duration-300"
            >
              <p className="text-3xl font-semibold">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
