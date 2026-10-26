import lagos from "@/assets/found/ikoyi-lagos-nigeria.webp";
import abuja from "@/assets/found/abuja-street.webp";
import classroom from "@/assets/found/a-classroom-of-students-7138907393.webp";

/*
  UniversAI Insights. Long-form pieces on the firm's platforms (UniversAIDS, UniversAIMS) and the
  methods behind them. Written from the firm's own published approach; no outside statistics,
  client names or quotes are invented. Figures cited come from the firm's own case studies.
*/

export type Topic = "UniversAIDS" | "UniversAIMS" | "Methodology" | "Governance";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "callout"; title: string; text: string };

export type Cover =
  | { kind: "aids" }
  | { kind: "aims" }
  | { kind: "photo"; src: string; alt: string; credit: string; pos?: string }
  | {
      kind: "icon";
      icon:
        | "discover"
        | "implement"
        | "partner"
        | "shield"
        | "evidence"
        | "pulse"
        | "naira"
        | "training";
      field: "navy" | "blue" | "sky" | "deep";
    };

export interface Insight {
  slug: string;
  /** search-result title (under 55 characters) and description (under 160) */
  seoTitle: string;
  seoDescription: string;
  topic: Topic;
  title: string;
  dek: string;
  cover: Cover;
  body: Block[];
  related: string[];
}

export const TOPICS: Topic[] = ["UniversAIDS", "UniversAIMS", "Methodology", "Governance"];

