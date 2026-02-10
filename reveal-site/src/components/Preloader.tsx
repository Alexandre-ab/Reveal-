"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const startTime = useRef(0);

  useEffect(() => {
    startTime.current = Date.now();
    const MAX_DURATION = 3000;
    let rafId: number;
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      setProgress(100);
      setTimeout(() => setLoading(false), 300);
    };

    const onLoad = () => finish();
    if (document.readyState === "complete") {
      setTimeout(finish, 1000);
    } else {
      window.addEventListener("load", onLoad);
    }

    const fallback = setTimeout(finish, MAX_DURATION);

    const tick = () => {
      if (done) return;
      const elapsed = Date.now() - startTime.current;
      const raw = Math.min(elapsed / MAX_DURATION, 1);
      const eased = 1 - Math.pow(1 - raw, 3);
      setProgress(Math.min(eased * 90, 90));
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          aria-live="polite"
          role="status"
        >
          <div className="text-center relative">
            {/* REVEAL title - Bebas Neue ultra bold */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-7xl md:text-9xl tracking-[0.15em] uppercase font-normal text-foreground mb-4"
            >
              REVEAL
            </motion.h1>

            {/* Horizontal lines */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-32 h-[2px] bg-foreground mx-auto mb-6 origin-center"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-foreground/60 text-[10px] uppercase tracking-[0.5em] font-mono font-light"
            >
              Barbershop
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 w-40 h-[1px] bg-foreground/20 mx-auto overflow-hidden relative"
            >
              <motion.div
                style={{ width: `${progress}%` }}
                className="h-full bg-foreground transition-[width] duration-200 ease-out"
              />
            </motion.div>

            {/* Progress percentage */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-3 text-[9px] text-foreground/40 font-mono tracking-widest"
            >
              {Math.round(progress)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
