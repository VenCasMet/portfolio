"use client";

import { motion } from "framer-motion";


const skillGroups = [
  {
    title: "Languages",
    skills: [
      "C++",
      "C",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Angular",
      "HTML",
      "CSS",
      "Recharts",
      "Responsive UI",
      "Dark / Light Themes",
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "WebSockets",
      "JWT Authentication",
      "NestJS",
      "Redis",
    ],
  },
  {
    title: "AI/ML & Data Science",
    skills: [
      "ARIMA",
      "LSTM",
      "Linear Regression",
      "NLTK",
      "Data Analysis",
      "Model Evaluation (RMSE)",
      "Machine Learning",
      "Lovcal LLM Integration",
      "Ollama",
    ],
  },
  {
    title: "Core CS & Tools",
    skills: [
      "DSA",
      "OOP",
      "System Design",
      "Git",
      "GitHub",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "Coursework & Foundations",
    skills: [
      "Operating Systems",
      "DBMS",
      "Computer Graphics",
      "Game Design",
      "3D Modeling",
      "Cyber Security",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-20 md:py-28 bg-zinc-50 dark:bg-black"
    >
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
          Skills
        </h2>
        <p className="mt-2 mb-12 text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A concise snapshot of languages, frameworks, and core computer science
          foundations I work with.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="
                rounded-xl p-6
                bg-gradient-to-b from-white to-zinc-100
                dark:from-zinc-900 dark:to-zinc-950
                border border-black/10 dark:border-white/10
                shadow-[0_0_0_1px_rgba(0,0,0,0.04)]
                dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
                hover:shadow-[0_0_30px_rgba(0,0,0,0.08)]
                dark:hover:shadow-[0_0_35px_rgba(255,255,255,0.12)]
                transition-all duration-300
              "
            >
              <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full px-4 py-1.5 text-sm
                      bg-black/5 dark:bg-white/5
                      border border-black/10 dark:border-white/10
                      text-zinc-700 dark:text-zinc-300
                    "
                  >
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
