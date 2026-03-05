const results = [
  { metric: "3", unit: "startups", desc: "in stealth, built in parallel" },
  { metric: "3", unit: "devs", desc: "total engineering headcount" },
  { metric: "Enterprise", unit: "clients", desc: "shipping production software" },
];

export default function BscaleResultsSlide() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-24">
      <span className="font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
        Results
      </span>
      <h2 className="mt-3 font-display text-4xl font-bold text-text">
        What We&apos;ve Shipped
      </h2>
      <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-muted">
        Enterprise-grade software for real clients, built and maintained by a
        team small enough to fit in a group chat.
      </p>

      <div className="mt-14 grid grid-cols-3 gap-8">
        {results.map((r) => (
          <div
            key={r.unit}
            className="flex flex-col rounded-xl border border-border bg-bg-card px-6 py-8"
          >
            <span className="font-display text-5xl font-bold text-accent">
              {r.metric}
            </span>
            <span className="mt-2 font-body text-sm font-medium uppercase tracking-wider text-text">
              {r.unit}
            </span>
            <span className="mt-3 font-body text-sm leading-relaxed text-text-muted">
              {r.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
