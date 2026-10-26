import { Link } from "@tanstack/react-router";
import michaelangelo from "@/assets/team-michaelangelo.jpeg";
import olabode from "@/assets/team-olabode.jpg";
import jane from "@/assets/team-jane.jpg";
import { ArrowRight } from "@/components/site/icons";

/*
  The founders set as the three nodes of the UniversAI mark: small, middle, large,
  joined by one line, in the same positions as in the logo.
*/
const NODES = [
  { src: olabode, name: "Eso Olabode John", x: 0, y: 14, d: 25, pos: "50% 22%" },
  { src: jane, name: "Jane Orih Ijeoma", x: 31, y: 33, d: 30, pos: "50% 30%" },
  {
    src: michaelangelo,
    name: "Francis-Alfred Michaelangelo Ifeanyichukwu",
    x: 63,
    y: 0,
    d: 37,
    pos: "50% 18%",
  },
];

export function FounderMark() {
  return (
    <div className="relative w-full aspect-[100/72]">
      <svg
        viewBox="0 0 100 72"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <polyline
          points={NODES.map((n) => `${n.x + n.d / 2},${n.y + n.d / 2}`).join(" ")}
          fill="none"
          stroke="var(--sky)"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          style={{ strokeWidth: 6 }}
        />
      </svg>
      {NODES.map((n, i) => (
        <img
          key={n.name}
          src={n.src}
          alt={n.name}
          loading="lazy"
          data-reveal
          className="absolute rounded-full object-cover bg-mist"
          style={{
            left: `${n.x}%`,
            top: `${(n.y / 72) * 100}%`,
            width: `${n.d}%`,
            aspectRatio: "1",
            objectPosition: n.pos,
            ["--i" as string]: i,
          }}
        />
      ))}
    </div>
  );
}

export function About() {
  return (
    <section data-field="paper" className="field-paper py-5 md:py-5 px-2.5 md:px-5">
      <div className="field-navy rounded-[var(--radius)] overflow-hidden lg:min-h-[100svh] grid lg:grid-cols-[minmax(0,58%)_1fr] gap-y-12">
        <div className="p-6 pt-12 md:p-14 flex flex-col">
          <h2 className="t-4 max-w-[14ch]" data-reveal>
            Engineering-led leadership
          </h2>
          <div className="mt-14 lg:mt-auto lg:pt-16 w-[92%] md:w-[70%] lg:w-[88%]">
            <FounderMark />
          </div>
        </div>

        <div className="px-6 pb-12 md:px-14 md:pb-14 lg:pl-0 lg:pt-[calc(56px+5vw)] flex flex-col gap-14">
          <div className="max-w-[34ch]" data-reveal>
            <h3 className="t-3">What we've done</h3>
            <p className="t-2 soft mt-3">
              Since 2024: more than 50 AI use cases identified, 35+ audits and strategy engagements
              and 20+ custom systems deployed, across 11+ industries. Manual workload down 40% for
              our clients.
            </p>
          </div>
          <div className="max-w-[34ch]" data-reveal style={{ ["--i" as string]: 1 }}>
            <h3 className="t-3">Who leads the work</h3>
            <p className="t-2 soft mt-3">
              Michaelangelo leads AI solution design, Olabode the data foundations and Jane MLOps
              and delivery.
            </p>
          </div>
          <div data-reveal style={{ ["--i" as string]: 2 }}>
            <Link to="/team" className="btn">
              Meet the team <ArrowRight className="btn-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
