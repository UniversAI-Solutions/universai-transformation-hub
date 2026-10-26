import caseHiring from "@/assets/impact/case-hiring-talent.webp";
import caseFinance from "@/assets/impact/case-finance-budgeting.webp";
import caseLearning from "@/assets/impact/case-adaptive-learning.webp";
import type { CaseStudyData } from "@/components/site/CaseStudyLayout";

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  "ai-hiring-automation": {
    slug: "ai-hiring-automation",
    label: "AI Hiring Automation",
    hero: {
      title: "Hiring at the speed of growth",
      intro:
        "A fast-growing Lagos-based technology company faced mounting pressure to scale its workforce while maintaining hiring quality. With applications increasing rapidly, their recruitment process became a bottleneck to growth.",
      image: caseHiring,
      imageAlt:
        "Tech recruitment team collaborating in a modern Lagos office reviewing AI talent screening metrics",
    },
    snapshot: [
      { label: "Industry", value: "Technology / SaaS" },
      { label: "Location", value: "Lagos, Nigeria" },
      { label: "Company Size", value: "70+ employees, scaling rapidly" },
      { label: "Engagement", value: "6 weeks · Discover, then implement" },
    ],
    challenge: {
      intro:
        "The company was receiving hundreds of applications weekly across engineering, product, and operations roles, but its hiring process wasn't built to handle scale. Recruiters spent 4–6 hours daily reviewing CVs manually.",
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
        "We conducted a six-week discovery and implementation engagement, mapping the full lifecycle before recommending where AI could remove friction without removing judgment.",
      steps: [
        {
          title: "Workflow Audit",
          body: "We mapped the full recruitment lifecycle and identified critical inefficiencies and decision bottlenecks.",
          items: [
            "Application intake",
            "CV screening",
            "Candidate scoring",
            "Interview scheduling",
          ],
        },
        {
          title: "AI Opportunity Mapping",
          body: "We identified high-impact automation areas and stack-ranked them by effort vs. value.",
          items: [
            "CV parsing and scoring",
            "Candidate ranking",
            "Automated shortlisting",
            "Interview scheduling",
          ],
        },
        {
          title: "System Implementation",
          body: "We designed and deployed a custom AI hiring pipeline integrated into the team's existing workflow.",
        },
      ],
    },
    systems: [
      {
        title: "CV Intelligence Engine",
        body: "Automatically extracts and evaluates candidate qualifications based on role requirements.",
      },
      {
        title: "AI Candidate Scoring",
        body: "Standardized ranking system to eliminate bias and improve consistency across recruiters.",
      },
      {
        title: "Automated Shortlisting",
        body: "Top candidates surfaced instantly for recruiter review, with no manual filtering.",
      },
      {
        title: "Smart Scheduling System",
        body: "Reduced manual coordination with automated interview booking and calendar sync.",
      },
    ],
    outcomes: {
      intro:
        "Within 4 weeks of deployment, hiring went from a bottleneck to a competitive advantage.",
      metrics: [
        { value: "60%", label: "less time spent screening CVs" },
        { value: "45%", label: "shorter hiring cycle" },
        { value: "6 wks", label: "from first audit to a live system" },
      ],
      outro:
        "Recruiters shifted from manual filtering to high-value decision-making and candidate engagement.",
    },
    whyMatters: {
      before: ["Growing fast", "Hiring aggressively", "Bottlenecked by manual processes"],
      after: "Hiring became a scalable, data-driven system instead of a constraint.",
    },
    closing:
      "Most companies think hiring problems require more recruiters. In reality, they require better systems.",
    next: { slug: "ai-budgeting-planning", title: "AI Budgeting & Planning System" },
  },

  "ai-budgeting-planning": {
    slug: "ai-budgeting-planning",
    label: "AI Budgeting & Planning",
    hero: {
      title: "A budget that looks ahead",
      intro:
        "A government-affiliated organization responsible for managing large-scale public funds struggled with fragmented financial data and inefficient planning processes.",
      image: caseFinance,
      imageAlt: "Finance executives and analysts reviewing automated predictive budgeting dashboards in Abuja",
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
        "We executed a data-first AI transformation strategy over 8 weeks, fixing the foundations before layering on intelligence.",
      steps: [
        {
          title: "Financial Workflow Assessment",
          body: "We analyzed budget creation processes, reporting workflows, and data sources to find the real friction.",
          items: [
            "Budget creation processes",
            "Reporting workflows",
            "Data sources and inconsistencies",
          ],
        },
        {
          title: "Data Structuring & Integration",
          body: "We unified fragmented financial data into a centralized, reliable system.",
          items: [
            "Cleaned historical records",
            "Standardized reporting structures",
            "Built a reliable data pipeline",
          ],
        },
        {
          title: "AI System Deployment",
          body: "We deployed predictive and reporting capabilities directly into leadership workflows.",
        },
      ],
    },
    systems: [
      {
        title: "Automated Budget Aggregation",
        body: "Real-time consolidation across departments, with no manual stitching.",
      },
      {
        title: "AI Forecasting Models",
        body: "Predictive analysis for revenue and expenditure trends with confidence ranges.",
      },
      {
        title: "Dynamic Reporting Dashboard",
        body: "Live financial insights for leadership decision-making, not weeks-old PDFs.",
      },
      {
        title: "Variance & Spend Monitoring",
        body: "Early-warning signals when departments drift from plan.",
      },
    ],
    outcomes: {
      intro: "Leadership moved from reactive reporting to predictive planning.",
      metrics: [
        { value: "70%", label: "less time spent producing reports" },
        { value: "8 wks", label: "from fragmented sheets to one pipeline" },
        { value: "Live", label: "view of spending against plan" },
      ],
      outro: "The question changed from “what happened?” to “what is likely to happen next?”",
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
    label: "AI Learning Systems",
    hero: {
      title: "Lessons that adapt",
      intro:
        "A Nigerian EdTech platform aimed to deliver personalized learning experiences but struggled to scale content creation and student engagement.",
      image: caseLearning,
      imageAlt:
        "Students and professionals using interactive adaptive AI learning software in a modern tech center",
    },
    snapshot: [
      { label: "Industry", value: "Education / EdTech" },
      { label: "Location", value: "Nigeria (multi-state user base)" },
      { label: "Users", value: "Thousands of students" },
      { label: "Engagement", value: "10 weeks · Adaptive learning system" },
    ],
    challenge: {
      intro:
        "The platform relied on manually created course content, static learning paths, and one-size-fits-all delivery. Students progressed at different speeds, but the system couldn't adapt.",
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
          title: "Learning Experience Audit",
          body: "We analyzed how students actually moved through the platform and where they dropped off.",
          items: ["Student behavior", "Course structure", "Engagement drop-off points"],
        },
        {
          title: "AI Personalization Design",
          body: "We designed a system that adapts to pace, recommends content dynamically, and surfaces learning gaps.",
        },
        {
          title: "System Deployment",
          body: "We launched the new engine into production and tuned it against real student usage.",
        },
      ],
    },
    systems: [
      {
        title: "AI Content Generation Engine",
        body: "Automates quizzes, summaries, and supporting learning materials.",
      },
      {
        title: "Adaptive Learning Paths",
        body: "Personalized progression for each student based on real performance.",
      },
      {
        title: "Performance Analytics Dashboard",
        body: "Tracks engagement and learning outcomes for instructors and admins.",
      },
      {
        title: "Learning-Gap Detection",
        body: "Spots stuck students early and recommends targeted interventions.",
      },
    ],
    outcomes: {
      intro:
        "Engagement and outcomes both moved in the right direction, without growing the content team.",
      metrics: [
        { value: "50%", label: "less content-creation work" },
        { value: "10 wks", label: "to a live adaptive system" },
        { value: "1:1", label: "a learning path for each student" },
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
    tag: "Hiring",
    client: "A technology company in Lagos, 70+ staff",
    title: "Hiring at the speed of growth",
    summary:
      "Recruiters were reading CVs for four to six hours a day and still missing good applicants. We mapped the whole hiring process, then built CV scoring, shortlisting and interview booking into the tools the team already used.",
    metric: "60% less time spent screening CVs",
    image: caseHiring,
  },
  {
    slug: "ai-budgeting-planning",
    tag: "Public finance",
    client: "A government-affiliated organisation in Abuja",
    title: "A budget that looks ahead",
    summary:
      "Budgets lived in disconnected spreadsheets and reports arrived weeks late. We cleaned and joined the data first, then added forecasting and live spend monitoring for leadership.",
    metric: "70% less time spent producing reports",
    image: caseFinance,
  },
  {
    slug: "ai-learning-systems",
    tag: "Education",
    client: "A Nigerian edtech platform, students in several states",
    title: "Lessons that adapt",
    summary:
      "Every student got the same course at the same pace, and content took weeks to write. We built adaptive learning paths, early warnings for stuck students and a generator for quizzes and summaries.",
    metric: "50% less content-creation work",
    image: caseLearning,
  },
];
