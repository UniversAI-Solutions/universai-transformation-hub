import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Sparkles, Workflow, Infinity as InfinityIcon, CheckCircle2, ChevronDown } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GradientOrbs, FloatingSquares } from "@/components/site/GradientOrbs";
import { CTAButton } from "@/components/site/CTAButton";
import { ScrollActiveText } from "@/components/site/ScrollActiveText";
import { CASE_LIST } from "@/data/case-studies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UniversAI Solutions — Discover. Implement. Partner." },
      {
        name: "description",
        content:
          "Your trusted AI transformation partner on the journey to becoming an AI-first business. We discover, implement, and manage AI systems that create real impact.",
      },
      { property: "og:title", content: "UniversAI Solutions — AI Transformation Partner" },
      { property: "og:description", content: "We help businesses discover, implement, and manage AI systems that create real operational impact." },
    ],
  }),
  component: HomePage,
});

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "We audit your business, understand how work really happens, and identify the problems where AI can create the biggest impact. No guessing — only what's worth building.",
    icon: Sparkles,
    href: "/services",
    hash: "discover",
  },
  {
    n: "02",
    title: "Implement",
    body: "We advise the right intervention, then build and deploy the solution using custom development or proven tools — refined with feedback from real workflows.",
    icon: Workflow,
    href: "/services",
    hash: "implement",
  },
  {
    n: "03",
    title: "Partner",
    body: "We monitor, maintain, and manage the systems we build so AI becomes part of how your business runs — long after launch.",
    icon: InfinityIcon,
    href: "/services",
    hash: "partner",
  },
];

const STATS = [
  { value: "50+", label: "practical AI use cases identified" },
  { value: "35+", label: "AI audits & strategy engagements" },
  { value: "20+", label: "custom systems deployed" },
  { value: "40%", label: "manual workload reduced" },
];

const REASONS = [
  "We focus on business outcomes, not AI hype.",
  "We build systems that fit real workflows.",
  "We stay after deployment so the value lasts.",
  "We work like a long-term partner, not a one-off vendor.",
];

