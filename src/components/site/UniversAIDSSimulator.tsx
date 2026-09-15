import { useState } from "react";
import { 
  Network, 
  FileText, 
  FileSpreadsheet, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  Lock,
  ArrowUpRight
} from "lucide-react";

interface Node {
  id: string;
  name: string;
  category: "bottleneck" | "process" | "system" | "root_cause";
  x: number;
  y: number;
  size: number;
  connections: string[];
  department: string;
  evidence: string;
  impact: string;
}

const NODES: Node[] = [
  {
    id: "recon-delay",
    name: "Manual Settlement Reconciliation",
    category: "bottleneck",
    x: 220,
    y: 130,
    size: 26,
    connections: ["sap-erp", "procurement-lag", "disputed-invoices"],
    department: "Finance & Accounting",
    evidence: "FIN_Audit_Sept2026.xlsx (Row 142) & CFO Discovery Session 02",
    impact: "High severity · 14.5 hours weekly lost in Excel data manipulation",
  },
  {
    id: "sap-erp",
    name: "Legacy SAP ERP Integration",
    category: "system",
    x: 390,
    y: 170,
    size: 32,
    connections: ["recon-delay", "api-payload", "procurement-lag"],
    department: "Enterprise IT & Core Systems",
    evidence: "Architecture_Topology_v2.docx · Page 18",
    impact: "Core dependency · Batch ingestion fails every 36h without retry logic",
  },
  {
    id: "procurement-lag",
    name: "Vendor PO Cycle Friction",
    category: "process",
    x: 480,
    y: 90,
    size: 24,
    connections: ["recon-delay", "sap-erp", "vendor-churn"],
    department: "Supply Chain & Procurement",
    evidence: "Vendor_SLA_Reviews_Q3.csv & Head of Procurement Interview",
    impact: "Cycle time averages 18 days vs industry standard 4 days",
  },
  {
    id: "disputed-invoices",
    name: "Disputed Invoice Choke",
    category: "root_cause",
    x: 140,
    y: 250,
    size: 28,
    connections: ["recon-delay", "audit-gap"],
    department: "Commercial Operations",
    evidence: "Accounts_Receivable_Aging_Report.xlsx",
    impact: "₦42M in delayed working capital turnover",
  },
  {
    id: "api-payload",
    name: "Unsynchronized POS Endpoints",
    category: "system",
    x: 520,
    y: 260,
    size: 22,
    connections: ["sap-erp", "customer-friction"],
    department: "Retail & Branch Operations",
    evidence: "Branch_Network_POS_Logs_July.csv",
    impact: "Inventory skew across 14 store locations",
  },
  {
    id: "audit-gap",
    name: "Unverified Handoff Protocol",
    category: "root_cause",
    x: 270,
    y: 330,
    size: 24,
    connections: ["disputed-invoices", "recon-delay"],
    department: "Risk & Compliance",
    evidence: "Compliance_Checklist_Q2.docx · Section 4.2",
    impact: "Regulatory audit finding risk during annual reporting",
  },
  {
    id: "customer-friction",
    name: "Delivery Milestone Blackout",
    category: "process",
    x: 430,
    y: 350,
    size: 22,
    connections: ["api-payload", "audit-gap"],
    department: "Logistics & Fulfillment",
    evidence: "Driver_Dispatch_Telemetry_Sept.xlsx",
    impact: "Customer support ticket volume increased 34% MoM",
  },
];

const CATEGORY_STYLES = {
  bottleneck: { label: "Bottleneck", fill: "#ef4444", border: "rgba(239, 68, 68, 0.4)", text: "text-red-400" },
  process: { label: "Workflow Process", fill: "#3b82f6", border: "rgba(59, 130, 246, 0.4)", text: "text-blue-400" },
  system: { label: "Core Enterprise System", fill: "#8b5cf6", border: "rgba(139, 92, 246, 0.4)", text: "text-purple-400" },
  root_cause: { label: "Root Cause Entity", fill: "#029ce6", border: "rgba(2, 156, 230, 0.4)", text: "text-cyan-400" },
};

