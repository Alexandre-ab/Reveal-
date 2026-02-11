"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const salons = [
  {
    id: 1,
    name: "REVEAL BOURGOIN",
    address: "12 Rue de la République",
    city: "38300 Bourgoin-Jallieu",
    phone: "+33 4 74 28 XX XX",
    hours: "Mar-Sam 9h-19h",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80",
    bookingUrl: "https://www.planity.com/the-korner-barber-38300-bourgoin-jallieu",
    gallery: [
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=600&q=80",
    ]
  },
  {
    id: 2,
    name: "REVEAL VERPILLIÈRE",
    address: "53 Rue des Alpes",
    city: "38290 La Verpillière",
    phone: "0983282834",
    hours: "Mar-Sam 9h-19h",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80",
    bookingUrl: "https://www.planity.com/ed-barber-38290-la-verpilliere",
    gallery: [
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80",
    ]
  },
];

export default function Gallery() {
  return (
    <section id="nos-salons" className="scroll-mt-20 py-32 md:py-44 border-t-2 border-foreground/20 relative">
      <p className="font-display text-[10rem] md:text-[15rem] font-normal text-foreground/[0.03] absolute top-16 right-8 md:right-16 leading-none pointer-events-none select-none">04</p>

      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-24">
          <p className="uppercase tracking-[0.6em] text-[9px] text-foreground/40 mb-6 font-mono font-light">Nos établissements</p>
          <h2 className="font-display text-5xl md:text-7xl font-normal text-foreground mb-8">NOS SALONS</h2>
          <div className="w-16 h-[2px] bg-foreground/30 mx-auto" />
        </AnimatedSection>

        <div className="space-y-32 md:space-y-40">
          {salons.map((salon, index) => (
            <AnimatedSection key={salon.id} delay={index * 0.2}>
              <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="max-w-md">
                    {/* Salon Number */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 mb-6"
                    >
                      <div className="w-12 h-[1px] bg-foreground/30" />
                      <span className="text-[9px] uppercase tracking-[0.4em] text-foreground/40 font-mono">
                        0{index + 1}
                      </span>
                    </motion.div>

                    {/* Salon Name */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="font-display text-3xl md:text-4xl font-normal text-foreground mb-8 tracking-wide"
                    >
                      {salon.name}
                    </motion.h3>

                    {/* Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="space-y-4 mb-10"
                    >
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-foreground/40 mt-1 flex-shrink-0" />
                        <div className="text-foreground/60 text-sm font-mono leading-relaxed">
                          <p>{salon.address}</p>
                          <p>{salon.city}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-foreground/40 flex-shrink-0" />
                        <p className="text-foreground/60 text-sm font-mono">{salon.phone}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock size={16} className="text-foreground/40 flex-shrink-0" />
                        <p className="text-foreground/60 text-sm font-mono">{salon.hours}</p>
                      </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.a
                      href={salon.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      data-cursor="Réserver"
                      className="inline-flex items-center px-8 py-3 border-2 border-foreground text-foreground text-[10px] uppercase tracking-[0.25em] font-mono font-bold hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      Réserver
                    </motion.a>
                  </div>
                </div>

                {/* Images */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="space-y-4">
                    {/* Main Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      data-cursor="Voir"
                      className="relative h-[400px] md:h-[500px] overflow-hidden border-2 border-foreground/10 group"
                    >
                      <Image
                        src={salon.image}
                        alt={salon.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </motion.div>

                    {/* Gallery Thumbnails */}
                    <div className="grid grid-cols-2 gap-4">
                      {salon.gallery.map((img, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 + imgIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="relative h-[180px] md:h-[220px] overflow-hidden border-2 border-foreground/10 group"
                        >
                          <Image
                            src={img}
                            alt={`${salon.name} - ${imgIndex + 1}`}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Decorative divider */}
        <AnimatedSection delay={0.6}>
          <div className="mt-32 flex items-center justify-center gap-4">
            <div className="w-16 h-[1px] bg-foreground/20" />
            <div className="w-2 h-2 border border-foreground/20 rotate-45" />
            <div className="w-16 h-[1px] bg-foreground/20" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
