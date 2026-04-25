"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export type FaqItem = { q: string; a: string[] };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-[2px]">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div key={it.q} className="overflow-hidden bg-[var(--bg-alt)]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-8 py-7 text-left font-[var(--font-neue-kabel)] text-[20px] font-normal leading-[1.3] text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : idx)}
            >
              <span>{it.q}</span>
              <span
                aria-hidden="true"
                className={[
                  "text-[24px] font-light text-[var(--accent)] transition-transform duration-300",
                  isOpen ? "rotate-45" : "rotate-0"
                ].join(" ")}
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <div className="px-8 pb-8 text-[15px] font-light leading-[1.9] text-[var(--fg-mid)]">
                    {it.a.map((p, i) => (
                      <p key={i} className={i === 0 ? "" : "mt-4"}>
                        {p}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

