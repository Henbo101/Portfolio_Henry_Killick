"use client";

import { motion } from "framer-motion";

export default function HeroIcon() {
  const starPath =
    "M14 2L16.09 9.26L23 7L18.55 13L23 19L16.09 16.74L14 24L11.91 16.74L5 19L9.45 13L5 7L11.91 9.26L14 2Z";

  return (
    <motion.div
      className="mb-7 w-fit"
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className="relative w-10 h-10">
        {/* Outer star — slow clockwise, gradient */}
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 28 28"
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
          <defs>
            <linearGradient id="grad-outer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0077b6" />
              <stop offset="50%" stopColor="#c1440e" />
              <stop offset="100%" stopColor="#1a6b4a" />
            </linearGradient>
          </defs>
          <path d={starPath} fill="url(#grad-outer)" />
        </motion.svg>

        {/* Inner star — faster counter-clockwise, lighter */}
        <motion.svg
          width="22"
          height="22"
          viewBox="0 0 28 28"
          className="absolute inset-[9px]"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <defs>
            <linearGradient id="grad-inner" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a6b4a" />
              <stop offset="50%" stopColor="#0077b6" />
              <stop offset="100%" stopColor="#c1440e" />
            </linearGradient>
          </defs>
          <path d={starPath} fill="url(#grad-inner)" opacity="0.75" />
        </motion.svg>
      </div>
    </motion.div>
  );
}
