import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ali Yoga Studio in Copenhagen. Find us at Robert Jacobsens Vej 44L, Ørestad Syd — near Vestamager Metro Station.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            We&apos;d love to
            <br />
            <em className="italic text-[var(--accent)]">hear from you.</em>
          </>
        }
        sub="Questions about classes, private sessions, or the studio — we respond within 24 hours."
      />

      <section className="bg-[var(--bg)] py-[100px]">
        <div className="grid grid-cols-1 gap-20 px-8 lg:grid-cols-2 md:px-20">
          <div>
            <span className="mb-8 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
              Send a message
            </span>
            <form
              action="https://formspree.io/f/TODO_ADD_ENDPOINT"
              method="POST"
              className="space-y-6"
              noValidate
            >
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
                { id: "email", label: "Email Address", type: "email", placeholder: "you@example.com", required: true },
                { id: "phone", label: "Phone (optional)", type: "tel", placeholder: "+45 00 00 00 00" }
              ].map((f) => (
                <div key={f.id} className="flex flex-col gap-2">
                  <label
                    htmlFor={f.id}
                    className="text-[11px] font-normal uppercase tracking-[0.14em] text-[var(--fg-mid)]"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required={Boolean(f.required)}
                    placeholder={f.placeholder}
                    className="w-full border border-[color-mix(in_srgb,var(--fg)_14%,transparent)] bg-[var(--bg-alt)] px-[18px] py-[14px] text-[15px] font-normal text-[var(--fg)] outline-none transition-colors focus:border-[var(--accent)]"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-[11px] font-normal uppercase tracking-[0.14em] text-[var(--fg-mid)]"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full cursor-pointer appearance-none border border-[color-mix(in_srgb,var(--fg)_14%,transparent)] bg-[var(--bg-alt)] px-[18px] py-[14px] pr-11 text-[15px] font-normal text-[var(--fg)] outline-none transition-colors focus:border-[var(--accent)]"
                >
                  <option value="" disabled>
                    Select a topic…
                  </option>
                  <option value="general">General Question</option>
                  <option value="private">Private Session Enquiry</option>
                  <option value="group">Group Class Info</option>
                  <option value="events">Events & Workshops</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-[11px] font-normal uppercase tracking-[0.14em] text-[var(--fg-mid)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="How can we help you?"
                  className="min-h-[130px] w-full resize-y border border-[color-mix(in_srgb,var(--fg)_14%,transparent)] bg-[var(--bg-alt)] px-[18px] py-[14px] text-[15px] font-normal text-[var(--fg)] outline-none transition-colors focus:border-[var(--accent)]"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-[1.6] text-[var(--fg-mid)]">
                <input
                  type="checkbox"
                  name="gdpr"
                  required
                  className="mt-[3px] accent-[var(--accent)]"
                />
                <span>
                  I agree to my details being used to respond to my enquiry, in accordance with the{" "}
                  <a href="/privacy" className="text-[var(--accent)] hover:underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              <Button type="submit">
                Send Message
              </Button>

              <p className="text-[12px] italic leading-[1.8] text-[var(--fg-light)]">
                Tip: replace the Formspree endpoint in the code when you deploy.
              </p>
            </form>
          </div>

          <div>
            <span className="mb-8 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
              Find us
            </span>

            <div className="space-y-7">
              <div className="border-b border-[color-mix(in_srgb,var(--fg)_8%,transparent)] pb-7">
                <div className="text-[10px] font-normal uppercase tracking-[0.18em] text-[var(--accent)]">
                  Address
                </div>
                <a
                  href={site.maps.query}
                  target="_blank"
                  rel="noopener"
                  className="mt-1 block font-[var(--font-neue-kabel)] text-[18px] font-normal text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
                >
                  Robert Jacobsens Vej 44L
                  <br />
                  2300 Copenhagen S, Denmark
                </a>
                <div className="mt-1 text-[12px] text-[var(--fg-light)]">Near Vestamager Metro Station</div>
              </div>

              <div className="border-b border-[color-mix(in_srgb,var(--fg)_8%,transparent)] pb-7">
                <div className="text-[10px] font-normal uppercase tracking-[0.18em] text-[var(--accent)]">
                  Phone
                </div>
                <a
                  href={`tel:${site.phone}`}
                  className="mt-1 block font-[var(--font-neue-kabel)] text-[18px] font-normal text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
                >
                  +45 91 93 70 09
                </a>
              </div>

              <div className="border-b border-[color-mix(in_srgb,var(--fg)_8%,transparent)] pb-7">
                <div className="text-[10px] font-normal uppercase tracking-[0.18em] text-[var(--accent)]">
                  Email
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block font-[var(--font-neue-kabel)] text-[18px] font-normal text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
                >
                  {site.email}
                </a>
              </div>

              <div>
                <div className="text-[10px] font-normal uppercase tracking-[0.18em] text-[var(--accent)]">
                  Studio Hours
                </div>
                <div className="mt-1 font-[var(--font-neue-kabel)] text-[18px] font-normal text-[var(--fg-mid)]">
                  Open & Close with classes
                </div>
                <p className="mt-1 text-[13px] leading-[1.7] text-[var(--fg-light)]">
                  We open 15 minutes before each class and close 15 minutes after. For enquiries outside
                  these times, please email or call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[var(--bg-alt)]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.3!2d12.5663!3d55.6234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRobert+Jacobsens+Vej+44L%2C+2300+Copenhagen!5e0!3m2!1sen!2sdk!4v1"
          height="420"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ali Yoga Studio location on Google Maps"
          className="block w-full border-0"
        />
        <div className="px-8 py-4 text-right md:px-20">
          <Button
            href={site.maps.query}
            target="_blank"
            rel="noopener"
            variant="ghost"
          >
            Open in Google Maps →
          </Button>
        </div>
      </div>
    </>
  );
}

