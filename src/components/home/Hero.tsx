import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "@/components/site/icons";
import earth from "@/assets/planets/earth-large.webp";
import lagos from "@/assets/found/ikoyi-lagos-nigeria.webp";
import abuja from "@/assets/found/abuja-street.webp";
import classroom from "@/assets/found/a-classroom-of-students-7138907393.webp";

/*
  After the heroes of established consultancies: full-bleed photography, one claim at a time,
  and tabs along the bottom that turn through the firm and its three services. Each slide says
  what we can do for a client; the photographs show the places we work, not clients.
*/

type Slide = {
  tab: string;
  label: string;
  title: string;
  body: string;
  image: string;
  pos: string;
  credit: string;
  hash?: string;
  ctaLabel: string;
};

const SLIDES: Slide[] = [
  {
    tab: "UniversAI",
    label: "AI consulting and transformation",
    title: "AI transformation that starts with the root cause",
    body: "We help organisations across Nigeria find what is really holding their operations back, build AI systems that fit how they work, and keep those systems delivering measurable value.",
    image: earth,
    pos: "50% 38%",
    credit: "Africa from Apollo 17, NASA, public domain",
    ctaLabel: "Book a consultation",
  },
  {
    tab: "Discovery",
    label: "Discovery",
    title: "See your operation as it really runs",
    body: "Our consultants and the UniversAIDS platform trace every bottleneck to its source, so you invest in the fix that matters most and can prove its return.",
    image: abuja,
    pos: "50% 70%",
    credit: "Abuja. Photo: AdastralNg22, CC BY-SA 4.0",
    hash: "discovery",
    ctaLabel: "Explore Discovery",
  },
  {
    tab: "Implementation",
    label: "Implementation",
    title: "AI inside the systems you run",
    body: "Custom models, agents and connectors for your ERP, POS, CRM and core banking platforms, tested against real cases before your teams depend on them.",
    image: lagos,
    pos: "50% 60%",
    credit: "Ikoyi, Lagos. Photo: Reginald Bassey, CC BY-SA 4.0",
    hash: "implementation",
    ctaLabel: "Explore Implementation",
  },
  {
    tab: "Partnership",
    label: "Partnership",
    title: "Value that compounds after launch",
    body: "Monitoring, retraining and cost control through UniversAIMS, with training for your teams and monthly reviews that keep every system accurate, affordable and adopted.",
    image: classroom,
    pos: "50% 45%",
    credit: "A Nigerian classroom. Photo: DFID, CC BY-SA 2.0",
    hash: "partnership",
    ctaLabel: "Explore Partnership",
  },
];

const TURN = 8000;

export function Hero() {
  const [i, setI] = useState(0);
  const [held, setHeld] = useState(false);
  const s = SLIDES[i];

  useEffect(() => {
    if (held || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setI((k) => (k + 1) % SLIDES.length), TURN);
    return () => clearInterval(t);
  }, [held]);

  return (
    <section
      data-field="hero"
      className="relative overflow-hidden bg-deep text-paper min-h-[640px] h-[100svh] max-h-[960px] flex flex-col"
      aria-roledescription="carousel"
      aria-label="UniversAI and its services"
    >
      {/* photographs, stacked; the current one fades in */}
      {SLIDES.map((sl, k) => (
        <img
          key={sl.tab}
          src={sl.image}
          alt=""
          className={`hero-photo absolute inset-0 w-full h-full object-cover ${k === i ? "is-on" : ""}`}
          style={{ objectPosition: sl.pos }}
          // the first slide is the largest paint; the rest wait until the page has loaded
          loading={k === 0 ? "eager" : "lazy"}
          fetchPriority={k === 0 ? "high" : "low"}
          decoding="async"
        />
      ))}
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />

      <div className="relative wrap w-full flex-1 flex flex-col justify-center pt-[var(--header-h)]">
        <div key={s.tab} className="hero-copy max-w-[680px]" aria-live="polite">
          <p className="t-1 font-semibold text-sky">{s.label}</p>
          <h1 className="t-5 mt-4">{s.title}</h1>
          <p className="t-2 md:text-[1.2rem] leading-relaxed mt-5 max-w-[56ch] text-[#dbe3f5]">
            {s.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            {s.hash ? (
              <Link to="/services" hash={s.hash} className="btn">
                {s.ctaLabel} <ArrowRight className="btn-arrow" />
              </Link>
            ) : (
              <Link to="/work-with-us" className="btn">
                {s.ctaLabel} <ArrowRight className="btn-arrow" />
              </Link>
            )}
            {s.hash ? (
              <Link to="/work-with-us" className="t-2 font-semibold link-on">
                Book a consultation
              </Link>
            ) : (
              <Link to="/services" className="t-2 font-semibold link-on">
                Our services
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* tabs, after Seismic's: each fills while its slide is up */}
      <div className="relative wrap w-full pb-6">
        <p className="t-1 text-[#aeb9d1] mb-4 hidden md:block text-right">{s.credit}</p>
        <div role="tablist" aria-label="Choose a slide" className="grid grid-cols-4 gap-3 md:gap-6">
          {SLIDES.map((sl, k) => (
            <button
              key={sl.tab}
              role="tab"
              aria-selected={k === i}
              onClick={() => {
                setHeld(true);
                setI(k);
              }}
              className={`text-left pt-3 t-1 font-semibold transition-colors ${
                k === i ? "text-paper" : "text-[#aeb9d1] hover:text-paper"
              }`}
            >
              <span className="hero-tab-track" aria-hidden="true">
                <span
                  key={`${i}-${held}`}
                  className={`hero-tab-fill ${k === i ? (held ? "is-full" : "is-running") : ""}`}
                  style={{ ["--turn" as string]: `${TURN}ms` }}
                />
              </span>
              <span className="block mt-3 truncate">{sl.tab}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
