"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Instagram } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const hours = [
  { day: "Lundi", time: "9h00 — 19h00" },
  { day: "Mardi", time: "9h00 — 19h00" },
  { day: "Mercredi", time: "9h00 — 19h00" },
  { day: "Jeudi", time: "9h00 — 20h00" },
  { day: "Vendredi", time: "9h00 — 19h00" },
  { day: "Samedi", time: "8h00 — 18h00" },
  { day: "Dimanche", time: "Fermé" },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-32 md:py-44 border-t-2 border-foreground/20 relative">
      <p className="font-display text-[10rem] md:text-[15rem] font-normal text-foreground/[0.03] absolute top-16 left-8 md:left-16 leading-none pointer-events-none select-none">05</p>

      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-20">
          <p className="uppercase tracking-[0.6em] text-[9px] text-foreground/40 mb-6 font-mono font-light">Nous trouver</p>
          <h2 className="font-display text-5xl md:text-7xl font-normal text-foreground mb-8">CONTACT</h2>
          <div className="w-16 h-[2px] bg-foreground/30 mx-auto" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div className="space-y-10">
            <AnimatedSection delay={0.1}>
              <div className="flex items-start gap-5 group">
                <MapPin size={15} className="text-foreground/40 mt-1 shrink-0 group-hover:text-foreground transition-colors duration-500" />
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] mb-2 text-foreground/50 group-hover:text-foreground transition-colors duration-500 font-mono font-bold">Adresse</h3>
                  <p className="text-foreground/25 text-sm leading-relaxed font-mono">20 Place de la Folatière<br />38300 Bourgoin-Jallieu, France</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex items-start gap-5 group">
                <Phone size={15} className="text-foreground/40 mt-1 shrink-0 group-hover:text-foreground transition-colors duration-500" />
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] mb-2 text-foreground/50 group-hover:text-foreground transition-colors duration-500 font-mono font-bold">Téléphone</h3>
                  <a href="tel:+33474285542" className="text-foreground/25 text-sm hover:text-foreground/60 transition-colors duration-300 font-mono">04 74 28 55 42</a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex items-start gap-5 group">
                <Mail size={15} className="text-foreground/40 mt-1 shrink-0 group-hover:text-foreground transition-colors duration-500" />
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] mb-2 text-foreground/50 group-hover:text-foreground transition-colors duration-500 font-mono font-bold">Email</h3>
                  <a href="mailto:contact@reveal-barbershop.fr" className="text-foreground/25 text-sm hover:text-foreground/60 transition-colors duration-300 font-mono">contact@reveal-barbershop.fr</a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <div className="flex items-start gap-5 group">
                <Instagram size={15} className="text-foreground/40 mt-1 shrink-0 group-hover:text-foreground transition-colors duration-500" />
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] mb-2 text-foreground/50 group-hover:text-foreground transition-colors duration-500 font-mono font-bold">Réseaux</h3>
                  <a href="#" className="text-foreground/25 text-sm hover:text-foreground/60 transition-colors duration-300 font-mono">@reveal.barbershop</a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex items-start gap-5 group">
                <Clock size={15} className="text-foreground/40 mt-1 shrink-0 group-hover:text-foreground transition-colors duration-500" />
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] mb-3 text-foreground/50 group-hover:text-foreground transition-colors duration-500 font-mono font-bold">Horaires</h3>
                  <div className="space-y-2.5">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between text-xs gap-8 font-mono">
                        <span className="text-foreground/25">{h.day}</span>
                        <span className={h.time === "Fermé" ? "text-foreground/12" : "text-foreground/40"}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="aspect-square md:aspect-auto md:h-full min-h-[400px] relative overflow-hidden border-2 border-foreground/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.5!2d5.2736!3d45.5856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b2f1a0a0a0a0a%3A0x0!2s20+Place+de+la+Folati%C3%A8re%2C+38300+Bourgoin-Jallieu!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(95%) hue-rotate(180deg) grayscale(100%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation REVEAL"
                className="absolute inset-0"
              />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="mt-24">
          <div id="reserver" className="scroll-mt-20 max-w-3xl mx-auto text-center py-20 px-6 border-2 border-foreground/20 relative group">
            <p className="uppercase tracking-[0.6em] text-[9px] text-foreground/40 mb-6 font-mono font-light">Prêt ?</p>
            <h3 className="font-display text-4xl md:text-6xl font-normal mb-6 text-foreground">RÉSERVEZ</h3>
            <div className="w-12 h-[2px] bg-foreground/30 mx-auto mb-8" />
            <p className="text-foreground/25 text-sm mb-10 max-w-md mx-auto leading-relaxed font-mono">Choisissez votre barbier, votre prestation et votre horaire. Confirmation instantanée.</p>
            <motion.a
              href="https://www.planity.com/the-korner-barber-38300-bourgoin-jallieu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-12 py-4 border-2 border-foreground text-foreground uppercase tracking-[0.25em] text-[10px] font-mono font-bold hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Prendre rendez-vous
            </motion.a>
            <p className="text-foreground/12 text-[9px] mt-6 uppercase tracking-[0.3em] font-mono">Réservation via Planity</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
