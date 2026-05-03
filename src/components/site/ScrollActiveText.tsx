import { useEffect, useRef, useState } from "react";

/**
 * Renders children and progressively brightens lines as they reach the
 * vertical center of the viewport. Lines that have scrolled past are
 * gently dimmed back down — mimicking active-reading focus.
 */
export function ScrollActiveText({
  lines,
  className = "",
}: {
  lines: { text: React.ReactNode; size?: "lg" | "md" | "sm" }[];
  className?: string;
}) {
  const refs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const c = r.top + r.height / 2;
        const d = Math.abs(c - mid);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      });
      setActive(bestIdx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lines.length]);

  const sizeCls = (s?: "lg" | "md" | "sm") =>
    s === "sm"
      ? "text-2xl md:text-3xl"
      : s === "md"
      ? "text-3xl md:text-4xl"
      : "text-3xl md:text-5xl";

  return (
    <div className={className}>
      {lines.map((l, i) => {
        const isActive = i === active;
        return (
          <p
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={`font-display font-light leading-tight mb-8 transition-all duration-700 ${sizeCls(
              l.size
            )} ${
              isActive
                ? "text-foreground opacity-100 blur-0"
                : "text-muted-foreground/30 opacity-60 blur-[1px]"
            }`}
          >
            {l.text}
          </p>
        );
      })}
    </div>
  );
}
