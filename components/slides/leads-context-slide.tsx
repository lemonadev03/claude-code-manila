"use client";

import { useState } from "react";

const cards = [
  {
    title: "Infra → Railway",
    desc: "Simple, fast deploys. No DevOps overhead.",
    color: "text-accent border-accent/30",
  },
  {
    title: "Auth → BetterAuth",
    desc: "Drop-in authentication that just works.",
    color: "text-accent border-accent/30",
  },
  {
    title: "Framework → Next.js",
    desc: "Always. Full-stack React with great Claude Code support.",
    color: "text-accent border-accent/30",
  },
  {
    title: "AI → Python + Pydantic AI",
    desc: "Python when we need AI functionality. Pydantic AI for frameworks — or we build our own.",
    color: "text-orange-400 border-orange-400/30",
  },
  {
    title: "DB → Postgres on Railway",
    desc: "Boring, reliable, scales. No surprises.",
    color: "text-accent border-accent/30",
  },
  {
    title: "Build > Install",
    desc: "Skip external dependencies — with Claude Code we can build it faster internally than wrangling someone else's library.",
    color: "text-orange-400 border-orange-400/30",
  },
];

export default function LeadsContextSlide() {
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % cards.length);
  const prev = () => setActive((a) => (a - 1 + cards.length) % cards.length);

  return (
    <div className="flex h-full w-full items-center gap-16 px-24">
      {/* Left: heading + nav */}
      <div className="flex flex-1 flex-col">
        <span className="font-body text-sm font-medium uppercase tracking-[0.25em] text-accent">
          System Design
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold text-text">
          High-Level
          <br />
          Operational Systems
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
      </div>

      {/* Right: stacked cards */}
      <div className="relative flex flex-1 items-center justify-center">
        <div className="relative h-[20rem] w-[22rem]">
          {cards.map((card, i) => {
            const offset = i - active;
            const isActive = offset === 0;
            const isBehind = offset > 0 || (offset < 0 && offset < -cards.length + 3);
            const stackIndex = offset >= 0 ? offset : cards.length + offset;
            const visible = stackIndex <= 3;

            if (!visible) return null;

            return (
              <div
                key={card.title}
                className={`absolute inset-0 flex flex-col justify-between rounded-2xl border bg-bg-card p-10 transition-all duration-300 ${
                  isActive ? card.color : "border-border"
                }`}
                style={{
                  zIndex: cards.length - stackIndex,
                  transform: `translateY(${stackIndex * 16}px) scale(${1 - stackIndex * 0.04})`,
                  opacity: isActive ? 1 : 0.6 - stackIndex * 0.15,
                }}
              >
                <div>
                  <span className="font-body text-xs text-text-muted/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`mt-2 font-display text-3xl font-bold ${
                      isActive ? card.color.split(" ")[0] : "text-text/40"
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  className={`font-body text-base leading-relaxed transition-opacity duration-300 ${
                    isActive ? "text-text-muted opacity-100" : "opacity-0"
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
