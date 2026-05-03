import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import { GradientOrbs } from "./GradientOrbs";
import { CTAButton } from "./CTAButton";

export type CaseStudyData = {
  slug: string;
  eyebrow: string;
  hero: { title: React.ReactNode; intro: string; image: string };
  snapshot: { label: string; value: string }[];
  challenge: { intro: string; bullets: string[]; outro: string };
  approach: {
    intro: string;
    steps: { n: string; title: string; body: string; items?: string[] }[];
  };
  systems: { title: string; body: string }[];
  outcomes: { intro: string; metrics: { value: string; label: string }[]; outro: string };
  whyMatters: { before: string[]; after: string };
  closing: string;
  next: { slug: string; title: string };
};

export function CaseStudyPage({ data }: { data: CaseStudyData }) {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-hero">
        <GradientOrbs />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary-glow mb-10 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> All Case Studies
          </Link>
          <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-6 animate-fade-in">
            {data.eyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-8 animate-fade-up max-w-5xl">
            {data.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
            {data.hero.intro}
          </p>
        </div>
      </section>

      {/* Hero image */}
      <section className="relative -mt-6 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-border">
            <img src={data.hero.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.16 0.05 255 / 35%) 0%, oklch(0.16 0.05 255 / 55%) 60%, oklch(0.13 0.06 255 / 90%) 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-50 mix-blend-color"
              style={{ background: "oklch(0.25 0.18 260 / 60%)" }}
            />
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="relative py-20 border-y border-border bg-surface/40">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.snapshot.map((s) => (
            <div key={s.label}>
              <div className="text-xs tracking-[0.2em] uppercase text-primary-glow mb-2">{s.label}</div>
              <div className="text-foreground font-display text-lg md:text-xl">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge */}
      <Section eyebrow="The Challenge" title="Where things were breaking">
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{data.challenge.intro}</p>
        <ul className="space-y-3 mb-8">
          {data.challenge.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-4 rounded-xl border border-border bg-card-gradient p-5">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-glow shrink-0" />
              <span className="text-foreground/90">{b}</span>
            </li>
          ))}
        </ul>
        <p className="font-display text-2xl md:text-3xl font-light text-gradient">{data.challenge.outro}</p>
      </Section>

      {/* Approach */}
      <Section eyebrow="Our Approach" title="A structured path to real change">
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">{data.approach.intro}</p>
        <div className="space-y-5">
          {data.approach.steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card-gradient p-7">
              <div className="flex items-baseline gap-5 mb-3">
                <span className="font-display text-4xl font-light text-muted-foreground/40">{s.n}</span>
                <h3 className="font-display text-2xl font-medium">{s.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{s.body}</p>
              {s.items && (
                <ul className="grid sm:grid-cols-2 gap-2 mt-4">
                  {s.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="mt-2 h-1 w-1 rounded-full bg-primary-glow" />
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Systems we built */}
      <Section eyebrow="What We Built" title="The systems behind the results">
        <div className="grid md:grid-cols-2 gap-5">
          {data.systems.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card-gradient p-7 hover:border-primary-glow/40 transition-colors"
            >
              <div className="text-xs tracking-[0.2em] uppercase text-primary-glow/80 mb-3">0{i + 1}</div>
              <h3 className="font-display text-xl font-medium mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <Section eyebrow="Outcomes & Impact" title="What changed, in numbers">
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">{data.outcomes.intro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {data.outcomes.metrics.map((m, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card-gradient p-6">
              <div className="font-display text-4xl md:text-5xl font-light text-gradient mb-2">{m.value}</div>
              <div className="text-sm text-muted-foreground leading-snug">{m.label}</div>
            </div>
          ))}
        </div>
        <p className="font-display text-xl md:text-2xl font-light text-foreground/90">{data.outcomes.outro}</p>
      </Section>

      {/* Why this matters */}
      <Section eyebrow="Why This Matters" title="Before and after">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-border bg-card-gradient p-7">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Before</p>
            <ul className="space-y-3">
              {data.whyMatters.before.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-7">
            <p className="text-xs tracking-[0.2em] uppercase text-primary-glow mb-4">After</p>
            <p className="font-display text-xl md:text-2xl font-light text-gradient leading-snug">
              {data.whyMatters.after}
            </p>
          </div>
        </div>
      </Section>

      {/* Closing insight */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-6">Closing Insight</p>
          <p className="font-display text-3xl md:text-5xl font-light leading-tight">
            <span className="text-gradient">{data.closing}</span>
          </p>
        </div>
      </section>

      {/* Next case + CTA */}
      <section className="relative pb-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <Link
            to="/case-studies/$slug"
            params={{ slug: data.next.slug }}
            className="group rounded-3xl border border-border bg-card-gradient p-8 hover:border-primary-glow/40 transition-all"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Next Case Study</p>
            <h3 className="font-display text-2xl md:text-3xl font-light mb-6">{data.next.title}</h3>
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-primary-glow group-hover:gap-3 transition-all">
              Read it <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
          <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-primary-glow mb-3">Your Move</p>
              <h3 className="font-display text-2xl md:text-3xl font-light mb-6">
                Could a system like this work for your business?
              </h3>
            </div>
            <CTAButton to="/work-with-us">Get In Touch</CTAButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-4">{eyebrow}</p>
        <h2 className="font-display text-3xl md:text-5xl font-light mb-10 leading-tight">{title}</h2>
        {children}
      </div>
    </section>
  );
}
