"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface MetricCounterProps {
  value: number;
  format?: (val: number) => string;
  duration?: number;
}

export function MetricCounter({ value, format = (v) => Math.round(v).toString(), duration = 2 }: MetricCounterProps) {
  const [isInView, setIsInView] = useState(false);
  
  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (current) => format(current));

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <motion.span
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, margin: "-50px" }}
    >
      {displayValue}
    </motion.span>
  );
}
