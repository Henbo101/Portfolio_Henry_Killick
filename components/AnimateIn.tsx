"use client";

import { motion } from "framer-motion";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Set false when the child uses backdrop-filter — a parent filter breaks it */
  blur?: boolean;
}

export default function AnimateIn({ children, className, delay = 0, blur = true }: AnimateInProps) {
  return (
    <motion.div
      className={className}
      initial={blur
        ? { opacity: 0, y: 12, filter: "blur(8px)" }
        : { opacity: 0, y: 12 }
      }
      whileInView={blur
        ? { opacity: 1, y: 0, filter: "blur(0px)" }
        : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
