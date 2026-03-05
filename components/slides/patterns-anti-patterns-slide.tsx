const patterns = [
  {
    title: "claude.md",
    description: "Encode team context and instructions in a persistent file. Let AI reference your conventions without constant prompting.",
    icon: "📄",
  },
  {
    title: "Transform Non-AI Workflows",
    description: "Take existing processes and redesign them for AI-first execution. This unlocks efficiency without throwing away what works.",
    icon: "🔄",
  },
  {
    title: "Intentional Handoffs",
    description: "Define clear boundaries between AI and human decision-making. Know when to automate and when to keep humans in control.",
    icon: "🤝",
  },
];

export default function PatternsAntiPatternsSlide() {
  return (
    <div className="flex h-full w-full flex-col justify-center px-24">
      <div className="mb-12">
        <span className="font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
          Dev Workflows
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold text-text">
          Patterns & Anti-Patterns
        </h2>
        <p className="mt-3 font-body text-lg text-text-muted">
          What works, what doesn't, and the lessons we learned the hard way.
        </p>
      </div>

      {/* 3-column card grid */}
      <div className="grid grid-cols-3 gap-6">
        {patterns.map((pattern) => (
          <div
            key={pattern.title}
            className="relative flex flex-col rounded-2xl border border-border bg-gradient-to-b from-bg-card to-bg-card/50 p-8 backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="text-4xl mb-4">{pattern.icon}</div>

            {/* Title */}
            <h3 className="font-display text-xl font-bold text-text mb-3">
              {pattern.title}
            </h3>

            {/* Description */}
            <p className="font-body text-sm leading-relaxed text-text-muted">
              {pattern.description}
            </p>

            {/* Accent line at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
}
