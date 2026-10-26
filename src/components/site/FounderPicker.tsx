import { useState } from "react";
import { FOUNDERS } from "@/data/founders";

/** A round portrait, cropped to the face. Circles are the nodes of the UniversAI mark. */
export function Portrait({
  f,
  size,
  className = "",
  zoom,
  eager,
}: {
  f: (typeof FOUNDERS)[number];
  size: number | string;
  className?: string;
  zoom?: number;
  eager?: boolean;
}) {
  return (
    <span
      className={`block rounded-full overflow-hidden bg-mist shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={f.image}
        alt=""
        width={typeof size === "number" ? size : undefined}
        height={typeof size === "number" ? size : undefined}
        loading={eager ? undefined : "lazy"}
        className="w-full h-full object-cover"
        style={{
          objectPosition: f.pos,
          transform: `scale(${zoom ?? f.zoom})`,
          transformOrigin: f.pos,
        }}
      />
    </span>
  );
}

/** Pick a founder on the left, read them on the right. */
export function FounderPicker({ title }: { title: string }) {
  const [i, setI] = useState(0);
  const f = FOUNDERS[i];
  return (
    <section data-field="deep" className="field-deep">
      <div className="wrap py-24 md:py-32">
        <h2 className="t-4 max-w-[16ch]" data-reveal>
          {title}
        </h2>

        <div className="grid-12 gap-y-10 mt-12 md:mt-16 items-start">
          <div
            className="col-span-12 lg:col-span-5 grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-3"
            role="tablist"
            aria-label="Founders"
          >
            {FOUNDERS.map((p, k) => (
              <button
                key={p.name}
                role="tab"
                aria-selected={k === i}
                aria-controls="founder-card"
                onClick={() => setI(k)}
                className={`group flex flex-col lg:flex-row items-center gap-3 lg:gap-5 p-3 lg:p-4 rounded-[var(--radius)] text-center lg:text-left transition-colors duration-200 ${
                  k === i ? "bg-[#1b2a45]" : "hover:bg-[#162238]"
                }`}
              >
                <span
                  className={`rounded-full p-[3px] transition-colors duration-200 ${
                    k === i ? "bg-green" : "bg-transparent"
                  }`}
                >
                  <Portrait f={p} size={112} />
                </span>
                <span>
                  <span className="block t-2 font-semibold leading-tight">{p.short}</span>
                  <span className="block t-1 soft">{p.role}</span>
                </span>
              </button>
            ))}
          </div>

          <article
            id="founder-card"
            role="tabpanel"
            key={f.name}
            className="founder-card col-span-12 lg:col-start-7 lg:col-span-6 bg-paper text-ink rounded-[var(--radius)] overflow-hidden"
          >
            <div className="bg-mist flex justify-center pt-10 pb-8">
              <Portrait f={f} size={220} />
            </div>
            <div className="p-6 md:p-10">
              <h3 className="t-3">{f.name}</h3>
              <p className="t-2 font-semibold text-blue mt-1">{f.role}, UniversAI</p>
              <p className="t-2 mt-5">{f.bio}</p>
              <dl className="grid sm:grid-cols-2 gap-6 mt-8">
                <div>
                  <dt className="t-1 text-ink-soft">Background</dt>
                  <dd className="t-2 font-semibold mt-1">{f.background}</dd>
                </div>
                <div>
                  <dt className="t-1 text-ink-soft">Works on</dt>
                  <dd className="t-2 font-semibold mt-1">{f.focus}</dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
