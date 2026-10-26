import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, seo } from "@/lib/seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { IndustryStrip } from "@/components/site/IndustryStrip";
import { UniversAIDSSimulator } from "@/components/site/UniversAIDSSimulator";
import { AimsFragment } from "@/components/site/Fragments";
import {
  IconEvidence,
  IconGraph,
  IconNaira,
  IconPulse,
  IconShield,
  IconTraining,
} from "@/components/site/icons";

export const Route = createFileRoute("/platform")({
  head: () =>
    seo({
      title: "UniversAIDS & UniversAIMS AI Platforms | UniversAI Solutions",
      description:
        "UniversAIDS traces operational bottlenecks to their root cause with cited evidence; UniversAIMS monitors AI systems for drift, uptime and cost.",
      path: "/platform",
      jsonLd: [breadcrumbLd([{ name: "Platforms", path: "/platform" }])],
    }),
  component: PlatformPage,
});

const AIDS_FACTS = [
  {
    Icon: IconEvidence,
    title: "Reads what you already have",
    body: "Word SOPs, multi-tab Excel, CSV exports and interview transcripts, in the formats your teams use.",
  },
  {
    Icon: IconGraph,
    title: "Links symptoms to causes",
    body: "Findings become a graph of departments, systems and processes, so you see which one problem explains the rest.",
  },
  {
    Icon: IconShield,
    title: "Cites every claim",
    body: "Each finding names its file, page or row. Raw evidence stays partitioned and is purged when the engagement closes.",
  },
];

const AIMS_FACTS = [
  {
    Icon: IconPulse,
    title: "Uptime and accuracy",
    body: "Response times, errors and drift in model accuracy, watched day and night.",
  },
  {
    Icon: IconNaira,
    title: "Running cost",
    body: "Token spend tracked and cut with caching and routing; renewals handled before quotas lapse.",
  },
  {
    Icon: IconTraining,
    title: "People",
    body: "Who uses the system, where they get stuck, and what training comes next.",
  },
  {
    Icon: IconShield,
    title: "Incidents",
    body: "When something breaks upstream, the alert reaches our engineers before your staff notice.",
  },
];

const ROLES = [
  ["Open an engagement and fix the department map", "Full", "View", "View"],
  ["Run evidence synthesis in UniversAIDS", "Oversight", "Full", "Temporary"],
  ["Upload and inspect raw evidence", "Governance", "Full", "Assigned departments"],
  ["Monitor systems in UniversAIMS", "Executive reports", "Full", "None"],
  ["Close the engagement and purge raw evidence", "Full", "None", "None"],
];

function PlatformPage() {
  return (
    <SiteLayout>
      <section data-field="navy" className="field-navy">
        <div className="wrap min-h-[72svh] flex flex-col justify-end pt-[calc(var(--header-h)+48px)] pb-14">
          <h1 className="t-5 max-w-[10ch]" data-rise>
            Proprietary platforms
          </h1>
          <p className="statement mt-8" data-rise style={{ ["--i" as string]: 1 }}>
            UniversAIDS and UniversAIMS give our consultants evidence in discovery and control in
            production, so every recommendation is traceable and every system stays accountable.
          </p>
        </div>
      </section>

      <section data-field="paper" className="field-paper" id="universaids">
        <div className="wrap py-28 md:py-36">
          <div className="grid-12 gap-y-6 items-end">
            <h2 className="col-span-12 md:col-span-6 t-4" data-reveal>
              UniversAIDS
            </h2>
            <p className="col-span-12 md:col-span-6 t-2" data-reveal>
              The Discovery System. During an audit it takes in your interviews, spreadsheets and
              SOPs and links each bottleneck to the evidence behind it. Pick a finding below to see
              how.
            </p>
          </div>

          <div className="mt-14" data-reveal>
            <UniversAIDSSimulator />
          </div>

          <ul className="grid md:grid-cols-3 gap-x-10 gap-y-10 mt-16">
            {AIDS_FACTS.map((f, i) => (
              <li key={f.title} className="flex gap-4" data-reveal style={{ ["--i" as string]: i }}>
                <f.Icon size={52} className="shrink-0 text-ink" />
                <div>
                  <h3 className="t-3">{f.title}</h3>
                  <p className="t-2 soft mt-2">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-field="mist" className="field-mist" id="universaims">
        <div className="wrap py-28 md:py-36 grid-12 gap-y-14 items-start">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="t-4" data-reveal>
              UniversAIMS
            </h2>
            <p className="t-2 mt-6 max-w-[48ch]" data-reveal>
              The Management System. Once a system is live, UniversAIMS watches it for us. It is how
              we keep our promises in the Partner phase.
            </p>
            <ul
              className="mt-12 space-y-8"
              style={{
                ["--icon-fill" as string]: "var(--paper)",
                ["--icon-bg" as string]: "var(--mist)",
              }}
            >
              {AIMS_FACTS.map((f, i) => (
                <li
                  key={f.title}
                  className="flex gap-4"
                  data-reveal
                  style={{ ["--i" as string]: i }}
                >
                  <f.Icon size={44} className="shrink-0" />
                  <div>
                    <h3 className="t-3">{f.title}</h3>
                    <p className="t-2 soft mt-1">{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-start-7 lg:col-span-6 lg:sticky lg:top-28" data-reveal>
            <AimsFragment />
            <p className="t-1 soft mt-3">UniversAIMS overview, with sample systems and figures.</p>
          </div>
        </div>
      </section>

      <IndustryStrip
        title="Tuned for each industry"
        sentence="Both tools carry the benchmarks, document types and systems of all eight of our industry arms, from waybills in logistics to HMO claims in healthcare."
      />

      <section data-field="paper" className="field-paper">
        <div className="wrap py-28 md:py-36">
          <div className="grid-12 gap-y-6 items-end">
            <h2 className="col-span-12 md:col-span-6 t-4 max-w-[12ch]" data-reveal>
              Who can do what
            </h2>
            <p className="col-span-12 md:col-span-6 t-2" data-reveal>
              The AI correlates; people decide. Access in both tools follows the consultant's role,
              and only a partner can close an engagement and purge its evidence.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto" data-reveal>
            <table className="w-full min-w-[640px] text-left t-2">
              <caption className="sr-only">Permissions by role</caption>
              <thead>
                <tr className="border-b-2 border-ink" /* real table: taste-skill-ignore */>
                  <th className="py-3 pr-4 font-semibold">Action</th>
                  <th className="py-3 px-4 font-semibold">Partner</th>
                  <th className="py-3 px-4 font-semibold">Senior consultant</th>
                  <th className="py-3 pl-4 font-semibold">Field consultant</th>
                </tr>
              </thead>
              <tbody>
                {ROLES.map(([action, ...cells]) => (
                  <tr
                    key={action}
                    className="border-b border-mist-2" /* real table: taste-skill-ignore */
                  >
                    <td className="py-4 pr-4 font-medium">{action}</td>
                    {cells.map((c, i) => (
                      <td
                        key={i}
                        className={`py-4 px-4 ${c === "Full" ? "font-semibold" : "soft"}`}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ClosingCTA
        lines={["See it on", "your evidence."]}
        sentence="Book a discovery consultation and we'll run UniversAIDS on your own files."
      />
    </SiteLayout>
  );
}
