import { Link } from "@tanstack/react-router";
import logoIcon from "@/assets/logo-light.png";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border mt-24">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Explore</div>
            <ul className="space-y-3 text-lg">
              <li><Link to="/services" className="text-foreground hover:text-primary-glow transition-colors">Services</Link></li>
              <li><Link to="/team" className="text-foreground hover:text-primary-glow transition-colors">Team</Link></li>
              <li><Link to="/work-with-us" className="text-foreground hover:text-primary-glow transition-colors">Work With Us</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Contact</div>
            <ul className="space-y-3 text-base">
              <li>
                <a href="mailto:universaisolutions.desk@gmail.com" className="text-foreground hover:text-primary-glow transition-colors break-all">
                  universaisolutions.desk@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">Federal Capital Territory, Abuja</li>
              <li className="text-muted-foreground">Working with clients across Nigeria & beyond</li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Brand</div>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted AI transformation partner on the journey to becoming an AI-first business.
            </p>
            <p className="mt-4 text-sm text-muted-foreground/70 italic">Discover. Implement. Partner.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoIcon} alt="UniversAI" className="h-10 w-10" />
            <div>
              <div className="font-display font-semibold tracking-tight">UniversAI Solutions Ltd.</div>
              <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</div>
            </div>
          </Link>
          <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Discover · Implement · Partner
          </div>
        </div>
      </div>
    </footer>
  );
}
