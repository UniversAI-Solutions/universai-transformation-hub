/** Sticky heading on the left, filled tiles on the right; one answer open at a time. */
export function FAQ({
  title,
  items,
  field = "paper",
}: {
  title: string;
  items: { q: string; a: string }[];
  field?: string;
}) {
  return (
    <section data-field={field} className={`field-${field}`}>
      <div className="wrap py-28 md:py-40 grid-12 gap-y-10">
        <div className="col-span-12 lg:col-span-4">
          <h2 className="t-4 lg:sticky lg:top-28 max-w-[14ch]" data-reveal>
            {title}
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-1.5 md:gap-2">
          {items.map((f, i) => (
            <details
              key={f.q}
              name="faq"
              open={i === 0}
              className="faq group rounded-[var(--radius)]"
              data-reveal
              style={{ ["--i" as string]: Math.min(i, 4) }}
            >
              <summary className="flex items-center justify-between gap-6 min-h-16 md:min-h-[72px] px-5 md:px-6 py-4 cursor-pointer list-none">
                <span className="t-2 font-semibold">{f.q}</span>
                <span className="faq-sign" aria-hidden="true" />
              </summary>
              <p className="px-5 md:px-6 pb-6 t-2 max-w-[56ch]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
