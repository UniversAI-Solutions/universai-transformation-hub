import { Link } from "@tanstack/react-router";
import { SectionHead } from "@/components/site/SectionHead";
import { Portrait } from "@/components/site/FounderPicker";
import { FOUNDERS } from "@/data/founders";
import { ArrowRight } from "@/components/site/icons";

/** The founders, listed the way firms list their partners. */
export function Leadership() {
  return (
    <section data-field="paper" className="field-paper">
      <div className="wrap py-24 md:py-32">
        <SectionHead
          title="Leadership"
          intro="Our leadership brings together expertise in AI solution design, data engineering and machine learning operations, and is directly involved in every engagement."
          link={{ to: "/team", label: "Meet the team" }}
        />
        <ul className="grid md:grid-cols-3 gap-5 mt-14">
          {FOUNDERS.map((f, i) => (
            <li key={f.name} data-reveal style={{ ["--i" as string]: i }}>
              <Link
                to="/team"
                className="leader-card group flex flex-col h-full p-7 md:p-8 rounded-[var(--radius)] bg-mist"
              >
                <Portrait f={f} size={112} />
                <h3 className="t-3 font-[family-name:var(--serif)] font-medium mt-6 leading-snug">
                  {f.name}
                </h3>
                <p className="t-2 font-semibold text-blue mt-1">{f.role}</p>
                <p className="t-1 soft mt-4">{f.focus}</p>
                <span className="mt-auto pt-6 inline-flex items-center gap-2 t-1 font-semibold">
                  Profile{" "}
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
