const items = [
  {
    title: "Notion",
    desc: "Spec out client details — doubles as our CRM.",
    layer: "Client & Business",
  },
  {
    title: "Claude Code PRD",
    desc: "Generate structured PRDs from client specs using the product-thinking skill.",
    layer: "Client & Business",
  },
  {
    title: "Linear Workflows",
    desc: "Break PRDs into epics, tasks, and subtasks with clear acceptance criteria.",
    layer: "Product",
  },
  {
    title: "CLAUDE.md Architecture",
    desc: "Project-level context files so Claude Code understands the full system.",
    layer: "Product & Tech",
  },
  {
    title: "Code Review & QA",
    desc: "Review AI-generated PRs with the same rigor as human-written code.",
    layer: "Tech",
  },
];

export default function LeadsOverviewSlide() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-24">
      <span className="font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
        Leads
      </span>
      <h2 className="mt-3 font-display text-4xl font-bold text-text">
        Processes &amp; Tooling
      </h2>

      <ul className="mt-12 flex flex-col gap-5">
        {items.map((item, i) => (
          <li key={i} className="flex items-baseline gap-5">
            <span className="font-display text-xl font-bold leading-none text-accent/50">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-lg font-semibold text-text">
                  {item.title}
                </span>
                <span className="font-body text-xs text-text-muted/50">
                  {item.layer}
                </span>
              </div>
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
