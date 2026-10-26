import { ReactNode, useEffect } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

// revealed state lives in an attribute React never renders, so no re-render can wipe it
const REVEAL = "[data-reveal]:not([data-in]), [data-reveal-lines]:not([data-in])";

/**
 * Reveal [data-reveal] elements once as they enter. Never replays, never leaves content hidden.
 * One observer for the page's life, plus a MutationObserver, so content rendered after a
 * client-side navigation (a new case study, say) is picked up too.
 */
function useReveal() {
  useEffect(() => {
    const show = (el: Element) => el.setAttribute("data-in", "");
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(REVEAL).forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          show(e.target);
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    const watch = (root: ParentNode) =>
      root.querySelectorAll(REVEAL).forEach((el) => io.observe(el));
    watch(document);

    const mo = new MutationObserver((records) => {
      for (const r of records) {
        // a reused node whose class React rewrote has lost its revealed state
        if (r.type === "attributes" && r.target instanceof Element && r.target.matches(REVEAL))
          io.observe(r.target);
        r.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return;
          if (n.matches(REVEAL)) io.observe(n);
          watch(n);
        });
      }
    });
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    // safety net: anything on screen that is still hidden after a moment is shown
    const sweep = () =>
      document.querySelectorAll(REVEAL).forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < innerHeight && r.bottom > 0) show(el);
      });
    const t = window.setInterval(sweep, 1500);
    return () => {
      io.disconnect();
      mo.disconnect();
      clearInterval(t);
    };
  }, []);
}

export function SiteLayout({ children }: { children: ReactNode }) {
  useReveal();
  return (
    <div className="min-h-svh flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] btn btn-sm"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
