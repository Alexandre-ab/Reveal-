"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const team = [
  { name: "Karim B.", role: "Fondateur & Barbier", specialty: "Coupes créatives", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
  { name: "Lucas M.", role: "Barbier Senior", specialty: "Barbes & rasage traditionnel", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" },
  { name: "Sami R.", role: "Barbier", specialty: "Dégradés & styles modernes", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
  { name: "Thomas D.", role: "Barbier", specialty: "Coupes classiques", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
];

export default function Team() {
  return (
    <section id="equipe" className="scroll-mt-20 py-32 md:py-44 border-t-2 border-foreground/20 relative">
      <p className="font-display text-[10rem] md:text-[15rem] font-normal text-foreground/[0.03] absolute top-16 left-8 md:left-16 leading-none pointer-events-none select-none">03</p>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-20">
          <p className="uppercase tracking-[0.6em] text-[9px] text-foreground/40 mb-6 font-mono font-light">Les artisans</p>
          <h2 className="font-display text-5xl md:text-7xl font-normal text-foreground mb-8">L&apos;ÉQUIPE</h2>
          <div className="w-16 h-[2px] bg-foreground/30 mx-auto" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 0.1}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.5 }} className="group relative">
                <div className="aspect-[3/4] relative overflow-hidden mb-6 border-2 border-foreground/10 group-hover:border-foreground/40 transition-all duration-500">
                  <Image src={member.image} alt={member.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover opacity-85 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="text-center">
                  <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground/80 group-hover:text-foreground transition-colors duration-500">{member.name}</h3>
                  <div className="w-4 h-[1px] bg-foreground/30 mx-auto my-3" />
                  <p className="text-foreground/30 text-[10px] uppercase tracking-[0.2em] font-mono">{member.role}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
