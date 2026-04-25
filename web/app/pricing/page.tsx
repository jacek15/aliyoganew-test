import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flexible pricing for all budgets. Trial classes, monthly memberships and private sessions at Ali Yoga Studio in Copenhagen.",
  alternates: { canonical: "/pricing" }
};

function PriceCard(props: {
  tier: string;
  blurb: string;
  featured?: boolean;
  badge?: string;
  prices: { label: string; amount: string }[];
  features: string[];
  cta: { label: string; href: string; primary?: boolean };
}) {
  return (
    <div
      className={[
        "relative bg-[var(--bg-alt)] px-8 py-10 border-t-[3px]",
        props.featured ? "border-t-[var(--accent)]" : "border-t-[var(--fg-light)]"
      ].join(" ")}
    >
      {props.badge ? (
        <div className="absolute right-6 top-0 bg-[var(--accent)] px-3 py-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--white)]">
          {props.badge}
        </div>
      ) : null}
      <span className="mb-4 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
        {props.tier}
      </span>
      <p className="mb-5 text-[13px] leading-[1.6] text-[var(--fg-light)]">{props.blurb}</p>

      <div className="mb-7 flex flex-wrap gap-6">
        {props.prices.map((p) => (
          <div key={p.label}>
            <div className="mb-1 text-[10px] font-normal uppercase tracking-[0.12em] text-[var(--fg-light)]">
              {p.label}
            </div>
            <div className="font-[var(--font-neue-kabel)] text-[clamp(28px,3vw,40px)] font-light leading-[1] text-[var(--fg)]">
              {p.amount} <span className="text-[14px] text-[var(--fg-light)]">kr</span>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-7 border-0 border-t border-t-[color-mix(in_srgb,var(--fg)_10%,transparent)]" />

      <ul className="flex flex-col gap-2.5">
        {props.features.map((t) => (
          <li key={t} className="relative pl-5 text-[14px] leading-[1.6] text-[var(--fg-mid)]">
            <span className="absolute left-0 text-[var(--accent-lt)]">—</span>
            {t}
          </li>
        ))}
      </ul>

      {props.cta.primary ? (
        <a
          href={props.cta.href}
          className="mt-7 inline-block bg-[var(--fg)] px-9 py-4 text-[11px] font-normal uppercase tracking-[0.11em] text-[var(--bg)] transition-colors hover:bg-[var(--accent)]"
        >
          {props.cta.label}
        </a>
      ) : (
        <a
          href={props.cta.href}
          className="mt-7 inline-block border-b border-[var(--fg-light)] pb-[1px] text-[12px] tracking-[0.07em] text-[var(--fg-mid)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          {props.cta.label} →
        </a>
      )}
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Transparent pricing.
            <br />
            <em className="italic text-[var(--accent)]">No surprises.</em>
          </>
        }
        sub="All prices include 25% VAT. Age-based tiers ensure yoga stays accessible — and a 20% student discount is always available on request."
      />

      <section className="bg-[var(--bg)] py-[100px]">
        <div className="px-8 md:px-20">
          <div className="flex flex-wrap items-center justify-between gap-8 border-l-[3px] border-[var(--accent)] bg-[var(--bg-alt)] px-10 py-8">
            <div>
              <span className="mb-2 block text-[11px] font-normal uppercase tracking-[0.18em] text-[var(--accent)]">
                Start here
              </span>
              <h2 className="font-[var(--font-neue-kabel)] text-[clamp(22px,2.5vw,32px)] font-light leading-[1.2]">
                Your first class for <em className="italic text-[var(--accent)]">175 DKK.</em>
                <br />
                No commitment. No pressure.
              </h2>
            </div>
            <a
              href={site.booking.book}
              className="inline-block bg-[var(--fg)] px-9 py-4 text-[11px] font-normal uppercase tracking-[0.11em] text-[var(--bg)] transition-colors hover:bg-[var(--accent)]"
            >
              Book a Trial Class
            </a>
          </div>
          <p className="mt-4 text-[13px] italic text-[var(--fg-light)]">
            FlexiFlow Drop-In pass · valid 30 days · access to any group class
          </p>
        </div>
      </section>

      <section className="bg-[var(--bg-alt)] pb-[100px]">
        <div className="px-8 pt-20 md:px-20">
          <span className="mb-3 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
            Monthly Memberships
          </span>
          <h2 className="mb-10 font-[var(--font-neue-kabel)] text-[clamp(34px,4vw,56px)] font-light leading-[1.1]">
            Commit to your <em className="italic text-[var(--accent)]">practice.</em>
          </h2>

          <div className="grid grid-cols-1 gap-[2px] lg:grid-cols-3">
            <PriceCard
              tier="Zen Start"
              blurb="4 classes per month. Perfect for building a regular practice without overcommitting."
              prices={[
                { label: "Under 30", amount: "485" },
                { label: "30+", amount: "579" }
              ]}
              features={[
                "All group classes included",
                "Free mat borrowing",
                "5% friend & family discount",
                "Cancel with 30 days notice",
                "3-hour cancellation window per class"
              ]}
              cta={{ label: "Get started", href: site.booking.book }}
            />
            <PriceCard
              tier="Flow Plus"
              blurb="8 classes per month. The sweet spot for a consistent, evolving practice."
              featured
              badge="Most Popular"
              prices={[
                { label: "Under 30", amount: "689" },
                { label: "30+", amount: "825" }
              ]}
              features={[
                "All group classes included",
                "Free mat borrowing",
                "10% referral discount",
                "Cancel with 30 days notice",
                "3-hour cancellation window per class"
              ]}
              cta={{ label: "Get started", href: site.booking.book, primary: true }}
            />
            <PriceCard
              tier="Peak Pose"
              blurb="12 classes per month. For those who have made yoga a cornerstone of their life."
              badge="Best Value"
              prices={[
                { label: "Under 30", amount: "895" },
                { label: "30+", amount: "1,069" }
              ]}
              features={[
                "All group classes included",
                "Free mat borrowing",
                "15% friend discount",
                "Bring a guest once per month",
                "Flexible cancellation policy"
              ]}
              cta={{ label: "Get started", href: site.booking.book }}
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-[60px]">
        <div className="px-8 text-center md:px-20">
          <p className="text-[12px] italic leading-[1.8] text-[var(--fg-light)]">
            All prices include 25% VAT as required by Danish law from 2026.
            <br />A <strong className="font-medium text-[var(--fg)]">20% student discount</strong> is
            available — email{" "}
            <a className="text-[var(--accent)] hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            to apply.
            <br />
            Memberships require <strong className="font-medium text-[var(--fg)]">30 days notice</strong>{" "}
            to cancel.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block border-b border-[var(--fg-light)] pb-[1px] text-[12px] tracking-[0.07em] text-[var(--fg-mid)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Questions? Contact us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

