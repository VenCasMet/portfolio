"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-black/10 dark:border-white/10">
      
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent dark:via-white/20" />

      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-600 dark:text-zinc-400">
        
        {/* Left */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-black dark:text-white">
            Piyush Sharma
          </span>
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/VenCasMet"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:piyushsharma1729@gmail.com"
            className="hover:text-black dark:hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
