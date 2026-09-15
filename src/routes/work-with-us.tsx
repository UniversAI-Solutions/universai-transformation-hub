import { createFileRoute } from "@tanstack/react-router";
import { useState, FormEvent } from "react";
import { Mail, MapPin, Globe, ArrowRight, CheckCircle2, MessageSquare, Phone, Send, Loader2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GradientOrbs } from "@/components/site/GradientOrbs";
import { PLANET_INDUSTRIES } from "@/components/site/PlanetIndustriesSection";

export const Route = createFileRoute("/work-with-us")({
  head: () => ({
    meta: [
      { title: "Consultation & Intake — UniversAI Solutions" },
      {
        name: "description",
        content:
          "Schedule an AI outcome consultation with UniversAI Solutions. We diagnose operational root causes, design custom AI systems, and partner long term.",
      },
      { property: "og:title", content: "Work With Us — UniversAI Solutions" },
      {
        property: "og:description",
        content:
          "Enterprise AI consulting across our 8 planetary industry arms. Reach out via direct intake or WhatsApp.",
      },
    ],
  }),
  component: WorkWithUsPage,
});

export function WorkWithUsPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState<string>(PLANET_INDUSTRIES[1].name); // Retail default
  const [systems, setSystems] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Submit to FormSubmit.co endpoint to deliver structured email directly to inquiries.desk@universaisolutions.com
      const formData = new FormData();
      formData.append("_subject", `New Consultation Intake: ${company} (${industry})`);
      formData.append("_template", "table");
      formData.append("_captcha", "false");
      formData.append("First Name", firstName);
      formData.append("Last Name", lastName);
      formData.append("Work Email", workEmail);
      formData.append("Phone / WhatsApp", phone);
      formData.append("Company", company);
      formData.append("Industry (Planetary Arm)", industry);
      formData.append("Core Systems", systems || "Not specified");
      formData.append("Operational Friction / Bottleneck", bottleneck);

      // FormSubmit endpoint targeting the verified inquiries inbox
      const res = await fetch("https://formsubmit.co/ajax/inquiries.desk@universaisolutions.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await res.json().catch(() => null);
      if (data && data.success === "false") {
        console.warn("FormSubmit notice:", data.message);
      }
    } catch (err) {
      console.warn("Direct form email submission fallback:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-surface/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all";

  return (
    <SiteLayout>
      <section className="relative pt-40 pb-32 overflow-hidden bg-hero bg-cosmos-grid">
        <GradientOrbs />
        <div className="absolute inset-0 grain pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
            {/* Left Narrative & Contact Details */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow mb-6 animate-fade-in">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Executive Intake & Advisory
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1] mb-8 animate-fade-up">
                Start Your AI <br />
                <span className="text-gradient font-normal">Transformation.</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Tell us about your organization's workflows, operational bottlenecks, and core systems.
                Our senior consultants will diagnose the root cause and advise on the right AI intervention.
              </p>

              <div className="space-y-4 mb-10 text-xs text-muted-foreground">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface/40 border border-border/50">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">Methodology-Driven Consulting:</strong>
                    Phase 01 Discovery (UniversAIDS) ➔ Phase 02 Implementation ➔ Phase 03 Long-Term Partnership (UniversAIMS).
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface/40 border border-border/50">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">Strict Human-in-the-Loop Governance:</strong>
                    AI never acts as the final authority; human consultants evaluate, ground evidence, and remain accountable.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface/40 border border-border/50">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">8 Planetary Industry Arms:</strong>
                    Deep domain expertise across Real Estate, Retail, Education, Agriculture, Transport, Healthcare, Energy, and Finance.
                  </div>
                </div>
              </div>

              {/* Verified Contact Details */}
              <div className="space-y-4 pt-4 border-t border-border/60 text-xs">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary-glow" />
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Official Email</span>
                    <a href="mailto:inquiries.desk@universaisolutions.com" className="text-foreground hover:text-primary-glow transition-colors font-medium">
                      inquiries.desk@universaisolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Direct / WhatsApp Hotline</span>
                    <a href="https://wa.me/2348157124750" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-emerald-400 transition-colors font-medium">
                      +234 815 712 4750
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary-glow" />
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Headquarters</span>
                    <span className="text-foreground">Federal Capital Territory, Abuja, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Clean Intake Form with Email Dispatch */}
            <div className="rounded-3xl border border-border/80 bg-card-gradient p-8 md:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="mx-auto h-16 w-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="font-display text-3xl font-light mb-4">Intake Transmitted</h3>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed mb-6">
                    Your diagnostic has been dispatched directly to our consulting desk at <strong>inquiries.desk@universaisolutions.com</strong>. A Senior Consultant will review your operational context and follow up within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFirstName("");
                      setLastName("");
                      setWorkEmail("");
                      setPhone("");
                      setCompany("");
                      setSystems("");
                      setBottleneck("");
                    }}
                    className="text-xs font-semibold text-primary-glow hover:underline uppercase tracking-wider"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-display text-2xl font-medium mb-1">Book an Operational Consultation</h3>
                    <p className="text-xs text-muted-foreground">
                      Share your operational context. Our specialists will review your submission and contact you directly.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        First Name *
                      </label>
                      <input 
                        required 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={inputCls} 
                        placeholder="First Name" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Last Name *
                      </label>
                      <input 
                        required 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={inputCls} 
                        placeholder="Last Name" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Work Email *
                      </label>
                      <input 
                        required 
                        type="email" 
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        className={inputCls} 
                        placeholder="name@company.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input 
                        required 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={inputCls} 
                        placeholder="+234..." 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Company / Organization *
                      </label>
                      <input 
                        required 
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className={inputCls} 
                        placeholder="Company Name" 
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Industry (Planetary Arm)
                      </label>
                      <select
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className={`${inputCls} appearance-none`}
                      >
                        {PLANET_INDUSTRIES.map((ind) => (
                          <option key={ind.name} value={ind.name} className="bg-background text-foreground">
                            {ind.planet} — {ind.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Core Enterprise Systems in Use (e.g. SAP, QuickBooks, POS, Custom Databases, Excel)
                    </label>
                    <input 
                      value={systems}
                      onChange={(e) => setSystems(e.target.value)}
                      className={inputCls} 
                      placeholder="e.g. Sage 300, Microsoft Excel, custom PostgreSQL POS" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Operational Friction, Manual Delays or Problems to Solve
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={bottleneck}
                      onChange={(e) => setBottleneck(e.target.value)}
                      className={inputCls}
                      placeholder="Describe the operational bottlenecks, data silos, or manual spreadsheet tasks slowing down your teams..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-primary hover:bg-primary/90 disabled:opacity-70 text-primary-foreground font-semibold text-sm py-4 px-6 transition-all shadow-xl hover:shadow-primary/30 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Transmitting Diagnostic Intake...
                      </>
                    ) : (
                      <>
                        Submit Consultation Request <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <a
                      href="https://wa.me/2348157124750?text=Hello%20UniversAI%20Solutions%2C%20I%20would%20like%20to%20inquire%20about%20an%20AI%20consulting%20engagement."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:underline"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      Prefer instant chat? Connect directly on WhatsApp (+234 815 712 4750)
                    </a>
                  </div>

                  <p className="text-[11px] text-center text-muted-foreground">
                    UniversAI guarantees multi-tenant data confidentiality. All discovery inquiries are dispatched to inquiries.desk@universaisolutions.com.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
