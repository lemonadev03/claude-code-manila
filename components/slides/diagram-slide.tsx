export default function DiagramSlide() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-24">
      <h2 className="font-display text-4xl font-bold text-text">
        Architecture Overview
      </h2>

      {/* Diagram container */}
      <div className="relative mt-10 flex h-72 w-full max-w-4xl items-center justify-center rounded-xl border border-border bg-bg-card overflow-hidden">
        {/* Subtle grid background */}
        <svg
          className="absolute inset-0 h-full w-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="diagram-grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagram-grid)" />
        </svg>

        {/* Placeholder boxes + connectors */}
        <div className="relative flex items-center gap-8">
          <Box label="Input" />
          <Arrow />
          <Box label="Process" />
          <Arrow />
          <Box label="Output" />
        </div>
      </div>

      <p className="mt-6 font-body text-sm text-text-muted">
        Figure 1 — High-level system architecture diagram placeholder
      </p>
    </div>
  );
}

function Box({ label }: { label: string }) {
  return (
    <div className="flex h-16 w-32 items-center justify-center rounded-lg border border-border bg-bg px-4">
      <span className="font-body text-sm text-text">{label}</span>
    </div>
  );
}

function Arrow() {
  return (
    <svg
      width="48"
      height="16"
      viewBox="0 0 48 16"
      fill="none"
      className="text-accent"
    >
      <path
        d="M0 8h40m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
