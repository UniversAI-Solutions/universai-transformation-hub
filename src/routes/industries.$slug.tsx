import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { FAQ } from "@/components/site/FAQ";
import {
  ArrowLeft,
  ArrowRight,
  IconDiscover,
  IconImplement,
  IconPartner,
} from "@/components/site/icons";
import { PLANET_INDUSTRIES, industryBySlug, type Industry } from "@/data/industries";
import { breadcrumbLd, clip, faqLd, seo, serviceLd } from "@/lib/seo";

/*
  One landing page per industry arm, so a search for "AI for banks in Nigeria" or "AI in
  Nigerian healthcare" has a page that answers it. Copy is built from the arm's own data.
*/

// published engagements that belong to an arm
const RELATED: Record<string, { slug: string; title: string }> = {
  finance: { slug: "ai-budgeting-planning", title: "A budget that looks ahead" },
  education: { slug: "ai-learning-systems", title: "Lessons that adapt" },
};

const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

function faqsFor(i: Industry) {
  const sector = i.name.toLowerCase();
  return [
    {
      q: `How can AI help ${sector} organisations in Nigeria?`,
      a: `The problems we see most often in ${sector} are these: ${lower(i.problem)} We address them with ${lower(i.fix)} Every system is built into the tools the organisation already runs and is measured against a baseline agreed before the build.`,
    },
    {
      q: `How much manual work can AI remove in ${sector}?`,
      a: `Our benchmark for ${sector} is that about ${Math.round(i.recoverable * 100)}% of repetitive staff hours are recoverable, mostly in ${i.driver}. A Discovery engagement replaces that estimate with a measured baseline for your own processes.`,
    },
    {
      q: `How does an AI engagement with UniversAI start?`,
      a: `With Discovery. Our consultants audit your processes and systems with the UniversAIDS platform, trace each bottleneck to its root cause, and deliver a costed blueprint before anything is built. You can book a consultation online or message us on WhatsApp at +234 815 712 4750.`,
    },
  ];
}

export const Route = createFileRoute("/industries/$slug")({
  head: ({ params }) => {
    const i = industryBySlug(params.slug);
    if (!i) return { meta: [{ title: "Industries · UniversAI Solutions" }] };
    const path = `/industries/${i.slug}`;
    const title = `AI for ${i.short} Businesses in Nigeria | UniversAI`;
    const description = clip(
      `AI consulting for ${i.name.toLowerCase()} in Nigeria: ${lower(i.fix)} Discovery, implementation and support from UniversAI.`,
    );
    return seo({
      title,
      description,
      path,
      jsonLd: [
        serviceLd({
          name: `AI consulting for ${i.name.toLowerCase()}`,
          type: "Artificial intelligence consulting",
          description,
          path,
        }),
        faqLd(faqsFor(i)),
        breadcrumbLd([
          { name: "Industries", path: "/industries" },
          { name: i.name, path },
        ]),
      ],
    });
  },
  component: IndustryPage,
});

