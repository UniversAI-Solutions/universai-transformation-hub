import caseHiring from "@/assets/case-hiring.webp";
import caseBudget from "@/assets/case-budget.jpg";
import caseLearning from "@/assets/case-learning.png";
import type { CaseStudyData } from "@/components/site/CaseStudyLayout";

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  "ai-hiring-automation": {
    slug: "ai-hiring-automation",
    eyebrow: "AI Hiring Automation",
    hero: {
      title: (
        <>
          Scaling Recruitment with{" "}
          <span className="text-gradient">AI-Driven Efficiency</span>
        </>
      ),
      intro:
        "A fast-growing Lagos-based technology company faced mounting pressure to scale its workforce while maintaining hiring quality. With applications increasing rapidly, their recruitment process became a bottleneck to growth.",
      image: caseHiring,
    },
    snapshot: [
      { label: "Industry", value: "Technology / SaaS" },
      { label: "Location", value: "Lagos, Nigeria" },
      { label: "Company Size", value: "70+ employees, scaling rapidly" },
      { label: "Engagement", value: "6 weeks · Discovery → Implementation" },
    ],
    challenge: {
      intro:
        "The company was receiving hundreds of applications weekly across engineering, product, and operations roles — but their hiring process wasn't built to handle scale. Recruiters spent 4–6 hours daily reviewing CVs manually.",
      bullets: [
        "Delayed response times to candidates",
        "Inconsistent screening criteria across recruiters",
        "Missed high-quality applicants in the noise",
        "Over-reliance on subjective decision-making",
        "Back-and-forth interview scheduling delays",
      ],
      outro: "Slow, inconsistent, and increasingly unsustainable.",
    },
    approach: {
      intro:
        "We conducted a structured Discovery → Implementation engagement over 6 weeks, mapping the full lifecycle before recommending where AI could remove friction without removing judgment.",
      steps: [
        {
          n: "01",
          title: "Workflow Audit",
          body: "We mapped the full recruitment lifecycle and identified critical inefficiencies and decision bottlenecks.",
          items: ["Application intake", "CV screening", "Candidate scoring", "Interview scheduling"],
        },
        {
          n: "02",
          title: "AI Opportunity Mapping",
          body: "We identified high-impact automation areas and stack-ranked them by effort vs. value.",
          items: ["CV parsing and scoring", "Candidate ranking", "Automated shortlisting", "Interview scheduling"],
        },
        {
          n: "03",
          title: "System Implementation",
          body: "We designed and deployed a custom AI hiring pipeline integrated into the team's existing workflow.",
        },
      ],
    },
    systems: [
      { title: "CV Intelligence Engine", body: "Automatically extracts and evaluates candidate qualifications based on role requirements." },
      { title: "AI Candidate Scoring", body: "Standardized ranking system to eliminate bias and improve consistency across recruiters." },
      { title: "Automated Shortlisting", body: "Top candidates surfaced instantly for recruiter review — no manual filtering required." },
      { title: "Smart Scheduling System", body: "Reduced manual coordination with automated interview booking and calendar sync." },
    ],
    outcomes: {
      intro: "Within 4 weeks of deployment, hiring went from a bottleneck to a competitive advantage.",
      metrics: [
        { value: "60%", label: "reduction in CV screening time" },
        { value: "45%", label: "faster hiring cycles" },
        { value: "↑", label: "improved candidate quality consistency" },
        { value: "↓", label: "significant reduction in recruiter workload" },
      ],
      outro: "Recruiters shifted from manual filtering to high-value decision-making and candidate engagement.",
    },
    whyMatters: {
      before: ["Growing fast", "Hiring aggressively", "Bottlenecked by manual processes"],
      after: "Hiring became a scalable, data-driven system — not a constraint.",
    },
    closing:
      "Most companies think hiring problems require more recruiters. In reality, they require better systems.",
    next: { slug: "ai-budgeting-planning", title: "AI Budgeting & Planning System" },
  },

  "ai-budgeting-planning": {
    slug: "ai-budgeting-planning",
    eyebrow: "AI Budgeting & Planning",
    hero: {
      title: (
        <>
          Rebuilding Financial Clarity with{" "}
          <span className="text-gradient">AI-Driven Forecasting</span>
        </>
      ),
      intro:
        "A government-affiliated organization responsible for managing large-scale public funds struggled with fragmented financial data and inefficient planning processes.",
      image: caseBudget,
    },
    snapshot: [
      { label: "Industry", value: "Public Sector / Finance" },
      { label: "Location", value: "Abuja, Nigeria" },
      { label: "Scale", value: "Multi-departmental budgeting" },
      { label: "Engagement", value: "8 weeks · Data-first AI transformation" },
    ],
    challenge: {
      intro:
        "Budgeting and financial planning were handled through disconnected spreadsheets, manual aggregation across departments, and delayed reporting cycles. Financial teams spent more time compiling reports than analyzing them.",
      bullets: [
        "Inconsistent financial data across departments",
        "Limited forecasting capability",
        "Delayed strategic decisions",
        "Low visibility into spending patterns",
      ],
      outro: "Finance was reacting, not steering.",
    },
    approach: {
      intro:
        "We executed a data-first AI transformation strategy over 8 weeks — fixing the foundations before layering on intelligence.",
      steps: [
        {
          n: "01",
          title: "Financial Workflow Assessment",
          body: "We analyzed budget creation processes, reporting workflows, and data sources to find the real friction.",
          items: ["Budget creation processes", "Reporting workflows", "Data sources and inconsistencies"],
        },
        {
          n: "02",
          title: "Data Structuring & Integration",
          body: "We unified fragmented financial data into a centralized, reliable system.",
          items: ["Cleaned historical records", "Standardized reporting structures", "Built a reliable data pipeline"],
        },
        {
          n: "03",
          title: "AI System Deployment",
          body: "We deployed predictive and reporting capabilities directly into leadership workflows.",
        },
      ],
    },
    systems: [
      { title: "Automated Budget Aggregation", body: "Real-time consolidation across departments — no manual stitching." },
      { title: "AI Forecasting Models", body: "Predictive analysis for revenue and expenditure trends with confidence ranges." },
      { title: "Dynamic Reporting Dashboard", body: "Live financial insights for leadership decision-making, not weeks-old PDFs." },
      { title: "Variance & Spend Monitoring", body: "Early-warning signals when departments drift from plan." },
    ],
    outcomes: {
      intro: "Leadership moved from reactive reporting to predictive planning.",
      metrics: [
        { value: "70%", label: "reduction in reporting time" },
        { value: "↑", label: "significantly improved forecast accuracy" },
        { value: "Live", label: "visibility into financial performance" },
        { value: "Faster", label: "executive decision-making" },
      ],
      outro: "“What happened?” → became → “What's likely to happen next?”",
    },
    whyMatters: {
      before: ["Financial planning was reactive", "Data was fragmented", "Decisions were delayed"],
      after: "Financial strategy became proactive, predictive, and data-driven.",
    },
    closing: "AI doesn't just automate finance. It turns finance into a strategic advantage.",
    next: { slug: "ai-learning-systems", title: "AI Learning Systems" },
  },

  "ai-learning-systems": {
    slug: "ai-learning-systems",
    eyebrow: "AI Learning Systems",
    hero: {
      title: (
        <>
          Personalizing Education at Scale with{" "}
          <span className="text-gradient">AI-Driven Learning</span>
        </>
      ),
      intro:
        "A Nigerian EdTech platform aimed to deliver personalized learning experiences — but struggled to scale content creation and student engagement.",
      image: caseLearning,
    },
    snapshot: [
      { label: "Industry", value: "Education / EdTech" },
      { label: "Location", value: "Nigeria (multi-state user base)" },
      { label: "Users", value: "Thousands of students" },
      { label: "Engagement", value: "10 weeks · Adaptive learning system" },
    ],
    challenge: {
      intro:
        "The platform relied on manually created course content, static learning paths, and one-size-fits-all delivery. Students progressed at different speeds — but the system couldn't adapt.",
      bullets: [
        "Low student engagement",
        "Inconsistent learning outcomes",
        "High content production workload",
        "No way to identify or close learning gaps",
      ],
      outro: "Learning was static where students were not.",
    },
    approach: {
      intro:
        "We implemented an AI-powered adaptive learning system over 10 weeks, building intelligence into both content creation and delivery.",
      steps: [
        {
          n: "01",
          title: "Learning Experience Audit",
          body: "We analyzed how students actually moved through the platform and where they dropped off.",
          items: ["Student behavior", "Course structure", "Engagement drop-off points"],
        },
        {
          n: "02",
          title: "AI Personalization Design",
          body: "We designed a system that adapts to pace, recommends content dynamically, and surfaces learning gaps.",
        },
        {
          n: "03",
          title: "System Deployment",
          body: "We launched the new engine into production and tuned it against real student usage.",
        },
      ],
    },
    systems: [
      { title: "AI Content Generation Engine", body: "Automates quizzes, summaries, and supporting learning materials." },
      { title: "Adaptive Learning Paths", body: "Personalized progression for each student based on real performance." },
      { title: "Performance Analytics Dashboard", body: "Tracks engagement and learning outcomes for instructors and admins." },
      { title: "Learning-Gap Detection", body: "Spots stuck students early and recommends targeted interventions." },
    ],
    outcomes: {
      intro: "Engagement and outcomes both moved in the right direction — without scaling the content team.",
      metrics: [
        { value: "↑↑", label: "increased student engagement" },
        { value: "50%", label: "less content creation workload" },
        { value: "↑", label: "improved course completion rates" },
        { value: "1:1", label: "personalized learning at scale" },
      ],
      outro: "Students stopped following the platform. The platform started following them.",
    },
    whyMatters: {
      before: ["Learning was static", "Content creation was slow", "Engagement was inconsistent"],
      after: "Learning became dynamic, personalized, and scalable.",
    },
    closing: "Education doesn't scale with more content. It scales with smarter delivery.",
    next: { slug: "ai-hiring-automation", title: "AI Hiring Automation" },
  },
};

export const CASE_LIST = [
  {
    slug: "ai-hiring-automation",
    tag: "AI Hiring Automation",
    title: "Scaling recruitment for a fast-growing Lagos tech company.",
    summary:
      "Automated candidate screening and recruitment workflows to eliminate bottlenecks and accelerate hiring velocity.",
    image: caseHiring,
  },
  {
    slug: "ai-budgeting-planning",
    tag: "AI Budgeting & Planning",
    title: "AI-driven forecasting for an Abuja public sector organization.",
    summary:
      "Replaced reactive spreadsheet reporting with proactive, predictive financial intelligence and scenario modeling.",
    image: caseBudget,
  },
  {
    slug: "ai-learning-systems",
    tag: "AI Learning Systems",
    title: "Adaptive learning for a Nigerian EdTech platform at scale.",
    summary:
      "Personalized student pathways and automated learning material generation without expanding content headcount.",
    image: caseLearning,
  },
];
