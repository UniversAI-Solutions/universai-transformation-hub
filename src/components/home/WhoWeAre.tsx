import { Link } from "@tanstack/react-router";
import { ArrowRight } from "@/components/site/icons";

const FIGURES = [
  { v: "50+", l: "AI use cases identified for clients" },
  { v: "35+", l: "audits and strategy engagements" },
  { v: "20+", l: "custom AI systems in production" },
  { v: "40%", l: "less manual workload for clients" },
];

/** Who we are, in one paragraph, and the record behind it. */
export function WhoWeAre() {
  return (
    <section data-field="paper" className="field-paper">
      <div className="wrap py-24 md:py-32 grid-12 gap-y-14">
        <div className="col-span-12 lg:col-span-7">
          <h2 className="t-1 font-semibold text-blue" data-reveal>
            Who we are
          </h2>
          <p
            className="font-[family-name:var(--serif)] text-[length:var(--step-3)] md:text-[1.75rem] leading-[1.35] tracking-[-0.01em] mt-5"
            data-reveal
          >
            UniversAI Solutions is an AI consulting and transformation firm. We partner with
            organisations across Nigeria to diagnose operational problems at their source, build AI
            systems that fit how they really work, and keep those systems delivering measurable
            value.
          </p>
          <p className="t-2 soft mt-6 max-w-[56ch]" data-reveal>
            We are accountable for every recommendation we make. Our AI platforms propose and
            correlate; a senior consultant validates, signs and stands behind every finding.
          </p>
          <Link
            to="/team"
            className="inline-flex items-center gap-2 mt-8 t-2 font-semibold link-on"
            data-reveal
          >
            About UniversAI <ArrowRight />
          </Link>
        </div>

        <dl className="col-span-12 lg:col-span-4 lg:col-start-9 grid grid-cols-2 gap-x-8 gap-y-12 content-center">
          {FIGURES.map((f, i) => (
            <div key={f.l} data-reveal style={{ ["--i" as string]: i }}>
              <dt className="sr-only">{f.l}</dt>
              <dd className="font-[family-name:var(--serif)] text-[3.25rem] md:text-[4rem] leading-none text-navy nums">
                {f.v}
              </dd>
              <dd className="t-2 soft mt-3 max-w-[22ch]">{f.l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
