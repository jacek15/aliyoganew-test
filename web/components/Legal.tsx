import type { ReactNode } from "react";

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 font-[var(--font-neue-kabel)] text-[22px] font-normal leading-[1.2] text-[var(--fg)]">
        {title}
      </h2>
      <div className="space-y-4 text-[15px] font-light leading-[1.9] text-[var(--fg-mid)]">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="relative pl-5">
          <span className="absolute left-0 text-[var(--accent-lt)]">—</span>
          {it}
        </li>
      ))}
    </ul>
  );
}

export function LegalOrdered({ items }: { items: ReactNode[] }) {
  return (
    <ol className="list-decimal space-y-2.5 pl-5">
      {items.map((it, i) => (
        <li key={i} className="pl-1">
          {it}
        </li>
      ))}
    </ol>
  );
}

