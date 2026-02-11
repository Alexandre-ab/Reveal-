"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [mouseX, mouseY, isVisible]
  );

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Detect touch device
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleElementHover = () => {
      // Interactive elements that trigger the cursor expansion
      const interactiveSelectors = [
        'a',
        'button',
        '[role="button"]',
        '[data-cursor]',
      ];

      const allInteractive = document.querySelectorAll(
        interactiveSelectors.join(", ")
      );

      const enterHandlers = new Map<Element, () => void>();
      const leaveHandlers = new Map<Element, () => void>();

      allInteractive.forEach((el) => {
        const text = el.getAttribute("data-cursor") || "";

        const enterHandler = () => {
          setIsHovering(true);
          setCursorText(text);
        };
        const leaveHandler = () => {
          setIsHovering(false);
          setCursorText("");
        };

        enterHandlers.set(el, enterHandler);
        leaveHandlers.set(el, leaveHandler);

        el.addEventListener("mouseenter", enterHandler);
        el.addEventListener("mouseleave", leaveHandler);
      });

      return () => {
        allInteractive.forEach((el) => {
          const enter = enterHandlers.get(el);
          const leave = leaveHandlers.get(el);
          if (enter) el.removeEventListener("mouseenter", enter);
          if (leave) el.removeEventListener("mouseleave", leave);
        });
      };
    };

    // Run after a short delay to catch dynamically rendered elements
    const timer = setTimeout(handleElementHover, 500);

    // Re-observe on DOM changes
    const observer = new MutationObserver(() => {
      clearTimeout(timer);
      setTimeout(handleElementHover, 100);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const cleanup = handleElementHover();

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      cleanup?.();
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Hide default cursor globally */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
        style={{ x, y }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.2 } }}
      >
        <motion.div
          className="relative flex items-center justify-center rounded-full border border-white"
          animate={{
            width: isHovering ? 80 : 12,
            height: isHovering ? 80 : 12,
            x: isHovering ? -40 : -6,
            y: isHovering ? -40 : -6,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
            mass: 0.5,
          }}
        >
          {/* Dot center */}
          <motion.div
            className="absolute rounded-full bg-white"
            animate={{
              width: isHovering ? 0 : 4,
              height: isHovering ? 0 : 4,
              opacity: isHovering ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Cursor text */}
          <motion.span
            className="text-[8px] uppercase tracking-[0.2em] font-mono font-bold text-white whitespace-nowrap"
            animate={{
              opacity: isHovering && cursorText ? 1 : 0,
              scale: isHovering && cursorText ? 1 : 0.5,
            }}
            transition={{ duration: 0.2, delay: isHovering ? 0.1 : 0 }}
          >
            {cursorText}
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  );
}
