"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-20 md:py-28 bg-zinc-50 dark:bg-black overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(0,0,0,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            rounded-2xl p-10
            bg-gradient-to-b from-white to-zinc-100
            dark:from-zinc-900 dark:to-zinc-950
            border border-black/10 dark:border-white/10
            shadow-[0_0_0_1px_rgba(0,0,0,0.04)]
            dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
          "
        >
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-black dark:text-white">
            Let’s Work Together
          </h2>

          <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
            I’m open to internships, full-time roles, and impactful software
            projects. Feel free to reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Email */}
            <a
              href="mailto:piyushsharma1729@gmail.com"
              className="
                rounded-full px-7 py-3 text-sm font-medium
                bg-black text-white
                hover:opacity-90
                dark:bg-white dark:text-black
                transition
              "
            >
              Email Me
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/piyush-sharma-921b77258/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full px-7 py-3 text-sm font-medium
                border border-black/20 dark:border-white/20
                hover:bg-black hover:text-white
                dark:hover:bg-white dark:hover:text-black
                transition
              "
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
