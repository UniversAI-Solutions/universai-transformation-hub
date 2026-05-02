import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import logoIcon from "@/assets/logo-light.png";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoIcon} alt="UniversAI Solutions" className="h-9 w-9 transition-transform group-hover:scale-110" />
          <div className="leading-tight">
            <div className="font-display font-semibold text-foreground tracking-tight text-lg">UniversAI</div>
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Solutions Ltd.</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/services"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground" }}
          >
            Services
          </Link>
          <Link
            to="/team"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground" }}
          >
            Team
          </Link>
          <Link
            to="/work-with-us"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-5 pr-3 py-2 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-primary-glow transition-all"
          >
            Get in touch
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-background/20 group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-5">
            <Link to="/services" onClick={() => setOpen(false)} className="text-foreground">Services</Link>
            <Link to="/team" onClick={() => setOpen(false)} className="text-foreground">Team</Link>
            <Link
              to="/work-with-us"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground text-background px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase"
            >
              Get in touch <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
