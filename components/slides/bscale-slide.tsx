export default function BscaleSlide() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-16">
      {/* Accent glow */}
      <div className="absolute top-1/3 h-56 w-[28rem] -translate-y-1/2 rounded-full bg-accent opacity-[0.08] blur-[120px]" />

      <span className="relative font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
        Present Day
      </span>

      <h1 className="relative mt-5 font-display text-6xl font-bold tracking-tight text-text">
        Bscale Labs
      </h1>

      <div className="relative mt-8 h-1 w-16 rounded-full bg-accent" />

      <p className="relative mt-8 max-w-xl text-center font-body text-lg leading-relaxed text-text-muted">
        CEO &amp; Co-founder.
        <br />
        Building the next thing.
      </p>
    </div>
  );
}
