import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X, Network, Sparkles } from "lucide-react";
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
        scrolled ? "py-3 backdrop-blur-xl bg-background/85 border-b border-border" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoIcon} alt="UniversAI Solutions" className="h-9 w-9 transition-transform group-hover:scale-105" />
          <div className="leading-tight">
            <div className="font-display font-semibold text-foreground tracking-tight text-lg">UniversAI</div>
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Solutions Ltd.</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/platform" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
            activeProps={{ className: "text-primary-glow font-medium" }}
          >
            <Network className="h-3.5 w-3.5 text-primary-glow" />
            Proprietary Systems
          </Link>
          <Link 
            to="/services" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors" 
            activeProps={{ className: "text-foreground font-medium" }}
          >
            3 Consulting Phases
          </Link>
          <Link 
            to="/case-studies" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors" 
            activeProps={{ className: "text-foreground font-medium" }}
          >
            Case Studies
          </Link>
          <Link 
            to="/team" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors" 
            activeProps={{ className: "text-foreground font-medium" }}
          >
            Leadership
          </Link>

          <Link
            to="/work-with-us"
            className="group inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground pl-4 pr-2.5 py-1.5 text-xs font-semibold tracking-[0.1em] uppercase transition-all shadow-md hover:shadow-primary/25"
          >
            <span>Book Consultation</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-foreground/20 group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        </nav>

        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-2xl border-b border-border animate-fade-in shadow-2xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link 
              to="/platform" 
              onClick={() => setOpen(false)} 
              className="text-foreground text-base font-medium flex items-center gap-2"
            >
              <Network className="h-4 w-4 text-primary-glow" />
              Proprietary Systems (UniversAIDS & UniversAIMS)
            </Link>
            <Link to="/services" onClick={() => setOpen(false)} className="text-foreground text-base font-medium">
              3 Consulting Phases
            </Link>
            <Link to="/case-studies" onClick={() => setOpen(false)} className="text-foreground text-base font-medium">
              Case Studies
            </Link>
            <Link to="/team" onClick={() => setOpen(false)} className="text-foreground text-base font-medium">
              Leadership
            </Link>
            <div className="pt-3 border-t border-border/60">
              <Link
                to="/work-with-us"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground py-2.5 text-xs font-semibold tracking-[0.1em] uppercase"
              >
                Book AI Consultation <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