export const INSIGHTS: Insight[] = [
  {
    slug: "inside-universaids",
    seoTitle: "How UniversAIDS Finds the Root Cause of Bottlenecks",
    seoDescription:
      "How UniversAI's discovery platform turns interviews, spreadsheets and SOPs into a cited map of root causes, so AI is aimed at causes, not symptoms.",
    topic: "UniversAIDS",
    title: "Inside UniversAIDS: how we trace a bottleneck to its source",
    dek: "A walk through the discovery system our consultants use to turn interviews, spreadsheets and SOPs into a map of cause and effect.",
    cover: { kind: "aids" },
    related: ["evidence-you-can-audit", "automating-the-symptom", "baselines-before-build"],
    body: [
      {
        type: "p",
        text: "Every organisation that asks for AI already knows something is wrong. Reports arrive late, reconciliations eat whole days, customers wait. What it rarely knows is why. The visible problem is usually several steps downstream of the real one, and a system built against the visible problem inherits the real one intact.",
      },
      {
        type: "p",
        text: "UniversAIDS, the UniversAI Discovery System, exists to close that gap. It is the internal platform our consultants use during the Discovery phase of every engagement, and it is built around one idea: a finding is only useful if you can see what caused it and prove where it came from.",
      },
      { type: "h2", text: "What goes in" },
      {
        type: "p",
        text: "Discovery starts with the material an organisation already has. We do not ask teams to fill in new templates. UniversAIDS takes in the documents and records that describe how work actually happens.",
      },
      {
        type: "list",
        items: [
          "Spreadsheets and trackers, including multi-tab reconciliation workbooks",
          "Standard operating procedures, policies and compliance checklists",
          "Exports from core systems: ERP, POS, CRM and core banking logs",
          "Transcripts of structured interviews with leadership and front-line staff",
        ],
      },
      {
        type: "p",
        text: "Each source is held in a partition for that engagement. Processing runs only when a senior consultant triggers it, and every run is logged.",
      },
      { type: "h2", text: "From symptoms to a graph" },
      {
        type: "p",
        text: "As evidence is processed, UniversAIDS records findings as entities: a bottleneck, a process, a system, a candidate root cause. It then records the relationships between them. A manual reconciliation step depends on a batch import; the batch import fails on a schedule; the failure traces back to a handoff with no sign-off. The result is a graph rather than a list, and the graph is the point.",
      },
      {
        type: "quote",
        text: "A list of problems tells you where it hurts. A graph of causes tells you where to cut.",
      },
      {
        type: "p",
        text: "When several symptoms in different departments converge on the same node, that node is a strong candidate for the root cause. Fixing it removes more pain than fixing any single symptom, which is why our implementation recommendations so often look smaller and cheaper than the problem description that started the engagement.",
      },
      { type: "h2", text: "What the consultant does" },
      {
        type: "p",
        text: "UniversAIDS proposes; it does not decide. Every candidate root cause is reviewed by a senior consultant, tested against further interviews, and either confirmed, revised or rejected. The graph changes as the evidence does. Only confirmed findings reach the client report, and each one carries its sources.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Ingest",
            text: "Evidence from documents, systems and interviews is loaded into the engagement's partition.",
          },
          {
            title: "Correlate",
            text: "UniversAIDS links findings into a graph of bottlenecks, processes, systems and causes.",
          },
          {
            title: "Validate",
            text: "A senior consultant tests each candidate cause against the evidence and the people who do the work.",
          },
          {
            title: "Recommend",
            text: "Confirmed causes become a costed blueprint for the systems worth building, in the order worth building them.",
          },
        ],
      },
      { type: "h2", text: "What the client receives" },
      {
        type: "p",
        text: "The output of Discovery is a bottleneck map, an ROI and payback model, a system architecture blueprint and a readiness assessment. Because every finding is traceable, leadership can challenge any line of it and see exactly where it came from. That traceability is what makes the recommendation something a board can approve.",
      },
      {
        type: "callout",
        title: "In short",
        text: "UniversAIDS turns the documents an organisation already has into a cited map of cause and effect, so that the AI systems we recommend are aimed at causes rather than symptoms.",
      },
    ],
  },
  {
    slug: "universaims-after-go-live",
    seoTitle: "AI Monitoring After Go-Live: Inside UniversAIMS",
    seoDescription:
      "What to monitor once an AI system is live: uptime, accuracy drift, running cost and incidents, and how UniversAIMS keeps AI accurate and affordable.",
    topic: "UniversAIMS",
    title: "UniversAIMS: what we watch after a system goes live",
    dek: "Deployment is where most AI projects stop being managed. It is where ours start being measured.",
    cover: { kind: "aims" },
    related: [
      "model-drift-in-production",
      "token-costs-under-control",
      "adoption-is-the-hard-part",
    ],
    body: [
      {
        type: "p",
        text: "A model that performs well on launch day is not a finished product. Data changes, vendors change their APIs, staff find new ways to use the system and new ways around it. Without someone watching, an AI system degrades quietly until the people who depend on it stop trusting it.",
      },
      {
        type: "p",
        text: "UniversAIMS, the UniversAI Management System, is the platform we use in the Partnership phase to keep every system we deploy accurate, affordable and in use. It is how we keep the commitments we make after launch.",
      },
      { type: "h2", text: "Four things we measure continuously" },
      {
        type: "steps",
        items: [
          {
            title: "Availability and speed",
            text: "Uptime and response times for each production system, with alerts when either moves outside the agreed range.",
          },
          {
            title: "Accuracy and drift",
            text: "How far the system's outputs move from their validated baseline over time, by system and by task.",
          },
          {
            title: "Running cost",
            text: "Token spend and API usage, tracked against budget, with renewals handled before quotas run out.",
          },
          {
            title: "Incidents",
            text: "Upstream changes, schema breaks and vendor outages, routed to our engineers before they reach your staff.",
          },
        ],
      },
      { type: "h2", text: "Why we built it ourselves" },
      {
        type: "p",
        text: "General monitoring tools tell you whether a server is up. They do not tell you whether an invoice matcher has started matching the wrong invoices, or whether a document reader has become less reliable on a new waybill format. The questions that matter for an AI system are specific to the work it does, so the monitoring has to be specific too.",
      },
      {
        type: "quote",
        text: "The useful question is not whether the system is running. It is whether it is still right.",
      },
      { type: "h2", text: "From signals to decisions" },
      {
        type: "p",
        text: "Monitoring only matters if someone acts on it. UniversAIMS feeds three regular decisions: when to retrain or recalibrate a model, when to change how a system routes work to keep costs down, and when to bring a finding to leadership. The last of these happens in a monthly review that reconciles time saved and cost reduced against the baseline set in Discovery.",
      },
      {
        type: "list",
        items: [
          "Retraining and recalibration as products, customers and processes change",
          "Routing and caching changes that reduce running cost without reducing quality",
          "Monthly ROI statements reviewed with leadership",
          "A record of every incident, its cause and its fix",
        ],
      },
      {
        type: "callout",
        title: "In short",
        text: "UniversAIMS watches availability, accuracy, cost and incidents for every system we deploy, so the return measured at launch is the return you keep.",
      },
    ],
  },
  {
    slug: "automating-the-symptom",
    seoTitle: "Why AI Projects Fail: Automating the Symptom",
    seoDescription:
      "The most common reason AI projects fail is building a good solution to the wrong problem. Why root-cause discovery should come before any AI build.",
    topic: "Methodology",
    title: "Why AI projects fail: automating the symptom",
    dek: "The most common AI failure is not a technical one. It is building a good solution to the wrong problem.",
    cover: { kind: "icon", icon: "discover", field: "blue" },
    related: ["inside-universaids", "baselines-before-build", "ai-proposes-people-decide"],
    body: [
      {
        type: "p",
        text: "Most AI initiatives begin with a symptom that someone senior has noticed. Reconciliation takes too long. Hiring is slow. Reports are late. The natural response is to automate the slow step. The trouble is that the slow step is often slow for a reason that lives somewhere else entirely.",
      },
      { type: "h2", text: "How symptoms mislead" },
      {
        type: "p",
        text: "Consider a finance team that spends days each month reconciling settlements by hand. Automating the reconciliation looks like the obvious project. But if the reason the numbers disagree is an upstream handoff with no verification step, an automated reconciler will simply surface the same disagreements faster. The team will still spend its days resolving them.",
      },
      { type: "quote", text: "Automate a symptom and you get the same problem, faster." },
      {
        type: "p",
        text: "This pattern repeats across industries. Stockouts that look like a forecasting problem turn out to be a data synchronisation problem between branches and the ERP. Slow patient intake that looks like a staffing problem turns out to be a pre-authorisation process that stalls on missing documents.",
      },
      { type: "h2", text: "Diagnose first" },
      {
        type: "p",
        text: "Our methodology puts Discovery before any build for this reason. Using UniversAIDS, our consultants trace each visible problem back through the processes and systems it depends on until they reach something that explains several symptoms at once. That is the cause worth investing in.",
      },
      {
        type: "list",
        items: [
          "Map the process end to end before proposing any system",
          "Interview the people who do the work, not only the people who manage it",
          "Look for causes that explain more than one symptom",
          "Set a measurable baseline so the fix can be proven",
        ],
      },
      { type: "h2", text: "What changes when you start with the cause" },
      {
        type: "p",
        text: "Projects aimed at causes tend to be smaller, cheaper and more durable. They also tend to surprise the people who commissioned them, because the recommendation rarely matches the original request. That is a feature. The goal of Discovery is not to confirm the brief; it is to find the intervention with the most leverage.",
      },
      {
        type: "callout",
        title: "In short",
        text: "Before you automate a slow step, find out why it is slow. The answer usually points somewhere cheaper and more effective.",
      },
    ],
  },
  {
    slug: "evidence-you-can-audit",
    seoTitle: "Auditable AI: Citations in AI-Assisted Diagnostics",
    seoDescription:
      "Why every finding in an AI-assisted business diagnostic should cite the file, row or interview it came from, and how UniversAIDS makes analysis auditable.",
    topic: "UniversAIDS",
    title: "Evidence you can audit: citations in AI-assisted diagnostics",
    dek: "Why every finding in a UniversAIDS report points to the file, row or interview it came from.",
    cover: { kind: "icon", icon: "evidence", field: "navy" },
    related: ["inside-universaids", "ai-proposes-people-decide", "automating-the-symptom"],
    body: [
      {
        type: "p",
        text: "AI can read faster than any team of analysts. It can also state things with confidence that are not supported by the material it read. For a consultancy, that combination is a risk: a recommendation is only as good as the evidence behind it, and a board needs to be able to check that evidence for itself.",
      },
      { type: "h2", text: "Citations as a design principle" },
      {
        type: "p",
        text: "UniversAIDS was built so that no finding exists without its sources. When it identifies a bottleneck, it records where it saw it: the workbook and row, the page and section of a procedure, the interview and session. When findings are linked into a graph, the links carry their evidence too.",
      },
      {
        type: "list",
        items: [
          "Spreadsheet findings cite the file, tab and row",
          "Document findings cite the file, page and section",
          "Interview findings cite the session and speaker role",
          "System findings cite the export and time window",
        ],
      },
      {
        type: "quote",
        text: "If a finding cannot show where it came from, it does not go in the report.",
      },
      { type: "h2", text: "Why it matters to leadership" },
      {
        type: "p",
        text: "Citations change the conversation in the boardroom. Instead of debating whether a consultant's conclusion is right, leadership can open the source and decide for themselves. Disagreements become specific and quick to resolve. Recommendations that survive that scrutiny are far easier to fund.",
      },
      { type: "h2", text: "Why it matters to us" },
      {
        type: "p",
        text: "Citations also discipline our own work. A senior consultant validating a candidate root cause starts from its sources, not its summary. Weak findings are visible as weak because their evidence is thin. That is how we keep the AI in its proper role, proposing and correlating, while people decide.",
      },
      { type: "h2", text: "Handling evidence responsibly" },
      {
        type: "p",
        text: "Raw evidence often contains sensitive operational and personal data. In UniversAIDS it sits in a partition for that engagement, processing runs only on a consultant's instruction, and only a partner can close an engagement and purge its raw evidence. Access follows the consultant's role throughout.",
      },
      {
        type: "callout",
        title: "In short",
        text: "Every UniversAIDS finding carries its sources, so leadership can verify it and our consultants can test it before it becomes advice.",
      },
    ],
  },
  {
    slug: "model-drift-in-production",
    seoTitle: "Model Drift in Production: How to Catch It Early",
    seoDescription:
      "AI systems decay quietly as data changes. What model drift looks like in practice, and how baselines and monitoring catch it before users lose trust.",
    topic: "UniversAIMS",
    title: "Model drift: why AI systems decay, and how to catch it early",
    dek: "AI systems do not fail all at once. They drift. Here is what we watch for, and what we do about it.",
    cover: { kind: "icon", icon: "pulse", field: "deep" },
    related: [
      "universaims-after-go-live",
      "token-costs-under-control",
      "ai-proposes-people-decide",
    ],
    body: [
      {
        type: "p",
        text: "Traditional software does the same thing tomorrow that it did today. AI systems do not. Their behaviour depends on the data they see, and the data an organisation produces changes constantly: new products, new suppliers, new document formats, new customer behaviour. Over time, a model validated on last quarter's reality becomes a little less right about this quarter's.",
      },
      { type: "h2", text: "What drift looks like in practice" },
      {
        type: "list",
        items: [
          "A document reader that was reliable on the old waybill layout struggles with a new supplier's format",
          "A demand forecast trained before a pricing change keeps predicting the old pattern",
          "A screening model sees a new kind of role and scores candidates less consistently",
          "An assistant built on one vendor's model behaves differently after the vendor updates it",
        ],
      },
      {
        type: "p",
        text: "None of these produce an error message. The system keeps running and keeps producing answers. The answers simply get worse, slowly enough that nobody notices until trust has already gone.",
      },
      { type: "quote", text: "Drift is silent. That is exactly why it has to be measured." },
      { type: "h2", text: "How UniversAIMS catches it" },
      {
        type: "p",
        text: "Every system we deploy has a validated baseline from launch. UniversAIMS compares live behaviour against that baseline, task by task, and tracks the gap over time. Small movements are expected. Sustained or sudden movement raises an alert to our engineers, with the affected inputs attached.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Baseline",
            text: "Accuracy on representative tasks is recorded and signed off at launch.",
          },
          {
            title: "Compare",
            text: "Live outputs are sampled and compared against the baseline continuously.",
          },
          {
            title: "Alert",
            text: "Sustained or sudden movement is flagged to an engineer with examples.",
          },
          {
            title: "Correct",
            text: "The system is retrained, recalibrated or re-routed, then re-validated.",
          },
        ],
      },
      { type: "h2", text: "Fixing drift without breaking trust" },
      {
        type: "p",
        text: "Correcting a drifting system is not just a technical step. Staff who noticed odd results need to know they were heard and that the system is right again. That is why drift corrections appear in the monthly review with leadership, alongside the ROI figures they affect.",
      },
      {
        type: "callout",
        title: "In short",
        text: "Every AI system drifts. Measured against a signed-off baseline, drift is caught early and corrected before people stop trusting the system.",
      },
    ],
  },
  {
    slug: "token-costs-under-control",
    seoTitle: "How to Control AI Token Costs Without Losing Accuracy",
    seoDescription:
      "Usage-based AI pricing can make a successful system expensive. Caching, model routing and quota management that cut AI running costs safely.",
    topic: "UniversAIMS",
    title: "Keeping AI running costs under control without losing accuracy",
    dek: "Usage-based AI pricing can turn a successful system into an expensive one. Cost has to be managed like any other metric.",
    cover: { kind: "icon", icon: "naira", field: "sky" },
    related: ["universaims-after-go-live", "model-drift-in-production", "baselines-before-build"],
    body: [
      {
        type: "p",
        text: "Many modern AI systems are paid for by usage: every document read, every question answered, every summary written consumes tokens from a provider. That makes costs easy to start and hard to predict. A system that succeeds and gets used more costs more, and a system used carelessly can cost far more than it saves.",
      },
      { type: "h2", text: "Where the money goes" },
      {
        type: "list",
        items: [
          "Sending the same context to a model over and over instead of reusing it",
          "Using the largest available model for tasks a smaller one handles equally well",
          "Retrying failed calls without limits",
          "Running quota-bound services without watching renewal dates",
        ],
      },
      { type: "h2", text: "What we do about it" },
      {
        type: "p",
        text: "In the Partnership phase, running cost is one of the four things UniversAIMS tracks continuously for every system. We treat it as a quality metric with a budget, not as an invoice that arrives at the end of the month.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Cache",
            text: "Repeated context is cached so the system does not pay to read the same material twice.",
          },
          {
            title: "Route",
            text: "Each task goes to the smallest model that meets its accuracy baseline, with larger models reserved for the hard cases.",
          },
          {
            title: "Limit",
            text: "Retries, timeouts and fallbacks are bounded so failures do not become bills.",
          },
          {
            title: "Renew",
            text: "Quotas and subscriptions are tracked so renewals happen before a service runs out.",
          },
        ],
      },
      {
        type: "quote",
        text: "The cheapest model that meets the baseline is the right model for the task.",
      },
      { type: "h2", text: "Accuracy first, then cost" },
      {
        type: "p",
        text: "Cost changes are never made blind. Before a task is routed to a cheaper model or a new caching rule is applied, its output is checked against the accuracy baseline set at launch. If quality would fall, the change does not ship. Savings are then reported in the monthly review alongside the time and cost reductions the system was built to deliver.",
      },
      {
        type: "callout",
        title: "In short",
        text: "Managed deliberately, AI running costs fall as a system matures. UniversAIMS makes cost a tracked metric, with accuracy as the constraint.",
      },
    ],
  },
  {
    slug: "ai-proposes-people-decide",
    seoTitle: "Human-in-the-Loop AI: Who Is Accountable?",
    seoDescription:
      "Who signs the advice when AI helped write it? How human-in-the-loop governance and role-based access keep AI-assisted consulting accountable.",
    topic: "Governance",
    title: "AI proposes, people decide: accountability in AI-assisted consulting",
    dek: "Who signs the advice when an AI helped write it? At UniversAI, always a named person.",
    cover: { kind: "icon", icon: "shield", field: "navy" },
    related: ["evidence-you-can-audit", "inside-universaids", "automating-the-symptom"],
    body: [
      {
        type: "p",
        text: "AI makes analysis faster and broader than any team could manage alone. It also raises a question that every client should ask: when an AI-assisted recommendation turns out to be wrong, who is responsible? Our answer is fixed and written into how we work.",
      },
      {
        type: "quote",
        text: "The AI proposes and correlates. A senior consultant checks every finding, signs the advice and stays accountable for it.",
      },
      { type: "h2", text: "What the AI is for" },
      {
        type: "p",
        text: "In our engagements, AI does the work that benefits from speed and breadth: reading large volumes of documents and data, finding patterns across departments, linking symptoms to candidate causes, and drafting summaries with their sources attached. It is very good at proposing. It is not trusted to decide.",
      },
      { type: "h2", text: "What people are for" },
      {
        type: "list",
        items: [
          "Testing each candidate finding against the evidence and against the people who do the work",
          "Rejecting findings that are weakly supported, however plausible they sound",
          "Weighing context the evidence does not contain: politics, history, priorities",
          "Signing the final recommendation and answering for it",
        ],
      },
      { type: "h2", text: "Access follows responsibility" },
      {
        type: "p",
        text: "Accountability is also built into our tools. In both UniversAIDS and UniversAIMS, what a consultant can do follows their role. Senior consultants run evidence synthesis; field consultants work on the departments assigned to them; only a partner can open an engagement's structure or close it and purge its raw evidence.",
      },
      { type: "h2", text: "Why clients should insist on this" },
      {
        type: "p",
        text: "A recommendation nobody signs is a recommendation nobody owns. When a named person is accountable, the analysis is checked harder, the reasoning is explained better, and the client always knows who to call. That is worth more than any amount of speed.",
      },
      {
        type: "callout",
        title: "In short",
        text: "Human-in-the-loop is not a slogan for us. It is a rule about who decides, enforced by how our platforms grant access.",
      },
    ],
  },
  {
    slug: "baselines-before-build",
    seoTitle: "How to Measure AI ROI: Set the Baseline First",
    seoDescription:
      "You cannot prove an AI return without a starting point. How to baseline cycle time, effort, errors and leakage before building, then report ROI.",
    topic: "Methodology",
    title: "Measuring AI ROI: set the baseline before you build",
    dek: "You cannot prove a return you did not measure the starting point for. Here is how we set baselines in Discovery.",
    cover: {
      kind: "photo",
      src: abuja,
      alt: "A busy Abuja road: street lamps, traffic and traders carrying produce",
      credit: "Abuja. Photo: AdastralNg22, CC BY-SA 4.0, via Wikimedia Commons",
      pos: "50% 70%",
    },
    related: ["automating-the-symptom", "universaims-after-go-live", "token-costs-under-control"],
    body: [
      {
        type: "p",
        text: "Many AI projects are declared successful because they feel faster. Few can say by how much, or what that is worth. The difference is almost always the same: nobody measured the starting point before the system was built.",
      },
      { type: "h2", text: "What we measure" },
      {
        type: "p",
        text: "In Discovery, alongside the root-cause work, our consultants establish a baseline for the process the system is meant to improve. The baseline is agreed with the client before any build begins.",
      },
      {
        type: "list",
        items: [
          "Cycle time: how long the process takes from start to finish today",
          "Effort: how many staff hours it consumes each week, and at what cost",
          "Error and rework: how often outputs are wrong and must be redone",
          "Leakage: money lost or delayed, such as disputed invoices or spoiled stock",
        ],
      },
      { type: "h2", text: "Turning hours into naira" },
      {
        type: "p",
        text: "For each industry arm we maintain cost benchmarks: a typical cost per staff hour and the share of repetitive hours that AI can usually take over. Combined with the measured baseline, they give an early estimate of value that leadership can weigh against the cost of the build. The estimate is then replaced by real measurement once the system is live.",
      },
      { type: "quote", text: "An estimate gets a project approved. A baseline gets it proven." },
      { type: "h2", text: "Proving the return after launch" },
      {
        type: "p",
        text: "Once a system is in production, UniversAIMS tracks the same measures against the agreed baseline. The monthly review reports time saved and costs reduced in the terms leadership signed off at the start, which is how our published results are reported: less time spent screening CVs, less time producing reports, less content-creation work.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Agree",
            text: "Choose the measures that matter for this process and agree how they will be counted.",
          },
          {
            title: "Measure",
            text: "Record the baseline from real data and interviews before anything changes.",
          },
          {
            title: "Estimate",
            text: "Use sector benchmarks to estimate value and set expectations.",
          },
          {
            title: "Prove",
            text: "Report actual change against the baseline every month after launch.",
          },
        ],
      },
      {
        type: "callout",
        title: "In short",
        text: "Set the baseline in Discovery, estimate with honest benchmarks, and measure the same things after launch. That is how ROI stops being a feeling.",
      },
    ],
  },
  {
    slug: "ai-in-the-systems-you-run",
    seoTitle: "Integrating AI with ERP, POS, CRM and Core Banking",
    seoDescription:
      "Most value is lost between systems. How to build AI into the ERP, POS, CRM and banking platforms a business already runs, tested before go-live.",
    topic: "Methodology",
    title: "AI that works inside the systems you already run",
    dek: "Most value is lost at the edges between systems. That is where we build.",
    cover: {
      kind: "photo",
      src: lagos,
      alt: "Ikoyi, Lagos, seen from above, with towers on the lagoon behind",
      credit: "Ikoyi, Lagos. Photo: Reginald Bassey, CC BY-SA 4.0, via Wikimedia Commons",
      pos: "50% 60%",
    },
    related: ["automating-the-symptom", "universaims-after-go-live", "inside-universaids"],
    body: [
      {
        type: "p",
        text: "Few organisations need a new system. Most need the systems they already have to work together. Finance runs on an ERP, branches on a POS, sales on a CRM, operations on spreadsheets that fill the gaps between all three. The friction, and much of the cost, lives in those gaps.",
      },
      { type: "h2", text: "No generic wrappers" },
      {
        type: "p",
        text: "A chat interface placed on top of an organisation rarely changes how work gets done, because the work still has to be copied in and out by hand. In the Implementation phase we build AI into the flow of work instead: reading from and writing to the systems where decisions are recorded.",
      },
      {
        type: "list",
        items: [
          "Two-way connectors for ERP, POS, CRM and core banking platforms",
          "Document reading for waybills, receipts, invoices and legal papers",
          "Reconciliation that cross-checks records across systems automatically",
          "Decision support for stock, fraud triage, tenant scoring and credit risk",
        ],
      },
      {
        type: "quote",
        text: "The best AI system is the one your staff barely notice, because it lives in the tools they already use.",
      },
      { type: "h2", text: "Testing before anyone depends on it" },
      {
        type: "p",
        text: "Systems that write into finance or operations records must be right before they are fast. Every build includes test suites against real historical cases, fallbacks for when a model is unsure, and a working screen for staff to review and correct what the system proposes. Only when it meets its agreed baseline does it go into daily use.",
      },
      { type: "h2", text: "Built to be run" },
      {
        type: "p",
        text: "Integration does not end at launch. Upstream systems change, vendors update their APIs, and schemas break. Because we monitor every connector through UniversAIMS in the Partnership phase, those changes are absorbed by our engineers rather than discovered by your staff.",
      },
      {
        type: "callout",
        title: "In short",
        text: "We build AI into the ERP, POS, CRM and banking systems you already run, test it against real cases, and keep the connections healthy after launch.",
      },
    ],
  },
  {
    slug: "adoption-is-the-hard-part",
    seoTitle: "AI Adoption: Helping Teams Trust New AI Systems",
    seoDescription:
      "A system nobody uses returns nothing. How front-line involvement, explainable suggestions and role-based training drive AI adoption.",
    topic: "Governance",
    title: "Adoption is the hard part: helping teams trust new systems",
    dek: "A system nobody uses returns nothing. Training and trust are part of the build, not an afterthought.",
    cover: {
      kind: "photo",
      src: classroom,
      alt: "A classroom of students at laboratory benches in Nigeria",
      credit: "A Nigerian classroom. Photo: DFID, CC BY-SA 2.0, via Wikimedia Commons",
      pos: "50% 45%",
    },
    related: [
      "universaims-after-go-live",
      "ai-proposes-people-decide",
      "ai-in-the-systems-you-run",
    ],
    body: [
      {
        type: "p",
        text: "Technical success and business success are different things. A system can meet every accuracy target and still return nothing if the people meant to use it work around it. In our experience, adoption is decided less by the model than by whether staff understand it, trust it and feel it makes their work better.",
      },
      { type: "h2", text: "Why teams resist" },
      {
        type: "list",
        items: [
          "They were not asked how the work is really done, so the system does not fit",
          "They cannot see why the system made a suggestion, so they do not trust it",
          "They fear the system is there to replace them rather than help them",
          "Nobody showed them how to correct it when it is wrong",
        ],
      },
      { type: "h2", text: "Adoption starts in Discovery" },
      {
        type: "p",
        text: "The front-line interviews we run in Discovery are not only a research method. They are the first step in adoption. People who described the problem in their own words recognise the fix when it arrives, and they are far more likely to champion it.",
      },
      {
        type: "quote",
        text: "The people who do the work are the best judges of whether a system helps. We ask them first and train them properly.",
      },
      { type: "h2", text: "Training as part of Partnership" },
      {
        type: "p",
        text: "In the Partnership phase we run role-by-role training: hands-on workshops built around each team's real tasks, with playbooks they keep. Staff learn what the system does, why it suggests what it suggests, and exactly how to correct it. Corrections then feed back into monitoring and retraining through UniversAIMS.",
      },
      {
        type: "steps",
        items: [
          { title: "Involve", text: "Front-line staff shape the problem definition in Discovery." },
          {
            title: "Explain",
            text: "Every suggestion the system makes shows its basis, so it can be judged.",
          },
          {
            title: "Train",
            text: "Role-specific workshops and playbooks for each team that uses the system.",
          },
          {
            title: "Listen",
            text: "Usage and corrections are tracked, and the system improves from them.",
          },
        ],
      },
      {
        type: "callout",
        title: "In short",
        text: "Adoption is designed, not hoped for: involve the people who do the work, make the system explain itself, and train each role properly.",
      },
    ],
  },
];

export const insightBySlug = (slug: string) => INSIGHTS.find((a) => a.slug === slug);

/** Reading time from the article's own words, at about 220 words a minute. */
export function readMinutes(a: Insight) {
  const words = [
    a.dek,
    ...a.body.map((b) => {
      if (b.type === "list") return b.items.join(" ");
      if (b.type === "steps") return b.items.map((s) => `${s.title} ${s.text}`).join(" ");
      if (b.type === "callout") return `${b.title} ${b.text}`;
      return b.text;
    }),
  ]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(3, Math.round(words / 220));
}
