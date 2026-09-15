import { Link } from "@tanstack/react-router";
import logoIcon from "@/assets/logo-light.png";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border mt-24 bg-[#081020]">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase font-semibold text-primary-glow mb-4">
              Proprietary Systems
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/platform" className="text-muted-foreground hover:text-foreground transition-colors">
                  UniversAIDS (Phase 01 Tool)
                </Link>
              </li>
              <li>
                <Link to="/platform" className="text-muted-foreground hover:text-foreground transition-colors">
                  UniversAIMS (Phase 03 Tool)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase font-semibold text-primary-glow mb-4">
              Consulting Phases
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" hash="discovery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Phase 01 — Discovery
                </Link>
              </li>
              <li>
                <Link to="/services" hash="implementation" className="text-muted-foreground hover:text-foreground transition-colors">
                  Phase 02 — Implementation
                </Link>
              </li>
              <li>
                <Link to="/services" hash="partnership" className="text-muted-foreground hover:text-foreground transition-colors">
                  Phase 03 — Partnership
                </Link>
              </li>
              <li>
                <Link to="/services" hash="partnership" className="text-muted-foreground hover:text-foreground transition-colors">
                  Team Training & Capacity
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase font-semibold text-primary-glow mb-4">
              Planetary Arms
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>Real Estate & Infrastructure (Mercury)</li>
              <li>Retail & Consumer Goods (Venus)</li>
              <li>Agriculture & Agri-Business (Earth)</li>
              <li>Transport & Logistics (Mars)</li>
              <li>Finance & Banking (Jupiter)</li>
              <li>Healthcare & Life Sciences (Saturn)</li>
              <li>Oil, Gas & Energy (Uranus)</li>
              <li>Education & EdTech (Neptune)</li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase font-semibold text-primary-glow mb-4">
              Direct Inquiries
            </div>
            <ul className="space-y-2.5 text-xs text-muted-foreground leading-relaxed">
              <li className="text-foreground font-medium">UniversAI Solutions Ltd</li>
              <li>Federal Capital Territory, Abuja, Nigeria</li>
              <li className="pt-2">
                <a href="mailto:inquiries.desk@universaisolutions.com" className="text-primary-glow hover:underline break-all font-medium">
                  inquiries.desk@universaisolutions.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/2348157124750" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-medium">
                  WhatsApp: +234 815 712 4750
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/50 text-xs text-muted-foreground">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoIcon} alt="UniversAI" className="h-8 w-8" />
            <div>
              <div className="font-display font-semibold tracking-tight text-foreground">UniversAI Solutions Ltd.</div>
              <div className="text-[10px]">© {new Date().getFullYear()} All rights reserved. Enterprise Management Consulting.</div>
            </div>
          </Link>
          <div className="text-center md:text-right font-mono text-[11px] text-muted-foreground">
            Universe + Artificial Intelligence · Discover. Implement. Partner.
          </div>
        </div>
      </div>
    </footer>
  );
}
