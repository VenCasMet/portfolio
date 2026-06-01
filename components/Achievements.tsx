"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    platform: "LeetCode",
    rating: "1600+",
    title: "Top 22.5%",
    solved: "500+ Problems Solved",
    emoji: "🏆",
    link: "https://leetcode.com/u/VenCasMet/",
  },
  {
    platform: "CodeChef",
    rating: "3★",
    title: "1600+ Rating",
    solved: "200+ Problems Solved",
    emoji: "⭐",
    link: "https://www.codechef.com/users/vencasmet",
  },
  {
    platform: "Codeforces",
    rating: "1100+",
    title: "Competitive Programming",
    solved: "100+ Problems Solved",
    emoji: "📈",
    link: "https://codeforces.com/profile/Vencas",
  },
];

const metrics = [
  { value: "800+", label: "Problems Solved" },
  { value: "1600+", label: "Peak Rating" },
  { value: "3★", label: "CodeChef" },
  { value: "Top 22%", label: "LeetCode" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative w-full py-20 md:py-28 bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Achievements</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
            Competitive programming results and performance milestones.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            A quick snapshot of ratings, solved problems, and competitive growth across LeetCode, CodeChef, and Codeforces.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-4 mb-12">
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              whileHover={{ y: -4 }}
              className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 text-center text-white shadow-lg shadow-cyan-500/5 transition-all duration-300"
            >
              <p className="text-3xl font-semibold">{metric.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-400">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.a
              key={item.platform}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-white shadow-2xl shadow-cyan-500/5 transition-all duration-300"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 text-4xl text-cyan-300">
                {item.emoji}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{item.platform}</h3>
              <p className="mt-4 text-4xl font-bold text-white">{item.rating}</p>
              <p className="mt-2 text-sm text-slate-400">{item.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.solved}</p>
              <p className="mt-6 text-sm font-medium text-cyan-300">View Profile →</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-5 text-sm text-slate-400">
          <a href="https://leetcode.com/u/VenCasMet/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            LeetCode
          </a>
          <a href="https://www.codechef.com/users/vencasmet" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            CodeChef
          </a>
          <a href="https://codeforces.com/profile/Vencas" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            Codeforces
          </a>
        </div>
      </div>
    </section>
  );
}
