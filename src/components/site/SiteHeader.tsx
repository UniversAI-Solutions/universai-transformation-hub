import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Wordmark } from "./Mark";
import {
  ArrowRight,
  CloseGlyph,
  IconDiscover,
  IconImplement,
  IconPartner,
  MenuGlyph,
} from "./icons";
import { PLANET_INDUSTRIES } from "@/data/industries";

const SERVICES = [
  {
    hash: "discovery",
    label: "Discovery",
    body: "Operational audits that trace each problem to its root cause.",
    Icon: IconDiscover,
  },
  {
    hash: "implementation",
    label: "Implementation",
    body: "Custom AI systems built into the ERP, POS and CRM you already run.",
    Icon: IconImplement,
  },
  {
    hash: "partnership",
    label: "Partnership",
    body: "Monitoring, retraining, team training and monthly ROI reviews.",
    Icon: IconPartner,
  },
];

const LINKS = [
  { to: "/platform", label: "Platform" },
  { to: "/case-studies", label: "Case studies" },
  { to: "/insights", label: "Insights" },
  { to: "/team", label: "About us" },
] as const;

type Menu = "services" | "industries" | null;

/** The header takes the field of the chapter under it, switching as each section edge passes. */
function useChapterUnderHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [field, setField] = useState("paper");

  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      const probe = 36;
      const chapters = document.querySelectorAll<HTMLElement>("main [data-field]");
      for (const el of chapters) {
        const r = el.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) {
          const f = el.dataset.field ?? "paper";
          // the hero's header is see-through only at the very top; once the page moves it
          // gets a solid ground so nothing scrolls visibly underneath it
          setField(f === "hero" && window.scrollY > 8 ? "hero-solid" : f);
          return;
        }
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return field;
}

