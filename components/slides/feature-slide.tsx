export default function FeatureSlide() {
  return (
    <div className="flex h-full w-full items-center gap-16 px-24">
      {/* Left: text content */}
      <div className="flex flex-1 flex-col">
        <span className="font-body text-sm font-medium uppercase tracking-widest text-accent">
          Feature Highlight
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold text-text">
          Feature Name
        </h2>
        <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-text-muted">
          Describe the feature, its benefits, and why the audience should care.
          Keep it concise — two or three sentences is ideal for a slide.
        </p>
      </div>

      {/* Right: placeholder visual */}
      <div className="relative flex h-80 flex-1 items-center justify-center rounded-xl border border-border bg-bg-card overflow-hidden">
        {/* Dot grid pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dot-grid"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>

        <span className="relative font-body text-sm text-text-muted">
          Screenshot / Image Placeholder
        </span>
      </div>
    </div>
  );
}
