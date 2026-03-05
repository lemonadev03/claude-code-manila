export default function ClosingSlide() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-16">
      {/* Accent glow behind heading */}
      <div className="absolute top-1/3 h-48 w-96 -translate-y-1/2 rounded-full bg-accent opacity-10 blur-[100px]" />

      <h1 className="relative font-display text-6xl font-bold text-text">
        Thank You
      </h1>

      <div className="relative mt-10 flex flex-col items-center gap-3 font-body text-lg text-text-muted">
        <span>speaker@example.com</span>
        <span>@speakerhandle</span>
        <span>github.com/speaker</span>
      </div>
    </div>
  );
}
