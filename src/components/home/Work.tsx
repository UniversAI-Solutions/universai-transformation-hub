import { Link } from "@tanstack/react-router";
import { CASE_LIST, CASE_STUDIES } from "@/data/case-studies";
import { ArrowRight } from "@/components/site/icons";
import { SectionHead } from "@/components/site/SectionHead";

const BANDS = ["sky", "mist", "blue"] as const;

/** Engagements filed as folders: each band sticks a tab lower than the last, so they pile up. */
export function Work() {
  return (
    <section data-field="paper" className="field-paper pt-24 md:pt-32" aria-labelledby="work-h">
      <div className="wrap mb-20">
        <SectionHead
          id="work-h"
          title="Client impact"
          intro="Three published engagements, each traced from the first audit to the numbers after launch."
          link={{ to: "/case-studies", label: "All case studies" }}
        />
      </div>

      <div>
        {CASE_LIST.map((c, i) => {
          const field = BANDS[i % BANDS.length];
          return (
            <article
              key={c.slug}
              data-field={field}
              className={`field-${field} stack-band ${i ? "mt-11" : ""}`}
              style={{ ["--k" as string]: i }}
            >
              <div className="wrap relative">
                {/* the folder tab rises from the band's top edge */}
                <div
                  className={`field-${field} absolute -top-11 left-[var(--margin)] h-11 w-[min(78vw,320px)] flex items-center px-6`}
                  style={{ clipPath: "polygon(0 100%, 14px 0, calc(100% - 14px) 0, 100% 100%)" }}
                >
                  <span className="t-3 truncate">{c.tag}</span>
                </div>
                <div className="h-8 md:h-16" />

                <div className="grid-12 gap-y-4 md:gap-y-6 pb-8 md:pb-20 items-start">
                  <figure className="col-span-12 lg:col-span-6 shutter" data-reveal>
                    <img
                      src={c.image}
                      alt={CASE_STUDIES[c.slug].hero.imageAlt}
                      width={1600}
                      height={1000}
                      loading="lazy"
                      className="w-full aspect-[16/9] lg:aspect-[16/10] object-cover"
                    />
                    <figcaption className="hidden md:block t-1 soft mt-2">
                      {CASE_STUDIES[c.slug].hero.imageCredit}
                    </figcaption>
                  </figure>
                  <div className="col-span-12 lg:col-start-8 lg:col-span-5">
                    <h3 className="t-4">{c.title}</h3>
                    <p className="t-2 font-semibold mt-2 md:mt-4">{c.client}</p>
                    <p className="hidden md:block t-2 mt-5">{c.summary}</p>
                    <p className="t-3 mt-3 md:mt-6">{c.metric}</p>
                    <Link
                      to="/case-studies/$slug"
                      params={{ slug: c.slug }}
                      className={`btn mt-5 md:mt-8 ${field === "blue" ? "btn-paper" : "btn-ink"}`}
                    >
                      Read the case study <ArrowRight className="btn-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
