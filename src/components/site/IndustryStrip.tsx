import { Link } from "@tanstack/react-router";
import { PLANET_INDUSTRIES } from "@/data/industries";
import { ArrowRight } from "./icons";

/** The eight industry arms in orbital order, each under its planet, on the deep field. */
export function IndustryStrip({ title, sentence }: { title: string; sentence: string }) {
  return (
    <section data-field="deep" className="field-deep">
      <div className="wrap py-24 md:py-32">
        <div className="grid-12 gap-y-6 items-end">
          <h2 className="col-span-12 md:col-span-6 t-4 max-w-[14ch]" data-reveal>
            {title}
          </h2>
          <p className="col-span-12 md:col-span-6 t-2" data-reveal>
            {sentence}
          </p>
        </div>
        <ul className="grid grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-10 mt-16">
          {PLANET_INDUSTRIES.map((p, i) => (
            <li key={p.planet} data-reveal style={{ ["--i" as string]: i % 4 }}>
              <img
                src={p.image}
                alt={`${p.name} (${p.planet} arm)`}
                width={160}
                height={160}
                loading="lazy"
                className="w-full max-w-36 aspect-square rounded-full mix-blend-screen"
              />
              <p className="t-2 font-semibold mt-4 leading-tight">{p.short}</p>
              <p className="t-1 soft">{p.planet}</p>
            </li>
          ))}
        </ul>
        <Link to="/" hash="industries" className="btn btn-paper mt-14" data-reveal>
          What we fix in each <ArrowRight className="btn-arrow" />
        </Link>
      </div>
    </section>
  );
}
