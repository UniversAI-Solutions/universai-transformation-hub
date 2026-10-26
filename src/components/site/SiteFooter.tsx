import { Link } from "@tanstack/react-router";
import { PLANET_INDUSTRIES } from "@/data/industries";
import { Wordmark } from "./Mark";
import { ArrowRight } from "./icons";

/** A firm's footer: who we are, where everything is, how to reach us, and the credits. */
export function SiteFooter() {
  return (
    <footer className="field-deep" data-field="deep">
      <div className="wrap pt-20 pb-10">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <Link to="/" aria-label="UniversAI Solutions, home">
              <Wordmark />
            </Link>
            <p className="t-2 soft mt-5 max-w-[36ch]">
              AI consulting and transformation for organisations across Nigeria. Discover,
              implement, partner.
            </p>
            <Link to="/work-with-us" className="btn mt-7">
              Book a consultation <ArrowRight className="btn-arrow" />
            </Link>
          </div>

          <FooterCol title="What we do" className="col-span-6 md:col-span-3 lg:col-span-2">
            <FLink to="/services" hash="discovery">
              Discovery
            </FLink>
            <FLink to="/services" hash="implementation">
              Implementation
            </FLink>
            <FLink to="/services" hash="partnership">
              Partnership
            </FLink>
            <FLink to="/platform">Platforms</FLink>
          </FooterCol>

          <FooterCol title="Industries" className="col-span-6 md:col-span-3 lg:col-span-2">
            {PLANET_INDUSTRIES.map((p) => (
              <FLink key={p.planet} to="/industries/$slug" params={{ slug: p.slug }}>
                {p.short}
              </FLink>
            ))}
          </FooterCol>

          <FooterCol title="Company" className="col-span-6 md:col-span-3 lg:col-span-2">
            <FLink to="/team">About us</FLink>
            <FLink to="/case-studies">Case studies</FLink>
            <FLink to="/insights">Insights</FLink>
            <FLink to="/work-with-us">Contact</FLink>
            <FLink to="/work-with-us" hash="partners">
              Partner with us
            </FLink>
          </FooterCol>

          <div className="col-span-6 md:col-span-3 lg:col-span-2 t-1">
            <p className="font-semibold mb-4">Contact</p>
            <address className="not-italic soft space-y-3">
              <p>Head office: Federal Capital Territory, Nigeria</p>
              <p>
                <a
                  className="link-on break-all text-paper"
                  href="mailto:inquiries.desk@universaisolutions.com"
                >
                  inquiries.desk@universaisolutions.com
                </a>
              </p>
              <p>
                <a
                  className="link-on text-paper"
                  href="https://wa.me/2348157124750"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Front desk: +234 815 712 4750
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 bg-[#111c31] -mx-[var(--margin)] px-[var(--margin)] pb-2 rounded-[var(--radius)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 t-1 soft pb-6">
            <p className="shrink-0">© {new Date().getFullYear()} UniversAI Solutions Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <p className="t-1 font-semibold mb-4">{title}</p>
      <ul className="space-y-2.5 t-1">{children}</ul>
    </div>
  );
}

function FLink({
  to,
  hash,
  params,
  children,
}: {
  to: string;
  hash?: string;
  params?: Record<string, string>;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link to={to} hash={hash} params={params as never} className="link soft hover:text-paper">
        {children}
      </Link>
    </li>
  );
}
