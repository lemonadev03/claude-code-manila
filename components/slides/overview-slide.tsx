const items = [
  "First topic or section overview",
  "Second topic or key concept",
  "Third topic or demonstration",
  "Fourth topic or wrap-up",
];

export default function OverviewSlide() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-24">
      <h2 className="font-display text-4xl font-bold text-text">
        What We&apos;ll Cover
      </h2>

      <ul className="mt-12 flex flex-col gap-6">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-5">
            <span className="font-display text-3xl font-bold leading-none text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-body text-xl text-text-muted pt-1">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
