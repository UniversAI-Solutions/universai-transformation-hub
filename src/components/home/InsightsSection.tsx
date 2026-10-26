import { SectionHead } from "@/components/site/SectionHead";
import { InsightCard } from "@/components/site/InsightCard";
import { INSIGHTS } from "@/data/insights";

/** The latest thinking, three at a time, the way firms surface their insights. */
export function InsightsSection() {
  return (
    <section data-field="mist" className="field-mist">
      <div className="wrap py-24 md:py-32">
        <SectionHead
          title="Insights"
          intro="Perspectives on root-cause discovery, AI in production and accountable AI, and on the platforms we built for them."
          link={{ to: "/insights", label: "All insights" }}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 mt-14">
          {INSIGHTS.slice(0, 3).map((a, i) => (
            <InsightCard key={a.slug} a={a} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
