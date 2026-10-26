import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { ArrowRight } from "@/components/site/icons";
import { PLANET_INDUSTRIES } from "@/data/industries";
import earth from "@/assets/planets/earth-large.webp";
import { abs, breadcrumbLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/industries/")({
  head: () =>
    seo({
      title: "AI Solutions by Industry in Nigeria | UniversAI Solutions",
      description:
        "AI consulting for real estate, retail, agriculture, logistics, banking and finance, healthcare, oil and gas, and education organisations in Nigeria.",
      path: "/industries",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Industries served by UniversAI Solutions",
          itemListElement: PLANET_INDUSTRIES.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `AI for ${p.name}`,
            url: abs(`/industries/${p.slug}`),
          })),
        },
        breadcrumbLd([{ name: "Industries", path: "/industries" }]),
      ],
    }),
  component: IndustriesPage,
});

// where an arm has a published engagement, point to it
const RELATED: Record<string, { slug: string; title: string }> = {
  Jupiter: { slug: "ai-budgeting-planning", title: "A budget that looks ahead" },
  Neptune: { slug: "ai-learning-systems", title: "Lessons that adapt" },
};

function IndustriesPage() {
  return (
    <SiteLayout>
      <section data-field="deep" className="field-deep relative overflow-hidden">
        <img
          src={earth}
          alt=""
          width={1200}
          height={1200}
          className="absolute right-[-18vw] top-[-10%] w-[62vw] max-w-[900px] aspect-square mix-blend-screen opacity-80 pointer-events-none hidden md:block drift"
        />
        <div className="relative wrap pt-[calc(var(--header-h)+80px)] pb-20 md:pb-28">
          <div className="grid-12 gap-y-8 items-end">
            <div className="col-span-12 lg:col-span-7">
              <h1 className="t-5" data-rise>
                Industries
              </h1>
              <p className="statement mt-6 max-w-[40ch]" data-rise style={{ ["--i" as string]: 1 }}>
                Deep operational knowledge across eight sectors, with the benchmarks and playbooks
                to put AI where it pays. Each arm carries a planet's name: UniversAI is Universe
                plus AI.
              </p>
            </div>
            <nav
              aria-label="Industries on this page"
              className="col-span-12 lg:col-span-6 mt-4"
              data-rise
              style={{ ["--i" as string]: 2 }}
            >
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2.5">
                {PLANET_INDUSTRIES.map((p) => (
                  <li key={p.planet}>
                    <a href={`#${p.planet.toLowerCase()}`} className="t-2 font-semibold link">
                      {p.short}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {PLANET_INDUSTRIES.map((p, i) => {
        const field = i % 2 ? "mist" : "paper";
        const related = RELATED[p.planet];
        return (
          <section
            key={p.planet}
            id={p.planet.toLowerCase()}
            data-field={field}
            className={`field-${field} scroll-mt-[var(--header-h)]`}
          >
            <div className="wrap py-20 md:py-24 grid-12 gap-y-10">
              <div className="col-span-12 lg:col-span-5 flex items-start gap-6" data-reveal>
                <img
                  src={p.image}
                  alt={`${p.name} (${p.planet} arm)`}
                  width={144}
                  height={144}
                  loading="lazy"
                  className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-deep shrink-0"
                />
                <div>
                  <h2 className="t-4">
                    <Link to="/industries/$slug" params={{ slug: p.slug }} className="link">
                      {p.name}
                    </Link>
                  </h2>
                  <p className="t-1 soft mt-2">The {p.planet} arm</p>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-6 lg:col-start-7 grid sm:grid-cols-2 gap-x-10 gap-y-8">
                <div data-reveal>
                  <h3 className="t-1 font-semibold soft">What we see</h3>
                  <p className="t-2 mt-2">{p.problem}</p>
                </div>
                <div data-reveal style={{ ["--i" as string]: 1 }}>
                  <h3 className="t-1 font-semibold soft">What we build</h3>
                  <p className="t-2 mt-2">{p.fix}</p>
                </div>
                <div data-reveal style={{ ["--i" as string]: 2 }}>
                  <h3 className="t-1 font-semibold soft">Our cost benchmark</h3>
                  <p className="t-2 mt-2">
                    ₦{p.hourlyRateNaira.toLocaleString("en-NG")} per staff hour, with about{" "}
                    {Math.round(p.recoverable * 100)}% of repetitive hours recoverable, mostly in{" "}
                    {p.driver}.
                  </p>
                </div>
                <div
                  className="flex flex-col gap-3 justify-end"
                  data-reveal
                  style={{ ["--i" as string]: 3 }}
                >
                  {related && (
                    <Link
                      to="/case-studies/$slug"
                      params={{ slug: related.slug }}
                      className="t-2 font-semibold link-on inline-flex items-center gap-2"
                    >
                      Case study: {related.title} <ArrowRight />
                    </Link>
                  )}
                  <Link
                    to="/industries/$slug"
                    params={{ slug: p.slug }}
                    className="t-2 font-semibold link-on inline-flex items-center gap-2"
                  >
                    AI for {p.short.toLowerCase()} in depth <ArrowRight />
                  </Link>
                  <Link
                    to="/work-with-us"
                    className="t-2 font-semibold link-on inline-flex items-center gap-2"
                  >
                    Talk to us about {p.short.toLowerCase()} <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <ClosingCTA
        lines={["Not sure where", "you fit?"]}
        sentence="Most businesses span more than one arm. Tell us where the work piles up and we'll take it from there."
      />
    </SiteLayout>
  );
}
