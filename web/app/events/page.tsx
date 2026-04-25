import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Workshops, immersions and special events at Ali Yoga Studio in Copenhagen. Join us for the Yoga & Nervous System Workshop on April 24, 2026.",
  alternates: { canonical: "/events" }
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events & Workshops"
        title={
          <>
            Deepen your practice.
            <br />
            <em className="italic text-[var(--accent)]">Together.</em>
          </>
        }
        sub="Special workshops, immersions and collaborative events that go beyond the regular class — exploring the full breadth of what yoga can offer."
      />

      <section className="bg-[var(--bg)] py-[100px]">
        <div className="px-8 md:px-20">
          <span className="mb-3 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
            Upcoming
          </span>
          <h2 className="mb-10 font-[var(--font-neue-kabel)] text-[clamp(34px,4vw,56px)] font-light leading-[1.1]">
            Don&apos;t miss <em className="italic text-[var(--accent)]">this.</em>
          </h2>

          <div className="grid grid-cols-1 gap-0 bg-[var(--bg-alt)] md:grid-cols-[auto_1fr]">
            <div className="flex min-w-[120px] flex-col items-center justify-center bg-[var(--accent)] px-9 py-10 text-center">
              <span className="font-[var(--font-neue-kabel)] text-[56px] font-light leading-[1] text-[var(--white)]">
                24
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--white)_70%,transparent)]">
                APR 2026
              </span>
            </div>
            <div className="px-8 py-10 md:px-12">
              <div className="mb-2 text-[10px] font-normal uppercase tracking-[0.14em] text-[var(--accent)]">
                Workshop · 2 facilitators
              </div>
              <h3 className="mb-3 font-[var(--font-neue-kabel)] text-[clamp(22px,2.5vw,32px)] font-normal leading-[1.2]">
                Yoga & Nervous System Workshop
              </h3>
              <div className="mb-3 text-[12px] tracking-[0.06em] text-[var(--fg-light)]">
                Thursday 24 April 2026 · 17:00 · Robert Jacobsens Vej 44L, Copenhagen
              </div>
              <p className="max-w-[640px] text-[14px] leading-[1.8] text-[var(--fg-mid)]">
                “Your nervous system keeps you stuck in stress, tension, and fatigue because it never
                learned to switch off.” Join neurologist <strong className="font-medium text-[var(--fg)]">Antonia G.</strong> and yoga
                therapist <strong className="font-medium text-[var(--fg)]">Alina</strong> for a workshop that combines neuroscience with breathing practices you
                can use every single day.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-8">
                <div className="text-[16px] font-medium text-[var(--accent)]">
                  100 DKK <span className="text-[13px] font-light text-[var(--fg-light)]">members</span>{" "}
                  <span className="mx-2 font-light text-[var(--fg-light)]">/</span> 125 DKK{" "}
                  <span className="text-[13px] font-light text-[var(--fg-light)]">non-members</span>
                </div>
                <a
                  href={site.booking.book}
                  className="inline-block bg-[var(--fg)] px-9 py-4 text-[11px] font-normal uppercase tracking-[0.11em] text-[var(--bg)] transition-colors hover:bg-[var(--accent)]"
                >
                  Book your spot
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-alt)] py-[100px]">
        <div className="px-8 md:px-20">
          <span className="mb-3 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
            Past Events
          </span>
          <h2 className="mb-10 font-[var(--font-neue-kabel)] text-[clamp(34px,4vw,56px)] font-light leading-[1.1]">
            Where we&apos;ve <em className="italic text-[var(--accent)]">been.</em>
          </h2>

          <div className="grid grid-cols-1 gap-[2px] lg:grid-cols-2">
            {[
              {
                day: "20",
                month: "Feb 2026",
                tag: "Yin Yoga · Sound Bath",
                title: "Transformative Yoga & Sound Bath",
                meta: "120 minutes · Studio",
                desc:
                  "A deep 120-minute Yin Yoga journey paired with healing sound to dissolve tension and restore inner peace.",
                price: "280 / 350 DKK"
              },
              {
                day: "31",
                month: "Aug 2025",
                tag: "Outdoor · Brunch",
                title: "Balance & Flow: Outdoor Yoga & Brunch",
                meta: "Outdoor · Morning session",
                desc:
                  "Yoga in the open air followed by a mindful brunch — movement, nature and community in one morning.",
                price: "290 DKK · 10% member discount"
              },
              {
                day: "21",
                month: "Dec 2024",
                tag: "Vinyasa · Festive",
                title: "Christmas Yoga Party",
                meta: "Studio · Evening",
                desc:
                  "A festive Vinyasa session blending energising yoga with the warmth of the holiday season. Joy, movement and community.",
                price: "250 DKK"
              },
              {
                day: "21",
                month: "Dec 2024",
                tag: "Yin Yoga · Collaboration",
                title: "Transformative Yin Yoga & Sound Bath",
                meta: "90 minutes · with Alina Tawrel",
                desc:
                  "A 90-minute immersive session combining slow, deep Yin postures with live sound healing.",
                price: "250 DKK"
              }
            ].map((e) => (
              <div key={`${e.day}-${e.title}`} className="flex gap-7 bg-[var(--bg)] px-8 py-9 opacity-55">
                <div className="min-w-[60px] text-center">
                  <div className="font-[var(--font-neue-kabel)] text-[44px] font-light leading-[1] text-[var(--accent)]">
                    {e.day}
                  </div>
                  <div className="mt-0.5 text-[9px] font-normal uppercase tracking-[0.18em] text-[var(--fg-light)]">
                    {e.month}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2 text-[10px] font-normal uppercase tracking-[0.14em] text-[var(--accent)]">
                    {e.tag}
                  </div>
                  <div className="mb-2 font-[var(--font-neue-kabel)] text-[22px] font-normal leading-[1.2]">
                    {e.title}
                  </div>
                  <div className="mb-2.5 text-[12px] tracking-[0.06em] text-[var(--fg-light)]">{e.meta}</div>
                  <p className="mb-4 text-[14px] leading-[1.8] text-[var(--fg-mid)]">{e.desc}</p>
                  <div className="text-[13px] font-medium text-[var(--accent)]">{e.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-dark)] px-8 py-[72px] text-center md:px-20">
        <div className="mx-auto max-w-[900px]">
          <span className="mb-3 block text-[11px] font-normal uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--white)_50%,transparent)]">
            Stay in the loop
          </span>
          <h2 className="mb-8 font-[var(--font-neue-kabel)] text-[clamp(28px,3.5vw,44px)] font-light leading-[1.2] text-[var(--white)]">
            Be first to hear about
            <br />
            <em className="italic text-[var(--accent-lt)]">new workshops.</em>
          </h2>
          <div className="mx-auto flex max-w-[520px] flex-col gap-2 sm:flex-row sm:gap-0">
            <a
              href={`mailto:${site.email}?subject=Workshop%20updates`}
              className="inline-block bg-[var(--accent)] px-7 py-4 text-[11px] font-normal uppercase tracking-[0.1em] text-[var(--white)] transition-colors hover:bg-[var(--accent-lt)] hover:text-[var(--fg)]"
            >
              Notify me
            </a>
          </div>
          <p className="mt-4 text-[12px] text-[color-mix(in_srgb,var(--white)_30%,transparent)]">
            Or email us directly at{" "}
            <a className="text-[color-mix(in_srgb,var(--white)_50%,transparent)] hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

