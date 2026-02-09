import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#hero" className="relative h-6 w-24">
            <Image
              src="/logo.jpg"
              alt="REVEAL"
              fill
              className="object-contain invert"
            />
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted">
            <a
              href="#salon"
              className="relative hover:text-foreground transition-colors group"
            >
              Le Salon
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#services"
              className="relative hover:text-foreground transition-colors group"
            >
              Services
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#equipe"
              className="relative hover:text-foreground transition-colors group"
            >
              L&apos;Équipe
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#contact"
              className="relative hover:text-foreground transition-colors group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-muted hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-muted hover:text-accent transition-colors"
              aria-label="TikTok"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Slogan */}
        <div className="mt-6 text-center">
          <p className="text-muted/50 text-xs italic tracking-wider">
            Reveal yourself — L&apos;art de se révéler
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            &copy; {currentYear} REVEAL Barbershop. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a href="#" className="relative hover:text-foreground transition-colors group">
              Mentions légales
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="relative hover:text-foreground transition-colors group">
              Politique de confidentialité
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
