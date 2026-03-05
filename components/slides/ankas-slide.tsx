export default function AngkasSlide() {
  return (
    <div className="flex h-full w-full items-center gap-16 px-24">
      {/* Left: logo */}
      <div className="flex flex-1 items-center justify-center">
        <div className="flex h-80 w-80 items-center justify-center rounded-2xl bg-white p-10">
          <img
            src="/angkas.png"
            alt="Angkas logo"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Right: description */}
      <div className="flex flex-1 flex-col">
        <span className="font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
          First Role
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold text-text">
          Angkas
        </h2>
        <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-text-muted">
          First data scientist. Operationalized terabytes of data that had just
          come through freshly built ETL pipelines &mdash; wrangling, modeling,
          and turning raw warehouse data into actionable insights.
        </p>
      </div>
    </div>
  );
}
