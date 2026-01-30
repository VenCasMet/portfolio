"use client";

import { motion } from "framer-motion";

export function TextGenerateEffect({
  words,
  className = "",
}: {
  words: string;
  className?: string;
}) {
  const letters = words.split("");

  return (
    <div className={className}>
      {letters.map((char, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: idx * 0.03 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
