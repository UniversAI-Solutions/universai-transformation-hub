import { useState } from "react";
import { Calculator, CheckCircle2, ArrowRight, Building2, Clock, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PLANET_INDUSTRIES } from "./PlanetIndustriesSection";

// Industry standards based on current market data:
// - hourlyRate: standard operational labor cost in Naira per industry sector
// - frictionCoeff: proportion of manual repetitive hours recoverable through AI systems
// - riskMultiplier: financial impact of human error/leakage in that vertical
interface IndustryStandard {
  hourlyRateNaira: number;
  frictionCoeff: number;
  description: string;
}

const INDUSTRY_STANDARDS: Record<string, IndustryStandard> = {
  "Real Estate & Infrastructure": {
    hourlyRateNaira: 10500,
    frictionCoeff: 0.42,
    description: "Driven by high contract review overhead, tenant dispute arbitration & asset audit cycles.",
  },
  "Retail & Consumer Goods": {
    hourlyRateNaira: 6500,
    frictionCoeff: 0.52,
    description: "Driven by high-volume inventory reconciliation, POS exception handling & vendor matching.",
  },
  "Agriculture & Agri-Business": {
    hourlyRateNaira: 7000,
    frictionCoeff: 0.46,
    description: "Driven by cooperative pricing reconciliations, warehouse dispatch ledgers & cold-chain loss.",
  },
  "Transport & Logistics": {
    hourlyRateNaira: 8000,
    frictionCoeff: 0.50,
    description: "Driven by physical waybill data entry, driver turnaround friction & demurrage tracking.",
  },
  "Finance, Banking & Payments": {
    hourlyRateNaira: 14000,
    frictionCoeff: 0.48,
    description: "Driven by multi-switch reconciliation, fraud exception triage & manual regulatory filings.",
  },
  "Healthcare & Life Sciences": {
    hourlyRateNaira: 11500,
    frictionCoeff: 0.44,
    description: "Driven by HMO claims pre-authorization, patient intake backlogs & pharmacy stock audits.",
  },
  "Oil, Gas & Energy": {
    hourlyRateNaira: 18500,
    frictionCoeff: 0.38,
    description: "Driven by field sensor alert triage, statutory HSE compliance documentation & asset audits.",
  },
  "Education & EdTech": {
    hourlyRateNaira: 6000,
    frictionCoeff: 0.45,
    description: "Driven by bursary fee reconciliations, credential verifications & student record queues.",
  },
};

export function ROICalculatorModal() {
  const [selectedIndustryName, setSelectedIndustryName] = useState<string>("Retail & Consumer Goods");
  const [teamSize, setTeamSize] = useState<number>(35);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState<number>(14);

  // Dynamic industry metrics calculation based on current sector standards
  const currentStandard = INDUSTRY_STANDARDS[selectedIndustryName] || {
    hourlyRateNaira: 8500,
    frictionCoeff: 0.45,
    description: "Standard enterprise operational parameters.",
  };

  // Reclaimable hours calculated dynamically per industry friction coefficient
  const weeklyWastedHours = teamSize * (manualHoursPerWeek * currentStandard.frictionCoeff);
  const annualHoursSaved = Math.round(weeklyWastedHours * 50); // 50 operational working weeks
  const estimatedAnnualSavingsNaira = Math.round(annualHoursSaved * currentStandard.hourlyRateNaira);

  return (
    <section className="relative py-24 overflow-hidden border-y border-border bg-gradient-to-b from-background to-surface/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          {/* Left Narrative */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow mb-6">
              <Calculator className="h-3.5 w-3.5" />
              Dynamic Operational Value Diagnostic
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-6">
              Quantify the operational friction <br />
              <span className="text-gradient font-normal">slowing your business down.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              Enter your parameters below. Our financial model dynamically adjusts to real labor benchmarks, recovery coefficients, and friction standards across each of our 8 planetary industries.
            </p>

            <div className="p-4 rounded-2xl bg-surface/60 border border-border mb-8 text-xs">
              <div className="flex items-center gap-2 text-primary-glow font-mono font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="h-3.5 w-3.5" />
                Industry Benchmark: {selectedIndustryName}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {currentStandard.description}
              </p>
              <div className="mt-2 text-[11px] font-mono text-foreground flex items-center gap-3 pt-2 border-t border-border/40">
                <span>Labor Baseline: <strong>₦{currentStandard.hourlyRateNaira.toLocaleString()}/hr</strong></span>
                <span>Recoverable Friction: <strong>{(currentStandard.frictionCoeff * 100).toFixed(0)}%</strong></span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary-glow" />
                <span>Phase 01 — Rigorous Discovery Audit with UniversAIDS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary-glow" />
                <span>Phase 02 — Custom System Engineering with Measurable KPIs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary-glow" />
                <span>Phase 03 — Long-Term Partnership & Capacity Building</span>
              </div>
            </div>
          </div>

          {/* Calculator Card */}
          <div className="rounded-3xl border border-border/80 bg-card-gradient p-8 shadow-2xl backdrop-blur-xl">
            <div className="space-y-6">
              {/* Industry Select (8 Planetary Industries) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Select Planetary Industry Sector (Adjusts Costing Model)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {PLANET_INDUSTRIES.map((ind) => (
                    <button
                      key={ind.name}
                      type="button"
                      onClick={() => setSelectedIndustryName(ind.name)}
                      className={`px-2.5 py-2 rounded-xl text-xs font-medium border text-left transition-all truncate ${
                        selectedIndustryName === ind.name
                          ? "bg-primary/20 border-primary text-foreground shadow-sm"
                          : "bg-surface/50 border-border text-muted-foreground hover:text-foreground"
                      }`}
                      title={ind.name}
                    >
                      {ind.name.split("&")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Team Size */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-primary-glow" />
                    Operational Staff Count
                  </span>
                  <span className="text-foreground font-mono text-sm font-bold">{teamSize} team members</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="300"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Slider 2: Manual hours */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-primary-glow" />
                    Manual Hours / Employee / Week (Reconciliations, Reports, Handoffs)
                  </span>
                  <span className="text-foreground font-mono text-sm font-bold">{manualHoursPerWeek} hrs</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="35"
                  value={manualHoursPerWeek}
                  onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Output Display in Naira dynamically adjusted */}
              <div className="pt-6 border-t border-border/70 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-surface/70 border border-border">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Annual Reclaimable Hours
                  </div>
                  <div className="text-3xl font-display font-medium text-primary-glow">
                    {annualHoursSaved.toLocaleString()}+ hrs
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">Direct operational capacity recovered</p>
                </div>

                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/30">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-primary-glow mb-1">
                    Est. Financial Value Unlocked (₦)
                  </div>
                  <div className="text-3xl font-display font-medium text-emerald-400">
                    ₦{estimatedAnnualSavingsNaira.toLocaleString()}
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">Calculated via {selectedIndustryName.split("&")[0]} rate standards</p>
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/work-with-us"
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm py-3.5 px-6 transition-all shadow-lg hover:shadow-primary/25"
              >
                Schedule an AI Outcome Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
