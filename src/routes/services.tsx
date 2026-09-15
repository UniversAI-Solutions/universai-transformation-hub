import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { 
  Search, 
  Wrench, 
  Handshake, 
  CheckCircle2, 
  Network, 
  Activity, 
  GraduationCap, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GradientOrbs } from "@/components/site/GradientOrbs";
import { CTAButton } from "@/components/site/CTAButton";
import { AIMSFeatureMatrix } from "@/components/site/AIMSFeatureMatrix";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our 3-Phase Consulting Methodology — UniversAI Solutions" },
      {
        name: "description",
        content:
          "UniversAI Solutions' 3-phase consulting methodology: Phase 01 Discovery (powered by UniversAIDS), Phase 02 Implementation, and Phase 03 Partnership (powered by UniversAIMS).",
      },
      { property: "og:title", content: "Consulting Methodology & Services — UniversAI Solutions" },
      {
        property: "og:description",
        content:
          "We diagnose to discover root cause, build targeted custom AI solutions, and partner long term to ensure sustained client ROI.",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICE_PHASES = [
  {
    id: "discovery",
    n: "01",
    tag: "PHASE 01",
    title: "Phase 01 — Discovery",
    tagline: "We diagnose to discover root causes which direct us to the right AI solutions.",
    poweredBy: "Powered by UniversAIDS (Univers-Artificial Intelligence Discovery System)",
    intro:
      "Most AI initiatives fail because companies build software for symptoms instead of systemic root causes. In Phase 01, our consultants conduct in-depth operational audits across your departments, ingesting interviews, SOPs, and complex reconciliation spreadsheets into UniversAIDS to map organizational friction with mathematical evidence.",
    capabilities: [
      {
        title: "Cross-Departmental Operational Audits",
        desc: "Ingest and analyze process maps, departmental SOPs, and spreadsheet trackers to detect workarounds.",
      },
      {
        title: "Stakeholder & Front-Line Discovery Interviews",
        desc: "Structured qualitative discovery sessions with team leads to surface hidden operational friction.",
      },
      {
        title: "Topological Friction & Bottleneck Mapping",
        desc: "Leverage UniversAIDS to visualize inter-departmental dependencies, data silos, and systemic choke points.",
      },
      {
        title: "KPI-Based Success & ROI Modeling",
        desc: "Establish verified baseline metrics (cycle times, error rates, financial leakage) and forecast tangible ROI.",
      },
      {
        title: "Targeted AI Solution Blueprint",
        desc: "Deliver a boardroom-ready intervention roadmap specifying the exact custom AI systems needed.",
      },
      {
        title: "Executive Readiness & Governance Advisory",
        desc: "Advising C-suite leadership on sovereign data protocols, risk minimization, and change management.",
      },
    ],
    deliverables: [
      "UniversAIDS Topological Friction Map",
      "Executive ROI & Financial Payback Model",
      "Targeted AI System Architecture Blueprint",
      "Department Readiness & Risk Assessment",
    ],
    cta: "Schedule a Phase 01 Discovery Consultation",
  },
  {
    id: "implementation",
    n: "02",
    tag: "PHASE 02",
    title: "Phase 02 — Implementation",
    tagline: "We engineer custom, enterprise-grade AI systems that integrate directly into your workflows.",
    poweredBy: "Bespoke Multi-Agent Architecture, RAG & Native Core System Connectors",
    intro:
      "Once root causes are diagnosed, our engineering team designs, builds, and deploys custom AI systems tailored specifically to your data ecosystem. We don't deploy generic wrappers; we build bespoke intelligent pipelines that integrate seamlessly with your ERP, POS, CRM, and internal databases.",
    capabilities: [
      {
        title: "Custom LLM & Multi-Agent Development",
        desc: "Domain-specific agentic pipelines, reasoning loops, and fine-tuned models engineered for high accuracy.",
      },
      {
        title: "Enterprise RAG & Knowledge Automation",
        desc: "Secure vector retrieval pipelines operating over contracts, regulatory filings, and complex company manuals.",
      },
      {
        title: "Core Enterprise System Integration",
        desc: "Bi-directional connectors for SAP, Microsoft Dynamics, Salesforce, Odoo, custom POS systems, and core banking rails.",
      },
      {
        title: "Intelligent Workflow & Reconciler Automation",
        desc: "Automated data extraction and cross-checking replacing manual multi-tab spreadsheet reconciliations.",
      },
      {
        title: "Predictive Decision Support Engines",
        desc: "Algorithmic intelligence for inventory replenishment, fraud triage, tenant scoring, and credit risk.",
      },
      {
        title: "Computer Vision & OCR Document Pipelines",
        desc: "Automated extraction and classification of physical waybills, receipts, invoices, and legal documentation.",
      },
    ],
    deliverables: [
      "Production-Ready Custom AI System",
      "Bi-Directional ERP / POS / CRM Connectors",
      "Rigorous Test Suites & Fallback Guardrails",
      "Staff Operational UI & Workflow Dashboard",
    ],
    cta: "Inquire About Phase 02 Implementation",
  },
  {
    id: "partnership",
    n: "03",
    tag: "PHASE 03",
    title: "Phase 03 — Partnership",
    tagline: "We partner long-term to ensure systems remain reliable, optimized, and delivering measurable ROI.",
    poweredBy: "Powered by UniversAIMS (Univers-Artificial Intelligence Management System)",
    intro:
      "We believe deployment is only the beginning of value creation. In Phase 03, UniversAI acts as your dedicated long-term partner. We monitor and manage deployed systems using our proprietary UniversAIMS software, optimize token costs, conduct intensive team capacity building, and align ongoing performance with your business growth.",
    capabilities: [
      {
        title: "24/7 AI Telemetry & Observability via UniversAIMS",
        desc: "Continuous surveillance of inference uptime, response latency, semantic drift, and error spikes.",
      },
      {
        title: "Team Training & Capacity Building",
        desc: "Role-specific training cohorts and hands-on workshops ensuring your team adopts and masters the new systems.",
      },
      {
        title: "Token Optimization & Quota Lifecycle Management",
        desc: "Prompt caching and intelligent routing reducing API burn rates, alongside automated vendor re-subscription.",
      },
      {
        title: "Drift Mitigation & Model Retraining",
        desc: "Continuous model updates and tuning as your business patterns, customer queries, and products evolve.",
      },
      {
        title: "Vendor Change & Upstream Deprecation Absorption",
        desc: "Our engineers immediately handle upstream API changes, schema breakages, or vendor updates with zero client downtime.",
      },
      {
        title: "Monthly Board-Grade KPI Reviews",
        desc: "Regular executive strategy reviews reconciling audited time savings, cost reductions, and identifying new opportunities.",
      },
    ],
    deliverables: [
      "Live UniversAIMS Telemetry & Management Access",
      "Front-Line Team Training Modules & Playbooks",
      "Continuous Model Fine-Tuning & Patching",
      "Monthly Executive ROI & Performance Statements",
    ],
    cta: "Discuss Long-Term Partnership Models",
  },
];

function ServicesPage() {
  const [activeTab, setActiveTab] = useState("discovery");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && SERVICE_PHASES.some((p) => p.id === hash)) {
        setActiveTab(hash);
        setTimeout(() => {
          document.getElementById("phase-details")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const activePhase = SERVICE_PHASES.find((p) => p.id === activeTab) || SERVICE_PHASES[0];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-hero text-center">
        <GradientOrbs />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-primary-glow">
              Consulting Methodology
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-8 animate-fade-up">
            Diagnose. Build. <br />
            <span className="text-gradient">Partner Long-Term.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
            We diagnose to discover the root cause, which directs us to the right AI solutions to intervene with. 
            After engineering, we stick with and partner with our clients to ensure sustained, measurable ROI.
          </p>
        </div>
      </section>

      {/* 3 Phases Selector */}
      <section id="phase-details" className="relative pb-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {SERVICE_PHASES.map((p) => {
              const isSelected = activeTab === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className={`p-6 rounded-3xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? "border-primary bg-surface shadow-xl"
                      : "border-border/70 bg-surface/30 hover:border-border hover:bg-surface/50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-mono text-xs font-semibold ${isSelected ? "text-primary-glow" : "text-muted-foreground"}`}>
                        {p.tag}
                      </span>
                      {isSelected && (
                        <span className="h-2 w-2 rounded-full bg-primary-glow animate-ping" />
                      )}
                    </div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-2">
                      {p.title}
                    </h3>
                  </div>
                  <div className="text-xs text-muted-foreground mt-4 truncate">
                    {p.poweredBy}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Phase Full Detail View */}
          <div className="rounded-3xl border border-border/80 bg-card-gradient p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl mb-12">
              <div className="inline-block text-xs font-mono text-primary-glow font-semibold uppercase tracking-wider mb-2">
                {activePhase.poweredBy}
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
                {activePhase.title}
              </h2>
              <p className="text-base md:text-lg text-foreground/90 font-medium mb-4 leading-relaxed">
                {activePhase.tagline}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {activePhase.intro}
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="mb-12">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-6">
                Key Deliverables & Methodological Focus
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activePhase.capabilities.map((c, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-surface/50 border border-border/60">
                    <h5 className="font-display text-base font-medium text-foreground mb-2">
                      {c.title}
                    </h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Banner */}
            <div className="pt-8 border-t border-border/60 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-primary-glow block mb-3">
                  Verified Outputs & Engagements
                </span>
                <div className="flex flex-wrap gap-3">
                  {activePhase.deliverables.map((d, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-background/80 border border-border px-3 py-1.5 text-xs text-foreground font-mono"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <CTAButton to="/work-with-us">{activePhase.cta}</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 03 Deep Dive (AIMS Feature Matrix) */}
      <AIMSFeatureMatrix />
    </SiteLayout>
  );
}
