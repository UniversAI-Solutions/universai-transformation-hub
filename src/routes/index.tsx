import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Workflow,
  CheckCircle2,
  ChevronDown,
  Network,
  Activity,
  Compass,
  Globe2,
  Lock,
  Layers
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GradientOrbs } from "@/components/site/GradientOrbs";
import { CTAButton } from "@/components/site/CTAButton";
import { UniversAIDSSimulator } from "@/components/site/UniversAIDSSimulator";
import { AIMSFeatureMatrix } from "@/components/site/AIMSFeatureMatrix";
import { ROICalculatorModal } from "@/components/site/ROICalculatorModal";
import { PlanetIndustriesSection } from "@/components/site/PlanetIndustriesSection";
import { PartnerProgramSection } from "@/components/site/PartnerProgramSection";
import { CASE_LIST } from "@/data/case-studies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UniversAI Solutions — Enterprise AI Consulting & Operational Transformation" },
      {
        name: "description",
        content:
          "UniversAI Solutions Ltd is an AI-first enterprise consulting firm. We diagnose operational root causes, design custom AI systems, and partner long term to ensure sustained client ROI.",
      },
      { property: "og:title", content: "UniversAI Solutions — Enterprise AI Consulting Firm" },
      { property: "og:description", content: "Diagnose to discover root cause. Build targeted AI solutions. Partner long term for guaranteed ROI." },
    ],
  }),
  component: HomePage,
});

const CONSULTING_PHASES = [
  {
    n: "01",
    tag: "PHASE 01",
    title: "Phase 01 — Discovery",
    poweredBy: "Powered by UniversAIDS (Univers-Artificial Intelligence Discovery System)",
    body: "We audit your business, ingest fragmented spreadsheets, interviews, and SOPs into UniversAIDS, and map the systemic bottlenecks and root causes worth solving.",
    icon: Network,
    href: "/services",
    hash: "discovery",
  },
  {
    n: "02",
    tag: "PHASE 02",
    title: "Phase 02 — Implementation",
    poweredBy: "Custom LLMs, RAG & Native Core Connectors",
    body: "We engineer bespoke AI systems directly into your existing ERP, POS, CRM, and operational backbones with rigorous testing and zero generic wrappers.",
    icon: Workflow,
    href: "/services",
    hash: "implementation",
  },
  {
    n: "03",
    tag: "PHASE 03",
    title: "Phase 03 — Partnership",
    poweredBy: "Powered by UniversAIMS & Capacity Building",
    body: "Deployment is just the start. We continuously monitor and optimize systems using UniversAIMS, train your teams, and review monthly ROI so results compound.",
    icon: Compass,
    href: "/services",
    hash: "partnership",
  },
];

