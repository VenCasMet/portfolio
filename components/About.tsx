"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Frontend Development",
    description:
      "I build responsive, high-performance interfaces using React, Next.js, and modern UI patterns with strong focus on usability and performance.",
  },
  {
    title: "Backend Development",
    description:
      "Experienced in Node.js, Express, MongoDB, REST APIs, authentication systems, and real-time features using WebSockets.",
  },
  {
    title: "AI / Machine Learning",
    description:
      "Hands-on experience building ML-powered applications including prediction systems, sentiment analysis, and AI integrations using Python, LSTM, ARIMA, and modern AI APIs.",
  },
  {
    title: "Problem Solving",
    description:
      "Strong foundation in DSA and competitive programming with a focus on writing optimized, scalable, and clean code.",
  },
  
];


export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 md:py-28 bg-zinc-50 dark:bg-black"
    >
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
          About Me
        </h2>
        <p className="mt-2 mb-12 text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A quick overview of what I focus on and where my strengths lie.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
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
              <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
