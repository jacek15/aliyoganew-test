import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Ticker } from "@/components/Ticker";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ali Yoga Studio — Where Each Pose Finds Its Purpose",
  description:
    "The first private yoga studio in Ørestad Syd. Hatha, Therapy & Vinyasa yoga in a tranquil eco-house sanctuary in Copenhagen.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <>
      <section className="relative grid min-h-dvh grid-cols-1 pt-[var(--nav-h)] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 py-16 md:px-20 md:py-20">
          <div className="mb-7 text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
            Private Yoga Studio · Ørestad Syd · Copenhagen
          </div>
          <h1 className="mb-7 font-[var(--font-neue-kabel)] text-[clamp(54px,6.5vw,96px)] font-light leading-[1.04]">
            Where each
            <br />
            pose finds
            <br />
            its <em className="italic text-[var(--accent)]">purpose.</em>
          </h1>
          <p className="mb-[52px] max-w-[380px] text-[16px] font-normal leading-[1.85] text-[var(--fg-mid)]">
            The first private yoga studio in Ørestad Syd. A sanctuary for your body and mind, within
            the walls of our eco-house.
          </p>
          <div className="relative flex w-full flex-wrap items-center gap-4">
            <Button href={site.booking.book}>
              Book a Class
            </Button>
            <Button href="/about" variant="ghost">
              Discover the studio
            </Button>

            {/* First in the area tab */}
            <div className="absolute top-1/2 left-[calc(100%+60px)] z-[2] hidden w-[175px] -translate-y-1/2 border-l-[3px] border-[var(--accent)] bg-[var(--bg)] px-8 py-[18px] shadow-[0_8px_32px_color-mix(in_srgb,var(--fg)_10%,transparent)] lg:block">
              <div className="mb-1 text-[9px] font-normal uppercase tracking-[0.16em] text-[var(--accent)]">
                First in the area
              </div>
              <div className="font-[var(--font-neue-kabel)] text-[16px] italic leading-[1.4]">
                Private studio in<br />Ørestad Syd
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 overflow-hidden bg-[var(--bg-alt)]">
            <Image
              src="/images/hero.svg"
              alt="Ali Yoga Studio interior"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>



        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[var(--fg-light)] opacity-60 transition-opacity hover:opacity-100">
          <span className="text-[8px] font-medium uppercase tracking-[0.2em]">Scroll</span>
          <div className="flex h-[34px] w-[20px] justify-center rounded-full border-[1.5px] border-[var(--fg-light)] p-[3px]">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--fg-light)] animate-[scrollDown_2s_infinite]" />
          </div>
        </div>
      </section>

      <Ticker />

      <section className="bg-[var(--bg-alt)] py-[100px]">
        <div className="grid grid-cols-1 items-center gap-20 px-8 lg:grid-cols-2 md:px-20">
          <div>
            <span className="mb-5 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
              Our Studio
            </span>
            <h2 className="font-[var(--font-neue-kabel)] text-[clamp(36px,4vw,58px)] font-light leading-[1.1]">
              More than a studio.
              <br />A <em className="italic text-[var(--accent)]">coming home.</em>
            </h2>
          </div>
          <div>
            <p className="mb-8 text-[16px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              We are here to help you reconnect consciously with yourself and heal your body. Each
              session unfolds within the tranquil embrace of our eco-house — ensuring absolute
              privacy, complimentary refreshments and personalised attention tailored to your
              journey.
            </p>
            <Button href="/about" variant="ghost">
              Meet Alina →
            </Button>
            <div className="mt-8 flex flex-wrap gap-10 border-t border-[color-mix(in_srgb,var(--fg)_10%,transparent)] pt-8">
              <div>
                <div className="font-[var(--font-neue-kabel)] text-[40px] font-light leading-[1] text-[var(--accent)]">
                  1st
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.07em] text-[var(--fg-light)]">
                  Private studio
                  <br />
                  in Ørestad Syd
                </div>
              </div>
              <div>
                <div className="font-[var(--font-neue-kabel)] text-[40px] font-light leading-[1] text-[var(--accent)]">
                  3
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.07em] text-[var(--fg-light)]">
                  Yoga styles
                  <br />
                  to explore
                </div>
              </div>
              <div>
                <div className="font-[var(--font-neue-kabel)] text-[40px] font-light leading-[1] text-[var(--accent)]">
                  100%
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.07em] text-[var(--fg-light)]">
                  Private &
                  <br />
                  personal
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-5 px-8 md:px-20">
          <div>
            <span className="mb-3 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
              What We Offer
            </span>
            <h2 className="font-[var(--font-neue-kabel)] text-[clamp(34px,4vw,56px)] font-light leading-[1.1]">
              Three paths.
              <br />
              <em className="italic text-[var(--accent)]">One intention.</em>
            </h2>
          </div>
          <Button href="/classes" variant="ghost">
            All classes →
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-[2px] px-8 lg:grid-cols-3 md:px-20">
          {[
            {
              tag: "Foundations",
              name: "Hatha Yoga",
              desc:
                "Traditional postures and breath work to build balance, flexibility and a grounded mind. Suitable for all levels.",
              img: "/images/hatha.svg",
              alt: "Hatha Yoga class"
            },
            {
              tag: "Healing",
              name: "Therapy Yoga",
              desc:
                "A personalised approach using yoga to improve physical, mental and emotional well-being — guided by Alina with deep care.",
              img: "/images/therapy.svg",
              alt: "Therapy Yoga class"
            },
            {
              tag: "Flow",
              name: "Vinyasa Flow",
              desc:
                "Fluid, breath-focused movement through continuous poses. Energising, rhythmic and deeply present.",
              img: "/images/vinyasa.svg",
              alt: "Vinyasa Flow class"
            }
          ].map((c) => (
            <div key={c.name} className="overflow-hidden bg-[var(--bg-alt)] transition-transform duration-300 hover:-translate-y-[3px]">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bg-alt)]">
                <Image src={c.img} alt={c.alt} fill className="object-cover transition-transform duration-500 hover:scale-[1.03]" />
              </div>
              <div className="p-7 pb-9">
                <div className="mb-2 text-[10px] font-normal uppercase tracking-[0.16em] text-[var(--accent)]">
                  {c.tag}
                </div>
                <div className="mb-2.5 font-[var(--font-neue-kabel)] text-[26px] font-normal">
                  {c.name}
                </div>
                <div className="mb-5 text-[14px] leading-[1.8] text-[var(--fg-mid)]">{c.desc}</div>
                <Button href="/classes" variant="ghost" size="sm" className="text-[var(--fg)]">
                  Explore {c.name.split(" ")[0]} →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TestimonialCarousel />

      <section className="flex flex-wrap items-center justify-between gap-10 bg-[var(--accent)] px-8 py-20 md:px-20">
        <div>
          <span className="mb-3 block text-[11px] font-normal uppercase tracking-[0.18em] text-[color-mix(in_srgb,var(--white)_65%,transparent)]">
            Ready to begin?
          </span>
          <h2 className="font-[var(--font-neue-kabel)] text-[clamp(32px,4vw,54px)] font-light leading-[1.1] text-[var(--white)]">
            Your first class
            <br />
            is <em className="italic">waiting for you.</em>
          </h2>
        </div>
        <Button href={site.booking.book} variant="inverted" size="lg">
          Book a Class Now
        </Button>
      </section>

      <section className="bg-[var(--bg-alt)] py-16">
        <div className="flex flex-wrap items-center gap-16 px-8 md:px-20">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-normal uppercase tracking-[0.18em] text-[var(--accent)]">
              Address
            </span>
            <a
              href={site.maps.query}
              target="_blank"
              rel="noopener"
              className="font-[var(--font-neue-kabel)] text-[18px] font-normal text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
            >
              {site.address}
            </a>
          </div>
          <div className="hidden h-10 w-px bg-[color-mix(in_srgb,var(--fg)_12%,transparent)] md:block" />
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-normal uppercase tracking-[0.18em] text-[var(--accent)]">
              Phone
            </span>
            <a
              href={`tel:${site.phone}`}
              className="font-[var(--font-neue-kabel)] text-[18px] font-normal text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
            >
              +45 91 93 70 09
            </a>
          </div>
          <div className="hidden h-10 w-px bg-[color-mix(in_srgb,var(--fg)_12%,transparent)] md:block" />
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-normal uppercase tracking-[0.18em] text-[var(--accent)]">
              Email
            </span>
            <a
              href={`mailto:${site.email}`}
              className="font-[var(--font-neue-kabel)] text-[18px] font-normal text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
            >
              {site.email}
            </a>
          </div>
          <div className="hidden h-10 w-px bg-[color-mix(in_srgb,var(--fg)_12%,transparent)] md:block" />
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-normal uppercase tracking-[0.18em] text-[var(--accent)]">
              Near
            </span>
            <span className="font-[var(--font-neue-kabel)] text-[18px] font-normal text-[var(--fg-mid)]">
              Vestamager Metro Station
            </span>
          </div>
          <div className="ml-auto">
            <Button href="/contact" variant="ghost">
              Get directions →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

