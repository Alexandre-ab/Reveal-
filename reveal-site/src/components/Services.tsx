"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const services = [
  { name: "Coupe Classique", description: "Coupe aux ciseaux ou tondeuse, adaptée à votre style et morphologie.", price: "30€" },
  { name: "Coupe + Barbe", description: "La combinaison signature. Coupe complète et taille de barbe soignée.", price: "45€" },
  { name: "Taille de Barbe", description: "Modelage, rasage des contours et soin pour une barbe impeccable.", price: "20€" },
  { name: "Rasage Traditionnel", description: "Rasage au coupe-chou avec serviette chaude. L'expérience ultime.", price: "35€" },
  { name: "Coupe Enfant", description: "Pour les jeunes gentlemen de moins de 12 ans.", price: "20€" },
  { name: "Soin Complet", description: "Coupe, barbe, soin du visage et coiffage. Le rituel REVEAL au complet.", price: "65€" },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-32 md:py-44 relative">
      <p className="font-display text-[10rem] md:text-[15rem] font-normal text-foreground/[0.03] absolute top-16 right-8 md:right-16 leading-none pointer-events-none select-none">02</p>
      
      <div className="max-w-4xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-20">
          <p className="uppercase tracking-[0.6em] text-[9px] text-foreground/40 mb-6 font-mono font-light">Nos prestations</p>
          <h2 className="font-display text-5xl md:text-7xl font-normal text-foreground mb-8">SERVICES</h2>
          <div className="w-16 h-[2px] bg-foreground/30 mx-auto" />
        </AnimatedSection>

        <div className="border-t-2 border-foreground/20">
          {services.map((service, index) => (
            <AnimatedSection key={service.name} delay={index * 0.05}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group border-b border-foreground/10 py-8 md:py-10 cursor-default relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-foreground/0 group-hover:bg-foreground transition-all duration-300" />
                
                <div className="flex items-baseline justify-between mb-3 pl-4 md:pl-6">
                  <h3 className="font-mono text-sm md:text-base font-bold uppercase tracking-wider text-foreground/70 group-hover:text-foreground transition-colors duration-300">{service.name}</h3>
                  <div className="flex items-center gap-4 shrink-0 ml-6">
                    <div className="hidden sm:block w-16 md:w-24 h-[1px] bg-foreground/10 group-hover:bg-foreground/30 transition-colors duration-300" />
                    <span className="font-display text-xl md:text-2xl text-foreground/40 group-hover:text-foreground transition-colors duration-300">{service.price}</span>
                  </div>
                </div>
                <p className="text-foreground/40 text-xs leading-relaxed group-hover:text-foreground/50 transition-colors duration-300 pl-4 md:pl-6 max-w-md font-mono">{service.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-16">
          <p className="text-foreground/20 text-[9px] uppercase tracking-[0.4em] font-mono">Tous nos tarifs incluent le conseil personnalisé et le coiffage</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
