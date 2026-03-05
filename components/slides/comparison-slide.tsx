export default function ComparisonSlide() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-24">
      <h2 className="font-display text-4xl font-bold text-text">
        Before &amp; After
      </h2>
      <p className="mt-3 font-body text-lg text-text-muted">
        Side-by-side comparison of two states, approaches, or visuals.
      </p>

      <div className="mt-10 flex gap-8">
        {/* Left side */}
        <div className="flex flex-1 flex-col gap-4">
          <span className="font-body text-sm font-medium uppercase tracking-widest text-text-muted">
            Before
          </span>
          <div className="relative flex h-64 items-center justify-center rounded-xl border border-border bg-bg-card overflow-hidden">
            <svg
              className="absolute inset-0 h-full w-full opacity-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="comp-left"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 16h32M16 0v32"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#comp-left)" />
            </svg>
            <span className="relative font-body text-sm text-text-muted">
              Image / Screenshot A
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center justify-end pb-32">
          <div className="h-64 w-px bg-border" />
        </div>

        {/* Right side */}
        <div className="flex flex-1 flex-col gap-4">
          <span className="font-body text-sm font-medium uppercase tracking-widest text-accent">
            After
          </span>
          <div className="relative flex h-64 items-center justify-center rounded-xl border border-accent/30 bg-bg-card overflow-hidden">
            <svg
              className="absolute inset-0 h-full w-full opacity-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="comp-right"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 16h32M16 0v32"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#comp-right)" />
            </svg>
            <span className="relative font-body text-sm text-text-muted">
              Image / Screenshot B
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
