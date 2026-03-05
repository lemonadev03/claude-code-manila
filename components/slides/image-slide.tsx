export default function ImageSlide() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-24">
      <h2 className="font-display text-4xl font-bold text-text">
        Full Image Slide
      </h2>

      {/* Large image placeholder */}
      <div className="relative mt-10 flex h-[60%] w-full max-w-5xl items-center justify-center rounded-xl border border-border bg-bg-card overflow-hidden">
        {/* Cross-hatch pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="img-cross"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0L20 20M20 0L0 20"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#img-cross)" />
        </svg>

        {/* Placeholder icon */}
        <div className="relative flex flex-col items-center gap-3">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            className="text-text-muted"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path
              d="M3 16l5-5 4 4 3-3 6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-body text-sm text-text-muted">
            Image / Photo Placeholder
          </span>
        </div>
      </div>

      <p className="mt-4 font-body text-sm text-text-muted">
        Caption or credit line goes here
      </p>
    </div>
  );
}
