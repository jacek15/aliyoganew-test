import localFont from "next/font/local";

export const neueKabel = localFont({
  variable: "--font-neue-kabel",
  display: "swap",
  src: [
    { path: "../public/fonts/NeueKabel-Thin.otf", weight: "100", style: "normal" },
    { path: "../public/fonts/NeueKabel-ThinItalic.otf", weight: "100", style: "italic" },
    { path: "../public/fonts/NeueKabel-ExtraLight.otf", weight: "200", style: "normal" },
    { path: "../public/fonts/NeueKabel-ExtraLightItalic.otf", weight: "200", style: "italic" },
    { path: "../public/fonts/NeueKabel-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/NeueKabel-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../public/fonts/NeueKabel-Book.otf", weight: "350", style: "normal" },
    { path: "../public/fonts/NeueKabel.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/NeueKabel-Italic.otf", weight: "400", style: "italic" },
    { path: "../public/fonts/NeueKabel-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/NeueKabel-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../public/fonts/NeueKabel-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/NeueKabel-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../public/fonts/NeueKabel-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../public/fonts/NeueKabel-ExtraBoldItalic.otf", weight: "800", style: "italic" },
    { path: "../public/fonts/NeueKabel-Black.otf", weight: "900", style: "normal" },
    { path: "../public/fonts/NeueKabel-BlackItalic.otf", weight: "900", style: "italic" }
  ]
});

