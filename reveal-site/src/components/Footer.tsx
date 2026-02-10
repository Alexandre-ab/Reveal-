"use client";

import { Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-foreground/20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#hero" className="font-display text-foreground text-2xl tracking-[0.2em] uppercase font-normal hover:opacity-70 transition-opacity duration-300">REVEAL</a>

          <div className="flex items-center gap-8 text-[10px] text-foreground/25 font-mono">
            {["Le Salon", "Services", "L'Équipe", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label === "Le Salon" ? "salon" : label === "L'Équipe" ? "equipe" : label.toLowerCase()}`}
                className="uppercase tracking-[0.25em] hover:text-foreground/60 transition-colors duration-300 font-bold"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a href="#" className="text-foreground/15 hover:text-foreground/50 transition-colors duration-300" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" className="text-foreground/15 hover:text-foreground/50 transition-colors duration-300" aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-16 h-[1px] bg-foreground/20 mx-auto my-10" />

        <div className="text-center">
          <p className="text-foreground/12 text-[9px] uppercase tracking-[0.4em] font-mono">Reveal yourself — L&apos;art de se révéler</p>
        </div>

        <div className="mt-8 pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] text-foreground/15 uppercase tracking-[0.2em] font-mono">
          <p>&copy; {currentYear} REVEAL Barbershop</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground/40 transition-colors duration-300">Mentions légales</a>
            <a href="#" className="hover:text-foreground/40 transition-colors duration-300">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
