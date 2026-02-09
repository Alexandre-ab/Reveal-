"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const startTime = useRef(Date.now());

  useEffect(() => {
    const MAX_DURATION = 3000;
    let rafId: number;
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      setProgress(100);
      setTimeout(() => setLoading(false), 200);
    };

    // Listen for real page load
    const onLoad = () => finish();
    if (document.readyState === "complete") {
      // Already loaded — small delay to let animations play
      setTimeout(finish, 800);
    } else {
      window.addEventListener("load", onLoad);
    }

    // Fallback max timer
    const fallback = setTimeout(finish, MAX_DURATION);

    // Animate progress bar based on elapsed time
    const tick = () => {
      if (done) return;
      const elapsed = Date.now() - startTime.current;
      // Ease out: fast start, slow finish — caps at 90% until real load
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
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          aria-live="polite"
          role="status"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <div className="relative h-8 sm:h-10 md:h-14 w-40 sm:w-48 md:w-64">
                <Image
                  src="/logo.jpg"
                  alt="REVEAL"
                  fill
                  className="object-contain invert"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[1px] bg-accent mx-auto mb-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-muted text-xs uppercase tracking-[0.4em]"
            >
              Reveal yourself
            </motion.p>

            {/* Loading bar — synced with real progress */}
            <motion.div className="mt-8 w-32 h-[1px] bg-border mx-auto overflow-hidden">
              <motion.div
                style={{ width: `${progress}%` }}
                className="h-full bg-accent transition-[width] duration-200 ease-out"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
