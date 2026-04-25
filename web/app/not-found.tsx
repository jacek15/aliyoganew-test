import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <style>{`
        /* Hide the site's fixed nav header and global footer (keeps local nf-header visible) */
        header.fixed { display: none !important; }
        footer { display: none !important; }
        .site-header, .site-nav, .site-footer, [data-global-nav], .global-header, .global-footer, .header-main { display: none !important; }

        /* minimal header inside this page (kept visible) */
        .nf-header { padding:32px; text-align:center; }
        .nav-logo { font-family:var(--font-neue-kabel); font-size:16px; color:var(--fg); text-decoration:none; }
        .nav-logo em { font-style:italic; color:var(--accent); font-weight:300; }

        /* Page container that fills viewport */
        .page-404 { display:flex; flex-direction:column; min-height:100dvh; background:var(--bg); color:var(--fg); }

        /* Centered content */
        main.not-found { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:80px 32px; }
        .not-found-eyebrow { font-size:11px; letter-spacing:0.22em; text-transform:uppercase; color:var(--fg-mid); margin-bottom:24px; font-weight:400; }
        .not-found-title { font-family: var(--font-neue-kabel), serif; font-size:clamp(44px,4.6vw,76px); font-weight:300; line-height:1.06; margin-bottom:24px; color:var(--fg); }
        .not-found-title em { font-style:italic; color:var(--accent); }
        .not-found-sub { font-size:13px; color:var(--fg-mid); line-height:1.8; max-width:560px; margin-bottom:48px; font-weight:300; }
        .not-found-actions { display:flex; gap:20px; align-items:center; justify-content:center; flex-wrap:wrap; }

        /* Bottom row inside 404 page (matches site) */
        .not-found-bottom { margin-top: auto; width:100%; border-top:1px solid color-mix(in srgb, var(--fg) 7%, transparent); text-align:center; padding:20px 32px; font-size:11px; color:var(--fg-light); background:var(--bg); }
        .not-found-bottom a { color:var(--fg-light); text-decoration:none; margin:0 6px; }
        .not-found-bottom a:hover { color:var(--accent); }

        @media (min-width:768px) {
          main.not-found { padding:96px 40px; }
        }
      `}</style>

      <div className="page-404">
        <header className="nf-header">
          <Link href="/" className="nav-logo">Ali<em>Yoga</em></Link>
        </header>

        <main className="not-found" role="main" aria-labelledby="not-found-title">
          <div className="not-found-eyebrow">404 · Page not found</div>

          <h1 id="not-found-title" className="not-found-title">Looks like this page<br/>took a different <em>path.</em></h1>

          <p className="not-found-sub">The page you&apos;re looking for doesn&apos;t exist or may have moved.<br/>Let&apos;s get you back on track.</p>

          <div className="not-found-actions">
            <Button href="/">Back to home</Button>
            <Button href="/classes" variant="ghost">View classes →</Button>
          </div>
        </main>

        <div className="not-found-bottom" role="contentinfo">
          <span>© 2026 Ali Yoga · </span>
          <a href="https://aliyoga.eu" target="_blank" rel="noopener noreferrer">aliyoga.eu</a>
          <span> · </span>
          <a href="/contact">Contact</a>
          <span> · </span>
          <a href="https://aliyogastudio.yogobooking.com" target="_blank" rel="noopener noreferrer">Book a Class</a>
        </div>

      </div>
    </>
  );
}

