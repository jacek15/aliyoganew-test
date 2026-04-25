import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] py-[72px] pb-9 text-[var(--white)]">
      <div className="px-8 md:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="font-[var(--font-neue-kabel)] text-[22px] font-normal">
              Ali<span className="italic text-[var(--accent-lt)]">Yoga</span> Studio
            </div>
            <p className="mt-3 max-w-[260px] text-[13px] font-light leading-[1.85] text-[color-mix(in_srgb,var(--white)_45%,transparent)]">
              The first private yoga studio in Ørestad Syd. A sanctuary for body, mind and spirit.
            </p>
            <div className="mt-6 flex gap-2.5">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="flex h-[34px] w-[34px] items-center justify-center border border-[color-mix(in_srgb,white_18%,transparent)] text-[11px] font-normal tracking-[0.04em] text-[color-mix(in_srgb,var(--white)_55%,transparent)] transition-colors hover:border-[var(--accent-lt)] hover:text-[var(--accent-lt)]"
              >
                IG
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="flex h-[34px] w-[34px] items-center justify-center border border-[color-mix(in_srgb,white_18%,transparent)] text-[11px] font-normal tracking-[0.04em] text-[color-mix(in_srgb,var(--white)_55%,transparent)] transition-colors hover:border-[var(--accent-lt)] hover:text-[var(--accent-lt)]"
              >
                FB
              </a>
              <a
                href={site.socials.youtube}
                target="_blank"
                rel="noopener"
                aria-label="YouTube"
                className="flex h-[34px] w-[34px] items-center justify-center border border-[color-mix(in_srgb,white_18%,transparent)] text-[11px] font-normal tracking-[0.04em] text-[color-mix(in_srgb,var(--white)_55%,transparent)] transition-colors hover:border-[var(--accent-lt)] hover:text-[var(--accent-lt)]"
              >
                YT
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-[18px] text-[10px] font-normal uppercase tracking-[0.18em] text-[color-mix(in_srgb,white_35%,transparent)]">
              Studio
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-[13px] text-[color-mix(in_srgb,var(--white)_60%,transparent)] transition-colors hover:text-[var(--white)]"
                >
                  About Alina
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-[13px] text-[color-mix(in_srgb,var(--white)_60%,transparent)] transition-colors hover:text-[var(--white)]"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-[13px] text-[color-mix(in_srgb,var(--white)_60%,transparent)] transition-colors hover:text-[var(--white)]"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[13px] text-[color-mix(in_srgb,var(--white)_60%,transparent)] transition-colors hover:text-[var(--white)]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-[18px] text-[10px] font-normal uppercase tracking-[0.18em] text-[color-mix(in_srgb,white_35%,transparent)]">
              Booking
            </h2>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={site.booking.book}
                  className="text-[13px] text-[color-mix(in_srgb,var(--white)_60%,transparent)] transition-colors hover:text-[var(--white)]"
                >
                  Book Online
                </a>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-[13px] text-[color-mix(in_srgb,var(--white)_60%,transparent)] transition-colors hover:text-[var(--white)]"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href={site.booking.profile}
                  className="text-[13px] text-[color-mix(in_srgb,var(--white)_60%,transparent)] transition-colors hover:text-[var(--white)]"
                >
                  My Profile
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-[18px] text-[10px] font-normal uppercase tracking-[0.18em] text-[color-mix(in_srgb,white_35%,transparent)]">
              Legal
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/terms"
                  className="text-[13px] text-[color-mix(in_srgb,var(--white)_60%,transparent)] transition-colors hover:text-[var(--white)]"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[13px] text-[color-mix(in_srgb,var(--white)_60%,transparent)] transition-colors hover:text-[var(--white)]"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-[13px] text-[color-mix(in_srgb,var(--white)_60%,transparent)] transition-colors hover:text-[var(--white)]"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-[color-mix(in_srgb,white_8%,transparent)] pt-7 text-[12px] text-[color-mix(in_srgb,white_30%,transparent)] md:flex-row md:items-center md:justify-between">
          <span>© 2026 Ali Yoga · Alina Kachan · CVR-nr: 44 60 79 99</span>
          <span>
            <a
              href={`tel:${site.phone}`}
              className="text-[color-mix(in_srgb,white_50%,transparent)] transition-colors hover:text-[var(--white)]"
            >
              +45 91 93 70 09
            </a>{" "}
            <span className="px-2">·</span>
            <a
              href={`mailto:${site.email}`}
              className="text-[color-mix(in_srgb,white_50%,transparent)] transition-colors hover:text-[var(--white)]"
            >
              {site.email}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