const FAQS = [
  {
    q: "How do I know if my business is ready for AI?",
    a: "If your business has repetitive work, bottlenecks, or growing operational complexity, there is usually a strong AI opportunity worth pursuing.",
  },
  {
    q: "Do you only build custom AI systems?",
    a: "No. We recommend the right path for the business — whether custom development, integration of existing tools, or a thoughtful mix of both.",
  },
  {
    q: "What happens after deployment?",
    a: "We continue to monitor, maintain, and improve the system so it keeps working as your business evolves. That's the Partner phase.",
  },
  {
    q: "Will this disrupt our current workflow?",
    a: "Our approach integrates AI into your existing operations with as little friction as possible. We design around how you already work.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on scope, but we always aim for fast clarity, practical implementation, and early value — usually weeks, not months, to a working pilot.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <ProblemSection />
      <ProcessSection />
      <WhyUs />
      <StatsMarquee />
      <CaseStudies />
      <FAQSection />
      <FinalCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-hero">
      <GradientOrbs />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/[0.03] backdrop-blur px-4 py-2 mb-8 animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-glow" />
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Your AI Transformation Partner
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight mb-8 animate-fade-up">
          AI is already reshaping{" "}
          <span className="text-gradient">your industry.</span>
          <br />
          The question is whether{" "}
          <span className="text-gradient">you are leading</span>
          {" "}or catching up.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          We help businesses discover, implement, and manage AI systems that create real operational impact.
        </p>
        <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: "0.25s" }}>
          Most companies are experimenting with AI. We turn it into something your business can actually rely on.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.35s" }}>
          <CTAButton to="/work-with-us">Get Started</CTAButton>
          <CTAButton to="/services" variant="outline">See How It Works</CTAButton>
        </div>

        <p className="mt-16 text-xs tracking-[0.25em] uppercase text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
          Built for businesses that want clarity, execution, and long-term value from AI
        </p>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-25 blur-[150px]"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.22 260), transparent 70%)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center min-h-[80vh] flex flex-col justify-center">
        <ScrollActiveText
          className="space-y-2"
          lines={[
            { text: "You bought the AI tools. Read the case studies. Ran the pilots." },
            {
              text: "But months later, the tools sit unused. The pilots never scaled. And nobody can explain what ROI actually looks like.",
            },
            { text: "You're not behind. You're just stuck where everyone gets stuck.", size: "md" },
            {
              text: (
                <>
                  That's why we built <span className="text-gradient font-medium">UniversAI</span>.
                </>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <FloatingSquares />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-4">Our Days Consist of Three Things</p>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
            A practical path from{" "}
            <span className="text-gradient">AI uncertainty</span> to real results
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just talk about AI. We help you make it useful inside your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Link
                key={step.n}
                to={step.href}
                hash={step.hash}
                className="group relative rounded-3xl bg-card-gradient border border-border p-8 transition-all duration-500 hover:border-primary-glow/50 hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_oklch(0.5_0.22_260/40%)]"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-5xl font-light text-muted-foreground/40">{step.n}</span>
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary-glow" />
                  </div>
                </div>
                <h3 className="text-3xl font-display font-medium mb-4 text-gradient-strong">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{step.body}</p>
                <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-primary-glow group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center mt-16">
          <CTAButton to="/services">Explore Our Process</CTAButton>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="relative py-32">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-4">Why UniversAI</p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
            What sets us apart is{" "}
            <span className="text-gradient">simple.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most firms stop at implementation. We stay embedded — continuously monitoring,
            optimizing, and evolving the systems we build, so our clients can focus on running
            their business while we handle the intelligence layer.
          </p>
        </div>

        <ul className="space-y-5">
          {REASONS.map((r, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-2xl bg-card-gradient border border-border p-5 hover:border-primary-glow/40 transition-colors"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 border border-primary/30">
                <CheckCircle2 className="h-4 w-4 text-primary-glow" />
              </div>
              <p className="text-foreground text-lg">{r}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StatsMarquee() {
  return (
    <section className="relative py-24 overflow-hidden border-y border-border bg-surface/40">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...STATS, ...STATS, ...STATS].map((s, i) => (
          <div key={i} className="flex items-baseline gap-4 mx-12 shrink-0">
            <span className="font-display text-6xl md:text-7xl font-light text-gradient">{s.value}</span>
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{s.label}</span>
            <span className="text-primary-glow/40 text-4xl mx-8">·</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-4">Proof, Not Promises</p>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
            Real results across{" "}
            <span className="text-gradient">real business functions</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            From hiring and finance to education — we apply AI where it actually moves the needle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CASE_LIST.map((c) => (
            <Link
              key={c.slug}
              to="/case-studies/$slug"
              params={{ slug: c.slug }}
              className="group relative rounded-3xl overflow-hidden border border-border h-[440px] transition-transform hover:-translate-y-2"
            >
              <img
                src={c.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.16 0.05 255 / 30%) 0%, oklch(0.16 0.05 255 / 60%) 55%, oklch(0.13 0.06 255 / 95%) 100%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-50 mix-blend-color"
                style={{ background: "oklch(0.25 0.18 260 / 60%)" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 50% 30%, oklch(0.6 0.22 250 / 35%), transparent 70%)" }}
              />
              <div className="relative h-full flex flex-col justify-end p-8">
                <span className="text-xs tracking-[0.2em] uppercase text-primary-glow mb-3">Case Study</span>
                <h3 className="font-display text-2xl font-medium mb-4 leading-snug">{c.tag}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.title}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-foreground group-hover:gap-3 transition-all">
                  Read more <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <CTAButton to="/case-studies">View Case Studies</CTAButton>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-light">FAQs</h2>
          <p className="mt-4 text-muted-foreground">You've got questions. We've got answers.</p>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left rounded-2xl bg-card-gradient border border-border p-6 hover:border-primary-glow/40 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-lg md:text-xl text-foreground">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary-glow shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`grid transition-all duration-500 ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] rounded-full opacity-40 blur-[140px] animate-glow"
          style={{ background: "radial-gradient(circle, oklch(0.5 0.22 260), transparent 70%)" }}
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-5xl md:text-7xl font-light leading-tight mb-6">
          AI is no longer optional.
          <br />
          <span className="text-gradient">Doing it right is what matters.</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Let us help you build systems that create measurable value.
        </p>
        <div className="flex justify-center">
          <CTAButton to="/work-with-us">Get In Touch</CTAButton>
        </div>
      </div>
    </section>
  );
}
