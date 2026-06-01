"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm text-slate-400">
        <p className="text-center md:text-left text-slate-300">
          © {new Date().getFullYear()} <span className="font-medium text-white">Piyush Sharma</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://github.com/VenCasMet"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:piyushsharma1729@gmail.com"
            className="transition hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
