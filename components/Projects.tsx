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
    title: "MediaFlux — AI Media Optimization Platform",
    featured: true,
    description:
      "Production-style Flutter + FastAPI platform for intelligent image optimization, analysis, and real-time processing.",
    problem:
      "Traditional image compressors provide limited feedback, poor UX, and no visibility into optimization quality, while large media batches require scalable processing and progress tracking.",
    solution:
      "Built a full-stack system using Flutter and FastAPI featuring asynchronous job processing, adaptive compression, target-size optimization, heatmap generation, before/after comparisons, progressive result streaming, auto-scroll UX, and real-time progress synchronization.",
    impact:
      "Evolved from a simple image compressor into a production-style media optimization platform supporting batch uploads, live processing updates, intelligent quality preservation, analysis pipelines, and deployment-ready architecture.",
    tech: ["Flutter", "FastAPI", "Python", "Pillow", "Dart", "REST APIs", "Threading", "Uvicorn"],
    github: "https://github.com/VenCasMet/appbackendmediaflux",
    live: "https://github.com/VenCasMet/appbackendmediaflux/releases/download/v1.0/app-release.apk",
  },
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
    tech: ["Python", "LLM Stack", "PyAudio", "PyQt5"],
    github: "https://github.com/VenCasMet/VCM_AI",
    live: "https://github.com/VenCasMet/VCM_AI/releases/download/v1.0/VCM_Setup.exe",
  },
  {
    title: "Graph AI Query System",
    featured: true,
    description:
      "Developed an AI-powered graph-based query system that enables intelligent data retrieval and contextual reasoning using structured relationships.",
    problem:
      "Traditional query systems struggle with complex relational data and lack contextual understanding, making multi-hop queries inefficient and error-prone.",
    solution:
      "Built a Graph-RAG inspired system integrating knowledge graphs, vector search, and LLM-based query interpretation to generate accurate and context-aware responses.",
    impact:
      "Improved query accuracy and efficiency for complex datasets while enabling natural language interaction with structured data systems.",
    tech: ["Node.js / NestJS", "Graph-based architecture", "AI/LLM", "Vector Search"],
    github: "https://github.com/VenCasMet/graph-ai-query-system",
    live: "https://graph-ai-query-system-1.onrender.com/",
  },
  {
  title: "Hook Mining Engine — AI Viral Hook Generator",
  featured: true,
  description:
    "AI-powered content research platform that analyzes viral content patterns from Reddit and Google to generate high-performing hooks for creators and marketers.",
  problem:
    "Creators and marketers often rely on intuition instead of data when writing hooks, leading to inconsistent engagement and content performance.",
  solution:
    "Built a full-stack AI system that mines Reddit discussions and Google search insights, identifies successful hook patterns using LLM analysis, and generates ready-to-use viral hooks instantly.",
  impact:
    "Transforms content ideation from guesswork into a data-driven workflow by combining real-world content signals with AI-powered pattern extraction.",
  tech: [
    "Node.js",
    "Express",
    "Groq LLaMA",
    "Serper API",
    "Reddit API",
    "JavaScript",
  ],
  github: "https://github.com/VenCasMet/HookMiningEngine",
  live: "https://hookminingengine.onrender.com/",
},
  {
    title: "FinBoard — Real-Time Finance Dashboard",
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
    <section id="projects" className="w-full py-20 md:py-28 bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300">
              Selected projects showcasing real-world problem solving and technical depth.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <motion.button
              key={project.title}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 260 }}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 text-left shadow-2xl shadow-cyan-500/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              {project.featured && (
                <span className="mb-3 inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Featured
                </span>
              )}

              <h3 className="text-xl font-semibold text-white">{project.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
                {project.github && <span className="group-hover:text-white transition">GitHub →</span>}
                {project.live && <span className="group-hover:text-white transition">Live →</span>}
              </div>

              <p className="mt-4 text-xs text-slate-500">Click to view the full case study.</p>
            </motion.button>
          ))}
        </div>
      </div>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  );
}
