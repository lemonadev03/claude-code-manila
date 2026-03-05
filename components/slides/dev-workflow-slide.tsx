"use client";

import { useState } from "react";

const steps = [
  {
    title: "Check Linear Tickets",
    desc: "Claude Code pulls your assigned tickets and shows what's ready to work on.",
    tag: "Linear",
  },
  {
    title: "Pick a Ticket",
    desc: "Choose which task to implement — Claude Code reads the full context and acceptance criteria.",
    tag: "Linear",
  },
  {
    title: "Plan Mode",
    desc: "Gather all relevant data — codebase context, CLAUDE.md, related files. Map out the approach before writing a line.",
    tag: "Claude Code",
  },
  {
    title: "Code It Out",
    desc: "Claude Code writes the implementation across files, following project conventions and architecture.",
    tag: "Claude Code",
  },
  {
    title: "Test & Debug",
    desc: "Internal skill that creates tests, runs them, spots bugs, and fixes — all in one loop.",
    tag: "Skill",
  },
  {
    title: "Code Review via @claude",
    desc: "Tag @claude on GitHub for automated review — catches issues, suggests improvements, flags risks.",
    tag: "GitHub",
  },
  {
    title: "Ship the PR",
    desc: "Open a clean PR with summary, test results, and linked Linear ticket. Ready for human approval.",
    tag: "GitHub",
  },
  {
    title: "Auto-Generate Summary",
    desc: "Our internal tool checks changed Linear tickets and generates a summary you can edit — keeping your team in sync.",
    tag: "HQ",
  },
];

const tagColors: Record<string, string> = {
  Linear: "bg-accent/15 text-accent",
  "Claude Code": "bg-orange-500/15 text-orange-400",
  Skill: "bg-orange-500/15 text-orange-400",
  GitHub: "bg-accent/15 text-accent",
  HQ: "bg-orange-500/15 text-orange-400",
};

export default function DevWorkflowSlide() {
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % steps.length);
  const prev = () => setActive((a) => (a - 1 + steps.length) % steps.length);

  return (
    <div className="flex h-full w-full items-center gap-16 px-24">
      {/* Left: heading + nav */}
      <div className="flex flex-1 flex-col">
        <span className="font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
          Dev Workflows
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold text-text">
          Day-to-Day with
          <br />
          <span className="text-orange-400">Claude Code</span>
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
            {active + 1} / {steps.length}
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
          {steps.map((_, i) => (
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
          {steps.map((step, i) => {
            const offset = (i - active + steps.length) % steps.length;
            const visible = offset <= 3;

            if (!visible) return null;

            return (
              <div
                key={step.title}
                className={`absolute inset-0 flex flex-col justify-between rounded-2xl border bg-bg-card p-10 transition-all duration-300 ${
                  offset === 0 ? "border-accent/30" : "border-border"
                }`}
                style={{
                  zIndex: steps.length - offset,
                  transform: `translateY(${offset * 16}px) scale(${1 - offset * 0.04})`,
                  opacity: offset === 0 ? 1 : 0.6 - offset * 0.15,
                }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-text-muted/40">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`rounded-md px-2.5 py-1 font-body text-xs font-medium ${tagColors[step.tag]}`}>
                      {step.tag}
                    </span>
                  </div>
                  <h3
                    className={`mt-4 font-display text-2xl font-bold ${
                      offset === 0 ? "text-text" : "text-text/40"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className={`font-body text-base leading-relaxed transition-opacity duration-300 ${
                    offset === 0 ? "text-text-muted opacity-100" : "opacity-0"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
