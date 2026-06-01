"use client";

import { motion } from "framer-motion";

const contacts = [
  {
    title: "Email",
    value: "piyushsharma1729@gmail.com",
    link: "mailto:piyushsharma1729@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "Professional Network",
    link: "https://www.linkedin.com/in/piyush-sharma-921b77258/",
  },
  {
    title: "GitHub",
    value: "Projects & Open Source",
    link: "https://github.com/VenCasMet",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_30%)]" />

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-8 md:p-12 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
        >
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/90">Let&apos;s Connect</p>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white">Ready to collaborate?</h2>
            <p className="mt-4 mx-auto max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              I&apos;m currently open to software engineering, full-stack, backend, and AI/ML roles. Feel free to reach out for projects, internships, or collaborations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {contacts.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target={item.title === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 text-white transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/95"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">{item.title}</p>
                <p className="mt-3 font-semibold break-all text-slate-100">{item.value}</p>
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:piyushsharma1729@gmail.com"
              className="rounded-full bg-cyan-500 px-7 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-400"
            >
              Send Email
            </a>
            <a
              href="/Piyush_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-white transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
