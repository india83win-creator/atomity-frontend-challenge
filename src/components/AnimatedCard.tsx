"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "rounded-[var(--radius-lg)] border border-border-primary bg-bg-primary p-6 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
