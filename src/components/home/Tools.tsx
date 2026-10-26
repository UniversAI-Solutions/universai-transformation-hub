import { Link } from "@tanstack/react-router";
import { SectionHead } from "@/components/site/SectionHead";
import { AidsFragment, AimsFragment } from "@/components/site/Fragments";
import { ArrowRight } from "@/components/site/icons";

const TOOLS = [
  {
    name: "UniversAIDS",
    full: "Discovery System",
    phase: "Used in Discovery",
    body: "Takes in interviews, spreadsheets and SOPs during an audit, and links every bottleneck to the file, row or interview it came from.",
    Fragment: AidsFragment,
    hash: "universaids",
  },
  {
    name: "UniversAIMS",
    full: "Management System",
    phase: "Used in Partnership",
    body: "Watches every system we deploy for uptime, accuracy drift and token cost, so problems reach our engineers before they reach your staff.",
    Fragment: AimsFragment,
    hash: "universaims",
  },
];

/** The two in-house platforms, as a firm presents its proprietary tools. */
export function Tools() {
  return (
    <section data-field="mist" className="field-mist">
      <div className="wrap py-24 md:py-32">
        <SectionHead
          title="Our proprietary platforms"
          intro="We don't resell software. Our consultants use two systems we built ourselves, one to find root causes and one to keep what we build healthy."
          link={{ to: "/platform", label: "See the platforms" }}
        />

        <div className="grid lg:grid-cols-2 gap-5 mt-14">
          {TOOLS.map((t, i) => (
            <article
              key={t.name}
              className="bg-paper rounded-[var(--radius)] overflow-hidden flex flex-col"
              data-reveal
              style={{ ["--i" as string]: i }}
            >
              <div
                className="bg-navy px-6 md:px-10 pt-8 md:pt-10 h-[260px] md:h-[320px] overflow-hidden"
                aria-hidden="true"
              >
                <div className="pointer-events-none select-none">
                  <t.Fragment />
                </div>
              </div>
              <div className="p-7 md:p-10 flex flex-col flex-1">
                <p className="t-1 font-semibold text-blue">{t.phase}</p>
                <h3 className="t-3 font-[family-name:var(--serif)] font-medium mt-2">
                  {t.name} <span className="soft font-normal">· {t.full}</span>
                </h3>
                <p className="t-2 soft mt-3 max-w-[52ch]">{t.body}</p>
                <Link
                  to="/platform"
                  hash={t.hash}
                  className="mt-auto pt-7 inline-flex items-center gap-2 t-2 font-semibold link-on self-start"
                >
                  How {t.name} works <ArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
