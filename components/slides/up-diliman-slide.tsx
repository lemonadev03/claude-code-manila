export default function UPDilimanSlide() {
  return (
    <div className="flex h-full w-full items-center gap-16 px-24">
      {/* Left: logo placeholder */}
      <div className="flex flex-1 items-center justify-center">
        <div className="relative flex h-64 w-64 items-center justify-center rounded-2xl border border-border bg-bg-card overflow-hidden">
          {/* Placeholder for UP Diliman logo */}
          <div className="flex flex-col items-center gap-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              className="text-accent/60"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-body text-xs text-text-muted text-center px-4">
              [U.P. Diliman Logo]
            </span>
          </div>
        </div>
      </div>

      {/* Right: text */}
      <div className="flex flex-1 flex-col">
        <span className="font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
          Education
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold text-text">
          University of the Philippines
          <br />
          Diliman
        </h2>
        <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-text-muted">
          Where it all started.
        </p>
      </div>
    </div>
  );
}
