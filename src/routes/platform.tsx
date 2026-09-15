import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Network, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  RotateCcw,
  Compass,
  Activity,
  Workflow,
  Sparkles,
  Search
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GradientOrbs } from "@/components/site/GradientOrbs";
import { CTAButton } from "@/components/site/CTAButton";
import { UniversAIDSSimulator } from "@/components/site/UniversAIDSSimulator";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Proprietary Software Systems — UniversAIDS & UniversAIMS" },
      {
        name: "description",
        content:
          "Discover UniversAI's proprietary internal tools: UniversAIDS (Univers-Artificial Intelligence Discovery System) used in Phase 01 Discovery, and UniversAIMS (Univers-Artificial Intelligence Management System) used in Phase 03 Partnership.",
      },
      { property: "og:title", content: "Proprietary Software Systems — UniversAI Solutions" },
      {
        property: "og:description",
        content:
          "Internal enterprise tools engineered for rigorous discovery, evidence correlation, and ongoing production management.",
      },
    ],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-hero">
        <GradientOrbs />
        <div className="absolute inset-0 grain pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary-glow" />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-primary-glow">
              Proprietary Internal Technology
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-8 animate-fade-up">
            Our Proprietary <br />
            <span className="text-gradient">Software Systems</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            We do not sell commercial off-the-shelf software. Instead, our senior consultants leverage two custom-built, proprietary systems across our 3-phase consulting methodology to guarantee precision and sustained client ROI.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            <CTAButton to="/work-with-us">Book a Discovery Consultation</CTAButton>
            <CTAButton to="/services" variant="outline">Explore 3 Consulting Phases</CTAButton>
          </div>
        </div>
      </section>

      {/* Two Proprietary Systems Overview Cards */}
      <section className="relative py-12 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Tool 1: UniversAIDS */}
          <div className="rounded-3xl border border-primary/50 bg-card-gradient p-8 md:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary-glow">
                  <Network className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary-glow uppercase tracking-wider">
                  Used in Phase 01: Discovery
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-2">
                UniversAIDS
              </h3>
              <div className="text-xs font-mono text-primary-glow mb-4">
                Univers-Artificial Intelligence Discovery System
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Our internal evidence extraction and correlation engine. During client audits, UniversAIDS ingests unstructured interviews, multi-tab Excel sheets, and SOPs, synthesizing departmental bottlenecks and mapping dependencies into an interactive topological knowledge graph.
              </p>
              <ul className="space-y-2.5 text-xs text-foreground mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Multi-modal parsing: Word, Excel, CSV, Plaintext</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Force-directed organizational knowledge graph</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Immutable audit statements & evidence citations</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-border/50 text-xs text-muted-foreground italic">
              *Proprietary internal consulting software — utilized exclusively by UniversAI engagement leads.
            </div>
          </div>

          {/* Tool 2: UniversAIMS */}
          <div className="rounded-3xl border border-border/80 bg-card-gradient p-8 md:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Activity className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 uppercase tracking-wider">
                  Used in Phase 03: Partnership
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-2">
                UniversAIMS
              </h3>
              <div className="text-xs font-mono text-emerald-400 mb-4">
                Univers-Artificial Intelligence Management System
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Our ongoing system monitoring and governance software. After deployment, UniversAIMS continuously monitors client AI pipelines, tracking inference uptime, detecting model accuracy drift, managing token resubscriptions, and preventing vendor quota outages.
              </p>
              <ul className="space-y-2.5 text-xs text-foreground mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>24/7 client telemetry & latency surveillance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Model accuracy drift detection & auto-alerting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Automated token optimization & vendor re-subscription</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-border/50 text-xs text-muted-foreground italic">
              *Proprietary client operations software — powers our long-term partnership commitments.
            </div>
          </div>
        </div>

        {/* Interactive UniversAIDS Demonstration */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-primary-glow text-xs uppercase tracking-widest font-mono font-semibold mb-2">
            <Search className="h-3.5 w-3.5" />
            Phase 01 Internal Tool Simulator
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-light mb-2">
            Inside UniversAIDS: Evidence to Synthesis
          </h2>
          <p className="text-sm text-muted-foreground">
            Experience how our consultants ingest multi-modal client discovery files and correlate systemic root causes below:
          </p>
        </div>
        <UniversAIDSSimulator />
      </section>

      {/* Security & RBAC Governance */}
      <section className="relative py-20 bg-surface/20 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-primary-glow font-semibold">
              Security & Audit Integrity
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light mt-2">
              Role-Based Access Control (RBAC) Governance
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Our consulting engagements enforce strict human-in-the-loop accountability: AI correlates, but senior consultants validate.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border/80 bg-[#070e1e]">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-border/60 text-muted-foreground text-[10px] uppercase tracking-wider bg-background/50">
                  <th className="py-3 px-4">Consulting Capability</th>
                  <th className="py-3 px-4 text-center">Partner Admin</th>
                  <th className="py-3 px-4 text-center">Senior Consultant</th>
                  <th className="py-3 px-4 text-center">Junior / Field</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20 text-foreground">
                <tr>
                  <td className="py-3.5 px-4 font-sans font-medium">Create Engagements & Lock Department Topology</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400">Full Authority</td>
                  <td className="py-3.5 px-4 text-center text-muted-foreground">View Only</td>
                  <td className="py-3.5 px-4 text-center text-muted-foreground">View Only</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-sans font-medium">Trigger Multi-Modal AI Synthesis (UniversAIDS)</td>
                  <td className="py-3.5 px-4 text-center text-muted-foreground">Oversight Only</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400">Sole Authority</td>
                  <td className="py-3.5 px-4 text-center text-amber-400">Temp Auth Only</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-sans font-medium">Upload & Inspect Raw Discovery Evidence</td>
                  <td className="py-3.5 px-4 text-center text-muted-foreground">Governance Only</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400">Active Discovery</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400">Assigned Depts</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-sans font-medium">Monitor Observability & Drift (UniversAIMS)</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400">Executive Reports</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400">24/7 Operations</td>
                  <td className="py-3.5 px-4 text-center text-muted-foreground">Restricted</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-sans font-medium">Close Engagement & Purge Raw Evidence</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400">Sole Authority</td>
                  <td className="py-3.5 px-4 text-center text-muted-foreground">Restricted</td>
                  <td className="py-3.5 px-4 text-center text-muted-foreground">Restricted</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-28 text-center max-w-4xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-6">
          Ready to discover your organization's <br />
          <span className="text-gradient">deep operational root causes?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Contact our consulting partners to initiate Phase 01 Discovery for your organization.
        </p>
        <CTAButton to="/work-with-us">Book an Executive Consultation</CTAButton>
      </section>
    </SiteLayout>
  );
}
