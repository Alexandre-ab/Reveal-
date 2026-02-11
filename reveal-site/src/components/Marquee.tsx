"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  "COUPE",
  "BARBE",
  "STYLE",
  "REVEAL",
  "GROOMING",
  "DÉGRADÉ",
  "RASAGE",
  "ÉLÉGANCE",
];

const separator = " · ";
const repeatedText = Array(4)
  .fill(words.join(separator))
  .join(separator);

interface MarqueeProps {
  direction?: "left" | "right";
}

export default function Marquee({ direction = "left" }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll-linked horizontal movement — moves faster as you scroll past
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const scrollX = direction === "left" ? xLeft : xRight;

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-12 md:py-16 border-y border-foreground/10 select-none"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="whitespace-nowrap"
        style={{ x: scrollX }}
      >
        <span className="font-display text-[4rem] md:text-[6rem] lg:text-[8rem] text-foreground/[0.04] leading-none tracking-wider">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
}
