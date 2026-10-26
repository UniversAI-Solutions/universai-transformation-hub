import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { PLANET_INDUSTRIES } from "@/data/industries";
import { SectionHead } from "@/components/site/SectionHead";
import { ArrowRight } from "@/components/site/icons";

const WEEKS = 50;

function formatNaira(n: number) {
  if (n >= 1e9) return { figure: (n / 1e9).toFixed(n >= 1e10 ? 0 : 1), unit: "bn" };
  return { figure: (n / 1e6).toFixed(n >= 1e8 ? 0 : 1), unit: "m" };
}

/**
 * A small diagnostic: the yearly naira cost of the repetitive hours a team spends on work an AI
 * system can take over, from our sector benchmarks.
 */
export function CostCalculator() {
  const uid = useId();
  const [industryIdx, setIndustryIdx] = useState(1);
  const [people, setPeople] = useState(35);
  const [hours, setHours] = useState(14);

  const ind = PLANET_INDUSTRIES[industryIdx];
  const hoursPerYear = Math.round(people * hours * ind.recoverable * WEEKS);
  const cost = hoursPerYear * ind.hourlyRateNaira;
  const { figure, unit } = formatNaira(cost);

  return (
    <section data-field="paper" className="field-paper" aria-labelledby={`${uid}-h`}>
      <div className="wrap py-24 md:py-32">
        <SectionHead
          id={`${uid}-h`}
          title="What is manual work costing you?"
          intro="A quick estimate from our own sector benchmarks. Set your industry, the people involved and the hours they spend on repetitive work each week."
        />

        <div className="grid lg:grid-cols-12 gap-5 mt-14" data-reveal>
          <form
            className="lg:col-span-7 bg-mist rounded-[var(--radius)] p-7 md:p-10 grid gap-8 content-start"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="block">
              <span className="t-1 font-semibold block mb-2">Industry</span>
              <select
                className="input"
                value={industryIdx}
                onChange={(e) => setIndustryIdx(Number(e.target.value))}
              >
                {PLANET_INDUSTRIES.map((p, i) => (
                  <option key={p.planet} value={i}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>
            <div className="grid sm:grid-cols-2 gap-8">
              <Range
                label="People doing it"
                value={people}
                min={1}
                max={500}
                onChange={setPeople}
                suffix=""
              />
              <Range
                label="Hours each, weekly"
                value={hours}
                min={1}
                max={40}
                onChange={setHours}
                suffix=" h"
              />
            </div>
            <p className="t-1 soft">
              Benchmark for {ind.short.toLowerCase()}: ₦
              {ind.hourlyRateNaira.toLocaleString("en-NG")} per staff hour, about{" "}
              {Math.round(ind.recoverable * 100)}% of repetitive hours recoverable, over {WEEKS}{" "}
              working weeks. Indicative, not a quote.
            </p>
          </form>

          <div className="lg:col-span-5 field-navy rounded-[var(--radius)] p-7 md:p-10 flex flex-col">
            <p className="t-1 font-semibold text-sky">Estimated yearly cost</p>
            <p
              className="font-[family-name:var(--serif)] nums leading-none mt-4 text-[clamp(3.5rem,8vw,5.5rem)]"
              aria-live="polite"
            >
              ₦{figure}
              <span className="text-[0.45em] ml-1">{unit}</span>
            </p>
            <p className="t-2 soft mt-5">
              About {hoursPerYear.toLocaleString("en-NG")} hours a year that {people} people spend
              on {ind.driver}.
            </p>
            <Link to="/work-with-us" className="btn self-start mt-8">
              Get a proper audit <ArrowRight className="btn-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Range({
  label,
  value,
  min,
  max,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  suffix: string;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <span className="t-1 font-semibold flex justify-between mb-2">
        {label}
        <span className="nums">
          {value}
          {suffix}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range w-full"
      />
    </label>
  );
}
