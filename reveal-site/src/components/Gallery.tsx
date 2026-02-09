"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const galleryItems = [
  {
    id: 1,
    span: "col-span-2 row-span-2",
    label: "Intérieur du salon",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    span: "col-span-1 row-span-1",
    label: "Coupe dégradé",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    span: "col-span-1 row-span-1",
    label: "Rasage traditionnel",
    image:
      "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    span: "col-span-1 row-span-1",
    label: "Style barbe",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    span: "col-span-1 row-span-1",
    label: "Détails",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    span: "col-span-2 row-span-1",
    label: "Ambiance",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Gallery() {
  return (
    <section id="galerie" className="scroll-mt-20 py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Notre univers
          </p>
          <h2 className="font-display text-3xl md:text-5xl">Galerie</h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <AnimatedSection
              key={item.id}
              delay={index * 0.08}
              className={item.span}
            >
              <div className="w-full h-full relative overflow-hidden cursor-pointer group">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-end">
                  <p className="text-white text-sm uppercase tracking-widest p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {item.label}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
