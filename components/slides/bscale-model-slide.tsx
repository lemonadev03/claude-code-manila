const steps = [
  { label: "Enterprise Clients", desc: "Find companies with real problems" },
  { label: "Build Fast", desc: "Ship production software at startup speed" },
  { label: "Productize", desc: "Turn solutions into standalone products" },
];

function Arrow() {
  return (
    <svg
      className="h-8 w-20 shrink-0 text-accent/40"
      viewBox="0 0 80 32"
      fill="none"
    >
      <path
        d="M0 16h68m0 0l-10-10m10 10l-10 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BscaleModelSlide() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-24">
      <span className="font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
        How We Work
      </span>
      <h2 className="mt-3 font-display text-4xl font-bold text-text">
        Target. Build. Productize.
      </h2>
      <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-muted">
        We find enterprise clients with painful problems, ship fast custom
        solutions, then productize what works into standalone startups.
      </p>

      {/* Simplified flow */}
      <div className="mt-14 flex items-center justify-between gap-4">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-4">
            <div className="flex flex-col items-center rounded-xl border border-border bg-bg-card px-8 py-6 text-center">
              <span className="font-display text-lg font-bold text-text">
                {step.label}
              </span>
              <span className="mt-2 max-w-[10rem] font-body text-xs leading-relaxed text-text-muted">
                {step.desc}
              </span>
            </div>
            {i < steps.length - 1 && <Arrow />}
          </div>
        ))}
      </div>

      <p className="mt-6 text-center font-body text-xs italic text-text-muted/60">
        * Oversimplified, but you get the idea.
      </p>
    </div>
  );
}
