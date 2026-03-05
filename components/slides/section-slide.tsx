export default function SectionSlide({ title }: { title: string }) {
  return (
    <div className="relative flex h-full w-full items-center px-24">
      {/* Background glow */}
      <div className="absolute left-32 h-72 w-72 rounded-full bg-accent opacity-[0.06] blur-[100px]" />

      <h1 className="relative max-w-3xl font-display text-7xl font-bold tracking-tight text-text">
        {title}
      </h1>
    </div>
  );
}
