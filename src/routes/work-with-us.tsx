import { createFileRoute } from "@tanstack/react-router";
import { useState, FormEvent } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PLANET_INDUSTRIES } from "@/data/industries";
import { IndustryStrip } from "@/components/site/IndustryStrip";
import {
  ArrowRight,
  CheckGlyph,
  IconChat,
  IconDiscover,
  IconMail,
  IconPartner,
  IconPin,
} from "@/components/site/icons";
import { Portrait } from "@/components/site/FounderPicker";
import { FOUNDERS } from "@/data/founders";
import { abs, breadcrumbLd, ORG_ID, seo } from "@/lib/seo";

export const Route = createFileRoute("/work-with-us")({
  head: () =>
    seo({
      title: "Contact UniversAI Solutions | Book an AI Consultation",
      description:
        "Book an AI consultation with UniversAI Solutions. Tell us where your organisation loses time; a senior consultant replies within 24 hours.",
      path: "/work-with-us",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: abs("/work-with-us"),
          about: { "@id": ORG_ID },
        },
        breadcrumbLd([{ name: "Contact", path: "/work-with-us" }]),
      ],
    }),
  component: WorkWithUsPage,
});

const EMAIL = "inquiries.desk@universaisolutions.com";
const WHATSAPP = "https://wa.me/2348157124750";

const NEXT = [
  {
    Icon: IconChat,
    title: "We reply within 24 hours",
    body: "A senior consultant reads what you sent and answers by email or WhatsApp.",
  },
  {
    Icon: IconDiscover,
    title: "A discovery consultation",
    body: "We talk through where the hours go and which systems are involved.",
  },
  {
    Icon: IconPartner,
    title: "A plan, if AI is the fix",
    body: "If it is, we scope a Discover phase around your problem.",
  },
];

const PARTNERS = [
  {
    who: "Advisors and operations leaders",
    examples: "Domain specialists, fractional executives, accountants, auditors",
    body: "You know the operational pain in your sector. Introduce our discovery method to clients who trust you, without hiring an AI team, and share in the revenue from long-term partnership contracts.",
  },
  {
    who: "Software vendors",
    examples: "ERP, POS, CRM, core banking and EMR platforms",
    body: "Offer AI add-ons on your platform. We build and run the AI layer on your APIs and take responsibility for model maintenance and SLAs. Co-selling, joint webinars and case studies included.",
  },
  {
    who: "Trade bodies and chambers",
    examples: "Industry groups, trade unions, accelerators",
    body: "Modernise a whole sector at once: AI readiness scorecards, clinics and cohort discovery workshops for your members, with sector playbooks to keep.",
  },
];

function WorkWithUsPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: PLANET_INDUSTRIES[1].name,
    systems: "",
    bottleneck: "",
  });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setState("sending");
    const data = new FormData();
    data.append("_subject", `New consultation request: ${form.company} (${form.industry})`);
    data.append("_template", "table");
    data.append("_captcha", "false");
    data.append("First name", form.firstName);
    data.append("Last name", form.lastName);
    data.append("Work email", form.email);
    data.append("Phone / WhatsApp", form.phone);
    data.append("Company", form.company);
    data.append("Industry", form.industry);
    data.append("Systems in use", form.systems || "Not specified");
    data.append("Where time is lost", form.bottleneck);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json().catch(() => null);
      setState(res.ok && json?.success !== "false" ? "sent" : "failed");
    } catch {
      setState("failed");
    }
  };

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(`Consultation request: ${form.company}`)}&body=${encodeURIComponent(
    `${form.firstName} ${form.lastName}\n${form.email} · ${form.phone}\n${form.company} (${form.industry})\nSystems: ${form.systems}\n\n${form.bottleneck}`,
  )}`;

  return (
    <SiteLayout>
      <section data-field="deep" className="field-deep">
        <div className="wrap pt-[calc(var(--header-h)+56px)] pb-24 md:pb-32 grid-12 gap-y-14 items-start">
          <div className="col-span-12 lg:col-span-5">
            <h1 className="t-5" data-rise>
              Let’s talk
            </h1>
            <p className="statement mt-8" data-rise style={{ ["--i" as string]: 1 }}>
              Tell us where your organisation loses time, and we'll show you where AI can make the
              difference. A senior consultant follows up within 24 hours.
            </p>

            <h2 className="t-3 mt-14" data-rise style={{ ["--i" as string]: 2 }}>
              What happens next
            </h2>
            <ol
              className="mt-6 space-y-6"
              data-rise
              style={{
                ["--i" as string]: 2,
                ["--icon-fill" as string]: "var(--blue)",
                ["--icon-bg" as string]: "var(--deep)",
              }}
            >
              {NEXT.map((n) => (
                <li key={n.title} className="flex gap-5">
                  <n.Icon size={44} className="shrink-0" />
                  <div>
                    <p className="t-2 font-semibold">{n.title}</p>
                    <p className="t-2 soft mt-1">{n.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div
              className="mt-12 flex items-center gap-4"
              data-rise
              style={{ ["--i" as string]: 3 }}
            >
              <div className="flex -space-x-3">
                {FOUNDERS.map((f) => (
                  <Portrait
                    key={f.name}
                    f={f}
                    size={52}
                    className="border-4 border-[var(--deep)]"
                  />
                ))}
              </div>
              <p className="t-1 soft max-w-[30ch]">
                Every enquiry is reviewed by our senior leadership team.
              </p>
            </div>

            <ul
              className="mt-12 space-y-6 t-2"
              data-rise
              style={{
                ["--i" as string]: 4,
                ["--icon-fill" as string]: "var(--blue)",
                ["--icon-bg" as string]: "var(--deep)",
              }}
            >
              <ContactRow Icon={IconChat} label="Front desk">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-on font-semibold"
                >
                  +234 815 712 4750
                </a>
              </ContactRow>
              <ContactRow Icon={IconMail} label="Email">
                <a href={`mailto:${EMAIL}`} className="link-on font-semibold break-all">
                  {EMAIL}
                </a>
              </ContactRow>
              <ContactRow Icon={IconPin} label="Office">
                <span className="font-semibold">Federal Capital Territory, Nigeria</span>
              </ContactRow>
            </ul>
          </div>

          <div
            className="col-span-12 lg:col-start-7 lg:col-span-6 bg-paper text-ink p-6 md:p-10 rounded-[var(--radius)] lg:sticky lg:top-[calc(var(--header-h)+24px)] [--soft:var(--ink-soft)]"
            data-rise
            style={{ ["--i" as string]: 2 }}
          >
            {state === "sent" ? (
              <div className="py-12" role="status">
                <CheckGlyph size={40} className="text-blue" />
                <h2 className="t-4 mt-6">Request sent</h2>
                <p className="t-2 mt-4 max-w-[44ch]">
                  It went to {EMAIL}. A senior consultant will review it and follow up within 24
                  hours.
                </p>
                <button type="button" className="btn btn-ink mt-8" onClick={() => setState("idle")}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h2 className="t-3">Book a consultation</h2>
                <p className="t-1 text-ink-soft -mt-2">Takes about two minutes.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="First name"
                    required
                    value={form.firstName}
                    onChange={set("firstName")}
                    autoComplete="given-name"
                  />
                  <Field
                    label="Last name"
                    required
                    value={form.lastName}
                    onChange={set("lastName")}
                    autoComplete="family-name"
                  />
                  <Field
                    label="Work email"
                    type="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    autoComplete="email"
                  />
                  <Field
                    label="Phone or WhatsApp"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={set("phone")}
                    autoComplete="tel"
                    placeholder="+234"
                  />
                  <Field
                    label="Company"
                    required
                    value={form.company}
                    onChange={set("company")}
                    autoComplete="organization"
                  />
                  <label className="block">
                    <span className="t-1 font-semibold block mb-1.5">Industry</span>
                    <select className="input" value={form.industry} onChange={set("industry")}>
                      {PLANET_INDUSTRIES.map((p) => (
                        <option key={p.name} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <Field
                  label="Systems you use (optional)"
                  value={form.systems}
                  onChange={set("systems")}
                  placeholder="Sage 300, Excel, a custom POS…"
                />
                <label className="block">
                  <span className="t-1 font-semibold block mb-1.5">
                    Where does your team lose time?
                  </span>
                  <textarea
                    required
                    rows={5}
                    className="input"
                    value={form.bottleneck}
                    onChange={set("bottleneck")}
                    placeholder="The manual work, the spreadsheets, the handoffs that slow things down."
                  />
                </label>

                {state === "failed" && (
                  <p role="alert" className="t-2 bg-mist p-4">
                    That didn't go through. Please{" "}
                    <a href={mailto} className="link-on font-semibold">
                      send it by email
                    </a>{" "}
                    or{" "}
                    <a
                      href={WHATSAPP}
                      className="link-on font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      contact our front desk
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="btn w-full min-h-14 disabled:opacity-70"
                >
                  {state === "sending" ? "Sending…" : "Send request"}{" "}
                  <ArrowRight className="btn-arrow" />
                </button>
                <p className="t-1 soft">
                  Sent to {EMAIL}. We use it only to reply to you, and keep what you tell us
                  confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section data-field="paper" className="field-paper" id="partners">
        <div className="wrap py-28 md:py-36">
          <div className="grid-12 gap-y-6 items-end">
            <h2 className="col-span-12 md:col-span-6 t-4 max-w-[12ch]" data-reveal>
              Partner with us
            </h2>
            <p className="col-span-12 md:col-span-6 t-2" data-reveal>
              The UniversAI Partner Network brings our methods to the businesses you already serve,
              across all eight industry arms.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-14 mt-16">
            {PARTNERS.map((p, i) => (
              <div key={p.who} data-reveal style={{ ["--i" as string]: i }}>
                <div
                  className="h-2 bg-blue"
                  style={{ width: `${40 + i * 30}%` }}
                  aria-hidden="true"
                />
                <h3 className="t-3 mt-6">{p.who}</h3>
                <p className="t-1 soft mt-1">{p.examples}</p>
                <p className="t-2 mt-4">{p.body}</p>
              </div>
            ))}
          </div>
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent("Partner Network enquiry")}`}
            className="btn mt-16"
            data-reveal
          >
            Ask about partnering <ArrowRight className="btn-arrow" />
          </a>
        </div>
      </section>
      <IndustryStrip
        title="Which arm is yours?"
        sentence="Tell us your industry in the form, and we'll bring that arm's benchmarks and playbook to the first conversation."
      />
    </SiteLayout>
  );
}

function ContactRow({
  Icon,
  label,
  children,
}: {
  Icon: (p: { size?: number; className?: string }) => React.ReactElement;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-4">
      <Icon size={44} className="shrink-0" />
      <div>
        <p className="t-1 soft">{label}</p>
        {children}
      </div>
    </li>
  );
}

function Field({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="t-1 font-semibold block mb-1.5">{label}</span>
      <input className="input" {...rest} />
    </label>
  );
}
