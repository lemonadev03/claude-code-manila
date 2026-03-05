export default function PlaceholderSlide({
  section,
  title,
  body,
}: {
  section: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex h-full w-full flex-col justify-center px-24">
      <span className="font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
        {section}
      </span>
      <h2 className="mt-3 font-display text-4xl font-bold text-text">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-muted">
        {body}
      </p>

      <div className="mt-14 flex h-48 items-center justify-center rounded-xl border border-dashed border-border bg-bg-card/30">
        <span className="font-body text-sm italic text-text-muted/50">
          Content coming soon
        </span>
      </div>
    </div>
  );
}
