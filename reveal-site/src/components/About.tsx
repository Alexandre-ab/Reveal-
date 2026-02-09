"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="salon" className="scroll-mt-20 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80"
                alt="Intérieur du salon REVEAL"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />
            </div>
          </AnimatedSection>

          {/* Text content */}
          <div>
            <AnimatedSection delay={0.1}>
              <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
                Notre philosophie
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="font-display text-3xl md:text-5xl mb-8">
                Le Salon
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  REVEAL est né d&apos;une vision simple : créer un espace où
                  le grooming masculin devient une expérience à part entière.
                  Pas un simple passage chez le coiffeur, mais un moment pour
                  soi.
                </p>
                <p>
                  Notre approche mêle techniques classiques de barbier et
                  tendances contemporaines. Chaque coupe est pensée pour
                  révéler le meilleur de votre style, dans un cadre épuré et
                  raffiné.
                </p>
                <p>
                  Ici, l&apos;excellence n&apos;est pas un mot — c&apos;est un
                  standard.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="mt-10 flex items-center gap-12">
                <div>
                  <p className="font-display text-4xl text-accent">5+</p>
                  <p className="text-muted text-sm uppercase tracking-wider mt-1">
                    Barbiers experts
                  </p>
                </div>
                <div className="w-[1px] h-12 bg-border" />
                <div>
                  <p className="font-display text-4xl text-accent">100%</p>
                  <p className="text-muted text-sm uppercase tracking-wider mt-1">
                    Sur mesure
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
