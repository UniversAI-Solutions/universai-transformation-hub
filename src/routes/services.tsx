import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Wrench, Repeat, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GradientOrbs } from "@/components/site/GradientOrbs";
import { CTAButton } from "@/components/site/CTAButton";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — UniversAI Solutions" },
      { name: "description", content: "We help you discover, implement, and manage AI that actually delivers — through audits, strategy, design, deployment, and long-term operations." },
      { property: "og:title", content: "Services — UniversAI Solutions" },
      { property: "og:description", content: "From AI discovery & audits to implementation and long-term management — the full-cycle partner for AI transformation." },
    ],
  }),
  component: ServicesPage,
});

const PHASES = [
  {
    id: "discover",
    n: "01",
    title: "Discover",
    tagline: "Clarity before code.",
    icon: Search,
    intro:
      "Most AI projects fail before they begin because they solve the wrong problem. We start by understanding the business first.",
    items: [
      { t: "Operational Audit", d: "Map how work actually happens — where time is lost, decisions slow down, and manual effort piles up." },
      { t: "Stakeholder & Workflow Interviews", d: "Speak with the people doing the work to uncover bottlenecks and hidden opportunities." },
      { t: "AI Opportunity Mapping", d: "Identify and stack-rank high-impact AI use cases by value and effort." },
      { t: "ROI Modeling & Business Case", d: "Pressure-test ideas early and focus only on what's worth the investment." },
      { t: "AI Readiness Diagnostics", d: "A clear view of where you're ready now, what needs work, and what should wait." },
    ],
    outcome: "You leave with a clear, practical roadmap for AI adoption.",
    cta: "Start Discovery",
  },
  {
    id: "implement",
    n: "02",
    title: "Implement",
    tagline: "From insight to working systems.",
    icon: Wrench,
    intro:
      "Ideas don't create value. Execution does. We build AI systems that fit into how your business already works.",
    items: [
      { t: "Solution Design & Architecture", d: "Translate priorities into a clear build plan — scope, data flows, integrations, success criteria." },
      { t: "Custom AI Development", d: "Build the right thing the right way — for reliability, security, and real-world performance." },
      { t: "Tool Integration", d: "Embed AI into your existing stack so it fits naturally into how work already happens." },
      { t: "Deployment & Iteration", d: "Launch into live operations, gather feedback, and harden what works into production." },
      { t: "Performance & Cost Tuning", d: "Improve accuracy, latency, and cost efficiency before broad rollout." },
    ],
    outcome: "You get systems that are built to perform in the real world.",
    cta: "Build With Us",
  },
  {
    id: "partner",
    n: "03",
    title: "Partner",
    tagline: "AI is not a one-time project.",
    icon: Repeat,
    intro:
      "Deployment is only the beginning. The real value comes from monitoring, maintenance, and continuous improvement.",
    items: [
      { t: "System Monitoring", d: "Track performance, accuracy, and usage continuously so issues are caught early." },
      { t: "Maintenance & Updates", d: "Keep deployed solutions reliable as your data, tools, and workflows evolve." },
      { t: "Workflow Optimization", d: "Refine and extend systems over time as the business grows and shifts." },
      { t: "AI Operations Management", d: "We run the intelligence layer so your team can focus on running the business." },
      { t: "Team Enablement", d: "Hands-on training so people use what's been built — confidently and well." },
    ],
    outcome: "We stay with you so the system keeps delivering value long after launch.",
    cta: "Scale With Us",
  },
];

function ServicesPage() {
  const [active, setActive] = useState("discover");

  const activePhase = PHASES.find((p) => p.id === active)!;

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-hero">
        <GradientOrbs />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-6 animate-fade-in">Services</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-8 animate-fade-up">
            From <span className="text-gradient">trying AI</span>
            <br />
            to <span className="text-gradient">trusting it.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
            We help you discover, implement, and manage AI that actually delivers.
          </p>
        </div>
      </section>

      {/* Phase tabs */}
      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center flex-wrap gap-2 md:gap-12 mb-12">
            {PHASES.map((p) => {
              const isActive = active === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className="group flex items-baseline gap-3 px-4 py-2 transition-all"
                >
                  <span className={`text-sm italic ${isActive ? "text-primary-glow" : "text-muted-foreground"}`}>
                    {p.n.replace("0", "")}.
                  </span>
                  <span
                    className={`font-display text-2xl md:text-4xl font-light transition-colors ${
                      isActive ? "text-gradient" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {p.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active phase card */}
          <div
            key={activePhase.id}
            className="relative rounded-3xl border border-border bg-card-gradient overflow-hidden animate-fade-up"
          >
            <div
              className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] pointer-events-none"
              style={{ background: "radial-gradient(circle, oklch(0.55 0.22 260), transparent 70%)" }}
            />
            <div className="relative grid lg:grid-cols-[1fr_1.4fr] gap-10 p-8 md:p-14">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <activePhase.icon className="h-6 w-6 text-primary-glow" />
                  </div>
                  <span className="font-display text-6xl font-light text-muted-foreground/30">{activePhase.n}</span>
                </div>
                <h2 className="font-display text-5xl md:text-6xl font-light mb-4">
                  <span className="text-gradient">{activePhase.title}</span>
                </h2>
                <p className="text-xl text-foreground/90 mb-6 italic font-light">{activePhase.tagline}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{activePhase.intro}</p>

                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 mb-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-primary-glow mb-2">Outcome</p>
                  <p className="text-foreground">{activePhase.outcome}</p>
                </div>

                <CTAButton to="/work-with-us">{activePhase.cta}</CTAButton>
              </div>

              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">What we do</p>
                <ul className="space-y-3">
                  {activePhase.items.map((it, i) => (
                    <li
                      key={i}
                      className="group rounded-xl border border-border bg-background/40 p-5 hover:border-primary-glow/40 hover:bg-background/60 transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-display text-lg font-medium mb-1 text-foreground">{it.t}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary-glow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service grid */}
      <section className="relative py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-4">Solutions</p>
            <h2 className="font-display text-4xl md:text-6xl font-light">
              What we <span className="text-gradient">help you do</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: "AI Discovery & Audit", d: "Uncover where AI can create value, where workflows slow down, and what should be prioritized." },
              { t: "AI Strategy & Opportunity Mapping", d: "Translate business goals into a clear AI roadmap with practical next steps." },
              { t: "AI Solution Design", d: "Design the right solution — custom development or integrating existing tools." },
              { t: "AI Implementation & Deployment", d: "Build and launch the system, then refine until it works inside your operations." },
              { t: "AI Management & Optimization", d: "Monitor, maintain, and improve deployed systems so the value doesn't fade." },
              { t: "AI Team Enablement", d: "Help your team understand, adopt, and use the system effectively." },
            ].map((s, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card-gradient p-7 hover:border-primary-glow/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-xs tracking-[0.2em] uppercase text-primary-glow/70 mb-3">0{i + 1}</div>
                <h3 className="font-display text-xl font-medium mb-3">{s.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
