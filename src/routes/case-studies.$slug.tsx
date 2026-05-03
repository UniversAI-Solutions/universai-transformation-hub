import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/site/CaseStudyLayout";
import { CASE_STUDIES } from "@/data/case-studies";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const cs = CASE_STUDIES[params.slug];
    if (!cs) return { meta: [{ title: "Case Study — UniversAI" }] };
    return {
      meta: [
        { title: `${cs.eyebrow} — UniversAI Case Study` },
        { name: "description", content: cs.hero.intro },
        { property: "og:title", content: `${cs.eyebrow} — UniversAI` },
        { property: "og:description", content: cs.hero.intro },
        { property: "og:image", content: cs.hero.image },
      ],
    };
  },
  component: CaseStudyDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-foreground">
      Case study not found.
    </div>
  ),
});

function CaseStudyDetail() {
  const { slug } = Route.useParams();
  const cs = CASE_STUDIES[slug];
  if (!cs) throw notFound();
  return <CaseStudyPage data={cs} />;
}
