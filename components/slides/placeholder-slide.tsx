export default function PlaceholderSlide({
  section,
  title,
  body,
  image,
}: {
  section: string;
  title: string;
  body: string;
  image?: string;
}) {
  return (
    <div className="flex h-full w-full items-center gap-12 px-24">
      {/* Left: text content */}
      <div className="flex flex-1 flex-col">
        <span className="font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
          {section}
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold text-text">
          {title}
        </h2>
        <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-text-muted">
          {body}
        </p>
      </div>

      {/* Right: image */}
      {image && (
        <div className="flex flex-1 items-center justify-center">
          <img
            src={image}
            alt={title}
            className="max-h-[70vh] w-auto rounded-xl object-contain"
          />
        </div>
      )}
    </div>
  );
}
