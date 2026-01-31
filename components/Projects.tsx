"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "@/components/ProjectModal";

const projects = [
  {
    title: "FinBoard – Real-Time Finance Dashboard",
    description: "Configurable finance dashboard with live stock data",
    problem:
      "Market data APIs were unreliable, causing frequent chart and data failures.",
    solution:
      "Designed a multi-provider architecture using Alpha Vantage, Finnhub, and TwelveData with fallback and client-side caching.",
    impact:
      "Reduced failed API requests by 70% and ensured reliable chart rendering across multiple intervals.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Recharts",
      "Zustand",
      "Vercel",
    ],
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
    live: "",
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
    live: "",
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
    live: "",
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
    live: "",
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
    live: "",
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
  const [activeProject, setActiveProject] =
    useState<null | (typeof projects)[0]>(null);

  return (
    <section
      id="projects"
      className="w-full py-20 md:py-28 bg-white dark:bg-black"
    >
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Projects
        </h2>
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
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              {/* Tech preview */}
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

              {/* Links */}
              <div className="mt-6 flex gap-4 text-sm text-zinc-500">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
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
