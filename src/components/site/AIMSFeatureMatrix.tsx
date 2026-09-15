import { useState } from "react";
import { 
  Activity, 
  ShieldAlert, 
  RefreshCw, 
  CheckCircle2, 
  TrendingUp, 
  Cpu, 
  Server, 
  Lock,
  ArrowRight,
  GraduationCap,
  Users,
  Compass
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export function AIMSFeatureMatrix() {
  return (
    <section className="relative py-28 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow mb-6">
            <Compass className="h-3.5 w-3.5" />
            Phase 03 — Partnership & Long-Term Value
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight mb-6">
            Beyond Deployment: <br />
            <span className="text-gradient">We Partner to Guarantee Long-Term ROI.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Deployment is only the milestone; sustained ROI is the true victory. 
            In <strong>Phase 03 (Partnership)</strong>, we provide comprehensive ongoing services—including hands-on team training, organizational capacity building, and system governance powered by our proprietary <strong>UniversAIMS</strong> software.
          </p>
        </div>

        {/* Live Observability Terminal Mockup for UniversAIMS */}
        <div className="relative rounded-3xl border border-border/80 bg-[#060c18] p-6 md:p-8 shadow-2xl mb-16 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-border/60 gap-4">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <div className="font-mono text-sm font-semibold text-foreground flex items-center gap-2">
                  <span>UniversAIMS</span>
                  <span className="text-muted-foreground font-normal text-xs">(Univers-Artificial Intelligence Management System)</span>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                    Client Telemetry Active
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">Continuous Monitoring, Token Usage Tracking & Quota Optimization</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 bg-surface px-3 py-1.5 rounded-lg border border-border">
                <Cpu className="h-3.5 w-3.5 text-primary-glow" />
                <span className="text-muted-foreground">Inference SLA:</span>
                <span className="text-emerald-400 font-bold">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2 bg-surface px-3 py-1.5 rounded-lg border border-border">
                <Server className="h-3.5 w-3.5 text-primary-glow" />
                <span className="text-muted-foreground">Incident Recovery:</span>
                <span className="text-emerald-400 font-bold">&lt; 15 mins</span>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            <div className="p-4 rounded-2xl bg-surface/40 border border-border/60 backdrop-blur">
              <div className="flex items-center justify-between text-muted-foreground text-xs mb-2">
                <span>Model Drift & Accuracy Delta</span>
                <ShieldAlert className="h-4 w-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-display font-medium text-foreground">0.08% Variance</div>
              <p className="text-[11px] text-muted-foreground mt-1">Monitors semantic shift against real transaction logs</p>
            </div>

            <div className="p-4 rounded-2xl bg-surface/40 border border-border/60 backdrop-blur">
              <div className="flex items-center justify-between text-muted-foreground text-xs mb-2">
                <span>Monthly Token & Bill Optimization</span>
                <TrendingUp className="h-4 w-4 text-primary-glow" />
              </div>
              <div className="text-2xl font-display font-medium text-emerald-400">-38% API Burn</div>
              <p className="text-[11px] text-muted-foreground mt-1">Dynamic prompt caching & fallback router savings</p>
            </div>

            <div className="p-4 rounded-2xl bg-surface/40 border border-border/60 backdrop-blur">
              <div className="flex items-center justify-between text-muted-foreground text-xs mb-2">
                <span>Vendor Re-subscription & Quotas</span>
                <RefreshCw className="h-4 w-4 text-primary-glow" />
              </div>
              <div className="text-2xl font-display font-medium text-foreground">Managed & Synced</div>
              <p className="text-[11px] text-muted-foreground mt-1">Automated credential rotation & quota renewals</p>
            </div>

            <div className="p-4 rounded-2xl bg-surface/40 border border-border/60 backdrop-blur">
              <div className="flex items-center justify-between text-muted-foreground text-xs mb-2">
                <span>Incident Triage & Hot-Fixes</span>
                <Lock className="h-4 w-4 text-primary-glow" />
              </div>
              <div className="text-2xl font-display font-medium text-foreground">Zero Client Friction</div>
              <p className="text-[11px] text-muted-foreground mt-1">Upstream model changes absorbed by our engineers</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-xs text-muted-foreground flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary-glow shrink-0" />
              <span>
                <strong>Integrated Software Tool:</strong> UniversAIMS is our in-house system management software that powers our client SLA commitments and ongoing advisory.
              </span>
            </div>
            <Link to="/services" hash="partnership" className="inline-flex items-center gap-1 text-primary-glow hover:underline shrink-0 font-medium">
              Explore Phase 03 Offerings <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Phase 03 Holistic Partnership Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: System Management via UniversAIMS */}
          <div className="rounded-3xl border border-border/80 bg-card-gradient p-8 flex flex-col justify-between">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-glow mb-6">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                AI System Management
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                Powered by <strong>UniversAIMS</strong>. We monitor your production AI solutions 24/7, tracking latency, API quota renewals, token billing optimization, and model accuracy.
              </p>
              <ul className="space-y-2 text-xs text-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>24/7 telemetry and error surveillance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Token re-subscription & cost pruning</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Team Training & Capacity Building */}
          <div className="rounded-3xl border border-primary/40 bg-card-gradient p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary-glow mb-6">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                Team Training & Capacity Building
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                An AI system is only as good as the humans operating it. We conduct structured training cohorts for front-line teams, branch managers, and operational leads.
              </p>
              <ul className="space-y-2 text-xs text-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Role-specific workflow workshops</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>SOP updates & prompt playbook guides</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Continuous Optimization & Governance */}
          <div className="rounded-3xl border border-border/80 bg-card-gradient p-8 flex flex-col justify-between">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-glow mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                Executive Strategy Reviews
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                Monthly executive reviews where our senior consultants present board-grade ROI reports, audited cycle-time reductions, and identify next-horizon workflow expansions.
              </p>
              <ul className="space-y-2 text-xs text-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Monthly financial ROI reconciliation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Iterative workflow enhancements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
