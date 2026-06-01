"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Full Stack Development",
    skills: ["React", "Next.js", "Node.js", "Express.js", "TypeScript", "REST APIs", "MongoDB", "PostgreSQL", "Flutter"],
  },
  {
    title: "AI / Machine Learning",
    skills: ["Python", "Machine Learning", "LSTM", "ARIMA", "NLTK", "Ollama", "Local LLMs", "Prompt Engineering", "Sentiment Analysis"],
  },
  {
    title: "Backend & System Design",
    skills: ["NestJS", "Redis", "WebSockets", "JWT Authentication", "Microservices", "Caching", "Rate Limiting", "Async Processing", "API Security"],
  },
  {
    title: "Data & Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Database Design", "Query Optimization", "Data Analysis", "Vector Search"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "AWS", "Git", "GitHub", "Vercel", "Render", "Replit", "Oracle Cloud"],
  },
  {
    title: "Computer Science Fundamentals",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design", "Computer Graphics"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-20 md:py-28 bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Skills</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">Technologies, frameworks, and core CS foundations.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            These are the tools and concepts I use to build modern applications, scalable systems, and intelligent workflows.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-cyan-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
