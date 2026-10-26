import { useState } from "react";

/*
  A working sample of UniversAIDS: pick any finding in the graph and read what it is,
  what it costs, where the evidence came from, and what it connects to.
  Sample engagement data. Product UI, so it carries data-ui.
*/

type Kind = "bottleneck" | "process" | "system" | "root";

interface Finding {
  id: string;
  name: string;
  kind: Kind;
  x: number;
  y: number;
  links: string[];
  department: string;
  evidence: string;
  impact: string;
}

const FINDINGS: Finding[] = [
  {
    id: "recon",
    name: "Manual settlement reconciliation",
    kind: "bottleneck",
    x: 210,
    y: 120,
    links: ["sap", "po", "invoices"],
    department: "Finance and accounting",
    evidence: "FIN_Audit_Sept.xlsx, row 142; CFO interview, session 2",
    impact: "14.5 staff hours a week spent reshaping data in Excel",
  },
  {
    id: "sap",
    name: "Legacy SAP batch import",
    kind: "system",
    x: 390,
    y: 170,
    links: ["recon", "pos", "po"],
    department: "IT and core systems",
    evidence: "Architecture_Topology_v2.docx, page 18",
    impact: "The nightly import fails every 36 hours and has no retry",
  },
  {
    id: "po",
    name: "Vendor PO cycle",
    kind: "process",
    x: 480,
    y: 80,
    links: ["recon", "sap"],
    department: "Supply chain and procurement",
    evidence: "Vendor_SLA_Reviews_Q3.csv; head of procurement interview",
    impact: "Purchase orders take 18 days against a 4-day norm",
  },
  {
    id: "invoices",
    name: "Disputed invoices pile up",
    kind: "bottleneck",
    x: 120,
    y: 250,
    links: ["recon", "handoff"],
    department: "Commercial operations",
    evidence: "AR_Aging_Report.xlsx",
    impact: "₦42m of working capital held up in disputes",
  },
  {
    id: "pos",
    name: "POS endpoints out of sync",
    kind: "system",
    x: 520,
    y: 260,
    links: ["sap", "delivery"],
    department: "Retail and branch operations",
    evidence: "Branch_POS_Logs_July.csv",
    impact: "Stock counts disagree across 14 stores",
  },
  {
    id: "handoff",
    name: "Unverified handoff protocol",
    kind: "root",
    x: 270,
    y: 330,
    links: ["invoices", "recon", "delivery"],
    department: "Risk and compliance",
    evidence: "Compliance_Checklist_Q2.docx, section 4.2",
    impact: "Explains three of the four symptoms; an audit finding waiting to happen",
  },
  {
    id: "delivery",
    name: "Delivery milestones go dark",
    kind: "process",
    x: 440,
    y: 350,
    links: ["pos", "handoff"],
    department: "Logistics and fulfilment",
    evidence: "Driver_Dispatch_Sept.xlsx",
    impact: "Support tickets up 34% month on month",
  },
];

const KIND: Record<Kind, { label: string; color: string }> = {
  bottleneck: { label: "Bottleneck", color: "#e5484d" },
  process: { label: "Process", color: "#5b7bd9" },
  system: { label: "System", color: "#2449c4" },
  root: { label: "Root cause", color: "#00a870" },
};

const SOURCES = [
  {
    file: "FIN_Audit_Sept.xlsx",
    kind: "Spreadsheet, 9 tabs",
    found: "Settlement rows re-keyed by hand; 212 mismatches in September",
  },
  {
    file: "Compliance_Checklist_Q2.docx",
    kind: "SOP, 31 pages",
    found: "Handoff between commercial and finance has no sign-off step",
  },
  {
    file: "CFO interview, session 2",
    kind: "Transcript, 48 min",
    found: "“We reconcile on Fridays because the import fails midweek”",
  },
  {
    file: "Branch_POS_Logs_July.csv",
    kind: "System export",
    found: "14 stores report stock that the ERP never received",
  },
];

