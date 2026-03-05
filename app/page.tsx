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
import SystemDesignSlide from "@/components/slides/system-design-slide";
import ToolingOverviewSlide from "@/components/slides/tooling-overview-slide";
import LeadsContextSlide from "@/components/slides/leads-context-slide";
import LeadsOverviewSlide from "@/components/slides/leads-overview-slide";
import DevWorkflowSlide from "@/components/slides/dev-workflow-slide";
import DevToolingSlide from "@/components/slides/dev-tooling-slide";
import PatternsAntiPatternsSlide from "@/components/slides/patterns-anti-patterns-slide";
import PlaceholderSlide from "@/components/slides/placeholder-slide";
import TakeawayDocumentationSlide from "@/components/slides/takeaway-documentation-slide";
import TakeawayTrainingSlide from "@/components/slides/takeaway-training-slide";
import CTASlide from "@/components/slides/cta-slide";
import BonusSlide from "@/components/slides/bonus-slide";
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
  <SystemDesignSlide key="system-design" />,
  <ToolingOverviewSlide key="tooling-overview" />,

  // Section 3: Leads — Client & Business
  <LeadsContextSlide key="leads-context" />,
  <SectionSlide key="sec-leads" title="Leads: Processes & Tooling" />,
  <PlaceholderSlide key="leads-1" section="Client & Business" title="Notion" body="Spec out client details — doubles as our CRM." image="/notion1.png" />,
  <PlaceholderSlide key="leads-2" section="Client & Business" title="Claude Code PRD" body="Generate structured PRDs from client specs using the product-thinking skill." image="/notion2.png" />,

  // Section 4: Dev Workflows & Tooling (the beef)
  <SectionSlide key="sec-devs" title="Dev Workflows & Tooling" />,
  <DevWorkflowSlide key="devs-1" />,
  <PlaceholderSlide key="devs-standup" section="Dev Workflows" title="Standup" body="" image="/standup01.jpeg" />,
  <DevToolingSlide key="devs-2" />,
  <PatternsAntiPatternsSlide key="devs-3" />,

  // Section 5: Takeaways
  <SectionSlide key="sec-takeaways" title="Takeaways" />,
  <TakeawayDocumentationSlide key="takeaway-doc" />,
  <TakeawayTrainingSlide key="takeaway-train" />,
  <CTASlide key="cta" />,
  <BonusSlide key="bonus" />,

  // Closing
  <ClosingSlide key="closing" />,
];

export default function Home() {
  return <SlideDeck slides={slides} />;
}
