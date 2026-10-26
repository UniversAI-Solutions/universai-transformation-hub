import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { InsightCard, InsightCover } from "@/components/site/InsightCard";
import { ArrowRight } from "@/components/site/icons";
import { INSIGHTS, TOPICS, readMinutes, type Topic } from "@/data/insights";
import { abs, breadcrumbLd, ORG_ID, seo } from "@/lib/seo";

export const Route = createFileRoute("/insights/")({
  head: () =>
    seo({
      title: "AI Insights for Nigerian Businesses | UniversAI Solutions",
      description:
        "Articles on AI root-cause discovery, AI in production, model drift, AI costs and accountable AI, from the team behind the UniversAIDS and UniversAIMS platforms.",
      path: "/insights",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "UniversAI Insights",
          url: abs("/insights"),
          publisher: { "@id": ORG_ID },
          blogPost: INSIGHTS.map((a) => ({
            "@type": "BlogPosting",
            headline: a.title,
            description: a.dek,
            url: abs(`/insights/${a.slug}`),
          })),
        },
        breadcrumbLd([{ name: "Insights", path: "/insights" }]),
      ],
    }),
  component: InsightsIndex,
});

const TOPIC_NOTE: Record<Topic, string> = {
  UniversAIDS: "Our discovery platform, and how it turns evidence into a map of cause and effect.",
  UniversAIMS: "Our management platform, and what it takes to keep AI accurate and affordable.",
  Methodology: "How we diagnose, build and measure, from first audit to proven return.",
  Governance: "Accountability, evidence and adoption: the human side of AI that works.",
};

function InsightsIndex() {
  const [topic, setTopic] = useState<Topic | "All">("All");
  const [featured, ...rest] = INSIGHTS;
  const list = topic === "All" ? rest : INSIGHTS.filter((a) => a.topic === topic);

  return (
    <SiteLayout>
      <section data-field="deep" className="field-deep">
        <div className="wrap pt-[calc(var(--header-h)+80px)] pb-16 md:pb-20 grid-12 gap-y-8 items-end">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="t-5" data-rise>
              Insights
            </h1>
            <p className="statement mt-6 max-w-[44ch]" data-rise style={{ ["--i" as string]: 1 }}>
              Perspectives on finding the root cause, building AI that fits how organisations really
              work, and keeping it delivering long after launch.
            </p>
          </div>
          <p
            className="col-span-12 lg:col-span-4 lg:col-start-9 t-2 soft max-w-[48ch]"
            data-rise
            style={{ ["--i" as string]: 2 }}
          >
            {INSIGHTS.length} articles on our platforms, UniversAIDS and UniversAIMS, and the
            methods behind them.
          </p>
        </div>
      </section>

      {/* featured */}
      <section data-field="paper" className="field-paper">
        <div className="wrap py-16 md:py-24">
          <Link
            to="/insights/$slug"
            params={{ slug: featured.slug }}
            className="group grid-12 gap-y-8 items-center"
            data-reveal
          >
            <InsightCover
              cover={featured.cover}
              large
              className="col-span-12 lg:col-span-7 aspect-[16/10] rounded-[var(--radius)]"
            />
            <div className="col-span-12 lg:col-span-5 lg:pl-6 max-w-[60ch]">
              <p className="t-1 font-semibold text-blue">
                Featured · {featured.topic}{" "}
                <span className="soft font-normal">· {readMinutes(featured)} min read</span>
              </p>
              <h2 className="t-4 mt-3 group-hover:underline underline-offset-4 decoration-1">
                {featured.title}
              </h2>
              <p className="t-2 soft mt-4">{featured.dek}</p>
              <span className="inline-flex items-center gap-2 mt-6 t-2 font-semibold">
                Read the article{" "}
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* topics and the grid */}
      <section data-field="mist" className="field-mist">
        <div className="wrap py-16 md:py-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="t-4">{topic === "All" ? "All insights" : topic}</h2>
              <p className="t-2 soft mt-3 max-w-[56ch]">
                {topic === "All" ? "Browse every article, or choose a topic." : TOPIC_NOTE[topic]}
              </p>
            </div>
            <div role="tablist" aria-label="Topics" className="flex flex-wrap gap-2">
              {(["All", ...TOPICS] as const).map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={topic === t}
                  onClick={() => setTopic(t)}
                  className={`btn btn-sm ${topic === t ? "btn-ink" : "btn-paper"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 mt-12">
            {list.map((a, i) => (
              <InsightCard key={a.slug} a={a} i={i} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        lines={["Put these ideas", "to work."]}
        sentence="Talk to us about where your organisation loses time. We'll show you how a Discovery engagement would approach it."
      />
    </SiteLayout>
  );
}
