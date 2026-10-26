import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { FounderPicker } from "@/components/site/FounderPicker";
import teamStrategyImg from "@/assets/impact/team-strategy-session.webp";
import { abs, breadcrumbLd, FOUNDERS_LD, ORG_ID, seo } from "@/lib/seo";

export const Route = createFileRoute("/team")({
  head: () =>
    seo({
      title: "About UniversAI Solutions | AI Consulting and Transformation",
      description:
        "UniversAI Solutions is an AI consulting and transformation firm with engineering-led leadership in AI solution design, data engineering and MLOps.",
      path: "/team",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: abs("/team"),
          about: { "@id": ORG_ID },
          mentions: FOUNDERS_LD,
        },
        breadcrumbLd([{ name: "About us", path: "/team" }]),
      ],
    }),
  component: TeamPage,
});

const STATS = [
  { v: "50+", l: "AI use cases identified" },
  { v: "35+", l: "audits and strategy engagements" },
  { v: "20+", l: "custom systems deployed" },
  { v: "40%", l: "less manual workload for clients" },
  { v: "11+", l: "industries served" },
];

function TeamPage() {
  return (
    <SiteLayout>
      <section data-field="paper" className="field-paper">
        <div className="wrap pt-[calc(var(--header-h)+48px)] pb-16 grid-12 gap-y-10 items-end">
          <h1 className="col-span-12 t-5 max-w-[16ch]" data-rise>
            About UniversAI
          </h1>
          <div className="col-span-12 lg:col-span-6 self-start lg:pt-6">
            <p className="statement" data-rise style={{ ["--i" as string]: 1 }}>
              An AI transformation consultancy built by engineers, for organisations that need AI to
              work in the real world.
            </p>
          </div>
          <figure
            className="col-span-12 lg:col-start-8 lg:col-span-5"
            data-rise
            style={{ ["--i" as string]: 2 }}
          >
            <div className="overflow-hidden">
              <img
                src={teamStrategyImg}
                alt="UniversAI leadership and engineering team in an AI strategy session"
                width={1600}
                height={900}
                className="w-full aspect-[4/3] object-cover drift"
              />
            </div>
          </figure>
        </div>
      </section>

      <section data-field="mist" className="field-mist">
        <div className="wrap py-24 md:py-32">
          <h2 className="t-4 max-w-[16ch]" data-reveal>
            Our track record
          </h2>
          <dl className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 mt-16">
            {STATS.map((s, i) => (
              <div key={s.l} data-reveal style={{ ["--i" as string]: i }}>
                <dt className="sr-only">{s.l}</dt>
                <dd className="nums font-bold tracking-[-0.045em] leading-[0.9] text-[clamp(3.5rem,6.5vw,6.5rem)]">
                  {s.v}
                </dd>
                <dd className="t-2 soft mt-3 max-w-[18ch]">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FounderPicker title="The founders" />

      <ClosingCTA
        lines={["Work with", "the builders."]}
        sentence="Tell us where you are. We'll show you where AI can move your business, and where it can't."
        action="Get in touch"
      />
    </SiteLayout>
  );
}
