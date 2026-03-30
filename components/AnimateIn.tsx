"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Set false when the child uses backdrop-filter — a parent filter breaks it */
  blur?: boolean;
}

export default function AnimateIn({ children, className, delay = 0, blur = true }: AnimateInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const initial = blur
    ? { opacity: 0, y: 10, filter: "blur(6px)" }
    : { opacity: 0, y: 10 };

  const animate = inView
    ? blur ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 1, y: 0 }
    : blur ? { opacity: 0, y: 10, filter: "blur(6px)" } : { opacity: 0, y: 10 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.3, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
