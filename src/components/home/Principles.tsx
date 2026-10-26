import { SectionHead } from "@/components/site/SectionHead";
import { IconEvidence, IconPartner, IconShield } from "@/components/site/icons";

const PRINCIPLES = [
  {
    Icon: IconShield,
    title: "AI proposes. People decide.",
    body: "The system correlates evidence and suggests. A named senior consultant checks every finding, signs the advice and stays accountable for it.",
  },
  {
    Icon: IconEvidence,
    title: "Evidence, not opinion.",
    body: "Every finding points to the file, the row or the interview it came from, so your board can check our work for itself.",
  },
  {
    Icon: IconPartner,
    title: "We stay after launch.",
    body: "Deployment is the start. We monitor the system, retrain it as your business changes and report the return every month.",
  },
];

/** The firm's working principles, stated plainly. */
export function Principles() {
  return (
    <section data-field="navy" className="field-navy">
      <div className="wrap py-24 md:py-32">
        <SectionHead
          title="How we work"
          intro="Three commitments that hold on every engagement, whatever the industry or the size of the system."
        />
        <ul
          className="grid md:grid-cols-3 gap-x-10 gap-y-12 mt-14"
          style={{
            ["--icon-fill" as string]: "var(--blue)",
            ["--icon-bg" as string]: "var(--navy)",
          }}
        >
          {PRINCIPLES.map((p, i) => (
            <li key={p.title} data-reveal style={{ ["--i" as string]: i }}>
              <p.Icon size={48} />
              <h3 className="font-[family-name:var(--serif)] text-[length:var(--step-3)] md:text-[1.75rem] leading-tight mt-6">
                {p.title}
              </h3>
              <p className="t-2 soft mt-3 max-w-[40ch]">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
