import { Users, Handshake, Shield, Sparkles, ArrowRight, CheckCircle2, Globe2, Network } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function PartnerProgramSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-surface/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow mb-6">
            <Globe2 className="h-3.5 w-3.5" />
            UniversAI Partner Network (UPN)
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-6">
            Industry Growth Communities. <br />
            <span className="text-gradient font-normal">Leverage Trusted Networks & Co-Deliver Value.</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            The <strong>UniversAI Partner Network (UPN)</strong> is the umbrella body encompassing specialized growth communities across our 8 planetary industries. 
            We partner with respected domain leaders, industry advisors, and technology vendors to bring vetted AI operational transformations to businesses within their networks while earning recurring value.
          </p>
        </div>

        {/* 3 Core Ecosystem Community Pillars (No Tier Groupings) */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Domain Advisors & Consultants */}
          <div className="rounded-3xl border border-border/80 bg-card-gradient p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-glow mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-2">
                Industry Advisors & Operations Leaders
              </h3>
              <p className="text-xs text-primary-glow font-mono mb-4">
                Domain Specialists · Fractional Executives · Accountants · Auditors
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                You understand the operational pain points within your industry sector. By introducing UniversAI’s consulting and discovery methodology to your trusted client base, you solve deep-seated operational bottlenecks while participating in long-term engagement economics.
              </p>
              <ul className="space-y-2.5 text-xs text-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Leverage existing client trust without needing an internal AI engineering team</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Attractive recurring revenue sharing on continuous Phase 03 partnership contracts</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-border/50">
              <Link to="/work-with-us" className="text-xs font-semibold text-primary-glow hover:underline inline-flex items-center gap-1">
                Join Your Sector Community <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Software Vendors & MSPs */}
          <div className="rounded-3xl border border-primary/40 bg-card-gradient p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-primary/20 text-primary-glow border border-primary/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              High Collaboration
            </div>
            <div>
              <div className="h-12 w-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary-glow mb-6">
                <Handshake className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-2">
                Technology Platforms & Software Vendors
              </h3>
              <p className="text-xs text-primary-glow font-mono mb-4">
                ERP · POS · CRM · Core Banking & EMR Platforms
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                Differentiate your software offering by providing native AI automation add-ons. UniversAI builds and runs bespoke AI layers that connect directly into your software APIs, driving deeper customer retention and shared margins.
              </p>
              <ul className="space-y-2.5 text-xs text-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Packaged co-sell campaigns, joint industry webinars, and documented case studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>UniversAI takes full responsibility for model maintenance and SLAs</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-border/50">
              <Link to="/work-with-us" className="text-xs font-semibold text-primary-glow hover:underline inline-flex items-center gap-1">
                Explore Technology Integration <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Industry Associations & Ecosystems */}
          <div className="rounded-3xl border border-border/80 bg-card-gradient p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-glow mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-2">
                Trade Associations & Chambers of Commerce
              </h3>
              <p className="text-xs text-primary-glow font-mono mb-4">
                Industry Groups · Trade Unions · Innovation Accelerators
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                Accelerate operational modernization across an entire sector. We work with industry federations to provide educational clinics, AI readiness scorecards, and cohort-based discovery workshops for member companies.
              </p>
              <ul className="space-y-2.5 text-xs text-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Ecosystem-wide AI maturity audits and tailored sector playbooks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Structured capacity building tailored to regional operational realities</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-border/50">
              <Link to="/work-with-us" className="text-xs font-semibold text-primary-glow hover:underline inline-flex items-center gap-1">
                Partner on Sector Modernization <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Network Mission Callout */}
        <div className="p-6 rounded-2xl border border-border/70 bg-background/60 text-center max-w-4xl mx-auto text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">A Shared Growth Ecosystem: </span>
          The UniversAI Partner Network builds long-term industry trust by aligning regional practitioners with enterprise-standard AI execution. 
          Reach out directly to learn how to represent your industry's planetary arm.
        </div>
      </div>
    </section>
  );
}
