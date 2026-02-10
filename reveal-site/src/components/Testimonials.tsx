"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  { name: "Yassine K.", text: "Un cadre incroyable et un service impeccable. Ma coupe n'a jamais été aussi bien.", barber: "Karim B." },
  { name: "Maxime L.", text: "Le rasage traditionnel chez REVEAL, c'est une expérience. L'attention aux détails est remarquable.", barber: "Lucas M." },
  { name: "Alexandre D.", text: "Enfin un barber shop qui comprend ce que je veux sans que j'aie besoin de l'expliquer.", barber: "Sami R." },
  { name: "Romain P.", text: "Ambiance top, résultat impeccable, et l'équipe est vraiment sympa. Le meilleur salon que j'ai testé.", barber: "Thomas D." },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-32 md:py-44 border-t-2 border-foreground/20">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <p className="uppercase tracking-[0.6em] text-[9px] text-foreground/40 mb-6 font-mono font-light">Ils nous font confiance</p>
          <h2 className="font-display text-5xl md:text-7xl font-normal text-foreground mb-8">AVIS CLIENTS</h2>
          <div className="w-16 h-[2px] bg-foreground/30 mx-auto" />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="text-center mb-14">
            <p className="text-foreground/50 text-sm tracking-wider font-mono">4.9 / 5 sur Google</p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div className="min-h-[240px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-8 h-[1px] bg-foreground/20" />
                    <div className="w-1.5 h-1.5 bg-foreground/40 rotate-45" />
                    <div className="w-8 h-[1px] bg-foreground/20" />
                  </div>

                  <blockquote className="text-lg md:text-2xl font-mono font-light leading-relaxed mb-10 text-foreground/60 tracking-wide">&ldquo;{testimonials[current].text}&rdquo;</blockquote>

                  <p className="text-foreground/70 text-sm uppercase tracking-[0.2em] font-mono font-bold">{testimonials[current].name}</p>
                  <p className="text-foreground/40 text-[10px] mt-2 tracking-wider font-mono">Coiffé par {testimonials[current].barber}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-8 mt-12">
              <button onClick={prev} className="p-2 text-foreground/15 hover:text-foreground/60 transition-colors duration-300" aria-label="Précédent"><ChevronLeft size={18} /></button>
              <div className="flex gap-3">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className={`h-[2px] transition-all duration-500 ${i === current ? "bg-foreground w-8" : "bg-foreground/20 w-4 hover:bg-foreground/40"}`} aria-label={`Avis ${i + 1}`} />
                ))}
              </div>
              <button onClick={next} className="p-2 text-foreground/15 hover:text-foreground/60 transition-colors duration-300" aria-label="Suivant"><ChevronRight size={18} /></button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
