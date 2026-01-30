"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      
      {/* Glass background */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md border-b border-white/10" />

      {/* Subtle bottom glow */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <Link
          href="#"
          className="text-sm font-semibold tracking-wide text-white"
        >
          Piyush<span className="text-zinc-400">.</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
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

        {/* CTA */}
        <a
          href="/Piyush_Resume.pdf"
          className="
            rounded-full px-4 py-2 text-xs font-medium
            border border-white/20
            text-white
            hover:bg-white hover:text-black
            transition
          "
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
