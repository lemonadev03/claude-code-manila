import SlideDeck from "@/components/slide-deck";
import TitleSlide from "@/components/slides/title-slide";
import AgendaSlide from "@/components/slides/agenda-slide";
import SectionSlide from "@/components/slides/section-slide";
import UPDilimanSlide from "@/components/slides/up-diliman-slide";
import AnkasSlide from "@/components/slides/ankas-slide";
import VentureStudioSlide from "@/components/slides/venture-studio-slide";
import BscaleTransitionSlide from "@/components/slides/bscale-transition-slide";
import BscaleModelSlide from "@/components/slides/bscale-model-slide";
import BscaleResultsSlide from "@/components/slides/bscale-results-slide";
import ClaudeCodeRevealSlide from "@/components/slides/claude-code-reveal-slide";
import PlaceholderSlide from "@/components/slides/placeholder-slide";
import ClosingSlide from "@/components/slides/closing-slide";

const slides = [
  // Intro
  <TitleSlide key="title" />,
  <AgendaSlide key="agenda" />,

  // About Me
  <SectionSlide key="about-me" title="About Me" />,
  <UPDilimanSlide key="up-diliman" />,
  <AnkasSlide key="ankas" />,
  <VentureStudioSlide key="venture-studio" />,

  // Bscale Labs deep-dive
  <BscaleTransitionSlide key="bscale-transition" />,
  <BscaleModelSlide key="bscale-model" />,
  <BscaleResultsSlide key="bscale-results" />,
  <ClaudeCodeRevealSlide key="claude-code-reveal" />,

  // Section 2: Designing a Claude Code-First System
  <SectionSlide key="sec-system" title="Designing a Claude Code-First System" />,
  <PlaceholderSlide key="system-1" section="System Design" title="Top-Down Architecture" body="How we structure projects, repos, and CLAUDE.md files so Claude Code understands the full system from day one." />,
  <PlaceholderSlide key="system-2" section="System Design" title="Processes That Scale" body="The workflows and conventions that let three devs move like thirty — without stepping on each other." />,

  // Section 3: Leads — Processes & Tooling
  <SectionSlide key="sec-leads" title="Leads: Processes & Tooling" />,
  <PlaceholderSlide key="leads-1" section="Leads" title="Orchestrating Work" body="How leads break down enterprise requirements into Claude Code-ready tasks and keep the pipeline flowing." />,
  <PlaceholderSlide key="leads-2" section="Leads" title="Lead Tooling Stack" body="The specific tools and integrations leads use to manage context, review output, and ship decisions fast." />,

  // Section 4: Dev Workflows & Tooling (the beef)
  <SectionSlide key="sec-devs" title="Dev Workflows & Tooling" />,
  <PlaceholderSlide key="devs-1" section="Dev Workflows" title="Day-to-Day with Claude Code" body="What a typical dev session looks like — from pulling a task to pushing a PR, all through Claude Code." />,
  <PlaceholderSlide key="devs-2" section="Dev Workflows" title="Dev Tooling Stack" body="Editor setup, CLI workflows, prompt patterns, and the extensions that make everything click." />,
  <PlaceholderSlide key="devs-3" section="Dev Workflows" title="Patterns & Anti-Patterns" body="What works, what doesn't, and the lessons we learned the hard way shipping with AI-first workflows." />,

  // Section 5: Takeaways
  <SectionSlide key="sec-takeaways" title="Takeaways" />,
  <PlaceholderSlide key="takeaways-1" section="Takeaways" title="What to Bring Home" body="The key principles, tools, and mindset shifts you can apply to your own team starting tomorrow." />,

  // Closing
  <ClosingSlide key="closing" />,
];

export default function Home() {
  return <SlideDeck slides={slides} />;
}
