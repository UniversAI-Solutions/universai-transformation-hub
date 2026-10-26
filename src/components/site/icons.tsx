import type { SVGProps } from "react";

/*
  UniversAI icon set. Drawn on a 48-unit grid: a 1.75 stroke in currentColor over one flat
  offset block in --icon-fill (defaults to the sky tone). Small UI glyphs (arrow, menu, close)
  are stroke only.
*/

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Frame({ size = 48, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

const fill = { fill: "var(--icon-fill, #c9d7f7)", stroke: "none" } as const;

/** Phase 01. A working file with one row marked, under a lens. */
export function IconDiscover(p: IconProps) {
  return (
    <Frame {...p}>
      <rect x="9" y="9" width="24" height="31" {...fill} />
      <path d="M7 6h20l6 6v28H7z" />
      <path d="M12 16h14M12 21h8M12 26h6" />
      <rect x="11" y="29.5" width="12" height="4" rx="0.5" fill="currentColor" stroke="none" />
      <circle cx="33" cy="31" r="7" fill="var(--icon-bg, #fff)" />
      <path d="M38 36l5 5" />
    </Frame>
  );
}

/** Phase 02. Two systems joined by a built connector. */
export function IconImplement(p: IconProps) {
  return (
    <Frame {...p}>
      <rect x="9" y="11" width="13" height="13" {...fill} />
      <rect x="29" y="27" width="13" height="13" {...fill} />
      <rect x="6" y="8" width="13" height="13" />
      <rect x="26" y="24" width="13" height="13" />
      <path d="M19 14.5h7a3 3 0 0 1 3 3V24" />
      <circle cx="29" cy="17.5" r="1.8" fill="currentColor" />
      <path d="M10 25v6a3 3 0 0 0 3 3h6" strokeDasharray="2 3" />
    </Frame>
  );
}

/** Phase 03. Two rings that stay together, and a line that keeps rising. */
export function IconPartner(p: IconProps) {
  return (
    <Frame {...p}>
      <circle cx="21" cy="23" r="11" {...fill} />
      <circle cx="18" cy="20" r="11" />
      <circle cx="30" cy="20" r="11" />
      <path d="M8 41l8-5 7 3 9-6 9-5" />
      <path d="M36 28h5v5" />
    </Frame>
  );
}

/** UniversAIDS. The mark's three nodes as a small evidence graph. */
export function IconGraph(p: IconProps) {
  return (
    <Frame {...p}>
      <circle cx="14" cy="17" r="7" {...fill} />
      <circle cx="12" cy="14" r="5" />
      <circle cx="25" cy="22" r="4.5" />
      <circle cx="37" cy="12" r="6" />
      <circle cx="31" cy="37" r="5" />
      <path d="M16.6 16.2l4.3 3.6M29.3 19.8l3.2-3.6M26.8 26.1l2.6 6.3" />
    </Frame>
  );
}

/** UniversAIMS. A live trace inside a monitor window. */
export function IconPulse(p: IconProps) {
  return (
    <Frame {...p}>
      <rect x="9" y="12" width="34" height="26" {...fill} />
      <rect x="5" y="8" width="34" height="26" />
      <path d="M9 23h6l3-7 5 13 3-6h9" />
      <path d="M17 41h14M24 34v7" />
    </Frame>
  );
}

/** Governance. A shield holding a tick. */
export function IconShield(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M27 11l13 4v10c0 8-6 14-13 17z" {...fill} />
      <path d="M24 6l14 5v11c0 9-6 16-14 20-8-4-14-11-14-20V11z" />
      <path d="M18 24l4.5 4.5L31 20" />
    </Frame>
  );
}

/** Training. A board, a pointer, and a learner. */
export function IconTraining(p: IconProps) {
  return (
    <Frame {...p}>
      <rect x="9" y="10" width="30" height="20" {...fill} />
      <rect x="6" y="7" width="30" height="20" />
      <path d="M11 14h12M11 19h8" />
      <circle cx="36" cy="33" r="4" />
      <path d="M29 43c0-4 3-6 7-6s7 2 7 6" />
      <path d="M26 21l7 9" />
    </Frame>
  );
}

/** Evidence. A stack of cited sources. */
export function IconEvidence(p: IconProps) {
  return (
    <Frame {...p}>
      <rect x="13" y="13" width="26" height="28" {...fill} />
      <path d="M10 10h22v28H10z" />
      <path d="M16 6h22v28" />
      <path d="M15 18h12M15 23h12M15 28h7" />
    </Frame>
  );
}

/** Training cost and value: the naira mark on a ledger line. */
export function IconNaira(p: IconProps) {
  return (
    <Frame {...p}>
      <circle cx="26" cy="26" r="15" {...fill} />
      <circle cx="23" cy="23" r="15" />
      <path d="M17 31V15l12 16V15M14 21h18M14 25h18" />
    </Frame>
  );
}

export function IconMail(p: IconProps) {
  return (
    <Frame {...p}>
      <rect x="9" y="14" width="34" height="24" {...fill} />
      <rect x="5" y="10" width="34" height="24" />
      <path d="M6 12l16 12 16-12" />
    </Frame>
  );
}

export function IconChat(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M12 12h30v20H24l-8 7v-7h-4z" {...fill} />
      <path d="M7 8h30v20H19l-8 7v-7H7z" />
      <path d="M14 16h16M14 21h10" />
    </Frame>
  );
}

export function IconPin(p: IconProps) {
  return (
    <Frame {...p}>
      <circle cx="27" cy="22" r="11" {...fill} />
      <path d="M24 43s-13-12-13-23a13 13 0 0 1 26 0c0 11-13 23-13 23z" />
      <circle cx="24" cy="20" r="4.5" />
    </Frame>
  );
}

/* ---------- small UI glyphs ---------- */

function Glyph({ size = 20, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(p: IconProps) {
  return (
    <Glyph {...p}>
      <path d="M3 10h13M11 5l5 5-5 5" />
    </Glyph>
  );
}

export function ArrowLeft(p: IconProps) {
  return (
    <Glyph {...p}>
      <path d="M17 10H4M9 5l-5 5 5 5" />
    </Glyph>
  );
}

export function MenuGlyph(p: IconProps) {
  return (
    <Glyph {...p}>
      <path d="M2 6h16M2 14h16" />
    </Glyph>
  );
}

export function CloseGlyph(p: IconProps) {
  return (
    <Glyph {...p}>
      <path d="M4 4l12 12M16 4L4 16" />
    </Glyph>
  );
}

export function CheckGlyph(p: IconProps) {
  return (
    <Glyph {...p}>
      <path d="M4 10.5l4 4L16 6" />
    </Glyph>
  );
}
