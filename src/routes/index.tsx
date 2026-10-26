import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { FAQ } from "@/components/site/FAQ";
import { Hero } from "@/components/home/Hero";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { Industries } from "@/components/home/Industries";
import { Work } from "@/components/home/Work";
import { Tools } from "@/components/home/Tools";
import { Principles } from "@/components/home/Principles";
import { Leadership } from "@/components/home/Leadership";
import { CostCalculator } from "@/components/home/CostCalculator";
import { InsightsSection } from "@/components/home/InsightsSection";
import { faqLd, seo, serviceLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "AI Consulting Company in Nigeria | UniversAI Solutions",
      description:
        "UniversAI Solutions is an AI consulting and transformation firm in Nigeria. We find the root cause of operational problems, build custom AI systems and run them for ROI.",
      path: "/",
      jsonLd: [faqLd(FAQS), ...SERVICES_LD],
    }),
  component: HomePage,
});

const SERVICES_LD = [
  serviceLd({
    name: "AI discovery and operational audit",
    description:
      "Operational audits that trace each bottleneck to its root cause, with ROI baselines and a costed AI blueprint.",
    path: "/services#discovery",
  }),
  serviceLd({
    name: "Custom AI implementation",
    description: "Custom AI systems built into ERP, POS, CRM and core banking platforms.",
    path: "/services#implementation",
  }),
  serviceLd({
    name: "AI management and team training",
    description: "Monitoring, retraining, cost control, team training and monthly ROI reviews.",
    path: "/services#partnership",
  }),
];

const FAQS = [
  {
    q: "How does an engagement work?",
    a: "In three phases. Discover: we audit your operations with UniversAIDS and find the root causes. Implement: we build and integrate the AI system that fixes them. Partner: we run it with UniversAIMS, train your team and review the return with you every month.",
  },
  {
    q: "What are UniversAIDS and UniversAIMS?",
    a: "Two tools we built and use ourselves; we don't sell them. UniversAIDS takes in your documents, spreadsheets and interviews and links each symptom to its cause, with sources. UniversAIMS watches the systems we deploy for uptime, accuracy drift and token cost.",
  },
  {
    q: "Who is accountable for the advice?",
    a: "A person. The AI proposes and correlates; a senior consultant checks every finding, signs the recommendation and answers for it.",
  },
  {
    q: "Do we need our own AI team?",
    a: "No. We design, build and run the system, and we train the people who use it. If you do have engineers, we work alongside them.",
  },
  {
    q: "Which systems can you connect to?",
    a: "The ones you already run: SAP, Microsoft Dynamics, Salesforce, Odoo, Sage, QuickBooks, core banking, custom POS and in-house databases, and the spreadsheets in between.",
  },
  {
    q: "Where do you work?",
    a: "We work with organisations across Nigeria and beyond. Our head office is in the Federal Capital Territory.",
  },
  {
    q: "How do we start?",
    a: "Book a consultation through the intake form, or message the team on WhatsApp at +234 815 712 4750. A senior consultant follows up within 24 hours.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <Industries />
      <Work />
      <Tools />
      <Principles />
      <Leadership />
      <InsightsSection />
      <CostCalculator />
      <FAQ title="Frequently asked questions" items={FAQS} field="mist" />
      <ClosingCTA
        lines={["Let's find", "yours."]}
        sentence={
          <>
            Book a discovery consultation, or message the team on WhatsApp at{" "}
            <a
              href="https://wa.me/2348157124750"
              className="link-on"
              target="_blank"
              rel="noopener noreferrer"
            >
              +234 815 712 4750
            </a>
            .
          </>
        }
      />
    </SiteLayout>
  );
}
