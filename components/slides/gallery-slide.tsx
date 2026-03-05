export default function GallerySlide() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-24">
      <h2 className="font-display text-4xl font-bold text-text">
        Gallery
      </h2>
      <p className="mt-3 font-body text-lg text-text-muted">
        A grid of visuals, screenshots, or examples.
      </p>

      {/* 2x2 grid of placeholders */}
      <div className="mt-10 grid grid-cols-2 gap-6">
        {["Top Left", "Top Right", "Bottom Left", "Bottom Right"].map(
          (label) => (
            <div
              key={label}
              className="relative flex h-48 items-center justify-center rounded-xl border border-border bg-bg-card overflow-hidden"
            >
              <svg
                className="absolute inset-0 h-full w-full opacity-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id={`gallery-dots-${label.replace(/\s/g, "")}`}
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="0.8" fill="currentColor" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill={`url(#gallery-dots-${label.replace(/\s/g, "")})`}
                />
              </svg>
              <span className="relative font-body text-sm text-text-muted">
                {label}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
