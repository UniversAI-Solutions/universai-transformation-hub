import { Link } from "@tanstack/react-router";
import type { Cover, Insight } from "@/data/insights";
import { readMinutes } from "@/data/insights";
import { AidsFragment, AimsFragment } from "./Fragments";
import {
  ArrowRight,
  IconDiscover,
  IconEvidence,
  IconImplement,
  IconNaira,
  IconPartner,
  IconPulse,
  IconShield,
  IconTraining,
} from "./icons";

const ICONS = {
  discover: IconDiscover,
  implement: IconImplement,
  partner: IconPartner,
  shield: IconShield,
  evidence: IconEvidence,
  pulse: IconPulse,
  naira: IconNaira,
  training: IconTraining,
};

const FIELD_ICON_VARS: Record<string, React.CSSProperties> = {
  navy: { ["--icon-fill" as string]: "var(--blue)", ["--icon-bg" as string]: "var(--navy)" },
  deep: { ["--icon-fill" as string]: "var(--navy)", ["--icon-bg" as string]: "var(--deep)" },
  blue: { ["--icon-fill" as string]: "#3d63d8", ["--icon-bg" as string]: "var(--blue)" },
  sky: { ["--icon-fill" as string]: "var(--paper)", ["--icon-bg" as string]: "var(--sky)" },
};

/**
 * An article's cover. Platform pieces show a slice of the platform itself; method pieces show
 * one of our drawings on a brand field, or a credited photograph of the places we work.
 */
export function InsightCover({
  cover,
  className = "",
  large,
}: {
  cover: Cover;
  className?: string;
  large?: boolean;
}) {
  if (cover.kind === "photo") {
    return (
      <div className={`overflow-hidden bg-mist ${className}`}>
        <img
          src={cover.src}
          alt={cover.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={{ objectPosition: cover.pos }}
        />
      </div>
    );
  }
  if (cover.kind === "aids" || cover.kind === "aims") {
    const F = cover.kind === "aids" ? AidsFragment : AimsFragment;
    return (
      <div
        className={`overflow-hidden bg-navy ${large ? "px-8 pt-8 md:px-12 md:pt-12" : "px-6 pt-6"} ${className}`}
        aria-hidden="true"
      >
        <div
          className={`pointer-events-none select-none transition-transform duration-700 ease-out group-hover:-translate-y-1 ${large ? "max-w-[960px] mx-auto" : ""}`}
        >
          <F />
        </div>
      </div>
    );
  }
  const Icon = ICONS[cover.icon];
  return (
    <div
      className={`field-${cover.field} flex items-center justify-center ${className}`}
      style={FIELD_ICON_VARS[cover.field]}
      aria-hidden="true"
    >
      <Icon
        size={undefined}
        strokeWidth={1.2}
        style={{
          width: large ? "clamp(120px, 14vw, 200px)" : "96px",
          height: large ? "clamp(120px, 14vw, 200px)" : "96px",
        }}
        className="transition-transform duration-500 ease-out group-hover:scale-105"
      />
    </div>
  );
}

/** A card for the insight grids. */
export function InsightCard({ a, i = 0 }: { a: Insight; i?: number }) {
  return (
    <Link
      to="/insights/$slug"
      params={{ slug: a.slug }}
      className="group flex flex-col h-full"
      data-reveal
      style={{ ["--i" as string]: i % 3 }}
    >
      <InsightCover cover={a.cover} className="aspect-[16/10] rounded-[var(--radius)]" />
      <p className="t-1 font-semibold text-blue mt-5">
        {a.topic} <span className="soft font-normal">· {readMinutes(a)} min read</span>
      </p>
      <h3 className="t-3 font-[family-name:var(--serif)] font-medium mt-2 leading-snug group-hover:underline underline-offset-4 decoration-1">
        {a.title}
      </h3>
      <p className="t-2 soft mt-3 line-clamp-3">{a.dek}</p>
      <span className="mt-auto pt-5 inline-flex items-center gap-2 t-1 font-semibold">
        Read the article{" "}
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
