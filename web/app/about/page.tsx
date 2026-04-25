import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Alina Kachan, the founder and instructor behind Ali Yoga Studio in Ørestad Syd, Copenhagen. 200hr + 300hr certified yoga teacher.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Studio"
        title={
          <>
            Meet <em className="italic text-[var(--accent)]">Alina.</em>
          </>
        }
        sub="The story, the philosophy, and the woman behind Ali Yoga Studio — Copenhagen's first private yoga studio in Ørestad Syd."
      />

      <section className="bg-[var(--bg)] py-[100px]">
        <div className="grid grid-cols-1 gap-20 px-8 lg:grid-cols-2 md:px-20">
          <div>
            <span className="mb-5 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
              The Founder
            </span>
            <blockquote className="mb-8 border-l-[3px] border-[var(--accent)] pl-6 font-[var(--font-neue-kabel)] text-[clamp(20px,2.5vw,28px)] font-light italic leading-[1.5]">
              &quot;The body stores a lot of mental injuries that turn into physical ones.&quot;
            </blockquote>
            <p className="mb-5 text-[16px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              Alina Kachan is a Ukrainian-born yoga instructor who found her home — and her calling
              — in Copenhagen. With a deep belief in the inseparable connection between physical and
              mental wellbeing, she opened Ali Yoga Studio to offer something that didn&apos;t yet
              exist in Ørestad Syd: a truly private, deeply personal yoga experience.
            </p>
            <p className="mb-8 text-[16px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              Trained to the highest standards with 200 hours in Hatha, Vinyasa, Yin and Hot Yoga,
              and a further 300 hours specialising in Spine Yoga Therapy, Alina brings both technical
              mastery and genuine warmth to every session. Her approach is simple: yoga should meet
              you exactly where you are.
            </p>
            <Link
              href="/classes"
              className="inline-block border-b border-[var(--fg-light)] pb-[1px] text-[12px] tracking-[0.07em] text-[var(--fg-mid)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Explore the classes →
            </Link>
          </div>

          <div>
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bg-alt)]">
              <Image
                src="/images/alina.svg"
                alt="Alina Kachan, founder of Ali Yoga Studio"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-6 max-w-[220px] border-l-[3px] border-[var(--accent)] bg-[var(--bg)] px-8 py-[18px] shadow-[0_8px_32px_color-mix(in_srgb,var(--fg)_10%,transparent)]">
              <div className="mb-1 text-[9px] font-normal uppercase tracking-[0.16em] text-[var(--accent)]">
                Yoga Alliance Certified
              </div>
              <div className="font-[var(--font-neue-kabel)] text-[15px] italic leading-[1.4]">
                200hr + 300hr Advanced Training
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-alt)] py-[100px]">
        <div className="px-8 md:px-20">
          <span className="mb-3 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
            Our Philosophy
          </span>
          <h2 className="mb-14 font-[var(--font-neue-kabel)] text-[clamp(34px,4vw,56px)] font-light leading-[1.1]">
            Personal. Peaceful. <em className="italic text-[var(--accent)]">Yours.</em>
          </h2>

          <div className="grid grid-cols-1 gap-[2px] lg:grid-cols-3">
            {[
              {
                tag: "Personal",
                title: "Made for you,\nnot the crowd.",
                body:
                  "Every session is tailored to your body, your goals, and your pace. No two people are the same — and no two classes should be either."
              },
              {
                tag: "Peaceful",
                title: "A sanctuary,\nnot a gym.",
                body:
                  "Our eco-house studio offers absolute calm. No noise, no rush, no mirrors. Just you, your breath, and the guidance of a teacher who truly listens."
              },
              {
                tag: "Yours",
                title: "Your journey,\nyour rhythm.",
                body:
                  "Whether you are healing, exploring or deepening your practice, this studio exists to support your growth — on your terms, at your speed."
              }
            ].map((b) => (
              <div key={b.tag} className="bg-[var(--bg)] p-10">
                <div className="mb-4 text-[10px] font-normal uppercase tracking-[0.16em] text-[var(--accent)]">
                  {b.tag}
                </div>
                <h3 className="mb-3.5 whitespace-pre-line font-[var(--font-neue-kabel)] text-[24px] font-normal leading-[1.2]">
                  {b.title}
                </h3>
                <p className="text-[14px] leading-[1.85] text-[var(--fg-mid)]">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-[100px]">
        <div className="grid grid-cols-1 gap-20 px-8 lg:grid-cols-2 md:px-20">
          <div className="relative aspect-[3/2] overflow-hidden bg-[var(--bg-alt)] md:order-2">
            <Image
              src="/images/studio-space.svg"
              alt="Ali Yoga Studio eco-house interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:order-1">
            <span className="mb-3 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
              The Space
            </span>
            <h2 className="mb-6 font-[var(--font-neue-kabel)] text-[clamp(34px,4vw,56px)] font-light leading-[1.1]">
              A sanctuary inside
              <br />
              an <em className="italic text-[var(--accent)]">eco-house.</em>
            </h2>
            <p className="mb-5 text-[16px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              Nestled within a sustainable eco-house constructed from recycled materials, Ali Yoga
              Studio was built with the same intention it operates with: harmony. The space is warm,
              considered, and completely private.
            </p>
            <p className="mb-8 text-[16px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              You&apos;ll find complimentary refreshments waiting, a mat ready if you need one, and
              an atmosphere that invites you to slow down the moment you walk through the door.
            </p>
            <div className="flex flex-wrap gap-10 border-t border-[color-mix(in_srgb,var(--fg)_10%,transparent)] pt-8">
              {[
                { num: "1st", lbl: "Private studio\nin Ørestad Syd" },
                { num: "3", lbl: "Yoga styles\noffered" },
                { num: "100%", lbl: "Private &\npersonal" }
              ].map((f) => (
                <div key={f.num}>
                  <div className="font-[var(--font-neue-kabel)] text-[40px] font-light leading-[1] text-[var(--accent)]">
                    {f.num}
                  </div>
                  <div className="mt-1 whitespace-pre-line text-[11px] uppercase tracking-[0.07em] text-[var(--fg-light)]">
                    {f.lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

