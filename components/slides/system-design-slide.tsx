const steps = [
  { label: "Client" },
  { label: "Business" },
  { label: "Product" },
  { label: "Tech" },
];

function Arrow() {
  return (
    <svg
      className="h-8 w-16 shrink-0 text-accent/40"
      viewBox="0 0 64 32"
      fill="none"
    >
      <path
        d="M0 16h52m0 0l-8-8m8 8l-8 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SystemDesignSlide() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-24">
      <span className="font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
        System Design
      </span>
      <h2 className="mt-3 font-display text-4xl font-bold text-text">
        Designing a Claude Code-First System
      </h2>
      <p className="mt-4 max-w-2xl font-body text-lg text-text-muted">
        Top-down architecture and processes that scale.
      </p>

      {/* Flow chart */}
      <div className="mt-16 flex items-center justify-between gap-2">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2">
            <div className="flex h-24 flex-1 min-w-[10rem] items-center justify-center rounded-xl border border-border bg-bg-card px-8">
              <span className="font-display text-xl font-bold text-text">
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && <Arrow />}
          </div>
        ))}
      </div>
    </div>
  );
}
