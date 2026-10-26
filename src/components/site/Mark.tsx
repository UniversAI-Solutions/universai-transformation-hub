import { useId } from "react";

/**
 * The UniversAI mark, redrawn from the logo file: a heavy U with three connected nodes
 * resting in its mouth. Drawn in currentColor so it takes the ink of whatever chapter it sits on.
 */
export function Mark({ size = 32, className }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      width={size}
      height={(size * 416) / 398}
      viewBox="0 0 398 416"
      className={className}
      aria-hidden="true"
    >
      <mask id={`m${id}`}>
        <rect width="398" height="416" fill="#fff" />
        {/* the gap the nodes cut out of the U */}
        <circle cx="52" cy="95" r="61" fill="#000" />
        <circle cx="191" cy="152" r="72" fill="#000" />
        <circle cx="329" cy="68" r="84" fill="#000" />
      </mask>
      <path
        mask={`url(#m${id})`}
        fill="currentColor"
        d="M0 150h102v118c0 46 40 76 89 76s89-30 89-76V150h102v126c0 82-84 140-191 140S0 358 0 276z"
      />
      <path d="M52 95L191 152L329 68" stroke="currentColor" strokeWidth="22" fill="none" />
      <circle cx="52" cy="95" r="46" fill="currentColor" />
      <circle cx="191" cy="152" r="56" fill="currentColor" />
      <circle cx="329" cy="68" r="68" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={28} />
      <span className="text-[1.3rem] font-bold tracking-[-0.02em] leading-none">UniversAI</span>
    </span>
  );
}
