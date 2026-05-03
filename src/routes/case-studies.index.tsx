import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GradientOrbs } from "@/components/site/GradientOrbs";
import { CASE_LIST } from "@/data/case-studies";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — UniversAI Solutions" },
      { name: "description", content: "Real AI transformation stories — from hiring and finance to education — built for Nigerian businesses." },
      { property: "og:title", content: "Case Studies — UniversAI Solutions" },
      { property: "og:description", content: "How we help Nigerian businesses turn AI into measurable operational advantage." },
    ],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return (
    <SiteLayout>
      <section className="relative pt-40 pb-20 overflow-hidden bg-hero">
        <GradientOrbs />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-6 animate-fade-in">Case Studies</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-8 animate-fade-up">
            Proof, not <span className="text-gradient">promises.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Real engagements, real outcomes. Each story shows how we move businesses from
            stuck to scaling with AI that actually works.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_LIST.map((c) => (
            <Link
              key={c.slug}
              to="/case-studies/$slug"
              params={{ slug: c.slug }}
              className="group relative rounded-3xl overflow-hidden border border-border h-[460px] transition-transform hover:-translate-y-2"
            >
              <img src={c.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
              <div className="relative h-full flex flex-col justify-end p-8">
                <span className="text-xs tracking-[0.2em] uppercase text-primary-glow mb-3">{c.tag}</span>
                <h3 className="font-display text-2xl font-medium leading-snug mb-6">{c.title}</h3>
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-foreground group-hover:gap-3 transition-all">
                  Read case study <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
