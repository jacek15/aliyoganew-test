"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import { Button } from "@/components/Button";

type NavItem = { href: string; label: string };

const navItems: NavItem[] = [
  { href: "/booking", label: "Booking" },
  { href: "/classes", label: "Classes" },
  { href: "/pricing", label: "Pricing" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const drawerId = "mobile-nav-drawer";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) menuButtonRef.current?.focus();
  }, [isOpen]);

  const activeHref = useMemo(() => {
    if (!pathname) return "/";
    const match = navItems.find((i) => pathname === i.href);
    return match?.href ?? (pathname === "/" ? "/" : null);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] h-[var(--nav-h)]">
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={[
          "flex h-[var(--nav-h)] items-center justify-between px-8 md:px-20",
          scrolled ? "nav-blur" : "bg-transparent"
        ].join(" ")}
        aria-label="Primary"
      >
        <div className="flex items-center gap-3">
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-[color-mix(in_srgb,var(--fg)_14%,transparent)] bg-[color-mix(in_srgb,var(--bg)_86%,transparent)] text-[var(--fg)] transition-colors hover:border-[color-mix(in_srgb,var(--fg)_22%,transparent)] lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls={drawerId}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="relative block h-[14px] w-[18px]">
              <span
                className={[
                  "absolute left-0 top-0 h-[2px] w-full bg-current transition-transform duration-200",
                  isOpen ? "translate-y-[6px] rotate-45" : ""
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[6px] h-[2px] w-full bg-current transition-opacity duration-200",
                  isOpen ? "opacity-0" : "opacity-100"
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[12px] h-[2px] w-full bg-current transition-transform duration-200",
                  isOpen ? "-translate-y-[6px] -rotate-45" : ""
                ].join(" ")}
              />
            </span>
          </button>

          <Link
            href="/"
            className="font-[var(--font-neue-kabel)] text-[21px] font-medium tracking-[0.02em] text-[var(--fg)]"
            aria-label={`${site.name} home`}
            onClick={() => setIsOpen(false)}
          >
            Ali<span className="font-light italic text-[var(--accent)]">Yoga</span>
          </Link>
        </div>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "text-[12px] uppercase tracking-[0.09em] transition-colors",
                    isActive ? "text-[var(--fg)]" : "text-[var(--fg-mid)] hover:text-[var(--fg)]"
                  ].join(" ")}
                >
                  <span className={isActive ? "border-b border-[var(--accent)] pb-[1px]" : ""}>
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.booking.profile}
            className="text-[12px] tracking-[0.07em] text-[var(--fg-light)] transition-colors hover:text-[var(--fg)]"
          >
            Login
          </a>
          <Button href={site.booking.book} size="sm">
            Book a Class
          </Button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[99] bg-[color-mix(in_srgb,var(--bg-dark)_35%,transparent)]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen ? (
          <motion.aside
            key="drawer"
            id={drawerId}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed right-0 top-0 z-[101] h-dvh w-[min(92vw,380px)] border-l border-l-[color-mix(in_srgb,var(--fg)_10%,transparent)] bg-[var(--bg)] pt-[var(--nav-h)] shadow-[0_20px_60px_color-mix(in_srgb,var(--bg-dark)_35%,transparent)] lg:hidden"
          >
            <div className="px-6 py-6">
              <div className="mb-6 text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
                Menu
              </div>

              <nav aria-label="Mobile">
                <ul className="space-y-3">
                  {navItems.map((item, idx) => {
                    const isActive = activeHref === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          ref={idx === 0 ? firstLinkRef : undefined}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={[
                            "block py-2 font-[var(--font-neue-kabel)] text-[22px] font-normal leading-[1.2] transition-colors",
                            isActive
                              ? "text-[var(--accent)]"
                              : "text-[var(--fg)] hover:text-[var(--accent)]"
                          ].join(" ")}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="my-7 h-px w-full bg-[color-mix(in_srgb,var(--fg)_10%,transparent)]" />

              <div className="space-y-3">
                <a
                  href={site.booking.profile}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[12px] uppercase tracking-[0.12em] text-[var(--fg-mid)] transition-colors hover:text-[var(--fg)]"
                >
                  Login
                </a>
                <Button
                  href={site.booking.book}
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  Book a Class
                </Button>
              </div>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
