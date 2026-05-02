import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GradientOrbs } from "@/components/site/GradientOrbs";
import { CTAButton } from "@/components/site/CTAButton";
import michaelangeloImg from "@/assets/team-michaelangelo.jpeg";
import janeImg from "@/assets/team-jane.png";
import olabodeImg from "@/assets/team-olabode.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — UniversAI Solutions" },
      { name: "description", content: "Meet the founders of UniversAI Solutions — engineers and operators turning AI into real business advantage." },
      { property: "og:title", content: "Meet the UniversAI Team" },
      { property: "og:description", content: "Three founders. One mission: help businesses move beyond AI experimentation and operationalize what works." },
    ],
  }),
  component: TeamPage,
});

const STATS = [
  { v: "50+", l: "AI use cases identified" },
  { v: "35+", l: "audits & strategy engagements" },
  { v: "20+", l: "custom systems deployed" },
  { v: "40%", l: "manual workload reduced" },
  { v: "11+", l: "industries served" },
];

const FOUNDERS = [
  {
    name: "Francis-Alfred Michaelangelo Ifeanyichukwu",
    role: "Founder · Lead AI Engineer",
    image: michaelangeloImg,
    bio: "Michaelangelo leads AI solution design and machine learning development, with a strong background in computer engineering, data science, and applied AI systems. He focuses on building intelligent products that solve real business problems.",
  },
  {
    name: "Eso Olabode John",
    role: "Lead Data Engineer",
    image: olabodeImg,
    bio: "Olabode builds the data foundations behind UniversAI's systems. His expertise spans backend development, data analysis, SQL, Python, and scalable architectures that support AI-driven operations.",
  },
  {
    name: "Jane Orih Ijeoma",
    role: "Lead MLOps Engineer",
    image: janeImg,
    bio: "Jane ensures AI systems move smoothly from development to deployment. She focuses on machine learning operations, system design, and the reliable delivery of AI solutions teams can use in practice.",
  },
];

function TeamPage() {
  return (
    <SiteLayout>
      <section className="relative pt-40 pb-24 overflow-hidden bg-hero">
        <GradientOrbs />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-6 animate-fade-in">Our Team</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-10 animate-fade-up">
            Your AI <br />
            <span className="text-gradient">Transformation Team</span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <p>
              UniversAI Solutions Ltd was started by three friends and colleagues who saw early
              that AI would change how businesses work. Founded in 2024 in the Federal Capital
              Territory, Abuja, we've grown into a focused team helping organizations across
              Nigeria and beyond.
            </p>
            <p>
              Today, we operate as the AI transformation partner to ambitious businesses —
              helping them move beyond experimentation and turn AI into a real operational advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Stats marquee */}
      <section className="relative py-20 overflow-hidden border-y border-border bg-surface/40">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...STATS, ...STATS, ...STATS].map((s, i) => (
            <div key={i} className="flex items-baseline gap-4 mx-12 shrink-0">
              <span className="font-display text-5xl md:text-6xl font-light text-gradient">{s.v}</span>
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{s.l}</span>
              <span className="text-primary-glow/40 text-3xl mx-8">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* Founder — Michaelangelo (large feature) */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-4">Founder · Lead AI Engineer</p>
            <h2 className="font-display text-4xl md:text-6xl font-light mb-6">
              Francis-Alfred <span className="text-gradient">Michaelangelo</span> Ifeanyichukwu
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Michaelangelo leads AI solution design and machine learning development, with a
              strong background in computer engineering, data science, and applied AI systems.
              He focuses on building intelligent products that solve real business problems —
              grounded in real workflows, not theory.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <PortraitCard image={FOUNDERS[0].image} name={FOUNDERS[0].name} large />
          </div>
        </div>
      </section>

      {/* Olabode + Jane */}
      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {FOUNDERS.slice(1).map((f) => (
            <div key={f.name}>
              <PortraitCard image={f.image} name={f.name} />
              <div className="mt-6">
                <p className="text-xs tracking-[0.25em] uppercase text-primary-glow mb-2">{f.role}</p>
                <h3 className="font-display text-3xl font-light mb-3">{f.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-light mb-6">
            Ready to <span className="text-gradient">work together?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Tell us where you are, and we'll show you how AI can move your business forward.
          </p>
          <div className="flex justify-center">
            <CTAButton to="/work-with-us">Get In Touch</CTAButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function PortraitCard({ image, name, large }: { image: string; name: string; large?: boolean }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-border bg-card-gradient ${
        large ? "aspect-[4/5]" : "aspect-[4/5]"
      }`}
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ filter: "grayscale(20%) contrast(1.05)" }}
      />
      {/* Dark blue overlay (mirror of original site) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.16 0.05 255 / 30%) 0%, oklch(0.16 0.05 255 / 50%) 50%, oklch(0.13 0.06 255 / 90%) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-60 mix-blend-color"
        style={{ background: "oklch(0.25 0.18 260 / 60%)" }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle at 50% 30%, oklch(0.6 0.22 250 / 35%), transparent 70%)" }}
      />
    </div>
  );
}
