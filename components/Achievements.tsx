"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "LeetCode",
    value: "1600+ Rating",
    description: "Top 22.5%, 500+ problems solved",
    emoji: "🏆",
  },
  {
    title: "CodeChef",
    value: "3-Star Coder",
    description: "1600+ rating, 200+ problems solved",
    emoji: "⭐",
  },
  {
    title: "Codeforces",
    value: "1100+ Rating",
    description: "100+ problems solved",
    emoji: "📊",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="w-full py-20 md:py-28 bg-white dark:bg-black"
    >
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
          Achievements
        </h2>
        <p className="mt-2 mb-12 text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Competitive programming milestones that highlight consistency and
          problem-solving skills.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                rounded-xl p-6 text-center
                bg-gradient-to-b from-zinc-50 to-zinc-100
                dark:from-zinc-900 dark:to-zinc-950
                border border-black/10 dark:border-white/10
                shadow-[0_0_0_1px_rgba(0,0,0,0.04)]
                dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
                hover:shadow-[0_0_30px_rgba(0,0,0,0.08)]
                dark:hover:shadow-[0_0_35px_rgba(255,255,255,0.12)]
                transition-all duration-300
              "
            >
              {/* Emoji */}
              <div className="mb-4 text-4xl">
                {item.emoji}
              </div>

              <h3 className="text-lg font-semibold text-black dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-black dark:text-white">
                {item.value}
              </p>

              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
