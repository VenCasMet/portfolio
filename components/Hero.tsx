"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ResumeButton from "@/components/ResumeButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="mx-auto max-w-5xl px-6 grid gap-12 md:grid-cols-2 items-center">
        
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <TextGenerateEffect
            words="Hi, I'm Piyush Sharma — Software Engineer."
            className="text-4xl md:text-5xl font-bold tracking-tight"
          />

          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
            I build scalable web applications, real-time systems, and
            data-driven products using modern technologies.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <ResumeButton />

            <a
              href="https://github.com/VenCasMet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* RIGHT: PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative h-64 w-64 rounded-full overflow-hidden 
                          border border-white/20
                          shadow-[0_0_40px_rgba(255,255,255,0.12)]">
            <Image
              src="/profile.jpeg"
              alt="Piyush Sharma"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
