"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  github?: string;
  live?: string;
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="
          relative w-full max-w-2xl rounded-2xl p-8
          bg-gradient-to-b from-white to-zinc-100
          dark:from-zinc-900 dark:to-zinc-950
          border border-black/10 dark:border-white/10
          shadow-[0_0_0_1px_rgba(0,0,0,0.04)]
          dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
          hover:shadow-[0_0_40px_rgba(0,0,0,0.1)]
          dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]
          transition-all
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute right-4 top-4 text-sm text-zinc-500 hover:text-black dark:hover:text-white transition"
        >
          ✕
        </button>

        {/* Title */}
        <h3 className="mb-6 text-xl md:text-2xl font-semibold text-black dark:text-white">
          {project.title}
        </h3>

        {/* Content */}
        <div className="space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            <span className="font-medium text-black dark:text-white">
              Problem:
            </span>{" "}
            {project.problem}
          </p>
          <p>
            <span className="font-medium text-black dark:text-white">
              Solution:
            </span>{" "}
            {project.solution}
          </p>
          <p>
            <span className="font-medium text-black dark:text-white">
              Impact:
            </span>{" "}
            {project.impact}
          </p>
        </div>

        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="
                rounded-full px-3 py-1 text-xs
                bg-black/5 dark:bg-white/5
                border border-black/10 dark:border-white/10
                text-zinc-700 dark:text-zinc-300
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex gap-6 text-sm font-medium">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4 hover:text-black dark:hover:text-white transition"
            >
              GitHub →
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4 hover:text-black dark:hover:text-white transition"
            >
              Live →
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
