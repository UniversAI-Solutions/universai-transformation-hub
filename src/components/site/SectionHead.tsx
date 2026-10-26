import { Link } from "@tanstack/react-router";
import { ArrowRight } from "./icons";

/**
 * The one way every section opens: a serif title on the left, the sentence that frames it and an
 * optional "view all" link on the right. Consistency here is most of what reads as "established".
 */
export function SectionHead({
  title,
  intro,
  link,
  id,
}: {
  title: string;
  intro?: string;
  link?: { to: string; hash?: string; label: string };
  id?: string;
}) {
  return (
    <div className="grid-12 gap-y-5 items-end">
      <h2 id={id} className="col-span-12 lg:col-span-6 t-4 max-w-[18ch]" data-reveal>
        {title}
      </h2>
      {(intro || link) && (
        <div
          className="col-span-12 lg:col-span-5 lg:col-start-8"
          data-reveal
          style={{ ["--i" as string]: 1 }}
        >
          {intro && <p className="t-2 soft max-w-[52ch]">{intro}</p>}
          {link && (
            <Link
              to={link.to}
              hash={link.hash}
              className="inline-flex items-center gap-2 mt-4 t-2 font-semibold link-on"
            >
              {link.label} <ArrowRight />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
