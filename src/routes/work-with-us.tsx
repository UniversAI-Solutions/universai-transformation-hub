import { createFileRoute } from "@tanstack/react-router";
import { useState, FormEvent } from "react";
import { Mail, MapPin, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GradientOrbs } from "@/components/site/GradientOrbs";

export const Route = createFileRoute("/work-with-us")({
  head: () => ({
    meta: [
      { title: "Work With Us — UniversAI Solutions" },
      { name: "description", content: "Tell us where you are, and we'll show you how AI can move your business forward. Start your AI transformation with UniversAI." },
      { property: "og:title", content: "Work With Us — UniversAI Solutions" },
      { property: "og:description", content: "Start your AI transformation. We help businesses discover, implement, and partner long-term on AI that actually works." },
    ],
  }),
  component: WorkWithUsPage,
});

const BUDGETS = ["₦5M – ₦20M", "₦20M – ₦50M", "₦50M – ₦150M", "Not Sure Yet"];

function WorkWithUsPage() {
  const [budget, setBudget] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <section className="relative pt-40 pb-32 overflow-hidden bg-hero">
        <GradientOrbs />
        <div className="absolute inset-0 grain pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
            {/* Left */}
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-6 animate-fade-in">
                Work With Us
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1] mb-8 animate-fade-up">
                Let's build what{" "}
                <span className="text-gradient">actually works.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Tell us where you are, and we'll show you how AI can move your business forward.
              </p>
              <p className="text-base text-muted-foreground/80 leading-relaxed mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Most businesses know AI matters. Few know where to start or how to make it work
                long term. That's where we come in.
              </p>

              <div className="space-y-5 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <ContactItem icon={MapPin} title="Headquarters" body="Federal Capital Territory, Abuja, Nigeria" />
                <ContactItem
                  icon={Mail}
                  title="Email"
                  body={
                    <a href="mailto:universaisolutions.desk@gmail.com" className="hover:text-primary-glow transition-colors break-all">
                      universaisolutions.desk@gmail.com
                    </a>
                  }
                />
                <ContactItem icon={Globe} title="Working" body="With clients across Nigeria and beyond" />
              </div>
            </div>

            {/* Right — form */}
            <div className="relative rounded-3xl border border-border bg-card-gradient p-8 md:p-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div
                className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-30 blur-[100px] pointer-events-none"
                style={{ background: "radial-gradient(circle, oklch(0.55 0.22 260), transparent 70%)" }}
              />

              {submitted ? (
                <div className="relative text-center py-20">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary-glow" />
                  </div>
                  <h3 className="font-display text-3xl font-light mb-4">Thank you.</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    We review every inquiry carefully and respond with next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="relative space-y-6">
                  <div>
                    <h3 className="font-display text-2xl font-medium mb-1">Start your AI transformation</h3>
                    <p className="text-sm text-muted-foreground">
                      This takes less than 2 minutes. The more context you share, the better we can respond.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="First Name"><input required className={inputCls} placeholder="First Name" /></Field>
                    <Field label="Last Name"><input required className={inputCls} placeholder="Last Name" /></Field>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Work Email"><input required type="email" className={inputCls} placeholder="you@company.com" /></Field>
                    <Field label="Company"><input required className={inputCls} placeholder="Your company" /></Field>
                  </div>

                  <Field label="Company Website">
                    <input className={inputCls} placeholder="https://yourcompany.com" />
                  </Field>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Your Role">
                      <select className={`${inputCls} appearance-none`}>
                        <option>Select your role</option>
                        <option>CEO / Founder</option>
                        <option>COO / Head of Operations</option>
                        <option>CFO / Finance Lead</option>
                        <option>CIO / CTO / Head of Data</option>
                        <option>VP / Director</option>
                        <option>Other</option>
                      </select>
                    </Field>
                    <Field label="Company Size">
                      <select className={`${inputCls} appearance-none`}>
                        <option>Number of employees</option>
                        <option>1 – 50</option>
                        <option>50 – 100</option>
                        <option>100 – 500</option>
                        <option>500+</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="Budget Range">
                    <div className="grid grid-cols-2 gap-3">
                      {BUDGETS.map((b) => {
                        const active = budget === b;
                        return (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setBudget(b)}
                            className={`rounded-lg border px-4 py-3 text-sm transition-all ${
                              active
                                ? "border-primary-glow bg-primary/15 text-foreground"
                                : "border-border bg-background/40 text-muted-foreground hover:border-primary-glow/50 hover:text-foreground"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </Field>

                  <Field label="Tell Us About Your Project">
                    <textarea
                      rows={5}
                      className={inputCls}
                      placeholder="What challenges are you facing, and what would success look like with AI?"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="group w-full rounded-full bg-button-gradient text-primary-foreground font-semibold tracking-[0.18em] uppercase text-sm py-4 hover:shadow-[0_0_50px_oklch(0.7_0.18_250/60%)] transition-all flex items-center justify-center gap-3"
                  >
                    Submit Inquiry
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

const inputCls =
  "w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary-glow focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs tracking-[0.18em] uppercase text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}

function ContactItem({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-11 w-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-primary-glow" />
      </div>
      <div>
        <div className="font-medium text-foreground">{title}</div>
        <div className="text-muted-foreground">{body}</div>
      </div>
    </div>
  );
}
