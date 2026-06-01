"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#" className="text-sm font-semibold tracking-[0.2em] text-white">
          PIYUSH<span className="text-cyan-400">.</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/Piyush_Resume.pdf"
            className="hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white transition hover:border-cyan-400 hover:bg-cyan-500/15 hover:text-cyan-100 md:inline-flex"
          >
            Resume
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15 md:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="text-xl">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3 text-sm text-slate-200">
            <a href="#about" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 hover:bg-white/10 transition">
              About
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 hover:bg-white/10 transition">
              Experience
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 hover:bg-white/10 transition">
              Projects
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 hover:bg-white/10 transition">
              Skills
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 hover:bg-white/10 transition">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
