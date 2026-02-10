"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

const letterVariants = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, delay: 0.5 + i * 0.08, ease },
  }),
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease },
  }),
};

const title = "REVEAL";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <Image
        src="/Reveal/IMG_2605.JPG"
        alt="Intérieur salon REVEAL"
        fill
        sizes="100vw"
        priority
        className="object-cover opacity-50"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6 w-full">
        <motion.p
          custom={1.5}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="uppercase tracking-[0.6em] text-[9px] text-foreground/50 mb-8 font-mono font-light"
        >
          Bourgoin-Jallieu · La Verpillière
        </motion.p>

        <div className="overflow-hidden mb-8">
          <h1
            className="font-display font-normal uppercase leading-none tracking-[0.08em] flex justify-center"
            style={{ fontSize: "clamp(4rem, 18vw, 16rem)" }}
          >
            {title.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.6, ease }}
          className="w-24 h-[2px] bg-foreground mx-auto mb-10 origin-center"
        />

        <motion.p
          custom={2.2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-foreground/40 text-sm md:text-base max-w-sm mx-auto mb-12 leading-relaxed font-mono tracking-wide"
        >
          L&apos;art de se révéler
        </motion.p>

        <motion.a
          href="https://www.planity.com/the-korner-barber-38300-bourgoin-jallieu"
          target="_blank"
          rel="noopener noreferrer"
          custom={2.6}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center px-12 py-4 border-2 border-foreground text-foreground uppercase tracking-[0.25em] text-[10px] font-mono font-bold hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Réserver
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-foreground/30" />
        </motion.div>
      </motion.div>

      {/* Corner brackets */}
      <div className="absolute top-6 left-6 w-10 h-10 border-l-2 border-t-2 border-foreground/20 pointer-events-none" />
      <div className="absolute top-6 right-6 w-10 h-10 border-r-2 border-t-2 border-foreground/20 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-l-2 border-b-2 border-foreground/20 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-r-2 border-b-2 border-foreground/20 pointer-events-none" />
    </section>
  );
}
