import { useState } from "react";
import { 
  Building2, 
  ShoppingCart, 
  GraduationCap, 
  Sprout, 
  Truck, 
  HeartPulse, 
  Flame, 
  Landmark, 
  ArrowRight,
  Globe2,
  Sparkles,
  Orbit,
  Compass
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export interface PlanetIndustry {
  planet: string;
  name: string;
  tagline: string;
  color: string;
  borderColor: string;
  bgGlow: string;
  icon: any;
  orbitIndex: number;
  planetAtmosphere: string; // visual gradient of the planet body
  surfaceTrait: string;
  hasRings?: boolean;
  operationalChallenge: string;
  universaiIntervention: string;
}

export const PLANET_INDUSTRIES: PlanetIndustry[] = [
  {
    planet: "Mercury",
    name: "Real Estate & Infrastructure",
    tagline: "Asset Valuation & Lease Intelligence",
    color: "text-amber-400",
    borderColor: "border-amber-500/40",
    bgGlow: "radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)",
    planetAtmosphere: "linear-gradient(135deg, #78716c 0%, #d97706 50%, #451a03 100%)",
    surfaceTrait: "High-Temperature Asset Pressures · Fast Transaction Velocity",
    orbitIndex: 1,
    icon: Building2,
    operationalChallenge: "Fragmented tenant payment audits, lease agreement discrepancies, and manual facility maintenance tracking across multi-site holdings.",
    universaiIntervention: "AI lease abstraction, automated rent reconciliation, and predictive tenant churn forecasting pipelines.",
  },
  {
    planet: "Venus",
    name: "Retail & Consumer Goods",
    tagline: "Demand Forecasting & Shelf-to-POS Sync",
    color: "text-rose-400",
    borderColor: "border-rose-500/40",
    bgGlow: "radial-gradient(circle, rgba(244, 63, 94, 0.25) 0%, transparent 70%)",
    planetAtmosphere: "linear-gradient(135deg, #fbbf24 0%, #f43f5e 50%, #881337 100%)",
    surfaceTrait: "Dense Atmospheric Consumer Traffic · Rapid Inventory Friction",
    orbitIndex: 2,
    icon: ShoppingCart,
    operationalChallenge: "Stockouts across multi-branch retail, phantom inventory in ERPs, and slow supplier settlement reconciliation.",
    universaiIntervention: "Automated shelf-to-ERP stock sync, real-time demand forecasting agents, and automated SKU invoice matching.",
  },
  {
    planet: "Earth",
    name: "Agriculture & Agri-Business",
    tagline: "Yield Analytics & Supply Chain Visibility",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/40",
    bgGlow: "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)",
    planetAtmosphere: "linear-gradient(135deg, #059669 0%, #0284c7 45%, #10b981 100%)",
    surfaceTrait: "Life-Sustaining Harvest Cycles · Volatile Climate & Crop Yields",
    orbitIndex: 3,
    icon: Sprout,
    operationalChallenge: "Perishable produce logistics loss, volatile farmer cooperative pricing, and unorganized warehouse aggregation.",
    universaiIntervention: "Cold-chain predictive telemetry, automated produce grading vision models, and farm-to-distributor matching.",
  },
  {
    planet: "Mars",
    name: "Transport & Logistics",
    tagline: "Fleet Telemetry & Waybill OCR Intelligence",
    color: "text-orange-400",
    borderColor: "border-orange-500/40",
    bgGlow: "radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, transparent 70%)",
    planetAtmosphere: "linear-gradient(135deg, #ea580c 0%, #c2410c 50%, #7c2d12 100%)",
    surfaceTrait: "Harsh Terrain Logistics · Long-Haul Transit Telemetry",
    orbitIndex: 4,
    icon: Truck,
    operationalChallenge: "Delayed proof-of-delivery reconciliation, manual physical waybills, and driver transit blackouts.",
    universaiIntervention: "Instant waybill OCR extraction, dynamic route optimization models, and automated detention cost audits.",
  },
  {
    planet: "Jupiter",
    name: "Finance, Banking & Payments",
    tagline: "Dispute Arbitration & Ledger Verification",
    color: "text-blue-400",
    borderColor: "border-blue-500/40",
    bgGlow: "radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)",
    planetAtmosphere: "linear-gradient(135deg, #93c5fd 0%, #2563eb 40%, #d97706 70%, #1e3a8a 100%)",
    surfaceTrait: "Massive Transaction Gravitational Pull · Deep Capital Liquidity",
    orbitIndex: 5,
    icon: Landmark,
    operationalChallenge: "Manual settlement discrepancies between switches and cores, delayed fraud triage, and lengthy loan packet audits.",
    universaiIntervention: "Intelligent core banking transaction reconcilers, automated loan packet underwriting, and real-time fraud triage.",
  },
  {
    planet: "Saturn",
    name: "Healthcare & Life Sciences",
    tagline: "EMR Intake & Claims Processing Intelligence",
    color: "text-teal-400",
    borderColor: "border-teal-500/40",
    bgGlow: "radial-gradient(circle, rgba(20, 184, 166, 0.25) 0%, transparent 70%)",
    planetAtmosphere: "linear-gradient(135deg, #fef08a 0%, #14b8a6 50%, #0f766e 100%)",
    surfaceTrait: "Multi-Ringed Clinical Governance · Sensitive Patient Protocols",
    hasRings: true,
    orbitIndex: 6,
    icon: HeartPulse,
    operationalChallenge: "Hospital patient intake delays, insurance pre-authorization friction, and pharmacy stock expiration.",
    universaiIntervention: "EMR-integrated intake intelligence, automated HMO claims adjudication, and drug inventory expiry prediction.",
  },
  {
    planet: "Uranus",
    name: "Oil, Gas & Energy",
    tagline: "Asset Maintenance & Regulatory Audit Logs",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/40",
    bgGlow: "radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)",
    planetAtmosphere: "linear-gradient(135deg, #a5f3fc 0%, #0891b2 50%, #164e63 100%)",
    surfaceTrait: "Cryogenic Energy Pressures · Extreme Regulatory Compliance",
    hasRings: true,
    orbitIndex: 7,
    icon: Flame,
    operationalChallenge: "Field telemetry downtime, pipeline sensor alert fatigue, and stringent multi-agency compliance documentation.",
    universaiIntervention: "Sensor anomaly detection models, automated HSE incident reporting, and predictive turbine maintenance.",
  },
  {
    planet: "Neptune",
    name: "Education & EdTech",
    tagline: "Adaptive Learning & Administrative Automation",
    color: "text-indigo-400",
    borderColor: "border-indigo-500/40",
    bgGlow: "radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)",
    planetAtmosphere: "linear-gradient(135deg, #818cf8 0%, #4338ca 50%, #1e1b4b 100%)",
    surfaceTrait: "Expansive Knowledge Horizons · Deep Administrative Backlogs",
    orbitIndex: 8,
    icon: GraduationCap,
    operationalChallenge: "Bursary fee reconciliation backlogs, manual transcript verification, and high administrative staff burden.",
    universaiIntervention: "Automated tuition reconciliation, student retention early-warning models, and institutional document verification.",
  },
];

export function PlanetIndustriesSection() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetIndustry>(PLANET_INDUSTRIES[0]);

  return (
    <section className="relative py-32 overflow-hidden bg-[#070e1c] border-t border-border bg-cosmos-grid">
      {/* Central Solar/Cosmic glow behind the section */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-20 blur-[180px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #029ce6 0%, #17336a 50%, #0a1a3d 90%, transparent 100%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow mb-6">
            <Orbit className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "12s" }} />
            The UniversAI Solar System
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-4 text-foreground">
            8 Specialized Industry Arms.
            <br />
            <span className="text-gradient font-normal">Each a Planet in Our Universe.</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            The name <strong>UniversAI</strong> reflects the cosmos (Universe) aligned with Artificial Intelligence. 
            Just as planets revolve in orbit within a solar system, our consulting firm optimizes 8 distinct industry planets—each possessing unique operational characteristics, gravitational market pull, and tailored AI interventions.
          </p>
        </div>

        {/* 8 Planetary Orb Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-12">
          {PLANET_INDUSTRIES.map((p) => {
            const isSelected = selectedPlanet.name === p.name;
            const Icon = p.icon;
            return (
              <button
                key={p.name}
                onClick={() => setSelectedPlanet(p)}
                className={`group p-3.5 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-between relative overflow-hidden ${
                  isSelected
                    ? "border-primary-glow bg-surface shadow-2xl scale-105 ring-1 ring-primary/40"
                    : "border-border/60 bg-surface/30 hover:border-border hover:bg-surface/50"
                }`}
              >
                {/* Orbit index badge */}
                <span className="text-[9px] font-mono text-muted-foreground/80 uppercase tracking-wider mb-2">
                  Orbit 0{p.orbitIndex}
                </span>

                {/* Simulated Planet Orb with atmospheric gradient */}
                <div className="relative my-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                      isSelected ? "ring-2 ring-white/60 animate-planet-pulse" : ""
                    }`}
                    style={{ background: p.planetAtmosphere }}
                  >
                    <Icon className="h-4 w-4 text-white drop-shadow" />
                  </div>

                  {/* Planetary ring visual for Saturn & Uranus */}
                  {p.hasRings && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-4 rounded-full border border-white/40 rotate-[-25deg] pointer-events-none" />
                  )}
                </div>

                <div className="mt-1">
                  <div className="text-[11px] font-bold text-foreground leading-tight">
                    {p.planet}
                  </div>
                  <div className="text-[10px] text-muted-foreground truncate max-w-[85px]">
                    {p.name.split("&")[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Planet Showcase Display */}
        <div className="rounded-3xl border border-border/80 bg-card-gradient p-8 md:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Visual planetary glow behind active card */}
          <div 
            className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: selectedPlanet.bgGlow }}
          />

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            {/* Left Detail */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-primary-glow font-semibold">
                  <span className="h-2 w-2 rounded-full" style={{ background: selectedPlanet.planetAtmosphere }} />
                  {selectedPlanet.planet} · Orbit 0{selectedPlanet.orbitIndex}
                </div>
                <span className="text-xs text-muted-foreground font-mono">{selectedPlanet.tagline}</span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mb-2">
                {selectedPlanet.name}
              </h3>

              <p className="text-xs text-muted-foreground font-mono mb-6">
                <strong className="text-foreground font-medium">Cosmic Trait:</strong> {selectedPlanet.surfaceTrait}
              </p>

              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-2xl bg-surface/60 border border-border/60">
                  <div className="text-xs uppercase tracking-wider font-semibold text-red-400 mb-1.5 flex items-center gap-1.5">
                    <span>Operational Friction & Planetary Bottlenecks</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedPlanet.operationalChallenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                  <div className="text-xs uppercase tracking-wider font-semibold text-primary-glow mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>UniversAI Targeted System Intervention</span>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {selectedPlanet.universaiIntervention}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Engagement Box */}
            <div className="p-6 rounded-2xl border border-border/60 bg-[#081226]/85 flex flex-col justify-between h-full backdrop-blur">
              <div>
                <div className="text-xs uppercase tracking-widest font-mono text-primary-glow mb-4 flex items-center gap-2">
                  <Compass className="h-3.5 w-3.5" />
                  Full-Cycle Planetary Intervention
                </div>
                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-primary-glow font-bold">01</span>
                    <div>
                      <strong className="text-foreground block">Phase 01 — Discovery</strong>
                      <span className="text-muted-foreground">Diagnose root causes & map departmental evidence using UniversAIDS.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-primary-glow font-bold">02</span>
                    <div>
                      <strong className="text-foreground block">Phase 02 — Implementation</strong>
                      <span className="text-muted-foreground">Engineer bespoke AI systems integrated directly into your existing ERP, POS or CRM stacks.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-primary-glow font-bold">03</span>
                    <div>
                      <strong className="text-foreground block">Phase 03 — Partnership</strong>
                      <span className="text-muted-foreground">Continuous monitoring & token control via UniversAIMS with hands-on staff training.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border/50">
                <Link
                  to="/work-with-us"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold py-3 px-4 transition-all shadow-md"
                >
                  Consult Our {selectedPlanet.name.split("&")[0]} Advisory Arm <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
