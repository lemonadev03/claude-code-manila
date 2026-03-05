export default function TitleSlide() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-16">
      {/* Subtle accent glow */}
      <div className="absolute top-1/4 h-64 w-[32rem] -translate-y-1/2 rounded-full bg-accent opacity-[0.07] blur-[120px]" />

      <h1 className="relative max-w-4xl text-center font-display text-6xl font-bold leading-[1.1] tracking-tight text-text">
        Shipping <span className="text-accent">Enterprise Software</span> at{" "}
        <span className="text-accent">Startup Speed</span> with{" "}
        <span className="text-orange-400">Claude Code</span>
      </h1>

      <div className="mt-8 h-1 w-24 rounded-full bg-accent" />

      <div className="mt-12 flex flex-col items-center gap-2 font-body">
        <span className="text-lg font-semibold text-text">Lesmon Saluta</span>
        <span className="text-sm text-text-muted">
          CEO &amp; Co-founder
        </span>
        <span className="text-sm font-medium tracking-wide text-accent/80">
          Bscale Labs
        </span>
      </div>
    </div>
  );
}
