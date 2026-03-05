export default function ScreenshotSlide() {
  return (
    <div className="flex h-full w-full items-center justify-center px-16">
      {/* Browser-style frame */}
      <div className="flex w-full max-w-5xl flex-col rounded-xl border border-border bg-bg-card overflow-hidden shadow-lg shadow-black/20">
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-border px-5 py-3">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-text-muted/30" />
            <div className="h-3 w-3 rounded-full bg-text-muted/30" />
            <div className="h-3 w-3 rounded-full bg-text-muted/30" />
          </div>
          <div className="mx-auto flex h-7 w-80 items-center justify-center rounded-md bg-bg px-3">
            <span className="font-body text-xs text-text-muted">
              https://example.com
            </span>
          </div>
          <div className="w-[52px]" />
        </div>

        {/* Content area */}
        <div className="relative flex h-[28rem] items-center justify-center">
          <svg
            className="absolute inset-0 h-full w-full opacity-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="screen-grid"
                x="0"
                y="0"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#screen-grid)" />
          </svg>

          <div className="relative flex flex-col items-center gap-3">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              className="text-text-muted"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 21h8M12 17v4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-body text-sm text-text-muted">
              App Screenshot / Demo Placeholder
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
