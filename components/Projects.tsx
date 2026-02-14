"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "@/components/ProjectModal";

type Project = {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "SentinelAI — API Security Gateway",
    featured: true,
    description:
      "Adaptive security gateway with risk scoring and dynamic rate limiting.",
    problem:
      "Static API defenses fail against evolving malicious traffic patterns.",
    solution:
      "Implemented Redis-backed rate limiting, risk scoring, and automated bans.",
    impact:
      "Protects APIs in real time while maintaining low latency.",
    tech: ["NestJS", "Redis", "Docker", "Security"],
    github: "https://github.com/VenCasMet/SentinelAI",
    live: "",
  },
  {
    title: "VCM_AI — AI Multi-Model Platform",
    featured: true,
    description:
      "Unified AI platform integrating multiple LLM providers for generation, reasoning, and task automation.",
    problem:
      "Developers often need to switch between multiple AI tools manually with inconsistent outputs.",
    solution:
      "Built a centralized interface that routes requests to different models and aggregates results.",
    impact:
      "Improves productivity by providing a single gateway for AI experimentation and workflows.",
    tech: [
      "Python",
      "LLM Stack",
      "PyAudio",
      "PyQt5",
    ],
    github: "https://github.com/VenCasMet/VCM_AI",
    live: "",
  },

  {
    title: "FinBoard — Real-Time Finance Dashboard",
    featured: true,
    description:
      "Configurable finance dashboard with resilient multi-provider stock data.",
    problem:
      "Market APIs frequently fail or rate-limit requests.",
    solution:
      "Fallback architecture across multiple providers with caching.",
    impact:
      "Reduced failures by ~70% and ensured consistent charts.",
    tech: ["Next.js", "TypeScript", "Recharts", "Zustand"],
    github: "https://github.com/VenCasMet/finboard",
    live: "https://financedashboard-git-main-vencasmets-projects.vercel.app/",
  },
  {
    title: "Stock Price Prediction System",
    description: "ML-based stock prediction web application",
    problem:
      "Traditional prediction models failed to incorporate real-world sentiment data.",
    solution:
      "Combined ARIMA, LSTM, and Linear Regression models with sentiment analysis on financial news using NLTK.",
    impact:
      "Achieved RMSE between 4.8%–9.5% and improved short-term prediction reliability.",
    tech: ["Python", "Flask", "ARIMA", "LSTM", "NLTK", "Machine Learning"],
    github: "https://github.com/VenCasMet/Stockprediction",
  },
  
  {
    title: "FootballXI — Team Builder App",
    description:
      "Interactive football lineup builder for creating and visualizing team formations.",
    problem:
      "Fans lack simple tools to visualize custom team strategies.",
    solution:
      "Built drag-and-drop player positioning and formation selection.",
    impact:
      "Useful for tactical planning and sports discussions.",
    tech: ["React", "UI Design", "JavaScript"],
    github: "https://github.com/VenCasMet/FootballXI",
    live: "https://vcmfootballxi.vercel.app/",
  },
  {
    title: "Expense Tracker Dashboard",
    description: "Personal finance and budgeting dashboard",
    problem:
      "Users lacked visibility into spending patterns and budget limits.",
    solution:
      "Built a responsive Angular dashboard with real-time filtering, budget alerts, and analytics.",
    impact:
      "Improved financial visibility by 2× and enabled proactive budget control.",
    tech: ["Angular", "TypeScript", "Charts", "Netlify"],
    github: "https://github.com/VenCasMet/expensetracker",
    live: "https://friendly-eclair-c40ef2.netlify.app/",
  },
  {
    title: "3D Runner Game",
    description: "Endless runner game focusing on gameplay and scoring mechanics",
    problem:
      "Needed a project to practice 3D movement, player control, and dynamic obstacle interaction.",
    solution:
      "Built a Unity 3D endless runner with continuous motion, collision logic, and scoring.",
    impact:
      "Demonstrates understanding of game loops, object interaction, and player control logic.",
    tech: ["Unity", "C#", "3D Game Logic"],
    github: "https://github.com/VenCasMet/3d_runner",
  },
  {
    title: "3D Tower Defense (OpenGL)",
    description: "Tower defense implemented using OpenGL and GLUT in C++",
    problem:
      "Wanted to explore low-level graphics programming and manual game loop control.",
    solution:
      "Built a 3D tower defense engine with wave spawning, resource management, and progressive difficulty.",
    impact:
      "Shows understanding of real-time rendering, collision detection, and system design.",
    tech: ["C++", "OpenGL", "GLUT", "Graphics Programming"],
    github: "https://github.com/VenCasMet/Tower_Defense",
  },
  {
    title: "Hunger Feast – Multiplayer Snake Game",
    description: "Full-stack interactive snake game with persistence",
    problem:
      "Basic browser games lacked long-term engagement and progression.",
    solution:
      "Implemented authentication, persistent high scores, dynamic obstacles, and adaptive speed mechanics.",
    impact:
      "Increased player retention by 30–40% through enhanced gameplay mechanics.",
    tech: ["JavaScript", "HTML", "CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/VenCasMet/Hungerfest",
  },
  {
    title: "CRUD Web App",
    description: "Full stack CRUD web application demonstrating backend fundamentals",
    problem:
      "Needed to master backend routing, controllers, and data persistence workflows.",
    solution:
      "Created a REST API with database integration enabling full CRUD operations.",
    impact:
      "Provides solid foundational experience in API design and DB interaction.",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/VenCasMet/crud_app",
  },
  {
    title: "Tic-Tac-Toe Web Game",
    description: "Classic Tic-Tac-Toe game built with HTML, CSS & JavaScript",
    problem:
      "Practiced DOM manipulation and game logic in the browser.",
    solution:
      "Built a fully functional Tic-Tac-Toe with responsive interaction and clean UI.",
    impact:
      "Reinforces foundational web development and JS event handling.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/VenCasMet/tictactoe",
    live: "https://vencasmet.github.io/tictactoe/",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="w-full py-20 md:py-28 bg-white dark:bg-black"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <p className="mt-2 mb-12 text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Selected projects showcasing real-world problem solving and technical depth.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260 }}
              onClick={() => setActiveProject(project)}
              className="
                cursor-pointer rounded-xl p-6
                bg-gradient-to-b from-zinc-50 to-zinc-100
                dark:from-zinc-900 dark:to-zinc-950
                border border-black/10 dark:border-white/10
                shadow-[0_0_0_1px_rgba(0,0,0,0.04)]
                dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
                hover:shadow-[0_0_35px_rgba(0,0,0,0.1)]
                dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]
                transition-all duration-300
              "
            >
              {project.featured && (
                <span className="mb-2 inline-block text-xs font-semibold text-yellow-600 dark:text-yellow-400">
                  ⭐ Featured Project
                </span>
              )}

              <h3 className="text-lg font-semibold text-black dark:text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4 text-sm text-zinc-500">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-black dark:hover:text-white transition"
                  >
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-black dark:hover:text-white transition"
                  >
                    Live →
                  </a>
                )}
              </div>

              <p className="mt-4 text-xs text-zinc-500">
                Click card to view full case study →
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
