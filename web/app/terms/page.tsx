import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { LegalList, LegalOrdered, LegalSection } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Ali Yoga Studio, Copenhagen. Last updated 01 February 2025.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Terms & <em className="italic text-[var(--accent)]">Conditions.</em>
          </>
        }
        sub="Last updated: 01 February 2025"
      />

      <section className="bg-[var(--bg)] py-[100px]">
        <div className="px-8 md:px-20">
          <LegalSection title="1. Introduction">
            <p>
              Welcome to Ali Yoga, directed by Alina Kachan, situated at Robert Jacobsens Vej 44L,
              2300, København S, Denmark, CVR 44607999. By using our website and services, you agree
              to these Terms & Conditions.
            </p>
          </LegalSection>

          <LegalSection title="2. Definitions">
            <LegalList
              items={[
                '“Website” refers to our online presence.',
                '“User”, “You”, or “Your” refers to anyone engaging with our website or services.',
                '“Ali Yoga”, “We”, “Our”, or “Us” refers to our yoga business.'
              ]}
            />
          </LegalSection>

          <LegalSection title="3. Privacy and Personal Data">
            <p>
              We adhere to data protection protocols described in our{" "}
              <Link href="/privacy" className="text-[var(--accent)] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection title="4. Intellectual Property">
            <p>
              Website content is protected by copyright and intellectual property laws. You may not
              reproduce or distribute content without explicit written permission.
            </p>
          </LegalSection>

          <LegalSection title="5. Video & Photos">
            <p>
              For educational and promotional purposes, Ali Yoga may capture photos and videos
              within our studio. By participating in classes, you consent to such use.
            </p>
          </LegalSection>

          <LegalSection title="6. Disclaimer">
            <p>
              Participation in yoga classes is at your own risk. Consult healthcare professionals
              to ensure suitability before beginning any new exercise regimen.
            </p>
          </LegalSection>

          <LegalSection title="9. Membership and Payments Terms">
            <LegalList
              items={[
                "Memberships are personal and non-transferable.",
                "Fees are processed monthly through automatic payments.",
                "Late payments may lead to suspension until balances are settled."
              ]}
            />
          </LegalSection>

          <LegalSection title="12. Cancellation, Refunds, and Termination Policy">
            <LegalOrdered
              items={[
                <>
                  <strong className="font-medium text-[var(--fg)]">Cancellation Policy:</strong> cancel at least 3
                  hours before class to avoid penalties.
                </>,
                <>
                  <strong className="font-medium text-[var(--fg)]">Refund Policy:</strong> all sales are final
                  except under specific conditions at our discretion.
                </>,
                <>
                  <strong className="font-medium text-[var(--fg)]">Termination of Membership:</strong> notice equal
                  to the current month plus one additional month is required.
                </>
              ]}
            />
            <p className="mt-4">
              To cancel, email{" "}
              <a className="text-[var(--accent)] hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              with your full name and a clear cancellation request.
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
              href="/cookies"
              className="inline-block border-b border-[var(--fg-light)] pb-[1px] text-[12px] tracking-[0.07em] text-[var(--fg-mid)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Cookie Policy →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

