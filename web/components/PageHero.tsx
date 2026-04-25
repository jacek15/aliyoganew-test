import type { ReactNode } from "react";

export function PageHero(props: {
  eyebrow: string;
  title: ReactNode;
  sub: string;
}) {
  return (
    <header className="bg-[var(--bg-alt)] pt-[var(--nav-h)]">
      <div className="flex min-h-[380px] flex-col justify-center px-8 py-[72px] pb-20 md:px-20">
        <div className="mb-5 text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--accent)]">
          {props.eyebrow}
        </div>
        <h1 className="mb-5 font-[var(--font-neue-kabel)] text-[clamp(42px,5vw,72px)] font-light leading-[1.05]">
          {props.title}
        </h1>
        <p className="max-w-[560px] text-[16px] font-light leading-[1.85] text-[var(--fg-mid)]">
          {props.sub}
        </p>
      </div>
    </header>
  );
}

