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
    <section id="contact" className="scroll-mt-20 py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Nous trouver
          </p>
          <h2 className="font-display text-3xl md:text-5xl">Contact</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-10">
            <AnimatedSection delay={0.1}>
              <div className="flex items-start gap-4 group">
                <MapPin
                  size={20}
                  className="text-accent mt-1 shrink-0 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h3 className="font-medium mb-1 group-hover:text-accent transition-colors duration-300">Adresse</h3>
                  <p className="text-muted">
                    20 Place de la Folatière
                    <br />
                    38300 Bourgoin-Jallieu, France
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex items-start gap-4 group">
                <Phone
                  size={20}
                  className="text-accent mt-1 shrink-0 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h3 className="font-medium mb-1 group-hover:text-accent transition-colors duration-300">Téléphone</h3>
                  <a
                    href="tel:+33474285542"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    04 74 28 55 42
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex items-start gap-4 group">
                <Mail
                  size={20}
                  className="text-accent mt-1 shrink-0 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h3 className="font-medium mb-1 group-hover:text-accent transition-colors duration-300">Email</h3>
                  <a
                    href="mailto:contact@reveal-barbershop.fr"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    contact@reveal-barbershop.fr
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex items-start gap-4 group">
                <Instagram
                  size={20}
                  className="text-accent mt-1 shrink-0 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h3 className="font-medium mb-1 group-hover:text-accent transition-colors duration-300">Réseaux</h3>
                  <a
                    href="#"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    @reveal.barbershop
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="flex items-start gap-4 group">
                <Clock
                  size={20}
                  className="text-accent mt-1 shrink-0 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h3 className="font-medium mb-3 group-hover:text-accent transition-colors duration-300">Horaires</h3>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between text-sm gap-8"
                      >
                        <span className="text-muted">{h.day}</span>
                        <span
                          className={
                            h.time === "Fermé"
                              ? "text-muted/50"
                              : "text-foreground"
                          }
                        >
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Map */}
          <AnimatedSection delay={0.2}>
            <div className="aspect-square md:aspect-auto md:h-full min-h-[400px] bg-background relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.5!2d5.2736!3d45.5856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b2f1a0a0a0a0a%3A0x0!2s20+Place+de+la+Folati%C3%A8re%2C+38300+Bourgoin-Jallieu!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation REVEAL Barbershop"
                className="absolute inset-0"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* CTA Réservation */}
        <AnimatedSection delay={0.3} className="mt-20">
          <div
            id="reserver"
            className="scroll-mt-20 max-w-3xl mx-auto text-center py-16 px-6 border border-border relative overflow-hidden group"
          >
            {/* Subtle hover glow */}
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-700" />

            <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 relative">
              Prêt ?
            </p>
            <h3 className="font-display text-2xl md:text-4xl mb-6 relative">
              Réservez votre créneau
            </h3>
            <p className="text-muted mb-8 max-w-md mx-auto relative">
              Choisissez votre barbier, votre prestation et votre horaire.
              Confirmation instantanée.
            </p>
            <motion.a
              href="https://www.planity.com/the-korner-barber-38300-bourgoin-jallieu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center px-10 py-4 bg-accent text-background uppercase tracking-[0.2em] text-sm font-medium hover:bg-accent-hover transition-colors duration-300"
            >
              Prendre rendez-vous
            </motion.a>
            <p className="text-border text-xs mt-4 relative">
              Réservation via Planity — confirmation instantanée
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
