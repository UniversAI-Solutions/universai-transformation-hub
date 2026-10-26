import mercury from "@/assets/planets/mercury.jpg";
import venus from "@/assets/planets/venus.jpg";
import earth from "@/assets/planets/earth.jpg";
import mars from "@/assets/planets/mars.jpg";
import jupiter from "@/assets/planets/jupiter.jpg";
import saturn from "@/assets/planets/saturn.jpg";
import uranus from "@/assets/planets/uranus.jpg";
import neptune from "@/assets/planets/neptune.jpg";

/*
  The eight industry arms. UniversAI is Universe + AI, so each arm carries a planet's name,
  in orbital order. Hourly rates and recoverable shares feed the cost calculator.
*/

export interface Industry {
  slug: string;
  planet: string;
  name: string;
  short: string;
  image: string;
  problem: string;
  fix: string;
  hourlyRateNaira: number;
  recoverable: number;
  driver: string;
}

export const PLANET_INDUSTRIES: Industry[] = [
  {
    slug: "real-estate",
    planet: "Mercury",
    name: "Real estate & infrastructure",
    short: "Real estate",
    image: mercury,
    problem:
      "Tenant payments audited by hand, lease terms that disagree across files, maintenance tracked in chat threads.",
    fix: "Lease abstraction, automatic rent reconciliation, churn warnings.",
    hourlyRateNaira: 10500,
    recoverable: 0.42,
    driver: "contract review, tenant disputes and asset audits",
  },
  {
    slug: "retail",
    planet: "Venus",
    name: "Retail & consumer goods",
    short: "Retail",
    image: venus,
    problem: "Stockouts across branches, phantom stock in the ERP, slow supplier settlement.",
    fix: "Shelf-to-ERP stock sync, demand forecasts, invoice matching by SKU.",
    hourlyRateNaira: 6500,
    recoverable: 0.52,
    driver: "stock reconciliation, POS exceptions and vendor matching",
  },
  {
    slug: "agriculture",
    planet: "Earth",
    name: "Agriculture & agribusiness",
    short: "Agriculture",
    image: earth,
    problem:
      "Produce lost between farm and buyer, unstable cooperative pricing, warehouses run on paper.",
    fix: "Cold-chain alerts, produce grading from photos, farm-to-buyer matching.",
    hourlyRateNaira: 7000,
    recoverable: 0.46,
    driver: "cooperative pricing, dispatch ledgers and cold-chain loss",
  },
  {
    slug: "logistics",
    planet: "Mars",
    name: "Transport & logistics",
    short: "Logistics",
    image: mars,
    problem:
      "Paper waybills retyped by hand, late proof of delivery, drivers out of contact in transit.",
    fix: "Waybill reading by OCR, route planning, demurrage audits.",
    hourlyRateNaira: 8000,
    recoverable: 0.5,
    driver: "waybill entry, driver turnaround and demurrage tracking",
  },
  {
    slug: "finance",
    planet: "Jupiter",
    name: "Finance, banking & payments",
    short: "Finance",
    image: jupiter,
    problem:
      "Settlement gaps between switches and the core, slow fraud triage, long loan file reviews.",
    fix: "Transaction reconcilers, loan file underwriting, fraud triage in real time.",
    hourlyRateNaira: 14000,
    recoverable: 0.48,
    driver: "multi-switch reconciliation, fraud exceptions and regulatory filings",
  },
  {
    slug: "healthcare",
    planet: "Saturn",
    name: "Healthcare & life sciences",
    short: "Healthcare",
    image: saturn,
    problem:
      "Long patient intake queues, HMO pre-authorisation delays, pharmacy stock expiring on shelves.",
    fix: "EMR-linked intake, HMO claims checking, expiry forecasting.",
    hourlyRateNaira: 11500,
    recoverable: 0.44,
    driver: "HMO pre-authorisation, intake backlogs and pharmacy audits",
  },
  {
    slug: "energy",
    planet: "Uranus",
    name: "Oil, gas & energy",
    short: "Energy",
    image: uranus,
    problem:
      "Sensor alarms nobody can triage, field downtime, compliance reports for several regulators.",
    fix: "Sensor anomaly detection, HSE incident reports, predictive maintenance.",
    hourlyRateNaira: 18500,
    recoverable: 0.38,
    driver: "sensor alert triage, HSE documentation and asset audits",
  },
  {
    slug: "education",
    planet: "Neptune",
    name: "Education & edtech",
    short: "Education",
    image: neptune,
    problem:
      "Fee reconciliation backlogs, transcripts verified by hand, administrators buried in records.",
    fix: "Tuition reconciliation, early warnings on dropout, document verification.",
    hourlyRateNaira: 6000,
    recoverable: 0.45,
    driver: "fee reconciliation, credential checks and student records",
  },
];

export const industryBySlug = (slug: string) => PLANET_INDUSTRIES.find((i) => i.slug === slug);
