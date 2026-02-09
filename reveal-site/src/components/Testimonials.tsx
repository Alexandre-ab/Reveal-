"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Yassine K.",
    text: "Un cadre incroyable et un service impeccable. Ma coupe n'a jamais été aussi bien. Je ne vais plus nulle part ailleurs.",
    rating: 5,
    barber: "Karim B.",
  },
  {
    name: "Maxime L.",
    text: "Le rasage traditionnel chez REVEAL, c'est une expérience. L'attention aux détails est remarquable.",
    rating: 5,
    barber: "Lucas M.",
  },
  {
    name: "Alexandre D.",
    text: "Enfin un barber shop qui comprend ce que je veux sans que j'aie besoin de l'expliquer pendant 10 minutes.",
    rating: 5,
    barber: "Sami R.",
  },
  {
    name: "Romain P.",
    text: "Ambiance top, résultat impeccable, et l'équipe est vraiment sympa. Le meilleur salon que j'ai testé.",
    rating: 5,
    barber: "Thomas D.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent(
      (c) => (c - 1 + testimonials.length) % testimonials.length
    );
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Ils nous font confiance
          </p>
          <h2 className="font-display text-3xl md:text-5xl">Avis Clients</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {/* Rating summary */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-accent text-accent"
                />
              ))}
            </div>
            <span className="text-foreground font-medium ml-2">4.9/5</span>
            <span className="text-muted text-sm ml-1">sur Google</span>
          </div>

          {/* Carousel */}
          <div className="max-w-3xl mx-auto relative">
            <div className="min-h-[200px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <blockquote className="text-lg md:text-2xl font-light leading-relaxed mb-8 text-foreground/90">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonials[current].name}
                    </p>
                    <p className="text-muted text-sm mt-1">
                      Coiffé par{" "}
                      <span className="text-accent">
                        {testimonials[current].barber}
                      </span>
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <motion.button
                onClick={prev}
                whileTap={{ scale: 0.85 }}
                className="p-2 text-muted hover:text-accent transition-colors duration-200"
                aria-label="Avis précédent"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-accent w-6" : "bg-border"
                    }`}
                    aria-label={`Aller à l'avis ${i + 1}`}
                  />
                ))}
              </div>
              <motion.button
                onClick={next}
                whileTap={{ scale: 0.85 }}
                className="p-2 text-muted hover:text-accent transition-colors duration-200"
                aria-label="Avis suivant"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