export function UniversAIDSSimulator() {
  const [activeTab, setActiveTab] = useState<"graph" | "evidence" | "audit">("graph");
  const [selectedNode, setSelectedNode] = useState<Node>(NODES[0]);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);

  return (
    <div className="relative rounded-3xl border border-border/80 bg-card-gradient overflow-hidden shadow-2xl backdrop-blur-xl">
      {/* Top Bar / Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border/70 px-6 py-4 gap-4 bg-background/50">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/30 border border-primary/30">
            <Network className="h-5 w-5 text-primary-glow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-foreground text-sm">UniversAIDS</span>
              <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-medium text-primary-glow uppercase tracking-wider">
                Enterprise v2.4 Live
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Organizational Discovery, Evidence Traceability & Synthesis Engine
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="inline-flex rounded-xl bg-surface p-1 border border-border">
          <button
            onClick={() => setActiveTab("graph")}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "graph"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Network className="h-3.5 w-3.5" />
            Topological Knowledge Graph
          </button>
          <button
            onClick={() => setActiveTab("evidence")}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "evidence"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            Evidence & Synthesis Citations
          </button>
          <button
            onClick={() => setActiveTab("audit")}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              activeTab === "audit"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Immutable Audit Statement
          </button>
        </div>
      </div>

      {/* Main Interactive Screen */}
      <div className="p-6">
        {activeTab === "graph" && (
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6 items-start">
            {/* SVG Interactive Canvas */}
            <div className="relative rounded-2xl border border-border/70 bg-[#0a1224] p-4 overflow-hidden min-h-[440px] flex flex-col justify-between">
              <div className="flex items-center justify-between z-10 text-[11px] text-muted-foreground font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Physics Force Simulation: Active (7 Nodes, 9 Cross-Domain Edges)
                </span>
                <span className="hidden sm:inline-block">Click any node to inspect evidence</span>
              </div>

              {/* Force directed representation */}
              <div className="relative w-full h-[360px] my-auto">
                <svg className="w-full h-full" viewBox="0 0 680 400">
                  <defs>
                    <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#029ce6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Edges */}
                  {NODES.map((node) =>
                    node.connections.map((targetId) => {
                      const target = NODES.find((n) => n.id === targetId);
                      if (!target) return null;
                      const isHighlighted =
                        selectedNode.id === node.id ||
                        selectedNode.id === target.id ||
                        hoveredNode?.id === node.id ||
                        hoveredNode?.id === target.id;
                      return (
                        <line
                          key={`${node.id}-${target.id}`}
                          x1={node.x}
                          y1={node.y}
                          x2={target.x}
                          y2={target.y}
                          stroke={isHighlighted ? "#029ce6" : "rgba(148, 163, 184, 0.18)"}
                          strokeWidth={isHighlighted ? 2.5 : 1.2}
                          strokeDasharray={isHighlighted ? "none" : "3,3"}
                          className="transition-all duration-300"
                        />
                      );
                    })
                  )}

                  {/* Nodes */}
                  {NODES.map((node) => {
                    const isSelected = selectedNode.id === node.id;
                    const isHovered = hoveredNode?.id === node.id;
                    const style = CATEGORY_STYLES[node.category];

                    return (
                      <g
                        key={node.id}
                        transform={`translate(${node.x}, ${node.y})`}
                        className="cursor-pointer transition-transform duration-200"
                        onClick={() => setSelectedNode(node)}
                        onMouseEnter={() => setHoveredNode(node)}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        {(isSelected || isHovered) && (
                          <circle
                            r={node.size + 10}
                            fill="none"
                            stroke={style.fill}
                            strokeWidth={2}
                            opacity={0.6}
                            filter="url(#glow)"
                            className="animate-pulse"
                          />
                        )}

                        <circle
                          r={node.size}
                          fill="#0f1f3d"
                          stroke={isSelected ? "#029ce6" : style.fill}
                          strokeWidth={isSelected ? 3 : 2}
                        />

                        <circle r={4} fill={style.fill} />

                        <text
                          y={node.size + 14}
                          textAnchor="middle"
                          fill={isSelected ? "#ffffff" : "#94a3b8"}
                          fontSize={10}
                          fontWeight={isSelected ? 600 : 400}
                          className="select-none pointer-events-none transition-colors"
                        >
                          {node.name.length > 22 ? `${node.name.slice(0, 20)}...` : node.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border/40 text-[10px] text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-500" /> Bottleneck
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-blue-500" /> Process
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-purple-500" /> Enterprise System
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-cyan-500" /> Root Cause
                  </span>
                </div>
                <span className="italic text-primary-glow">Interactive canvas — Click nodes</span>
              </div>
            </div>

            {/* Inspector Card (Right Pane) */}
            <div className="rounded-2xl border border-border/80 bg-surface/80 p-5 backdrop-blur">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Entity Inspector
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium border ${
                    CATEGORY_STYLES[selectedNode.category].text
                  }`}
                  style={{ borderColor: CATEGORY_STYLES[selectedNode.category].border }}
                >
                  {CATEGORY_STYLES[selectedNode.category].label}
                </span>
              </div>

              <h4 className="font-display text-lg font-medium text-foreground mb-2">
                {selectedNode.name}
              </h4>
              <div className="text-xs text-primary-glow mb-4">
                Department: <span className="text-foreground">{selectedNode.department}</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="rounded-xl bg-background/60 p-3 border border-border/50">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Quantified Business Friction
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">
                    {selectedNode.impact}
                  </p>
                </div>

                <div className="rounded-xl bg-primary/10 p-3 border border-primary/20">
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary-glow mb-1">
                    <FileSpreadsheet className="h-3 w-3" />
                    Direct Evidence Citation
                  </div>
                  <p className="text-muted-foreground font-mono text-[11px] break-all">
                    {selectedNode.evidence}
                  </p>
                </div>

                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Correlated Topology Edges ({selectedNode.connections.length})
                  </div>
                  <div className="space-y-1.5">
                    {selectedNode.connections.map((targetId) => {
                      const target = NODES.find((n) => n.id === targetId);
                      if (!target) return null;
                      return (
                        <button
                          key={target.id}
                          onClick={() => setSelectedNode(target)}
                          className="w-full flex items-center justify-between rounded-lg bg-background/40 hover:bg-background/80 px-2.5 py-1.5 text-left border border-border/40 transition-colors"
                        >
                          <span className="truncate text-[11px] text-foreground">{target.name}</span>
                          <span className="text-[9px] text-muted-foreground uppercase tracking-wider shrink-0 ml-2">
                            {target.category}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[11px]">
                  <span className="text-muted-foreground">Synthesis Engine:</span>
                  <span className="font-mono text-primary-glow">Claude 3.5 Sonnet + Pydantic v2</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "evidence" && (
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-border/70 bg-surface/60 p-4">
                <div className="flex items-center gap-2 mb-2 text-primary-glow">
                  <FileSpreadsheet className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Multi-Format Ingestion</span>
                </div>
                <h5 className="font-display text-sm font-medium mb-1">Spreadsheet Reconciliation</h5>
                <p className="text-xs text-muted-foreground">
                  Parses complex multi-tab Excel (.xlsx, .xlsm) and CSV files to detect operational discrepancies, double-entry delays, and ledger mismatches.
                </p>
              </div>

              <div className="rounded-2xl border border-border/70 bg-surface/60 p-4">
                <div className="flex items-center gap-2 mb-2 text-primary-glow">
                  <FileText className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Unstructured Audits</span>
                </div>
                <h5 className="font-display text-sm font-medium mb-1">Word & Document Maps</h5>
                <p className="text-xs text-muted-foreground">
                  Ingests SOPs, interview transcripts, and compliance manuals via Mammoth extractors into clean, semantic tokens linked to operational units.
                </p>
              </div>

              <div className="rounded-2xl border border-border/70 bg-surface/60 p-4">
                <div className="flex items-center gap-2 mb-2 text-primary-glow">
                  <Lock className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Zero Ingestion Charge</span>
                </div>
                <h5 className="font-display text-sm font-medium mb-1">Strict Cold Storage</h5>
                <p className="text-xs text-muted-foreground">
                  Raw files sit securely partitioned in client object storage. Processing is triggered strictly on-demand by Senior Consultants with full audit trail.
                </p>
              </div>
            </div>

            {/* Evidence Flow Mock */}
            <div className="rounded-2xl border border-border/80 bg-[#0a1426] p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Bi-Directional Citation Mapping (Raw File ➔ Synthesized Finding ➔ Board Recommendation)
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-surface/70 border border-border/60 flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-foreground">FIN_Vendor_Recon_2026.xlsx [Sheet: Discrepancies, L78-94]</span>
                  </div>
                  <span className="text-[10px] text-primary-glow bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                    Confidence: 99.4% · Cited in 3 Findings
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-surface/70 border border-border/60 flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-foreground">Procurement_SOP_v3.docx [Section 2.4 Handoff to Logistics]</span>
                  </div>
                  <span className="text-[10px] text-primary-glow bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                    Confidence: 98.7% · Cited in 2 Findings
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-surface/70 border border-border/60 flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-foreground">C-Suite_Discovery_Interview_COO.mp3 [Timestamp 18:24 - 22:10]</span>
                  </div>
                  <span className="text-[10px] text-primary-glow bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                    Confidence: 97.2% · Cited in Cross-Department Synthesis
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "audit" && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-border/70 bg-[#070f20] p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-border/60 gap-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary-glow font-mono font-semibold">
                    UniversAI Solutions Ltd · Official Engagement Statement
                  </div>
                  <h4 className="font-display text-lg font-medium text-foreground">
                    Bank-Style Immutable Audit Ledger
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[11px] font-medium text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    GDPR & AU AI Strategy Compliant
                  </span>
                </div>
              </div>

              {/* Table ledger */}
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="text-muted-foreground border-b border-border/40 text-[10px] uppercase tracking-wider">
                      <th className="py-2.5 px-3">Event Timestamp</th>
                      <th className="py-2.5 px-3">Actor & Role</th>
                      <th className="py-2.5 px-3">Operation / Target</th>
                      <th className="py-2.5 px-3">Cryptographic Hash</th>
                      <th className="py-2.5 px-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/20 text-[11px]">
                    <tr>
                      <td className="py-3 px-3 text-muted-foreground">2026-09-15 11:42:01</td>
                      <td className="py-3 px-3 text-foreground">Partner Admin (Jane Doe)</td>
                      <td className="py-3 px-3">COMMENCE_DISCOVERY · Dept Topology Locked</td>
                      <td className="py-3 px-3 text-primary-glow/70">8f2a91...bc41</td>
                      <td className="py-3 px-3 text-right text-emerald-400">COMMITTED</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-muted-foreground">2026-09-15 12:05:18</td>
                      <td className="py-3 px-3 text-foreground">Senior Consultant (Michaelangelo F.)</td>
                      <td className="py-3 px-3">TRIGGER_SYNTHESIS · Finance Dept (Claude 3.5 Sonnet)</td>
                      <td className="py-3 px-3 text-primary-glow/70">3c11da...90e2</td>
                      <td className="py-3 px-3 text-right text-emerald-400">READY</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-muted-foreground">2026-09-15 12:21:40</td>
                      <td className="py-3 px-3 text-foreground">Senior Consultant (Michaelangelo F.)</td>
                      <td className="py-3 px-3">GRANT_TEMP_AUTH ➔ Junior Consultant (Olabode E.)</td>
                      <td className="py-3 px-3 text-primary-glow/70">e7811c...fa03</td>
                      <td className="py-3 px-3 text-right text-cyan-400">EXPIRED (2h)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-muted-foreground">2026-09-15 12:30:11</td>
                      <td className="py-3 px-3 text-foreground">System Purge Daemon</td>
                      <td className="py-3 px-3">ENGAGEMENT_DATA_MINIMIZATION · Raw Files Purged</td>
                      <td className="py-3 px-3 text-primary-glow/70">19d2bb...55a8</td>
                      <td className="py-3 px-3 text-right text-emerald-400">VERIFIED</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-t border-border/60 bg-surface/40 text-xs text-muted-foreground gap-3">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">Human-in-the-Loop Safeguard:</span>
          <span>AI proposes & correlates · Senior Consultants validate & remain accountable.</span>
        </div>
        <div className="flex items-center gap-1.5 text-primary-glow font-medium">
          <span>Enterprise Discovery Engine</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
}
