"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Review = {
  text: string;
  author: string;
  href: string;
};

const reviews: Review[] = [
  {
    text:
      "Ali Yoga is a wonderful and beautiful studio. Alina creates a very calm and trustful atmosphere with room for all levels. I always leave feeling refreshed and centred.",
    author: "Line · Google Review",
    href: "https://g.co/kgs/tqmBUPP"
  },
  {
    text:
      "Alina introduced me to the world of yoga, and I couldn't be more grateful! Her teaching style is incredibly welcoming — making every class feel like a safe space.",
    author: "Jagoda · Google Review",
    href: "https://g.co/kgs/KSqGMka"
  },
  {
    text:
      "Highly recommend Ali Yoga — it's definitely the best studio in Copenhagen. Alina is always helpful and caring, and the atmosphere is truly unique.",
    author: "Mikolaj · Google Review",
    href: "https://maps.app.goo.gl/7ePiiyJWce22aXzN8"
  }
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setCurrent((c) => (c + 1) % reviews.length), 5000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <section className="bg-[var(--bg-dark)] px-8 py-[100px] text-center md:px-20">
      <div className="mx-auto max-w-[980px]">
        <div className="mb-6 text-[14px] tracking-[3px] text-[var(--accent)]">★★★★★</div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <p className="mx-auto mb-8 max-w-[860px] font-[var(--font-neue-kabel)] text-[clamp(26px,3.5vw,44px)] font-light italic leading-[1.5] text-[var(--white)]">
              {reviews[current].text}
            </p>
            <div className="text-[12px] uppercase tracking-[0.12em] text-[color-mix(in_srgb,var(--white)_40%,transparent)]">
              <a
                href={reviews[current].href}
                target="_blank"
                rel="noopener"
                className="transition-colors hover:text-[var(--accent)]"
              >
                {reviews[current].author}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex justify-center gap-2.5">
          {reviews.map((_, i) => {
            const active = i === current;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Review ${i + 1}`}
                className={[
                  "h-2 w-2 rounded-full border transition-colors",
                  active
                    ? "border-[var(--accent)] bg-[var(--accent)]"
                    : "border-[color-mix(in_srgb,var(--white)_35%,transparent)] bg-transparent"
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

