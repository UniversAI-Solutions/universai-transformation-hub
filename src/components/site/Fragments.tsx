/*
  Interface fragments of the two in-house tools, drawn in HTML. They carry data-ui, so the
  product's own borders and labels are allowed here. Sample data, as on the platform page.
*/

const NODES = [
  { x: 14, y: 30, r: 9, label: "Manual settlement reconciliation", kind: "bottleneck" },
  { x: 44, y: 46, r: 12, label: "Legacy SAP batch import", kind: "system" },
  { x: 76, y: 20, r: 8, label: "Vendor PO cycle, 18 days", kind: "process" },
  { x: 26, y: 74, r: 10, label: "Unverified handoff protocol", kind: "root" },
  { x: 70, y: 72, r: 8, label: "POS endpoints out of sync", kind: "system" },
];
const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [1, 4],
  [3, 1],
];
const KIND = {
  bottleneck: "#e5484d",
  system: "#2449c4",
  process: "#5b7bd9",
  root: "#00c281",
} as const;

export function AidsFragment() {
  return (
    <div data-ui className="bg-white text-[#191e28] rounded-[6px] overflow-hidden w-full">
      <div className="flex items-center justify-between px-5 py-3 text-[15px]">
        <span className="font-semibold">UniversAIDS · Engagement: Retail group</span>
        <span className="text-[#4b5466]">27 files · 9 interviews</span>
      </div>
      <div className="grid grid-cols-[1.5fr_1fr]">
        <svg
          viewBox="0 0 100 100"
          className="w-full aspect-square bg-[#f5f7fb]"
          role="img"
          aria-label="Evidence graph linking five findings"
        >
          {EDGES.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
              stroke={a === 3 || b === 3 ? "#00c281" : "#b9c3d6"}
              strokeWidth={a === 3 || b === 3 ? 0.9 : 0.5}
            />
          ))}
          {NODES.map((n) => (
            <g key={n.label}>
              <circle cx={n.x} cy={n.y} r={n.r / 2.2} fill={KIND[n.kind as keyof typeof KIND]} />
              {n.kind === "root" && (
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.r / 1.3}
                  fill="none"
                  stroke="#00c281"
                  strokeWidth="0.6"
                />
              )}
            </g>
          ))}
        </svg>
        <div className="p-5 text-[15px] leading-snug">
          <p className="font-semibold text-[#067049]">Root cause</p>
          <p className="font-semibold text-[17px] mt-1">Unverified handoff protocol</p>
          <p className="text-[#4b5466] mt-3">Explains 3 of 4 symptoms in Finance and Commercial.</p>
          <p className="mt-4 font-semibold">Sources</p>
          <ul className="mt-1 space-y-1 text-[#4b5466]">
            <li>Compliance_Checklist_Q2.docx, §4.2</li>
            <li>AR_Aging_Report.xlsx, row 142</li>
            <li>CFO interview, session 2</li>
          </ul>
          <p className="mt-4 text-[#4b5466]">Validated by: senior consultant</p>
        </div>
      </div>
    </div>
  );
}

const ROWS = [
  { name: "Invoice matcher", uptime: "99.96%", latency: "640 ms", drift: "0.4%", ok: true },
  { name: "Waybill OCR", uptime: "99.91%", latency: "1.2 s", drift: "1.8%", ok: false },
  { name: "Demand forecast", uptime: "100%", latency: "310 ms", drift: "0.2%", ok: true },
  { name: "HR screening", uptime: "99.98%", latency: "820 ms", drift: "0.6%", ok: true },
];
const SPEND = [62, 58, 61, 55, 49, 47, 44, 41, 43, 38, 36, 34];

export function AimsFragment() {
  return (
    <div
      data-ui
      className="bg-white text-[#191e28] rounded-[6px] overflow-hidden w-full text-[15px]"
    >
      <div className="flex items-center justify-between px-5 py-3 bg-[#f5f7fb]">
        <span className="font-semibold">UniversAIMS · 4 systems in production</span>
        <span className="text-[#067049] font-semibold">All within SLA</span>
      </div>
      <table className="w-full text-left">
        <thead className="text-[#4b5466]">
          <tr className="bg-[#f5f7fb]">
            <th className="font-medium px-5 py-2.5">System</th>
            <th className="font-medium px-3 py-2.5">Uptime</th>
            <th className="font-medium px-3 py-2.5">p95</th>
            <th className="font-medium px-5 py-2.5 text-right">Drift</th>
          </tr>
        </thead>
        <tbody className="nums">
          {ROWS.map((r) => (
            <tr key={r.name} className="even:bg-[#f8f9fc]">
              <td className="px-5 py-2.5 font-medium">{r.name}</td>
              <td className="px-3 py-2.5">{r.uptime}</td>
              <td className="px-3 py-2.5">{r.latency}</td>
              <td
                className={`px-5 py-2.5 text-right font-semibold ${r.ok ? "" : "text-[#c4321f]"}`}
              >
                {r.drift}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-5 pt-4 pb-5 bg-[#f5f7fb]">
        <div className="flex justify-between">
          <span className="font-semibold">Token spend, last 12 months</span>
          <span className="text-[#067049] font-semibold">−45%</span>
        </div>
        <div className="flex items-end gap-1.5 h-20 mt-3" aria-hidden="true">
          {SPEND.map((v, i) => (
            <div
              key={i}
              className="flex-1 bg-[#2449c4]"
              style={{ height: `${v * 1.5}%`, opacity: 0.45 + i * 0.045 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