function IndustryPage() {
  const { slug } = Route.useParams();
  const i = industryBySlug(slug);
  if (!i) throw notFound();
  const related = RELATED[i.slug];
  const fixes = i.fix.replace(/\.$/, "").split(/,\s*/);
  const others = PLANET_INDUSTRIES.filter((o) => o.slug !== i.slug);
  const sector = i.name.toLowerCase();

  const phases = [
    {
      Icon: IconDiscover,
      name: "Discovery",
      hash: "discovery",
      text: `We audit ${i.driver} with the UniversAIDS platform, trace each bottleneck to its root cause and set a measurable baseline before anything is built.`,
    },
    {
      Icon: IconImplement,
      name: "Implementation",
      hash: "implementation",
      text: `We build ${lower(i.fix).replace(/\.$/, "")} into the systems your teams already use, and test them against real cases first.`,
    },
    {
      Icon: IconPartner,
      name: "Partnership",
      hash: "partnership",
      text: `UniversAIMS monitors accuracy, uptime and running cost, while we train your staff and review the return with leadership every month.`,
    },
  ];

  return (
    <SiteLayout>
      <section data-field="deep" className="field-deep">
        <div className="wrap pt-[calc(var(--header-h)+56px)] pb-16 md:pb-24 grid-12 gap-y-10 items-center">
          <div className="col-span-12 lg:col-span-8">
            <nav
              aria-label="Breadcrumb"
              className="t-1 font-semibold flex items-center gap-2"
              data-rise
            >
              <Link to="/industries" className="link-on inline-flex items-center gap-2">
                <ArrowLeft size={16} /> Industries
              </Link>
              <span className="soft">/</span>
              <span className="text-sky">{i.name}</span>
            </nav>
            <h1 className="t-5 mt-8" data-rise style={{ ["--i" as string]: 1 }}>
              AI for {sector}
            </h1>
            <p className="statement mt-6 max-w-[46ch]" data-rise style={{ ["--i" as string]: 2 }}>
              We help {sector} organisations across Nigeria find the root cause of costly manual
              work and build AI systems that remove it, measured from the first audit.
            </p>
            <div
              className="mt-8 flex flex-wrap gap-x-7 gap-y-4 items-center"
              data-rise
              style={{ ["--i" as string]: 3 }}
            >
              <Link to="/work-with-us" className="btn">
                Book a consultation <ArrowRight className="btn-arrow" />
              </Link>
              <Link to="/services" className="t-2 font-semibold link-on">
                Our services
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
            <figure>
              <img
                src={i.image}
                alt={`${i.planet}, the planet this arm is named after`}
                width={320}
                height={320}
                className="w-48 h-48 md:w-72 md:h-72 rounded-full mix-blend-screen drift"
              />
              <figcaption className="t-1 soft mt-4 text-center lg:text-right">
                The {i.planet} arm
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section data-field="paper" className="field-paper">
        <div className="wrap py-20 md:py-28 grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-5" data-reveal>
            <h2 className="t-4">The challenges we see in {i.short.toLowerCase()}</h2>
            <p className="t-2 mt-6 max-w-[52ch]">{i.problem}</p>
            <p className="t-2 soft mt-4 max-w-[52ch]">
              Each of these is a symptom. In Discovery we find the cause they share, so the system
              we build removes the problem rather than speeding it up.
            </p>
          </div>
          <div
            className="col-span-12 lg:col-span-6 lg:col-start-7"
            data-reveal
            style={{ ["--i" as string]: 1 }}
          >
            <h2 className="t-4">AI solutions we build</h2>
            <ul className="mt-6 space-y-3">
              {fixes.map((f) => (
                <li key={f} className="bg-mist rounded-[var(--radius)] px-5 py-4 t-2 font-medium">
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </li>
              ))}
            </ul>
            <div className="mt-8 field-navy rounded-[var(--radius)] p-6 md:p-7">
              <p className="t-1 font-semibold text-sky">Our cost benchmark for {sector}</p>
              <p className="t-2 mt-2">
                ₦{i.hourlyRateNaira.toLocaleString("en-NG")} per staff hour, with about{" "}
                {Math.round(i.recoverable * 100)}% of repetitive hours recoverable, mostly in{" "}
                {i.driver}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-field="mist" className="field-mist">
        <div className="wrap py-20 md:py-28">
          <h2 className="t-4 max-w-[24ch]" data-reveal>
            How we work in {i.short.toLowerCase()}
          </h2>
          <ol
            className="grid md:grid-cols-3 gap-5 mt-12"
            style={{
              ["--icon-fill" as string]: "var(--sky)",
              ["--icon-bg" as string]: "var(--paper)",
            }}
          >
            {phases.map((p, k) => (
              <li
                key={p.name}
                className="bg-paper rounded-[var(--radius)] p-7 flex flex-col"
                data-reveal
                style={{ ["--i" as string]: k }}
              >
                <p.Icon size={48} />
                <h3 className="t-3 font-[family-name:var(--serif)] font-medium mt-5">{p.name}</h3>
                <p className="t-2 soft mt-3">{p.text}</p>
                <Link
                  to="/services"
                  hash={p.hash}
                  className="mt-auto pt-6 inline-flex items-center gap-2 t-1 font-semibold link-on self-start"
                >
                  About {p.name.toLowerCase()} <ArrowRight size={16} />
                </Link>
              </li>
            ))}
          </ol>
          {related && (
            <div data-reveal>
              <Link
                to="/case-studies/$slug"
                params={{ slug: related.slug }}
                className="mt-10 inline-flex items-center gap-2 t-2 font-semibold link-on"
              >
                Read the case study: {related.title} <ArrowRight />
              </Link>
            </div>
          )}
        </div>
      </section>

      <FAQ title={`AI in ${i.short.toLowerCase()}: questions`} items={faqsFor(i)} />

      <section data-field="mist" className="field-mist">
        <div className="wrap py-16 md:py-20">
          <h2 className="t-3 font-[family-name:var(--serif)] font-medium">
            Other industries we serve
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mt-6">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: o.slug }}
                  className="industry-card group flex flex-col items-start gap-4 h-full p-5 rounded-[var(--radius)] bg-deep text-paper"
                >
                  <img
                    src={o.image}
                    alt=""
                    width={96}
                    height={96}
                    loading="lazy"
                    className="w-24 h-24 rounded-full mix-blend-screen"
                  />
                  <span className="t-2 font-semibold leading-snug">
                    AI for {o.short.toLowerCase()}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCTA
        lines={["Put AI to work", `in ${i.short.toLowerCase()}.`]}
        sentence={`Tell us where your ${i.short.toLowerCase()} operation loses time. A senior consultant follows up within 24 hours.`}
      />
    </SiteLayout>
  );
}
