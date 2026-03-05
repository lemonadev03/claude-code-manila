const items = [
  { label: "What's Possible with Claude Code", desc: "The Bscale story — 3 devs, enterprise clients, startup speed" },
  { label: "Designing a Claude Code-First System", desc: "Top-down architecture and processes" },
  { label: "Leads: Processes & Tooling", desc: "How leads orchestrate work with Claude Code" },
  { label: "Dev Workflows & Tooling", desc: "The deep dive — day-to-day developer workflows" },
  { label: "Takeaways", desc: "What to bring home" },
];

export default function AgendaSlide() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-24">
      <span className="font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
        Agenda
      </span>
      <h2 className="mt-3 font-display text-4xl font-bold text-text">
        What We&apos;ll Cover
      </h2>

      <ul className="mt-14 flex flex-col gap-7">
        {items.map((item, i) => (
          <li key={i} className="flex items-baseline gap-6">
            <span className="font-display text-2xl font-bold leading-none text-accent/50">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-display text-xl font-semibold text-text">
                {item.label}
              </span>
              <span className="font-body text-sm text-text-muted">
                {item.desc}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
