import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Hatha Yoga, Therapy Yoga and Vinyasa Flow at Ali Yoga Studio in Copenhagen. Private sessions and small group classes for all levels.",
  alternates: { canonical: "/classes" }
};

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((t) => (
        <li key={t} className="relative pl-5 text-[14px] leading-[1.6] text-[var(--fg-mid)]">
          <span className="absolute left-0 text-[var(--accent-lt)]">—</span>
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function ClassesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Classes"
        title={
          <>
            Three paths.
            <br />
            <em className="italic text-[var(--accent)]">One intention.</em>
          </>
        }
        sub="Hatha, Therapy Yoga and Vinyasa Flow — each style carefully curated to meet you where you are and guide you where you want to go."
      />

      <section className="bg-[var(--bg)] py-[100px]">
        <div className="grid grid-cols-1 items-center gap-20 px-8 lg:grid-cols-2 md:px-20">
          <div>
            <span className="mb-3 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
              Foundations
            </span>
            <h2 className="mb-6 font-[var(--font-neue-kabel)] text-[clamp(34px,4vw,56px)] font-light leading-[1.1]">
              Hatha <em className="italic text-[var(--accent)]">Yoga</em>
            </h2>
            <p className="mb-5 text-[16px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              Hatha is the foundation of all yoga practice. It brings together physical postures
              (asanas) and conscious breathwork (pranayama) to cultivate a stable body and a quiet
              mind.
            </p>
            <p className="mb-8 text-[16px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              Suitable for complete beginners and experienced practitioners alike. Alina adapts every
              session to the individual.
            </p>
            <div className="mb-8">
              <FeatureList
                items={[
                  "All experience levels welcome",
                  "Focus on alignment, breathing and balance",
                  "60-minute sessions",
                  "Group classes and private sessions available"
                ]}
              />
            </div>
            <a
              href={site.booking.book}
              className="inline-block bg-[var(--fg)] px-9 py-4 text-[11px] font-normal uppercase tracking-[0.11em] text-[var(--bg)] transition-colors hover:bg-[var(--accent)]"
            >
              Book Hatha
            </a>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bg-alt)]">
            <Image src="/images/hatha.svg" alt="Hatha Yoga class at Ali Yoga Studio" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-alt)] py-[100px]">
        <div className="grid grid-cols-1 items-center gap-20 px-8 lg:grid-cols-2 md:px-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bg)] md:order-1">
            <Image
              src="/images/therapy.svg"
              alt="Therapy Yoga session at Ali Yoga Studio"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:order-2">
            <span className="mb-3 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
              Healing
            </span>
            <h2 className="mb-6 font-[var(--font-neue-kabel)] text-[clamp(34px,4vw,56px)] font-light leading-[1.1]">
              Therapy <em className="italic text-[var(--accent)]">Yoga</em>
            </h2>
            <p className="mb-5 text-[16px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              Yoga Therapy uses the tools of yoga — movement, breath, awareness — as a vehicle for
              healing. Each therapeutic session is built around your specific physical or emotional
              needs.
            </p>
            <p className="mb-8 text-[16px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              This is not a one-size-fits-all class. It is a conversation between you and your body,
              guided with deep care.
            </p>
            <div className="mb-8">
              <FeatureList
                items={[
                  "Personalised to your physical & emotional wellbeing",
                  "Ideal for chronic pain, stress or rehabilitation",
                  "Available as private one-on-one sessions",
                  "Gentle, safe and deeply effective"
                ]}
              />
            </div>
            <a
              href={site.booking.book}
              className="inline-block bg-[var(--fg)] px-9 py-4 text-[11px] font-normal uppercase tracking-[0.11em] text-[var(--bg)] transition-colors hover:bg-[var(--accent)]"
            >
              Book Therapy Yoga
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-[100px]">
        <div className="grid grid-cols-1 items-center gap-20 px-8 lg:grid-cols-2 md:px-20">
          <div>
            <span className="mb-3 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
              Flow
            </span>
            <h2 className="mb-6 font-[var(--font-neue-kabel)] text-[clamp(34px,4vw,56px)] font-light leading-[1.1]">
              Vinyasa <em className="italic text-[var(--accent)]">Flow</em>
            </h2>
            <p className="mb-5 text-[16px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              Vinyasa Flow links breath with movement in a continuous, rhythmic sequence. Each class
              unfolds as a kind of moving meditation — energising, dynamic and deeply present.
            </p>
            <p className="mb-8 text-[16px] font-normal leading-[1.9] text-[var(--fg-mid)]">
              Best suited for those who have some yoga experience. Modifications are offered so no
              one is left behind.
            </p>
            <div className="mb-8">
              <FeatureList
                items={[
                  "Breath-synchronised continuous movement",
                  "Builds strength, flexibility and endurance",
                  "Beginner-friendly modifications offered",
                  "60-minute sessions"
                ]}
              />
            </div>
            <a
              href={site.booking.book}
              className="inline-block bg-[var(--fg)] px-9 py-4 text-[11px] font-normal uppercase tracking-[0.11em] text-[var(--bg)] transition-colors hover:bg-[var(--accent)]"
            >
              Book Vinyasa
            </a>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bg-alt)]">
            <Image
              src="/images/vinyasa.svg"
              alt="Vinyasa Flow class at Ali Yoga Studio"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

