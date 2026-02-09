"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    name: "Coupe Classique",
    description:
      "Coupe aux ciseaux ou tondeuse, adaptée à votre style et morphologie.",
    price: "30€",
  },
  {
    name: "Coupe + Barbe",
    description:
      "La combinaison signature. Coupe complète et taille de barbe soignée.",
    price: "45€",
  },
  {
    name: "Taille de Barbe",
    description:
      "Modelage, rasage des contours et soin pour une barbe impeccable.",
    price: "20€",
  },
  {
    name: "Rasage Traditionnel",
    description:
      "Rasage au coupe-chou avec serviette chaude. L'expérience ultime.",
    price: "35€",
  },
  {
    name: "Coupe Enfant",
    description: "Pour les jeunes gentlemen de moins de 12 ans.",
    price: "20€",
  },
  {
    name: "Soin Complet",
    description:
      "Coupe, barbe, soin du visage et coiffage. Le rituel REVEAL au complet.",
    price: "65€",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Nos prestations
          </p>
          <h2 className="font-display text-3xl md:text-5xl">Services</h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {services.map((service, index) => (
            <AnimatedSection key={service.name} delay={index * 0.08}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                className="group flex items-start justify-between py-8 border-b border-border hover:border-accent transition-colors duration-500 cursor-default"
              >
                <div className="flex-1 pr-8">
                  <h3 className="text-lg md:text-xl font-medium mb-2 group-hover:text-accent transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-muted text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="text-accent font-display text-2xl md:text-3xl shrink-0">
                  {service.price}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="text-center mt-12">
          <p className="text-muted text-sm">
            Tous nos tarifs incluent le conseil personnalisé et le coiffage.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
