import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { ArrowRight } from "@/components/site/icons";
import { CASE_LIST, CASE_STUDIES } from "@/data/case-studies";
import earthImg from "@/assets/planets/earth-large.webp";
import { breadcrumbLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/")({
  head: () =>
    seo({
      title: "AI Case Studies from Nigeria | UniversAI Solutions",
      description:
        "How Nigerian organisations use AI with UniversAI: hiring automation in Lagos, budget forecasting in Abuja and adaptive learning in edtech, with measured results.",
      path: "/case-studies",
      jsonLd: [breadcrumbLd([{ name: "Case studies", path: "/case-studies" }])],
    }),
  component: CaseStudiesIndex,
});

const FIELDS = ["paper", "mist", "paper"] as const;

function CaseStudiesIndex() {
  return (
    <SiteLayout>
      <section data-field="deep" className="field-deep overflow-hidden">
        <div className="wrap relative min-h-[78svh] grid-12 items-end pt-[calc(var(--header-h)+48px)] pb-14">
          <figure className="col-span-12 lg:absolute lg:right-[-12vw] lg:top-[8svh] lg:w-[58vw] max-w-[920px] mb-10 lg:mb-0">
            <img
              src={earthImg}
              alt="Earth seen whole from space, with Africa at the centre"
              width={1200}
              height={1200}
              className="w-full aspect-square mix-blend-screen drift"
            />
          </figure>
          <div className="col-span-12 lg:col-span-6 relative">
            <h1 className="t-5" data-rise>
              Client impact
            </h1>
            <p className="statement mt-8" data-rise style={{ ["--i" as string]: 1 }}>
              How we help organisations across Nigeria remove manual work, sharpen decisions and
              turn AI into measurable results.
            </p>
          </div>
        </div>
      </section>

      {CASE_LIST.map((c, i) => {
        const cs = CASE_STUDIES[c.slug];
        const field = FIELDS[i];
        return (
          <section key={c.slug} data-field={field} className={`field-${field}`}>
            <div className="wrap py-20 md:py-28 grid-12 gap-y-8 items-end">
              <div
                className={`col-span-12 lg:col-span-6 ${i % 2 ? "lg:order-2 lg:col-start-7" : ""}`}
              >
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: c.slug }}
                  className="block overflow-hidden shutter"
                  data-reveal
                >
                  <img
                    src={c.image}
                    alt={cs.hero.imageAlt}
                    width={1600}
                    height={1000}
                    loading={i === 0 ? undefined : "lazy"}
                    className="w-full aspect-[4/3] lg:aspect-[16/10] object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </Link>
              </div>
              <div
                className={`col-span-12 lg:col-span-5 ${i % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`}
              >
                <h2 className="t-4" data-reveal>
                  <Link to="/case-studies/$slug" params={{ slug: c.slug }} className="link">
                    {c.title}
                  </Link>
                </h2>
                <p className="t-2 font-semibold mt-4" data-reveal>
                  {c.tag} · {c.client}
                </p>
                <p className="t-2 mt-4" data-reveal>
                  {c.summary}
                </p>
                <p className="t-3 mt-6" data-reveal>
                  {c.metric}
                </p>
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: c.slug }}
                  className="btn btn-ink mt-8"
                  data-reveal
                >
                  Read the case study <ArrowRight className="btn-arrow" />
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <ClosingCTA
        lines={["Your numbers", "could be next."]}
        sentence="Book a discovery consultation. We'll start where your team loses the most hours."
      />
    </SiteLayout>
  );
}
