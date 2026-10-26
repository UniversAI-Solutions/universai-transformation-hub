import { Link } from "@tanstack/react-router";
import { ArrowRight } from "./icons";

/** The close of every page: one invitation, one sentence, one action, on the brand navy. */
export function ClosingCTA({
  lines,
  sentence,
  action = "Book a consultation",
}: {
  lines: [string, string];
  sentence: React.ReactNode;
  action?: string;
}) {
  return (
    <section data-field="navy" className="field-navy">
      <div className="wrap py-24 md:py-28 grid-12 gap-y-8 items-end">
        <h2 className="col-span-12 lg:col-span-7 t-5" data-reveal-lines>
          <span className="line">
            <span data-line>{lines[0]}</span>
          </span>
          <span className="line">
            <span data-line style={{ ["--i" as string]: 1 }}>
              {lines[1]}
            </span>
          </span>
        </h2>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9" data-reveal>
          <p className="t-2 md:text-[1.2rem] leading-relaxed">{sentence}</p>
          <Link to="/work-with-us" className="btn mt-7 w-full sm:w-auto min-h-14">
            {action} <ArrowRight className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
