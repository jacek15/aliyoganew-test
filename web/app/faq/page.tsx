import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Ali Yoga Studio in Copenhagen — what to bring, cancellation policy, studio rules, and more.",
  alternates: { canonical: "/faq" }
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Questions,
            <br />
            <em className="italic text-[var(--accent)]">answered.</em>
          </>
        }
        sub="Everything you need to know before your first class at Ali Yoga Studio."
      />

      <section className="bg-[var(--bg)] py-[100px]">
        <div className="px-8 md:px-20">
          <FaqAccordion
            items={[
              {
                q: "Do I need yoga experience to join?",
                a: [
                  "Not at all. All of our classes welcome complete beginners and experienced practitioners alike. If you are new to yoga, we recommend starting with Hatha — it moves at a considered pace and focuses on foundations.",
                  "Alina offers modifications for every pose, so you will never be asked to do more than your body is ready for. The studio's small, private setting means you will always receive individual attention."
                ]
              },
              {
                q: "What should I bring to class?",
                a: [
                  "Wear comfortable clothing you can move freely in — there's no need for special yoga wear. Bring a yoga mat if you have one (we provide mats and props), and a water bottle (refreshments are also provided)."
                ]
              },
              {
                q: "What is the cancellation policy?",
                a: [
                  "Class cancellations must be made at least 3 hours before the scheduled start time via the booking platform. Late cancellations and no-shows count as a used class.",
                  `For membership cancellations, email ${site.email}. A notice period of 30 days is required.`
                ]
              },
              {
                q: "Can I book a private session?",
                a: [
                  "Yes. Private one-on-one sessions with Alina are available for all styles — including Therapy Yoga for rehabilitation or specific concerns. Contact us and we’ll respond within 24 hours."
                ]
              }
            ]}
          />
        </div>
      </section>

      <section className="bg-[var(--bg-alt)] py-[60px]">
        <div className="px-8 text-center md:px-20">
          <span className="mb-3 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
            Still have questions?
          </span>
          <h2 className="mb-5 font-[var(--font-neue-kabel)] text-[clamp(34px,4vw,56px)] font-light leading-[1.1]">
            We&apos;re here to <em className="italic text-[var(--accent)]">help.</em>
          </h2>
          <p className="mx-auto mb-9 max-w-[480px] text-[16px] font-normal leading-[1.85] text-[var(--fg-mid)]">
            Didn&apos;t find what you were looking for? Send us a message and we&apos;ll get back to you
            within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[var(--fg)] px-9 py-4 text-[11px] font-normal uppercase tracking-[0.11em] text-[var(--bg)] transition-colors hover:bg-[var(--accent)]"
            >
              Get in touch
            </Link>
            <a
              href={site.booking.book}
              className="inline-block border-b border-[var(--fg-light)] pb-[1px] text-[12px] tracking-[0.07em] text-[var(--fg-mid)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Book a class →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

