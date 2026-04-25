import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { LegalList, LegalSection } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Ali Yoga Studio, Copenhagen. How we collect, use and protect your personal data. Last updated 01 February 2025.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Privacy <em className="italic text-[var(--accent)]">Policy.</em>
          </>
        }
        sub="Last updated: 01 February 2025"
      />

      <section className="bg-[var(--bg)] py-[100px]">
        <div className="px-8 md:px-20">
          <LegalSection title="Introduction">
            <p>
              Ali Yoga operates from Robert Jacobsens Vej 44L, 2300 København S, Denmark (CVR:
              44607999). We respect your privacy and are committed to protecting the personal
              information you share with us.
            </p>
          </LegalSection>

          <LegalSection title="Information We Collect">
            <p>
              <strong className="font-medium text-[var(--fg)]">Non-Personal Information.</strong> When you visit
              our website, we may collect technical information (e.g. browser type, pages visited)
              to improve the experience.
            </p>
            <p>
              <strong className="font-medium text-[var(--fg)]">Personal Information.</strong> We collect personal
              information you provide directly to us (e.g. name, email, phone) when contacting us or
              registering for classes.
            </p>
          </LegalSection>

          <LegalSection title="How We Use Your Information">
            <LegalList
              items={[
                "Providing and maintaining our website and services",
                "Communicating with you and responding to enquiries",
                "Improving functionality and user experience",
                "Complying with legal obligations"
              ]}
            />
          </LegalSection>

          <LegalSection title="Sharing Your Information">
            <p>We do not sell your personal data. We may share information with:</p>
            <LegalList
              items={[
                "Service providers who assist our operations (e.g. booking platform)",
                "Authorities when required by law",
                "Parties involved in a business sale/transfer (if applicable)"
              ]}
            />
          </LegalSection>

          <LegalSection title="Cookies and Tracking Technologies">
            <p>
              Our website may use cookies to improve your experience. See our{" "}
              <Link href="/cookies" className="text-[var(--accent)] hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection title="Your Rights Under GDPR">
            <p>You have rights to access, correct, delete, restrict, object, and receive your data.</p>
            <p>
              To exercise these rights, contact{" "}
              <a className="text-[var(--accent)] hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </LegalSection>

          <div className="mt-12 flex flex-wrap gap-6 border-t border-[color-mix(in_srgb,var(--fg)_10%,transparent)] pt-8">
            <Link
              href="/terms"
              className="inline-block border-b border-[var(--fg-light)] pb-[1px] text-[12px] tracking-[0.07em] text-[var(--fg-mid)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Terms & Conditions →
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

