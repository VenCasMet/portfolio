"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full py-20 md:py-28 bg-zinc-50 dark:bg-black"
    >
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
          Experience
        </h2>
        <p className="mt-2 mb-12 text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Hands-on industry experience building real-world production systems.
        </p>

        <div className="relative pl-10">
          {/* Timeline Line */}
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-transparent via-black/20 to-transparent dark:via-white/20" />

          {/* Timeline Dot */}
          <div className="absolute left-[6px] top-6 h-3 w-3 rounded-full bg-black dark:bg-white" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
            <h3 className="text-lg font-semibold text-black dark:text-white">
              Software Engineer Intern — Synexoo
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
              Jan 2025 – Mar 2025
            </p>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              <li>
                • Designed and deployed backend services for a social media
                platform using Node.js, Express, and MongoDB.
              </li>
              <li>
                • Implemented JWT-based authentication, user profiles, and
                follow/unfollow logic, increasing user engagement by 30%.
              </li>
              <li>
                • Engineered a real-time chat system using WebSockets
                (Socket.io), supporting 500+ concurrent users.
              </li>
              <li>
                • Collaborated with frontend and product teams to deliver
                production-ready features.
              </li>
            </ul>

            <p className="mt-4 text-xs text-zinc-500">
              Tech Stack: Node.js, Express, MongoDB, WebSockets, JavaScript, Git
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
