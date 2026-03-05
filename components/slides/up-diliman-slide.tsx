export default function UPDilimanSlide() {
  return (
    <div className="flex h-full w-full items-center gap-16 px-24">
      {/* Left: logo */}
      <div className="flex flex-1 items-center justify-center">
        <div className="relative flex h-64 w-64 items-center justify-center rounded-2xl border border-border bg-bg-card overflow-hidden">
          <img
            src="/upd.png"
            alt="U.P. Diliman Logo"
            className="h-full w-full object-contain p-4"
          />
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
