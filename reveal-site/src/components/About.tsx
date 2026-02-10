"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.0]);

  return (
    <section id="salon" className="scroll-mt-20">
      <div id="about-content" className="relative py-40 md:py-56 px-6 text-center">
        <AnimatedSection>
          <p className="font-display text-[10rem] md:text-[15rem] font-normal text-foreground/[0.03] absolute top-20 left-1/2 -translate-x-1/2 leading-none pointer-events-none select-none">01</p>
        </AnimatedSection>

        <AnimatedSection>
          <p className="uppercase tracking-[0.6em] text-[9px] text-foreground/40 mb-10 font-mono font-light">Notre philosophie</p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <h2 className="font-display font-normal mb-12 text-foreground" style={{ fontSize: "clamp(3rem, 8vw, 10rem)", lineHeight: 0.9 }}>LE SALON</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="w-16 h-[2px] bg-foreground/30 mx-auto mb-16" />
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <div className="max-w-lg mx-auto space-y-7 text-foreground/30 text-[12px] leading-[2.2] font-mono">
            <p>REVEAL est né d&apos;une vision simple : créer un espace où le grooming masculin devient une expérience à part entière.</p>
            <p>Notre approche mêle techniques classiques de barbier et tendances contemporaines. Chaque coupe est pensée pour révéler le meilleur de votre style.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="max-w-lg mx-auto mt-16">
            <div className="w-12 h-[1px] bg-foreground/20 mx-auto mb-6" />
            <p className="text-foreground/50 text-sm leading-[2] font-mono tracking-wide">Ici, l&apos;excellence n&apos;est pas un mot — c&apos;est un standard.</p>
          </div>
        </AnimatedSection>
      </div>

      <div ref={parallaxRef} className="relative w-screen overflow-hidden h-[70vh] md:h-[85vh]" style={{ marginLeft: "calc(-50vw + 50%)" }}>
        <motion.div className="absolute inset-[-10%]" style={{ y: imageY, scale: imageScale }}>
          <Image
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1920&q=80"
            alt="Intérieur REVEAL"
            fill
            sizes="100vw"
            className="object-cover opacity-60"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </section>
  );
}
