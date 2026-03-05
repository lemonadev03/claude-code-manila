export default function TitleSlide() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-16">
      <h1 className="font-display text-6xl font-bold tracking-tight text-text">
        Presentation Title
      </h1>

      <div className="mt-6 h-1 w-24 rounded-full bg-accent" />

      <p className="mt-6 max-w-2xl text-center font-body text-xl text-text-muted">
        A subtitle describing the talk goes here — keep it short and punchy.
      </p>

      <div className="mt-16 flex flex-col items-center gap-1 font-body text-sm text-text-muted">
        <span>Speaker Name</span>
        <span>March 2026</span>
      </div>
    </div>
  );
}
