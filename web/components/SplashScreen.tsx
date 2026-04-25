"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after the animation completes
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[var(--bg)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Multiple Breathing Rings / Aura Effect */}
            <div className="relative mb-12 flex items-center justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1 + i * 0.3, 1.2 + i * 0.3, 1 + i * 0.3],
                    opacity: [0.3 - i * 0.1, 0.6 - i * 0.1, 0.3 - i * 0.1],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: i * 0.6,
                  }}
                  className="absolute h-12 w-12 rounded-full border border-[var(--accent)]"
                />
              ))}
              {/* Central focus point */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
              />
            </div>
            
            <h1 className="flex font-[var(--font-neue-kabel)] text-[clamp(34px,4vw,56px)] font-light leading-[1.1] text-[var(--fg)]">
              {"Ali".split("").map((char, i) => (
                <motion.span
                  key={`ali-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  {char}
                </motion.span>
              ))}
              {"Yoga".split("").map((char, i) => (
                <motion.span
                  key={`yoga-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="italic text-[var(--accent)]"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--fg-light)]"
            >
              Breathe in. Breathe out.
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
