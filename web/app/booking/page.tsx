import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import YogoWidgetLoader from "@/components/YogoWidgetLoader";
import { site } from "@/lib/site";
import { div } from "framer-motion/m";

export const metadata: Metadata = {
  title: "Book a Class",
  description:
    "Book your yoga class at Ali Yoga Studio in Copenhagen. Online booking via YogoBooking — quick, simple, confirmed instantly.",
  alternates: { canonical: "/booking" }
};

export default function BookingPage() {
  return (
    <>
      <YogoWidgetLoader />

      <PageHero
        eyebrow="Book a Class"
        title={
          <>
            Your practice
            <br />
            starts <em className="italic text-[var(--accent)]">here.</em>
          </>
        }
        sub="Book online in minutes through our Yogo Booking platform — browse the schedule, choose your class, and confirm instantly."
      />

      <section className="bg-[var(--bg)] py-[100px]">
        <div className="px-8 md:px-20">
          <span className="mb-3 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
            How It Works
          </span>
          <h2 className="mb-10 font-[var(--font-neue-kabel)] text-[clamp(34px,4vw,56px)] font-light leading-[1.1]">
            Three steps to your
            <br />
            <em className="italic text-[var(--accent)]">first class.</em>
          </h2>

          <div className="grid grid-cols-1 gap-[2px] lg:grid-cols-3">
            {[
              {
                n: "01",
                t: "Create an account",
                d: "Register free at the booking platform and set up your profile. It takes less than two minutes."
              },
              {
                n: "02",
                t: "Choose your class",
                d: "Browse the weekly schedule. Pick the session that fits your day and your energy."
              },
              {
                n: "03",
                t: "Confirm your booking",
                d: "Select your pass or pay drop-in (from 175 DKK). You'll receive a confirmation email immediately."
              }
            ].map((s) => (
              <div key={s.n} className="bg-[var(--bg-alt)] px-7 py-9">
                <div className="mb-4 font-[var(--font-neue-kabel)] text-[56px] font-light leading-[1] text-[var(--accent-lt)]">
                  {s.n}
                </div>
                <h3 className="mb-2.5 font-[var(--font-neue-kabel)] text-[20px] font-normal">{s.t}</h3>
                <p className="text-[14px] leading-[1.8] text-[var(--fg-mid)]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-[100px] pt-0">
        <div className="px-8 md:px-20">
          <span className="mb-3 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
            Important to Know
          </span>
          <h2 className="mb-10 font-[var(--font-neue-kabel)] text-[clamp(34px,4vw,56px)] font-light leading-[1.1]">
            Cancellation <em className="italic text-[var(--accent)]">policy.</em>
          </h2>
          <div className="border-l-[3px] border-[var(--accent)] pl-7">
            <p className="mb-4 text-[16px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              <strong className="font-medium text-[var(--fg)]">Cancel at least 3 hours before class</strong>{" "}
              via the booking platform. Late cancellations and no-shows count as a used class.
            </p>
            <p className="mb-4 text-[16px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              <strong className="font-medium text-[var(--fg)]">No walk-ins.</strong> All classes must be booked
              in advance. The studio opens 15 minutes before class begins.
            </p>
            <p className="text-[16px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              For memberships, a notice period of <strong className="font-medium text-[var(--fg)]">30 days</strong>{" "}
              is required. Email{" "}
              <a className="text-[var(--accent)] hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/faq"
              className="inline-block border-b border-[var(--fg-light)] pb-[1px] text-[12px] tracking-[0.07em] text-[var(--fg-mid)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Read the full FAQ →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-alt)] pt-20">
        <div className="px-8 md:px-20">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="mb-3 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
                Live Schedule
              </span>
              <h2 className="font-[var(--font-neue-kabel)] text-[clamp(34px,4vw,56px)] font-light leading-[1.1]">
                Book directly <em className="italic text-[var(--accent)]">below.</em>
              </h2>
            </div>
            <a
              href={site.booking.timetable}
              target="_blank"
              rel="noopener"
              className="inline-block border-b border-[var(--fg-light)] pb-[1px] text-[12px] tracking-[0.07em] text-[var(--fg-mid)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Open in full screen →
            </a>
          </div>
        </div>

        <div className="px-8 md:px-20">
          <div className="yogo-calendar w-full" />
        </div>

      </section>
    </>
  );
}
