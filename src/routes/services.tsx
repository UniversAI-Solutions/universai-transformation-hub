import { createFileRoute, Link } from "@tanstack/react-router";
import { breadcrumbLd, seo, serviceLd } from "@/lib/seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { IndustryStrip } from "@/components/site/IndustryStrip";
import {
  ArrowRight,
  CheckGlyph,
  IconDiscover,
  IconImplement,
  IconPartner,
} from "@/components/site/icons";

export const Route = createFileRoute("/services")({
  head: () =>
    seo({
      title: "AI Consulting Services in Nigeria | UniversAI Solutions",
      description:
        "AI discovery audits, custom AI implementation and long-term AI management for organisations in Nigeria. See how UniversAI's three-phase approach delivers measurable ROI.",
      path: "/services",
      jsonLd: [
        serviceLd({
          name: "AI discovery and operational audit",
          description:
            "Operational audits with the UniversAIDS platform that trace each bottleneck to its root cause, with ROI baselines and a costed AI blueprint.",
          path: "/services#discovery",
          type: "Artificial intelligence consulting",
        }),
        serviceLd({
          name: "Custom AI implementation and integration",
          description:
            "Custom AI models, agents and connectors built into ERP, POS, CRM and core banking systems, tested before go-live.",
          path: "/services#implementation",
          type: "AI systems integration",
        }),
        serviceLd({
          name: "AI management, monitoring and training",
          description:
            "Monitoring, retraining and cost control through the UniversAIMS platform, with team training and monthly ROI reviews.",
          path: "/services#partnership",
          type: "AI managed services",
        }),
        breadcrumbLd([{ name: "Services", path: "/services" }]),
      ],
    }),
  component: ServicesPage,
});

const PHASES = [
  {
    id: "discovery",
    name: "Discover",
    field: "paper",
    Icon: IconDiscover,
    iconVars: { "--icon-fill": "var(--sky)", "--icon-bg": "var(--paper)" },
    tagline:
      "We find the root cause first, because that tells us which AI system is worth building.",
    intro:
      "Most AI projects fail because they automate a symptom. Our consultants audit your departments, then load interviews, SOPs and reconciliation spreadsheets into UniversAIDS, which links each problem to the evidence behind it.",
    capabilities: [
      [
        "Operational audits",
        "Process maps, SOPs and spreadsheet trackers, read across departments to find the workarounds.",
      ],
      [
        "Front-line interviews",
        "Structured sessions with the people who do the work, where the real friction surfaces.",
      ],
      [
        "Bottleneck mapping",
        "UniversAIDS shows which departments, systems and data silos depend on each other, and where they jam.",
      ],
      [
        "Baselines and ROI model",
        "Cycle times, error rates and money leaking today, so the return can be measured later.",
      ],
      [
        "Solution blueprint",
        "A plan your board can approve, naming the exact systems to build and in what order.",
      ],
      [
        "Readiness and governance",
        "Advice to leadership on data protection, risk and how to bring staff along.",
      ],
    ],
    deliverables: [
      "UniversAIDS bottleneck map",
      "ROI and payback model",
      "System architecture blueprint",
      "Readiness and risk assessment",
    ],
    cta: "Book a discovery consultation",
  },
  {
    id: "implementation",
    name: "Implement",
    field: "navy",
    Icon: IconImplement,
    iconVars: { "--icon-fill": "var(--blue)", "--icon-bg": "var(--navy)" },
    tagline:
      "We build the system into the tools your team already uses, and test it before anyone depends on it.",
    intro:
      "Once the cause is clear, our engineers design, build and deploy a system for your data. No generic wrappers: pipelines that read and write to your ERP, POS, CRM and databases.",
    capabilities: [
      [
        "Custom models and agents",
        "Pipelines and fine-tuned models built for your domain and checked for accuracy.",
      ],
      [
        "Search over your documents",
        "Secure retrieval over contracts, regulatory filings and manuals, with sources cited.",
      ],
      [
        "Core system connectors",
        "Two-way links to SAP, Microsoft Dynamics, Salesforce, Odoo, custom POS and core banking.",
      ],
      [
        "Reconciliation automation",
        "Extraction and cross-checking that replaces multi-tab spreadsheet reconciliations.",
      ],
      ["Decision support", "Forecasts for stock, fraud triage, tenant scoring and credit risk."],
      ["Document reading", "Waybills, receipts, invoices and legal papers read, sorted and filed."],
    ],
    deliverables: [
      "A production AI system",
      "ERP, POS or CRM connectors",
      "Test suites and fallbacks",
      "A working screen for your staff",
    ],
    cta: "Ask about implementation",
  },
  {
    id: "partnership",
    name: "Partner",
    field: "sky",
    Icon: IconPartner,
    iconVars: { "--icon-fill": "var(--paper)", "--icon-bg": "var(--sky)" },
    tagline: "We stay after launch, so the system keeps working and keeps paying for itself.",
    intro:
      "Deployment is the start. We run what we built with UniversAIMS, our monitoring software: we watch it, keep its costs down, retrain it as your business changes and train the people who use it.",
    capabilities: [
      [
        "Monitoring around the clock",
        "Uptime, response time, accuracy drift and error spikes, watched in UniversAIMS.",
      ],
      ["Team training", "Role-by-role workshops so your people use the system and trust it."],
      [
        "Cost control",
        "Caching and routing that cut token spend, and renewals handled before quotas run out.",
      ],
      ["Retraining", "Models updated as your customers, products and processes change."],
      [
        "Vendor changes absorbed",
        "When an upstream API changes or breaks, we fix it before you notice.",
      ],
      [
        "Monthly reviews",
        "Time saved, cost cut and the next opportunity, reviewed with leadership each month.",
      ],
    ],
    deliverables: [
      "Access to UniversAIMS reports",
      "Training modules and playbooks",
      "Ongoing tuning and patches",
      "A monthly ROI statement",
    ],
    cta: "Discuss a partnership",
  },
] as const;

