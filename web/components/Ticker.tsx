export function Ticker() {
  return (
    <div className="bg-[var(--fg)] py-[13px] overflow-hidden whitespace-nowrap" aria-hidden="true">
      <div className="inline-block animate-[ticker_28s_linear_infinite] text-[11px] font-normal uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--white)_55%,transparent)]">
        {[
          "Hatha Yoga",
          "Therapy Yoga",
          "Vinyasa Flow",
          "Private Studio",
          "Small Groups",
          "Ørestad Syd",
          "Copenhagen"
        ]
          .map((t) => `${t} `)
          .join("· ")}{" "}
        {[
          "Hatha Yoga",
          "Therapy Yoga",
          "Vinyasa Flow",
          "Private Studio",
          "Small Groups",
          "Ørestad Syd",
          "Copenhagen"
        ]
          .map((t) => `${t} `)
          .join("· ")}{" "}
        {[
          "Hatha Yoga",
          "Therapy Yoga",
          "Vinyasa Flow",
          "Private Studio",
          "Small Groups",
          "Ørestad Syd",
          "Copenhagen"
        ]

          .map((t) => `${t} `)
          .join("· ")}
      </div>
    </div>
  );
}

