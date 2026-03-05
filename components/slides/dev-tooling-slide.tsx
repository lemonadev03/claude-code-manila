"use client";

import { useState } from "react";

const cards = [
  {
    title: "Git Worktrees",
    desc: "Run multiple branches simultaneously — let Claude Code work on one while you review another. No more stashing.",
    color: "text-accent border-accent/30",
  },
  {
    title: "Voice Mode",
    desc: "Speech-to-text for prompting Claude Code — talk through your intent instead of typing it. Faster for complex instructions.",
    color: "text-accent border-accent/30",
  },
  {
    title: "Claude Code App or Terminal",
    desc: "Use the dedicated Claude Code app for a focused experience, or run it straight in your terminal — whatever fits your flow.",
    color: "text-orange-400 border-orange-400/30",
  },
];

export default function DevToolingSlide() {
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % cards.length);
  const prev = () => setActive((a) => (a - 1 + cards.length) % cards.length);

  return (
    <div className="flex h-full w-full items-center gap-16 px-24">
      {/* Left: heading + nav */}
      <div className="flex flex-1 flex-col">
        <span className="font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
          Dev Workflows
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold text-text">
          Dev Tooling Stack
        </h2>

        <div className="mt-10 flex items-center gap-4">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-card text-text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="font-body text-sm text-text-muted">
            {active + 1} / {cards.length}
          </span>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-card text-text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Step indicator dots */}
        <div className="mt-6 flex gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === active ? "w-6 bg-accent" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right: stacked cards */}
      <div className="relative flex flex-1 items-center justify-center">
        <div className="relative h-[22rem] w-[24rem]">
          {cards.map((card, i) => {
            const offset = (i - active + cards.length) % cards.length;
            const visible = offset <= 3;

            if (!visible) return null;

            return (
              <div
                key={card.title}
                className={`absolute inset-0 flex flex-col justify-between rounded-2xl border bg-bg-card p-10 transition-all duration-300 ${
                  offset === 0 ? card.color : "border-border"
                }`}
                style={{
                  zIndex: cards.length - offset,
                  transform: `translateY(${offset * 16}px) scale(${1 - offset * 0.04})`,
                  opacity: offset === 0 ? 1 : 0.6 - offset * 0.15,
                }}
              >
                <div>
                  <span className="font-body text-xs text-text-muted/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`mt-4 font-display text-2xl font-bold ${
                      offset === 0 ? card.color.split(" ")[0] : "text-text/40"
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  className={`font-body text-base leading-relaxed transition-opacity duration-300 ${
                    offset === 0 ? "text-text-muted opacity-100" : "opacity-0"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
