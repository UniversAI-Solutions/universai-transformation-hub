import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { InsightCard, InsightCover } from "@/components/site/InsightCard";
import { ArrowLeft, ArrowRight } from "@/components/site/icons";
import { insightBySlug, readMinutes, type Block, type Insight } from "@/data/insights";
import { articleLd, breadcrumbLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/insights/$slug")({
  head: ({ params }) => {
    const a = insightBySlug(params.slug);
    if (!a) return { meta: [{ title: "Insights · UniversAI Solutions" }] };
    const path = `/insights/${a.slug}`;
    return seo({
      title: `${a.seoTitle} | UniversAI`,
      description: a.seoDescription,
      path,
      type: "article",
      jsonLd: [
        articleLd({
          headline: a.title,
          description: a.seoDescription,
          path,
          section: a.topic,
          type: "BlogPosting",
        }),
        breadcrumbLd([
          { name: "Insights", path: "/insights" },
          { name: a.title, path },
        ]),
      ],
    });
  },
  component: InsightPage,
});

const anchor = (t: string) =>
  t
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// where each topic's reader should go next
const NEXT: Record<Insight["topic"], { to: string; hash?: string; label: string; text: string }> = {
  UniversAIDS: {
    to: "/platform",
    hash: "universaids",
    label: "Explore UniversAIDS",
    text: "Try the findings graph yourself on the platform page, with a sample engagement.",
  },
  UniversAIMS: {
    to: "/platform",
    hash: "universaims",
    label: "Explore UniversAIMS",
    text: "See what UniversAIMS tracks for every system we run, on the platform page.",
  },
  Methodology: {
    to: "/services",
    label: "See our services",
    text: "Discovery, Implementation and Partnership: how every engagement is structured.",
  },
  Governance: {
    to: "/services",
    hash: "partnership",
    label: "See Partnership",
    text: "Training, monitoring and monthly reviews: how we stay accountable after launch.",
  },
};

function InsightPage() {
  const { slug } = Route.useParams();
  const a = insightBySlug(slug);
  if (!a) throw notFound();
  const toc = a.body.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");
  const next = NEXT[a.topic];
  const related = a.related.map(insightBySlug).filter(Boolean) as Insight[];

  return (
    <SiteLayout>
      <article>
        <header data-field="paper" className="field-paper">
          <div className="wrap pt-[calc(var(--header-h)+56px)] pb-12 md:pb-16">
            <nav
              aria-label="Breadcrumb"
              className="t-1 font-semibold flex items-center gap-2"
              data-rise
            >
              <Link to="/insights" className="link-on inline-flex items-center gap-2">
                <ArrowLeft size={16} /> Insights
              </Link>
              <span className="soft">/</span>
              <span className="text-blue">{a.topic}</span>
            </nav>
            <h1
              className="t-4 md:text-[clamp(2.25rem,1.6rem+2vw,3.5rem)] mt-8 max-w-[26ch]"
              data-rise
              style={{ ["--i" as string]: 1 }}
            >
              {a.title}
            </h1>
            <p
              className="statement mt-6 max-w-[52ch] soft"
              data-rise
              style={{ ["--i" as string]: 2 }}
            >
              {a.dek}
            </p>
            <p
              className="t-1 mt-8 flex flex-wrap gap-x-3 gap-y-1"
              data-rise
              style={{ ["--i" as string]: 3 }}
            >
              <span className="font-semibold">UniversAI Insights</span>
              <span className="soft">·</span>
              <span className="soft">{readMinutes(a)} min read</span>
            </p>
          </div>
          <div className="wrap pb-4">
            <InsightCover
              cover={a.cover}
              large
              className="aspect-[16/9] md:aspect-[21/9] rounded-[var(--radius)]"
            />
            {a.cover.kind === "photo" && <p className="t-1 soft mt-3">{a.cover.credit}</p>}
          </div>
        </header>

        <section data-field="paper" className="field-paper">
          <div className="wrap py-16 md:py-20 grid-12 gap-y-10">
            <aside className="col-span-12 lg:col-span-3">
              <div className="lg:sticky lg:top-[calc(var(--header-h)+32px)]">
                <p className="t-1 font-semibold">In this article</p>
                <ul className="mt-4 space-y-2.5 t-1">
                  {toc.map((h) => (
                    <li key={h.text}>
                      <a href={`#${anchor(h.text)}`} className="soft link hover:text-ink">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="col-span-12 lg:col-span-7 lg:col-start-5 prose-ua">
              {a.body.map((b, k) => (
                <BlockView key={k} b={b} />
              ))}

              <div className="mt-14 bg-mist rounded-[var(--radius)] p-7 md:p-9">
                <p className="t-1 font-semibold text-blue">Go further</p>
                <p className="t-2 mt-2">{next.text}</p>
                <Link
                  to={next.to}
                  hash={next.hash}
                  className="inline-flex items-center gap-2 mt-5 t-2 font-semibold link-on"
                >
                  {next.label} <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>

      <section data-field="mist" className="field-mist">
        <div className="wrap py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="t-4">Related insights</h2>
            <Link
              to="/insights"
              className="t-2 font-semibold link-on inline-flex items-center gap-2"
            >
              All insights <ArrowRight />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 mt-12">
            {related.map((r, i) => (
              <InsightCard key={r.slug} a={r} i={i} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        lines={["Find the root", "cause with us."]}
        sentence="Tell us where your organisation loses time. A senior consultant follows up within 24 hours."
      />
    </SiteLayout>
  );
}

function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case "h2":
      return <h2 id={anchor(b.text)}>{b.text}</h2>;
    case "p":
      return <p>{b.text}</p>;
    case "quote":
      return (
        <blockquote>
          <p>{b.text}</p>
        </blockquote>
      );
    case "list":
      return (
        <ul>
          {b.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="steps">
          {b.items.map((s) => (
            <li key={s.title}>
              <strong>{s.title}</strong>
              <span>{s.text}</span>
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside className="callout">
          <p className="callout-title">{b.title}</p>
          <p>{b.text}</p>
        </aside>
      );
  }
}
