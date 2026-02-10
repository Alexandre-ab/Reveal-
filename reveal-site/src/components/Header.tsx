"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Le Salon", href: "#salon" },
  { label: "Services", href: "#services" },
  { label: "L'Équipe", href: "#equipe" },
  { label: "Nos Salons", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setScrolled(window.scrollY > 50);
      }, 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }
          });

          let best = "";
          let bestRatio = 0;
          visibleSections.forEach((ratio, sectionId) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              best = sectionId;
            }
          });
          if (best) setActiveSection(best);
        },
        { threshold: [0, 0.25, 0.5, 0.75], rootMargin: "-80px 0px -30% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Calculate the position and width of the active indicator
  const getActiveIndicatorStyle = () => {
    if (!navRef.current) return {};
    const activeIndex = navLinks.findIndex(
      (link) => link.href.replace("#", "") === activeSection
    );
    if (activeIndex === -1) return { opacity: 0 };

    const links = navRef.current.querySelectorAll("a");
    const activeLink = links[activeIndex] as HTMLElement;
    if (!activeLink) return { opacity: 0 };

    return {
      opacity: 1,
      left: activeLink.offsetLeft,
      width: activeLink.offsetWidth,
    };
  };

  return (
    <>
      {/* Logo - Fixed at top left */}
      <motion.a
        href="#hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-6 left-6 z-50 font-display text-foreground text-xl md:text-2xl tracking-[0.2em] uppercase font-normal hover:opacity-70 transition-opacity duration-300"
      >
        REVEAL
      </motion.a>

      {/* Mobile Menu Button - Fixed at top right */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden text-foreground hover:opacity-70 p-2 transition-opacity duration-200"
        aria-label="Menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Floating Capsule Menu - Desktop Only */}
      <motion.header
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`hidden lg:block fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-700 ${
          scrolled ? "top-3 scale-90" : "top-6 scale-100"
        }`}
      >
        <div
          className={`relative rounded-full transition-all duration-700 ${
            scrolled
              ? "bg-background/70 backdrop-blur-xl border border-border/50 shadow-2xl shadow-black/20 px-6 py-2.5"
              : "bg-background/40 backdrop-blur-md border border-border/30 px-8 py-4"
          }`}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Navigation */}
          <nav ref={navRef} className="relative flex items-center gap-1">
            {/* Active indicator background */}
            <motion.div
              className={`absolute bottom-0 bg-foreground rounded-full transition-all duration-700 ${
                scrolled ? "h-[1.5px]" : "h-[2px]"
              }`}
              animate={getActiveIndicatorStyle()}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />

            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              const isHovered = hoveredLink === link.href;

              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative uppercase tracking-[0.3em] transition-all duration-700 font-mono font-medium ${
                    scrolled ? "px-3 py-1.5 text-[8px]" : "px-5 py-2 text-[9px]"
                  } ${
                    isActive
                      ? "text-foreground"
                      : "text-foreground/40 hover:text-foreground/70"
                  }`}
                >
                  {link.label}

                  {/* Hover background */}
                  {isHovered && (
                    <motion.div
                      layoutId="hover-bg"
                      className="absolute inset-0 bg-foreground/5 rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.a>
              );
            })}

            {/* Divider */}
            <div
              className={`w-[1px] bg-border/50 transition-all duration-700 ${
                scrolled ? "h-3 mx-2" : "h-4 mx-3"
              }`}
            />

            {/* CTA Button */}
            <motion.a
              href="https://www.planity.com/the-korner-barber-38300-bourgoin-jallieu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative uppercase tracking-[0.25em] font-mono font-bold text-background bg-foreground rounded-full hover:bg-foreground/90 overflow-hidden group transition-all duration-700 ${
                scrolled ? "px-5 py-1.5 text-[8px]" : "px-6 py-2 text-[9px]"
              }`}
            >
              <span className="relative z-10">Réserver</span>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`font-display text-4xl uppercase tracking-[0.15em] font-normal transition-opacity duration-200 ${
                      isActive
                        ? "text-foreground"
                        : "text-foreground/50 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-20 h-[2px] bg-foreground/30 my-4 origin-center"
              />

              <motion.a
                href="https://www.planity.com/the-korner-barber-38300-bourgoin-jallieu"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.4 }}
                className="px-10 py-3 border-2 border-foreground text-foreground text-xs uppercase tracking-[0.2em] font-mono font-bold hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Réserver
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