const FAQS = [
  {
    q: "How does UniversAI's consulting methodology work?",
    a: "We operate on a 3-phased intervention loop: Phase 01 (Discovery) where we diagnose operational root causes using our proprietary UniversAIDS system; Phase 02 (Implementation) where we engineer and integrate custom AI systems; and Phase 03 (Partnership) where we manage systems via UniversAIMS, train your staff, and guarantee long-term ROI.",
  },
  {
    q: "What are UniversAIDS and UniversAIMS?",
    a: "They are our proprietary software tools: UniversAIDS (Univers-Artificial Intelligence Discovery System) is used internally by our consultants in Phase 01 to extract evidence and map knowledge graphs. UniversAIMS (Univers-Artificial Intelligence Management System) is our management platform used in Phase 03 to monitor live systems, track token usage, and manage resubscriptions.",
  },
  {
    q: "What are the 8 Planetary Industries of UniversAI?",
    a: "The name UniversAI originates from the Universe + Artificial Intelligence. We structure our specialized consulting arms across 8 planetary sectors: Real Estate, Retail, Education, Agriculture, Transport & Logistics, Healthcare, Oil & Gas, and Finance.",
  },
  {
    q: "Who is accountable for AI decisions in your engagements?",
    a: "We adhere strictly to our core philosophy: Human-in-the-Loop. The AI core proposes, correlates, and surfaces connections across vast evidence, but qualified senior consultants evaluate, validate, and remain strictly accountable for final advisory outputs.",
  },
  {
    q: "How do we get started with an engagement?",
    a: "You can book an operational discovery consultation through our intake form or connect directly with our advisory leads on WhatsApp at +234 815 712 4750.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <MethodologyBanner />
      <UniversAIDSHighlight />
      <ThreeConsultingPhases />
      <PlanetIndustriesSection />
      <ROICalculatorModal />
      <AIMSFeatureMatrix />
      <PartnerProgramSection />
      <CaseStudies />
      <FAQSection />
      <FinalCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden bg-hero">
      <GradientOrbs />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur px-4 py-1.5 mb-8 animate-fade-in">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-primary-glow">
            Enterprise AI Consulting & Operational Transformation
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-8 animate-fade-up">
          Diagnose the root cause. <br />
          <span className="text-gradient font-normal">Build targeted AI solutions.</span> <br />
          Partner for long-term ROI.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          UniversAI Solutions Ltd bridges the gap between chaotic enterprise operations and boardroom clarity.
          We discover what's truly broken, build custom systems that fit real workflows, and stay as your long-term operating partner.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up mb-12" style={{ animationDelay: "0.25s" }}>
          <CTAButton to="/work-with-us">Book an AI Consultation</CTAButton>
          <CTAButton to="/platform" variant="outline">Our Proprietary Systems</CTAButton>
        </div>

        {/* 3 Pillars Summary Ticker */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8 border-t border-border/60 text-left">
          <div className="p-4 rounded-2xl bg-surface/40 border border-border/60 backdrop-blur">
            <span className="text-[10px] font-mono text-primary-glow uppercase tracking-wider font-bold block mb-1">
              Phase 01 · Discovery
            </span>
            <div className="font-display text-base font-semibold text-foreground">UniversAIDS Evidence Audits</div>
            <p className="text-xs text-muted-foreground mt-0.5">Topological knowledge graphs & root-cause friction mapping</p>
          </div>

          <div className="p-4 rounded-2xl bg-surface/40 border border-border/60 backdrop-blur">
            <span className="text-[10px] font-mono text-primary-glow uppercase tracking-wider font-bold block mb-1">
              Phase 02 · Implementation
            </span>
            <div className="font-display text-base font-semibold text-foreground">Custom System Engineering</div>
            <p className="text-xs text-muted-foreground mt-0.5">Bespoke LLM agents & bi-directional ERP/POS integrations</p>
          </div>

          <div className="p-4 rounded-2xl bg-surface/40 border border-border/60 backdrop-blur">
            <span className="text-[10px] font-mono text-primary-glow uppercase tracking-wider font-bold block mb-1">
              Phase 03 · Partnership
            </span>
            <div className="font-display text-base font-semibold text-foreground">UniversAIMS Management</div>
            <p className="text-xs text-muted-foreground mt-0.5">Continuous telemetry, team training & sustained ROI reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodologyBanner() {
  return (
    <section className="relative py-20 bg-surface/25 border-y border-border">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block text-xs uppercase tracking-[0.2em] text-primary-glow font-mono font-semibold mb-3">
          Our Fundamental Operating Tenet
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-4">
          Human-in-the-Loop Consulting Rigor
        </h2>
        <p className="text-muted-foreground text-base max-w-3xl mx-auto leading-relaxed">
          "The AI core proposes, correlates, and surfaces connections across vast evidence; human consultants evaluate, validate, and remain strictly accountable for final advisory outputs and strategic decisions."
        </p>
      </div>
    </section>
  );
}

function UniversAIDSHighlight() {
  return (
    <section className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow mb-4">
              <Network className="h-3.5 w-3.5" />
              Phase 01 Internal Proprietary Tool
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight">
              Root-Cause Discovery via <span className="text-gradient">UniversAIDS</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mt-3">
              UniversAIDS (Univers-Artificial Intelligence Discovery System) is our internal tool used in Phase 01 to ingest multi-format evidence (Word SOPs, Excel sheets, interviews) and synthesize organizational bottlenecks with mathematical citations.
            </p>
          </div>
          <Link
            to="/platform"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-glow hover:underline shrink-0"
          >
            Explore Proprietary Tool Architecture <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Live Simulator Preview */}
        <UniversAIDSSimulator />
      </div>
    </section>
  );
}

function ThreeConsultingPhases() {
  return (
    <section className="relative py-28 overflow-hidden bg-surface/20 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-4">The Consulting Methodology</p>
          <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight mb-6">
            The Three Phases of <br />
            <span className="text-gradient">UniversAI Intervention</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every engagement follows a disciplined, evidence-backed lifecycle designed to eliminate risk and establish lasting operational leverage.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {CONSULTING_PHASES.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.n}
                className="group relative rounded-3xl border border-border/80 bg-card-gradient p-8 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-primary-glow font-bold tracking-wider">
                      {p.tag}
                    </span>
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-glow group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-medium text-foreground mb-2">
                    {p.title}
                  </h3>
                  <div className="text-xs font-mono text-primary-glow mb-4">
                    {p.poweredBy}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.body}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-border/60">
                  <Link
                    to={p.href}
                    hash={p.hash}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-primary-glow transition-colors"
                  >
                    View Phase Methodology <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-4">Client Impact</p>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight">
              Enterprise Outcomes in Action
            </h2>
          </div>
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-glow hover:underline">
            View All Engagement Studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CASE_LIST.slice(0, 3).map((study) => (
            <Link
              key={study.slug}
              to="/case-studies/$slug"
              params={{ slug: study.slug }}
              className="group rounded-3xl border border-border/80 bg-card-gradient p-6 hover:border-primary/50 transition-all shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-surface">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-primary-glow mb-2">
                  {study.tag}
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-2 group-hover:text-primary-glow transition-colors">
                  {study.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {study.summary}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-foreground">
                <span>Read Full Case Study</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 bg-surface/20 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-4">Methodology & Engagement</p>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-border/80 bg-card-gradient overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-display text-lg font-medium text-foreground"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180 text-primary-glow" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-hero text-center">
      <GradientOrbs />
      <div className="relative max-w-4xl mx-auto px-6">
        <h2 className="font-display text-5xl md:text-7xl font-light tracking-tight mb-8">
          Ready to discover what's <br />
          <span className="text-gradient">truly slowing your business?</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Book an operational discovery consultation with our senior consulting partners, or connect with our team on WhatsApp (+234 815 712 4750).
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CTAButton to="/work-with-us">Book AI Consultation</CTAButton>
          <CTAButton to="/services" variant="outline">Explore 3 Phases</CTAButton>
        </div>
      </div>
    </section>
  );
}
