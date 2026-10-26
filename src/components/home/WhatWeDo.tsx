import { Link } from "@tanstack/react-router";
import { SectionHead } from "@/components/site/SectionHead";
import { ArrowRight, IconDiscover, IconImplement, IconPartner } from "@/components/site/icons";

const PHASES = [
  {
    hash: "discovery",
    name: "Discovery",
    Icon: IconDiscover,
    body: "We audit your departments and load interviews, SOPs and spreadsheets into UniversAIDS, which links each problem to the evidence behind it.",
    items: ["Operational audits", "Bottleneck mapping", "ROI baselines", "AI solution blueprint"],
  },
  {
    hash: "implementation",
    name: "Implementation",
    Icon: IconImplement,
    body: "We engineer custom AI systems into the ERP, POS, CRM and databases you already run, and test them before anyone depends on them.",
    items: [
      "Custom models and agents",
      "Core system connectors",
      "Document reading",
      "Decision support",
    ],
  },
  {
    hash: "partnership",
    name: "Partnership",
    Icon: IconPartner,
    body: "We run what we build with UniversAIMS: monitoring, retraining and cost control, plus training for your teams and monthly ROI reviews.",
    items: ["Monitoring around the clock", "Team training", "Retraining", "Monthly ROI reviews"],
  },
];

/** The three phases, set out the way a firm sets out its services. */
export function WhatWeDo() {
  return (
    <section data-field="mist" className="field-mist">
      <div className="wrap py-24 md:py-32">
        <SectionHead
          title="What we do"
          intro="Every engagement follows the same three phases. Most AI projects fail because they automate a symptom, so we start with the cause and we stay after launch."
          link={{ to: "/services", label: "Explore our services" }}
        />

        <ol
          className="grid md:grid-cols-3 gap-5 mt-14"
          style={{
            ["--icon-fill" as string]: "var(--sky)",
            ["--icon-bg" as string]: "var(--paper)",
          }}
        >
          {PHASES.map((p, i) => (
            <li
              key={p.hash}
              className="bg-paper rounded-[var(--radius)] p-7 md:p-9 flex flex-col"
              data-reveal
              style={{ ["--i" as string]: i }}
            >
              <p.Icon size={52} />
              <h3 className="t-3 font-[family-name:var(--serif)] font-medium mt-6">{p.name}</h3>
              <p className="t-2 soft mt-3">{p.body}</p>
              <ul className="mt-6 space-y-2 t-2">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span
                      className="mt-[0.62em] w-1.5 h-1.5 rounded-full bg-blue shrink-0"
                      aria-hidden="true"
                    />
                    {it}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                hash={p.hash}
                className="mt-auto pt-8 inline-flex items-center gap-2 t-2 font-semibold link-on self-start"
              >
                {p.name} in detail <ArrowRight />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
