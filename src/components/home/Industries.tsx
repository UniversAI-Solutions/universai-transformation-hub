import { Link } from "@tanstack/react-router";
import { SectionHead } from "@/components/site/SectionHead";
import { ArrowRight } from "@/components/site/icons";
import { PLANET_INDUSTRIES } from "@/data/industries";

/**
 * Industries as a grid of eight, the way consultancies list their sectors. Each arm carries a
 * planet's name (UniversAI is Universe + AI); the planet photographs sit on the deep field.
 */
export function Industries() {
  return (
    <section data-field="deep" className="field-deep" id="industries">
      <div className="wrap py-24 md:py-32">
        <SectionHead
          title="Industries we serve"
          intro="Eight industry arms, each named after a planet and each with its own cost benchmarks and playbook."
          link={{ to: "/industries", label: "All industries" }}
        />

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-14">
          {PLANET_INDUSTRIES.map((p, i) => (
            <li key={p.planet} data-reveal style={{ ["--i" as string]: i % 4 }}>
              <Link
                to="/industries/$slug"
                params={{ slug: p.slug }}
                className="industry-card group flex flex-col h-full p-4 sm:p-6 rounded-[var(--radius)] bg-[#142039]"
              >
                <img
                  src={p.image}
                  alt=""
                  width={64}
                  height={64}
                  loading="lazy"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mix-blend-screen"
                />
                <h3 className="t-2 font-semibold mt-4 sm:mt-6 leading-snug">{p.name}</h3>
                <p className="hidden sm:block t-1 soft mt-2">{p.problem}</p>
                <span className="mt-auto pt-4 sm:pt-6 inline-flex items-center gap-2 t-1 font-semibold text-sky">
                  Learn more{" "}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
