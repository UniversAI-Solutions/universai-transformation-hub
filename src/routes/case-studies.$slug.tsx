import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/site/CaseStudyLayout";
import { CASE_STUDIES } from "@/data/case-studies";
import { articleLd, breadcrumbLd, clip, seo } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const cs = CASE_STUDIES[params.slug];
    if (!cs) return { meta: [{ title: "Case study · UniversAI Solutions" }] };
    const path = `/case-studies/${cs.slug}`;
    const title = `${cs.hero.title} | UniversAI Case Study`;
    return seo({
      title,
      description: clip(cs.hero.intro),
      path,
      type: "article",
      jsonLd: [
        articleLd({
          headline: `${cs.hero.title}: ${cs.label}`,
          description: cs.hero.intro,
          path,
          section: "Case studies",
        }),
        breadcrumbLd([
          { name: "Case studies", path: "/case-studies" },
          { name: cs.hero.title, path },
        ]),
      ],
    });
  },
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { slug } = Route.useParams();
  const cs = CASE_STUDIES[slug];
  if (!cs) throw notFound();
  return <CaseStudyPage data={cs} />;
}
