"use client";

export default function ResumeButton() {
  return (
    <a
      href="/Piyush_Resume.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center justify-center
        rounded-full px-7 py-3
        text-sm font-medium
        bg-black text-white
        dark:bg-white dark:text-black
        border border-black/20 dark:border-white/20
        shadow-[0_0_20px_rgba(0,0,0,0.15)]
        dark:shadow-[0_0_20px_rgba(255,255,255,0.15)]
        hover:shadow-[0_0_30px_rgba(0,0,0,0.25)]
        dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]
        transition-all duration-300
      "
    >
      Download Resume
    </a>
  );
}