function ServicesPage() {
  return (
    <SiteLayout>
      <section data-field="mist" className="field-mist">
        <div className="wrap min-h-[70svh] flex flex-col justify-end pt-[calc(var(--header-h)+48px)] pb-14">
          <h1 className="t-5" data-rise>
            Our services
          </h1>
          <p className="statement mt-8" data-rise style={{ ["--i" as string]: 1 }}>
            From diagnosis to long-term partnership, we help organisations put AI where it creates
            measurable value, and keep it there.
          </p>
          <nav
            aria-label="Phases"
            className="flex flex-wrap gap-2 mt-10"
            data-rise
            style={{ ["--i" as string]: 2 }}
          >
            {PHASES.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="btn btn-sm btn-paper">
                {p.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <IndustryStrip
        title="One method, eight industries"
        sentence="The same three phases run in every one of our industry arms, each named after a planet, with benchmarks and playbooks of its own."
      />

      {PHASES.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          data-field={p.field}
          className={`field-${p.field} scroll-mt-0`}
        >
          <div className="wrap py-28 md:py-36">
            <div className="grid-12 gap-y-8 items-end">
              <div
                className={`col-span-12 md:col-span-6 ${i === 1 ? "md:order-2 md:col-start-7" : ""}`}
              >
                <div style={p.iconVars as React.CSSProperties} data-reveal>
                  <p.Icon size={112} strokeWidth={1.3} />
                </div>
                <h2 className="t-5 mt-6" data-reveal>
                  {p.name}
                </h2>
              </div>
              <div className={`col-span-12 md:col-span-6 ${i === 1 ? "md:order-1" : ""}`}>
                <p className="statement" data-reveal>
                  {p.tagline}
                </p>
                <p className="t-2 mt-5 max-w-[56ch]" data-reveal>
                  {p.intro}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-20">
              {p.capabilities.map(([t, d], j) => (
                <div key={t} data-reveal style={{ ["--i" as string]: j % 3 }}>
                  <h3 className="t-3">{t}</h3>
                  <p className="t-2 soft mt-2">{d}</p>
                </div>
              ))}
            </div>

            <div className="grid-12 gap-y-8 mt-20 items-end">
              <div className="col-span-12 md:col-span-8" data-reveal>
                <h3 className="t-1 font-semibold">What you get</h3>
                <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {p.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 t-2 font-medium">
                      <CheckGlyph
                        className="mt-1 shrink-0"
                        style={{ color: p.field === "navy" ? "var(--green)" : "var(--blue)" }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-12 md:col-span-4 md:justify-self-end" data-reveal>
                <Link to="/work-with-us" className="btn">
                  {p.cta} <ArrowRight className="btn-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <ClosingCTA
        lines={["Start with", "the cause."]}
        sentence="Every engagement opens with discovery. Book a consultation and we'll scope it with you."
      />
    </SiteLayout>
  );
}
