const allTools = ["HQ", "Claude Code", "Slack", "Notion", "Linear", "Figma", "GitHub"];

const layers = [
  {
    label: "Client",
    tools: ["Notion", "Claude Code", "HQ", "Slack"],
  },
  {
    label: "Business",
    tools: ["Notion", "Claude Code", "HQ", "Slack"],
  },
  {
    label: "Product",
    tools: ["Linear", "Figma", "GitHub", "Claude Code", "HQ", "Slack"],
  },
  {
    label: "Tech",
    tools: ["GitHub", "Linear", "Figma", "Claude Code", "HQ", "Slack"],
  },
];

export default function ToolingOverviewSlide() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-24">
      <span className="font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
        Tooling
      </span>
      <h2 className="mt-3 font-display text-4xl font-bold text-text">
        Where Each Layer Lives
      </h2>

      <div className="mt-16 grid grid-cols-4 gap-6">
        {layers.map((layer) => (
          <div
            key={layer.label}
            className="flex flex-col rounded-xl border border-border bg-bg-card px-6 py-8"
          >
            <span className="font-display text-xl font-bold text-text">
              {layer.label}
            </span>
            <div className="mt-auto flex flex-col gap-2 pt-6">
              {allTools.map((tool) => {
                const active = layer.tools.includes(tool);
                if (!active) return <div key={tool} className="h-[2.25rem]" />;
                if (tool === "HQ") {
                  return (
                    <span
                      key={tool}
                      className="rounded-lg bg-orange-500/15 px-4 py-2 font-body text-sm font-medium text-orange-400"
                    >
                      HQ{" "}
                      <span className="text-xs font-normal text-orange-400/60">
                        internal tool
                      </span>
                    </span>
                  );
                }
                if (tool === "Claude Code") {
                  return (
                    <div key={tool} className="flex flex-col gap-1">
                      <span className="rounded-lg bg-orange-500/10 px-4 py-2 font-body text-sm font-medium text-orange-400">
                        Claude Code
                      </span>
                      <span className="pl-4 font-body text-[0.65rem] text-orange-400/50">
                        + skills
                      </span>
                    </div>
                  );
                }
                return (
                  <span
                    key={tool}
                    className="rounded-lg bg-bg px-4 py-2 font-body text-sm text-accent"
                  >
                    {tool}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
