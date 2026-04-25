import type { Metadata, Viewport } from "next";
import "./globals.css";
import { neueKabel } from "@/lib/fonts";
import { site } from "@/lib/site";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { JsonLd } from "@/components/JsonLd";
import { SplashScreen } from "@/components/SplashScreen";

export const viewport: Viewport = {
  themeColor: site.themeColor
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Where Each Pose Finds Its Purpose`,
    template: `%s — ${site.name}`
  },
  description:
    "The first private yoga studio in Ørestad Syd. Hatha, Therapy & Vinyasa yoga in a tranquil eco-house sanctuary in Copenhagen.",
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: `${site.name} — Where Each Pose Finds Its Purpose`,
    description:
      "The first private yoga studio in Ørestad Syd. Hatha, Therapy & Vinyasa yoga in a tranquil eco-house sanctuary in Copenhagen.",
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Where Each Pose Finds Its Purpose`,
    description:
      "The first private yoga studio in Ørestad Syd. Hatha, Therapy & Vinyasa yoga in a tranquil eco-house sanctuary in Copenhagen."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${neueKabel.variable}`}>
      <body className={`${neueKabel.className} min-h-dvh antialiased`}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: site.name,
            url: site.url,
            telephone: site.phone,
            email: site.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Robert Jacobsens Vej 44L",
              postalCode: "2300",
              addressLocality: "Copenhagen",
              addressCountry: "DK"
            },
            sameAs: [site.socials.instagram, site.socials.facebook, site.socials.youtube]
          }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        <SplashScreen />
      </body>
    </html>
  );
}

