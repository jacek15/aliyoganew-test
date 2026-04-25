import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { LegalSection } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for Ali Yoga Studio, Copenhagen. Information about the cookies we use and how to manage them.",
  alternates: { canonical: "/cookies" }
};

function CookieItem({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="border-b border-[color-mix(in_srgb,var(--fg)_8%,transparent)] pb-6">
      <div className="mb-1 font-[var(--font-neue-kabel)] text-[18px] font-normal text-[var(--fg)]">
        {name}
      </div>
      <p className="text-[14px] leading-[1.8] text-[var(--fg-mid)]">{desc}</p>
    </div>
  );
}

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Cookie <em className="italic text-[var(--accent)]">Policy.</em>
          </>
        }
        sub="How we use cookies on our website and how you can manage your preferences."
      />

      <section className="bg-[var(--bg)] py-[100px]">
        <div className="px-8 md:px-20">
          <LegalSection title="Overview">
            <p>
              Cookies are small text files stored on your device when you visit our site. They help
              us understand how visitors interact with our website, allowing us to offer a smoother
              experience.
            </p>
            <p>
              You can manage or disable cookies through your browser settings, though this may
              affect certain functionality.
            </p>
          </LegalSection>

          <div className="mt-12">
            <div className="mb-5 text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
              Essential Cookies
            </div>
            <p className="mb-7 text-[15px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              Essential cookies enable basic functions and are necessary for the proper operation
              of the website.
            </p>
            <div className="space-y-6">
              <CookieItem
                name="Google reCAPTCHA"
                desc="Helps protect the website from spam and abuse by verifying interactions are made by a human."
              />
              <CookieItem
                name="Google Tag Manager"
                desc="Simplifies management of marketing and tracking tags on our website."
              />
              <CookieItem
                name="Login"
                desc="Manages login functionality and keeps you signed in across pages and sessions."
              />
              <CookieItem
                name="Stripe"
                desc="Required to enable secure online payment transactions and protect against fraud (where applicable)."
              />
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-5 text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
              Statistics Cookies
            </div>
            <p className="mb-7 text-[15px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              Statistics cookies collect information anonymously to help us understand how visitors
              use our website.
            </p>
            <CookieItem
              name="Google Analytics"
              desc="Tracks and analyses website traffic in aggregated form to help us improve the site experience."
            />
          </div>

          <div className="mt-12">
            <div className="mb-5 text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
              Marketing Cookies
            </div>
            <p className="mb-7 text-[15px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              Marketing cookies may track visitors across websites to measure the effectiveness of
              campaigns.
            </p>
            <CookieItem
              name="Facebook Pixel"
              desc="Tracks conversions from ads and helps understand advertising effectiveness."
            />
          </div>

          <LegalSection title="Managing Your Cookie Preferences">
            <p>
              You can control cookies through your browser settings. Disabling certain cookies may
              affect the functionality of this website.
            </p>
            <p>
              For general guidance, see{" "}
              <a
                className="text-[var(--accent)] hover:underline"
                href="https://www.allaboutcookies.org"
                target="_blank"
                rel="noopener"
              >
                allaboutcookies.org
              </a>
              .
            </p>
          </LegalSection>

          <div className="mt-12 flex flex-wrap gap-6 border-t border-[color-mix(in_srgb,var(--fg)_10%,transparent)] pt-8">
            <Link
              href="/privacy"
              className="inline-block border-b border-[var(--fg-light)] pb-[1px] text-[12px] tracking-[0.07em] text-[var(--fg-mid)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Privacy Policy →
            </Link>
            <Link
              href="/terms"
              className="inline-block border-b border-[var(--fg-light)] pb-[1px] text-[12px] tracking-[0.07em] text-[var(--fg-mid)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Terms & Conditions →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

