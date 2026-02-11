"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const salons = [
  {
    name: "REVEAL BOURGOIN",
    address: "Bourgoin-Jallieu",
    bookingUrl: "https://www.planity.com/the-korner-barber-38300-bourgoin-jallieu",
  },
  {
    name: "REVEAL VERPILLIÈRE",
    address: "La Verpillière",
    bookingUrl: "https://www.planity.com/ed-barber-38290-la-verpilliere",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-32 md:py-44 border-t-2 border-foreground/20 relative">
      <p className="font-display text-[10rem] md:text-[15rem] font-normal text-foreground/[0.03] absolute top-16 left-8 md:left-16 leading-none pointer-events-none select-none">05</p>

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-20">
          <p className="uppercase tracking-[0.6em] text-[9px] text-foreground/40 mb-6 font-mono font-light">Nous contacter</p>
          <h2 className="font-display text-5xl md:text-7xl font-normal text-foreground mb-8">CONTACT</h2>
          <div className="w-16 h-[2px] bg-foreground/30 mx-auto" />
        </AnimatedSection>

        {/* Contact Info - Email & Socials */}
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-12 mb-20">
            <AnimatedSection delay={0.1}>
              <div className="flex items-start gap-5 group">
                <Mail size={15} className="text-foreground/40 mt-1 shrink-0 group-hover:text-foreground transition-colors duration-500" />
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] mb-2 text-foreground/50 group-hover:text-foreground transition-colors duration-500 font-mono font-bold">Email</h3>
                  <a href="mailto:contact@reveal-barbershop.fr" className="text-foreground/40 text-sm hover:text-foreground/70 transition-colors duration-300 font-mono">contact@reveal-barbershop.fr</a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex items-start gap-5 group">
                <Instagram size={15} className="text-foreground/40 mt-1 shrink-0 group-hover:text-foreground transition-colors duration-500" />
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] mb-2 text-foreground/50 group-hover:text-foreground transition-colors duration-500 font-mono font-bold">Instagram</h3>
                  <a href="#" className="text-foreground/40 text-sm hover:text-foreground/70 transition-colors duration-300 font-mono">@reveal.barbershop</a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Hint toward Nos Salons */}
          <AnimatedSection delay={0.25}>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin size={14} className="text-foreground/30" />
                <p className="text-foreground/30 text-[10px] uppercase tracking-[0.3em] font-mono">
                  Adresses, horaires et téléphones disponibles dans la section{" "}
                  <a href="#nos-salons" className="text-foreground/60 hover:text-foreground underline underline-offset-4 transition-colors duration-300">Nos Salons</a>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* CTA - Réserver avec choix des 2 salons */}
        <AnimatedSection delay={0.3} className="mt-4">
          <div id="reserver" className="scroll-mt-20 max-w-3xl mx-auto text-center py-20 px-6 border-2 border-foreground/20">
            <p className="uppercase tracking-[0.6em] text-[9px] text-foreground/40 mb-6 font-mono font-light">Prêt ?</p>
            <h3 className="font-display text-4xl md:text-6xl font-normal mb-6 text-foreground">RÉSERVEZ</h3>
            <div className="w-12 h-[2px] bg-foreground/30 mx-auto mb-8" />
            <p className="text-foreground/40 text-sm mb-12 max-w-md mx-auto leading-relaxed font-mono">Choisissez votre salon, votre barbier et votre créneau. Confirmation instantanée.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {salons.map((salon) => (
                <motion.a
                  key={salon.name}
                  href={salon.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex flex-col items-center px-10 py-5 border-2 border-foreground text-foreground uppercase tracking-[0.2em] font-mono font-bold hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  <span className="text-[10px]">{salon.name}</span>
                  <span className="text-[8px] font-normal tracking-[0.15em] mt-1 opacity-50">{salon.address}</span>
                </motion.a>
              ))}
            </div>

            <p className="text-foreground/25 text-[9px] mt-8 uppercase tracking-[0.3em] font-mono">Réservation via Planity</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