export function UniversAIDSSimulator() {
  const [tab, setTab] = useState<"graph" | "sources">("graph");
  const [selected, setSelected] = useState<Finding>(FINDINGS[5]);
  const byId = (id: string) => FINDINGS.find((f) => f.id === id)!;

  return (
    <div data-ui className="bg-white text-[#191e28] rounded-[6px] overflow-hidden text-[15px]">
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 md:px-5 py-3 bg-[#f5f7fb]">
        <span className="font-semibold">UniversAIDS · Sample engagement</span>
        <div role="tablist" aria-label="View" className="flex gap-1 bg-[#e9edf5] p-1 rounded-[4px]">
          {(["graph", "sources"] as const).map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`px-3 min-h-9 rounded-[3px] font-medium transition-colors ${
                tab === t ? "bg-white text-[#191e28]" : "text-[#4b5466] hover:text-[#191e28]"
              }`}
            >
              {t === "graph" ? "Findings graph" : "Sources"}
            </button>
          ))}
        </div>
      </div>

      {tab === "graph" ? (
        <div className="grid lg:grid-cols-[1.6fr_1fr]">
          <div className="bg-[#f5f7fb] relative">
            <svg
              viewBox="0 0 620 420"
              className="w-full h-auto block"
              role="group"
              aria-label="Findings graph. Select a finding to inspect it."
            >
              {FINDINGS.flatMap((f) =>
                f.links
                  .filter((l) => f.id < l)
                  .map((l) => {
                    const t = byId(l);
                    const on = selected.id === f.id || selected.id === t.id;
                    return (
                      <line
                        key={f.id + l}
                        x1={f.x}
                        y1={f.y}
                        x2={t.x}
                        y2={t.y}
                        stroke={on ? "#191e28" : "#c3cad8"}
                        strokeWidth={on ? 2 : 1.25}
                        style={{ transition: "stroke 200ms ease" }}
                      />
                    );
                  }),
              )}
              {FINDINGS.map((f) => {
                const on = selected.id === f.id;
                return (
                  <g
                    key={f.id}
                    transform={`translate(${f.x} ${f.y})`}
                    tabIndex={0}
                    role="button"
                    aria-pressed={on}
                    aria-label={`${KIND[f.kind].label}: ${f.name}`}
                    onClick={() => setSelected(f)}
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setSelected(f))
                    }
                    className="cursor-pointer outline-none [&:focus-visible>circle:first-child]:stroke-[#2449c4]"
                  >
                    <circle
                      r={on ? 24 : 18}
                      fill="#fff"
                      stroke={on ? "#191e28" : "transparent"}
                      strokeWidth={2}
                      style={{ transition: "r 200ms ease" }}
                    />
                    <circle
                      r={on ? 15 : 11}
                      fill={KIND[f.kind].color}
                      style={{ transition: "r 200ms ease" }}
                    />
                    <text
                      y={on ? 44 : 38}
                      textAnchor="middle"
                      fontSize={14}
                      fontWeight={on ? 700 : 500}
                      fill="#191e28"
                    >
                      {f.name.length > 26 ? f.name.slice(0, 25) + "…" : f.name}
                    </text>
                  </g>
                );
              })}
            </svg>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 px-4 pb-3 text-[13px] text-[#4b5466]">
              {Object.values(KIND).map((k) => (
                <li key={k.label} className="flex items-center gap-1.5">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full"
                    style={{ background: k.color }}
                  />
                  {k.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 md:p-6" aria-live="polite">
            <p
              className="font-semibold"
              style={{
                color:
                  KIND[selected.kind].color === "#00a870" ? "#067049" : KIND[selected.kind].color,
              }}
            >
              {KIND[selected.kind].label} · {selected.department}
            </p>
            <h4 className="text-[20px] font-semibold leading-tight mt-1">{selected.name}</h4>
            <p className="mt-4 text-[#4b5466]">What it costs</p>
            <p className="font-medium">{selected.impact}</p>
            <p className="mt-4 text-[#4b5466]">Evidence</p>
            <p className="font-medium">{selected.evidence}</p>
            <p className="mt-4 text-[#4b5466]">Connected to</p>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {selected.links.map((id) => {
                const t = byId(id);
                return (
                  <button
                    key={id}
                    onClick={() => setSelected(t)}
                    className="px-2.5 py-1.5 rounded-[3px] bg-[#e9edf5] hover:bg-[#c9d7f7] transition-colors text-left"
                  >
                    {t.name}
                  </button>
                );
              })}
            </div>
            <p className="mt-6 text-[#4b5466] text-[13px]">
              Proposed by UniversAIDS. Validated by a senior consultant.
            </p>
          </div>
        </div>
      ) : (
        <table className="w-full text-left">
          <thead className="text-[#4b5466]">
            <tr className="bg-[#f5f7fb]">
              <th className="font-medium px-5 py-3">Source</th>
              <th className="font-medium px-3 py-3 hidden md:table-cell">Type</th>
              <th className="font-medium px-5 py-3">What it showed</th>
            </tr>
          </thead>
          <tbody>
            {SOURCES.map((s) => (
              <tr key={s.file} className="even:bg-[#f8f9fc] align-top">
                <td className="px-5 py-3.5 font-medium">{s.file}</td>
                <td className="px-3 py-3.5 text-[#4b5466] hidden md:table-cell">{s.kind}</td>
                <td className="px-5 py-3.5">{s.found}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
