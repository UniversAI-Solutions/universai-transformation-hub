import { Link } from "@tanstack/react-router";
import { SiteLayout } from "./SiteLayout";
import { ClosingCTA } from "./ClosingCTA";
import { ArrowLeft, ArrowRight } from "./icons";
import { FounderMark } from "@/components/home/About";
import { CASE_LIST } from "@/data/case-studies";

export type CaseStudyData = {
  slug: string;
  label: string;
  hero: { title: string; intro: string; image: string; imageAlt: string; imageCredit: string };
  snapshot: { label: string; value: string }[];
  challenge: { intro: string; bullets: string[]; outro: string };
  approach: {
    intro: string;
    steps: { title: string; body: string; items?: string[] }[];
  };
  systems: { title: string; body: string }[];
  outcomes: { intro: string; metrics: { value: string; label: string }[]; outro: string };
  whyMatters: { before: string[]; after: string };
  closing: string;
  next: { slug: string; title: string };
};

const caseTitle = "font-bold tracking-[-0.04em] leading-[0.95] text-[clamp(2.5rem,7vw,7.25rem)]";

export function CaseStudyPage({ data }: { data: CaseStudyData }) {
  return (
    <SiteLayout>
      {/* Title on the paper field */}
      <section data-field="paper" className="field-paper">
        <div className="wrap pt-[calc(var(--header-h)+48px)] pb-14">
          <h1 className={`${caseTitle} max-w-[16ch]`} data-rise style={{ ["--i" as string]: 1 }}>
            {data.hero.title}
          </h1>
          <p className="statement mt-8 max-w-[44ch]" data-rise style={{ ["--i" as string]: 2 }}>
            {data.hero.intro}
          </p>
        </div>
        <figure className="wrap pb-6">
          <div className="overflow-hidden">
            <img
              src={data.hero.image}
              alt={data.hero.imageAlt}
              width={1600}
              height={900}
              className="w-full aspect-[4/3] md:aspect-[21/9] object-cover drift"
            />
          </div>
          <figcaption className="t-1 soft mt-3">{data.hero.imageCredit}</figcaption>
        </figure>
      </section>

      {/* Snapshot */}
      <section data-field="mist" className="field-mist">
        <dl className="wrap py-14 md:py-20 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          <div data-reveal>
            <dt className="t-1 soft">Engagement</dt>
            <dd className="t-3 mt-1">{data.label}</dd>
          </div>
          {data.snapshot
            .filter((s) => s.label !== "Engagement")
            .map((s, i) => (
              <div key={s.label} data-reveal style={{ ["--i" as string]: i + 1 }}>
                <dt className="t-1 soft">{s.label}</dt>
                <dd className="t-3 mt-1">{s.value}</dd>
              </div>
            ))}
        </dl>
      </section>

      {/* Challenge */}
      <section data-field="paper" className="field-paper">
        <div className="wrap py-28 md:py-36 grid-12 gap-y-10">
          <h2 className="col-span-12 md:col-span-4 t-4 max-w-[10ch]" data-reveal>
            Where it broke
          </h2>
          <div className="col-span-12 md:col-start-6 md:col-span-7">
            <p className="t-2 max-w-[60ch]" data-reveal>
              {data.challenge.intro}
            </p>
            <ul className="mt-10">
              {data.challenge.bullets.map((b, i) => (
                <li
                  key={b}
                  className="t-3 py-3 font-medium"
                  data-reveal
                  style={{ ["--i" as string]: i }}
                >
                  {b}
                </li>
              ))}
            </ul>
            <p className="statement mt-10 text-blue" data-reveal>
              {data.challenge.outro}
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section data-field="navy" className="field-navy">
        <div className="wrap py-28 md:py-36">
          <h2 className="t-4 max-w-[14ch]" data-reveal>
            How we went about it
          </h2>
          <p className="t-2 soft mt-6 max-w-[56ch]" data-reveal>
            {data.approach.intro}
          </p>
          <ol className="grid md:grid-cols-3 gap-x-10 gap-y-12 mt-16">
            {data.approach.steps.map((s, i) => (
              <li key={s.title} data-reveal style={{ ["--i" as string]: i }}>
                <div
                  className="h-2 bg-sky"
                  style={{ width: `${34 + i * 33}%` }}
                  aria-hidden="true"
                />
                <h3 className="t-3 mt-6">{s.title}</h3>
                <p className="t-2 soft mt-3">{s.body}</p>
                {s.items && (
                  <ul className="mt-4 t-1 space-y-1.5">
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What we built */}
      <section data-field="paper" className="field-paper">
        <div className="wrap py-28 md:py-36 grid-12 gap-y-10">
          <h2 className="col-span-12 md:col-span-4 t-4 max-w-[10ch]" data-reveal>
            What we built
          </h2>
          <div className="col-span-12 md:col-start-6 md:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {data.systems.map((s, i) => (
              <div key={s.title} data-reveal style={{ ["--i" as string]: i }}>
                <h3 className="t-3">{s.title}</h3>
                <p className="t-2 soft mt-2">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section data-field="sky" className="field-sky">
        <div className="wrap py-28 md:py-36">
          <h2 className="t-4" data-reveal>
            What changed
          </h2>
          <p className="t-2 mt-6 max-w-[56ch]" data-reveal>
            {data.outcomes.intro}
          </p>
          <div className="grid sm:grid-cols-3 gap-x-10 gap-y-12 mt-16">
            {data.outcomes.metrics.map((m, i) => (
              <div key={m.label} data-reveal style={{ ["--i" as string]: i }}>
                <p className="nums font-bold tracking-[-0.045em] leading-[0.9] text-[clamp(3.5rem,7vw,7rem)]">
                  {m.value}
                </p>
                <p className="t-2 mt-3 max-w-[22ch]">{m.label}</p>
              </div>
            ))}
          </div>
          <p className="statement mt-16" data-reveal>
            {data.outcomes.outro}
          </p>
        </div>
      </section>

      {/* Before and after */}
      <section data-field="paper" className="field-paper">
        <div className="wrap py-28 md:py-36 grid md:grid-cols-2 gap-x-10 gap-y-14">
          <div data-reveal>
            <h2 className="t-3 soft">Before</h2>
            <ul className="mt-4 space-y-2">
              {data.whyMatters.before.map((b) => (
                <li key={b} className="t-3 soft font-medium">
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={{ ["--i" as string]: 1 }}>
            <h2 className="t-3">After</h2>
            <p className="statement mt-4">{data.whyMatters.after}</p>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-16">
            <p className="statement max-w-[36ch]" data-reveal>
              {data.closing}
            </p>
            <Link
              to="/case-studies/$slug"
              params={{ slug: data.next.slug }}
              className="btn btn-ink self-start md:self-auto"
              data-reveal
            >
              Next: {data.next.title} <ArrowRight className="btn-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* More work */}
      <section data-field="mist" className="field-mist">
        <div className="wrap py-24 md:py-32">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="t-4" data-reveal>
              More work
            </h2>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 t-2 font-semibold link-on"
              data-reveal
            >
              <ArrowLeft /> All case studies
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-14 mt-12">
            {CASE_LIST.filter((c) => c.slug !== data.slug).map((c, i) => (
              <Link
                key={c.slug}
                to="/case-studies/$slug"
                params={{ slug: c.slug }}
                className="group block"
                data-reveal
                style={{ ["--i" as string]: i }}
              >
                <div className="overflow-hidden">
                  <img
                    src={c.image}
                    alt=""
                    width={1600}
                    height={1000}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="t-3 mt-5 group-hover:underline underline-offset-4">{c.title}</h3>
                <p className="t-2 mt-1">{c.metric}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The people */}
      <section data-field="deep" className="field-deep">
        <div className="wrap py-24 md:py-32 grid-12 gap-y-12 items-center">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="t-4 max-w-[12ch]" data-reveal>
              Meet our leadership
            </h2>
            <p className="t-2 mt-6 max-w-[44ch]" data-reveal>
              Every engagement is led by senior practitioners in AI solution design, data
              engineering and machine learning operations.
            </p>
            <Link to="/team" className="btn mt-8" data-reveal>
              Meet the team <ArrowRight className="btn-arrow" />
            </Link>
          </div>
          <div className="col-span-12 lg:col-start-7 lg:col-span-6">
            <FounderMark />
          </div>
        </div>
      </section>

      <ClosingCTA
        lines={["Could this", "work for you?"]}
        sentence="Tell us where the work piles up. A senior consultant will follow up within 24 hours."
      />
    </SiteLayout>
  );
}