export function SiteHeader() {
  const field = useChapterUnderHeader();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<Menu>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const show = (m: Menu) => {
    window.clearTimeout(closeTimer.current);
    setMenu(m);
  };
  const hideSoon = () => {
    closeTimer.current = window.setTimeout(() => setMenu(null), 160);
  };

  const solid = open || menu !== null;

  return (
    <header
      className={`site-header field-${solid ? "paper" : field}`}
      onMouseLeave={hideSoon}
      onMouseEnter={() => window.clearTimeout(closeTimer.current)}
    >
      <div className="wrap flex h-full items-center justify-between gap-6">
        <Link to="/" aria-label="UniversAI Solutions, home" className="shrink-0">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-1 t-1 font-medium h-full">
          <MenuButton id="services" label="What we do" menu={menu} show={show} />
          <MenuButton id="industries" label="Industries" menu={menu} show={show} />
          {LINKS.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3.5 h-full inline-flex items-center link"
              activeProps={{ className: "link-on" }}
              onMouseEnter={() => show(null)}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/work-with-us" className="btn btn-sm">
            <span className="hidden sm:inline">Book a consultation</span>
            <span className="sm:hidden">Contact</span>
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex items-center gap-2 t-1 font-semibold min-h-11 px-1"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <CloseGlyph /> : <MenuGlyph />}
            Menu
          </button>
        </div>
      </div>

      {/* desktop panels */}
      {menu && (
        <div
          className="mega hidden lg:block absolute inset-x-0 top-full field-paper"
          onMouseEnter={() => window.clearTimeout(closeTimer.current)}
        >
          <div className="wrap py-10 grid-12 gap-y-6">
            {menu === "services" ? (
              <>
                <div className="col-span-3">
                  <p className="t-4">What we do</p>
                  <p className="t-1 soft mt-3 max-w-[30ch]">
                    Three phases, one partner: we find the cause, build the fix and stay to run it.
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 mt-5 t-1 font-semibold link-on"
                  >
                    All services <ArrowRight size={16} />
                  </Link>
                </div>
                <ul className="col-span-9 grid grid-cols-3 gap-4">
                  {SERVICES.map((s) => (
                    <li key={s.hash}>
                      <Link
                        to="/services"
                        hash={s.hash}
                        className="mega-item block h-full p-5 rounded-[var(--radius)]"
                        style={{ ["--icon-fill" as string]: "var(--sky)" }}
                      >
                        <s.Icon size={40} />
                        <span className="block t-2 font-semibold mt-4">{s.label}</span>
                        <span className="block t-1 soft mt-1">{s.body}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <div className="col-span-3">
                  <p className="t-4">Industries</p>
                  <p className="t-1 soft mt-3 max-w-[30ch]">
                    Eight industry arms, each with its own benchmarks and playbook.
                  </p>
                  <Link
                    to="/industries"
                    className="inline-flex items-center gap-2 mt-5 t-1 font-semibold link-on"
                  >
                    All industries <ArrowRight size={16} />
                  </Link>
                </div>
                <ul className="col-span-9 grid grid-cols-2 gap-x-4 gap-y-1">
                  {PLANET_INDUSTRIES.map((p) => (
                    <li key={p.planet}>
                      <Link
                        to="/industries/$slug"
                        params={{ slug: p.slug }}
                        className="mega-item flex items-center gap-4 p-3 rounded-[var(--radius)]"
                      >
                        <img
                          src={p.image}
                          alt=""
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full bg-deep"
                        />
                        <span>
                          <span className="block t-2 font-semibold">{p.name}</span>
                          <span className="block t-1 soft line-clamp-1">{p.fix}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}

      {/* phone and tablet menu */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="lg:hidden field-paper fixed inset-x-0 top-[var(--header-h)] bottom-0 overflow-y-auto wrap pt-4 pb-10 flex flex-col"
        >
          <Link
            to="/"
            className="t-3 py-3"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-blue" }}
          >
            Home
          </Link>
          <details className="mobile-group py-1">
            <summary className="t-3 py-2 cursor-pointer list-none flex justify-between items-center">
              What we do <span className="faq-sign" aria-hidden="true" />
            </summary>
            <ul className="pb-3 pl-1">
              {SERVICES.map((s) => (
                <li key={s.hash}>
                  <Link to="/services" hash={s.hash} className="block t-2 py-2 font-medium">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="block t-2 py-2 font-semibold text-blue">
                  All services
                </Link>
              </li>
            </ul>
          </details>
          <details className="mobile-group py-1">
            <summary className="t-3 py-2 cursor-pointer list-none flex justify-between items-center">
              Industries <span className="faq-sign" aria-hidden="true" />
            </summary>
            <ul className="pb-3 pl-1">
              {PLANET_INDUSTRIES.map((p) => (
                <li key={p.planet}>
                  <Link
                    to="/industries/$slug"
                    params={{ slug: p.slug }}
                    className="block t-2 py-2 font-medium"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/industries" className="block t-2 py-2 font-semibold text-blue">
                  All industries
                </Link>
              </li>
            </ul>
          </details>
          {[...LINKS, { to: "/work-with-us", label: "Contact" }].map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="t-3 py-3"
              activeProps={{ className: "text-blue" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="https://wa.me/2348157124750"
            className="mt-auto pt-8 t-2 font-semibold link-on"
            target="_blank"
            rel="noopener noreferrer"
          >
            Front desk: +234 815 712 4750
          </a>
        </nav>
      )}
    </header>
  );
}

function MenuButton({
  id,
  label,
  menu,
  show,
}: {
  id: Exclude<Menu, null>;
  label: string;
  menu: Menu;
  show: (m: Menu) => void;
}) {
  const on = menu === id;
  return (
    <button
      type="button"
      className={`px-3.5 h-full inline-flex items-center gap-1.5 ${on ? "link-on" : "link"}`}
      aria-expanded={on}
      onMouseEnter={() => show(id)}
      onFocus={() => show(id)}
      onClick={() => show(on ? null : id)}
    >
      {label}
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        aria-hidden="true"
        className={`transition-transform duration-200 ${on ? "rotate-180" : ""}`}
      >
        <path
          d="M1.5 3.5L5 7l3.5-3.5"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
