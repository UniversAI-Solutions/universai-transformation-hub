/*
  One place for search and sharing metadata. Every route's head() calls seo(), so each page gets
  a unique title and description, an absolute canonical URL, Open Graph and Twitter tags, a
  share image, and any structured data (JSON-LD) that describes it.

  Set VITE_SITE_URL to the live origin if it differs from the default below.
*/

export const SITE_URL = (
  (import.meta.env.VITE_SITE_URL as string | undefined) ?? "https://universaisolutions.com"
).replace(/\/$/, "");

export const SITE_NAME = "UniversAI Solutions";
export const DEFAULT_IMAGE = "/og/universai-default.jpg";
export const EMAIL = "inquiries.desk@universaisolutions.com";
export const PHONE = "+2348157124750";

export const abs = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

type Json = Record<string, unknown>;

/** Trim generated text to what a search result shows (about 155 characters), at a word. */
export const clip = (text: string, max = 155) =>
  text.length <= max ? text : `${text.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;

/** The router renders { "script:ld+json": ... } meta entries at runtime; its types omit them. */
type MetaTag = React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
export const ld = (json: Json) => ({ "script:ld+json": json }) as unknown as MetaTag;

export function seo({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  imageAlt = "UniversAI Solutions, AI consulting and transformation",
  type = "website",
  noindex = false,
  jsonLd = [],
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: Json[];
}) {
  const url = abs(path);
  const img = abs(image);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: noindex
          ? "noindex, follow"
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_NG" },
      { property: "og:type", content: type },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: img },
      ...jsonLd.map(ld),
    ] as MetaTag[],
    links: [{ rel: "canonical", href: url }],
  };
}

/* ---------- structured data ---------- */

export const ORG_ID = `${SITE_URL}/#organization`;

export const FOUNDERS_LD = [
  { name: "Francis-Alfred Michaelangelo Ifeanyichukwu", jobTitle: "Lead AI Consultant" },
  { name: "Eso Olabode John", jobTitle: "Lead Technical Engineer" },
  { name: "Jane Orih Ijeoma", jobTitle: "Lead MLOps Engineer and Operations Lead" },
].map((p) => ({ "@type": "Person", ...p, worksFor: { "@id": ORG_ID } }));

/** The firm itself: an organisation and a professional service, with its head office address. */
export const organizationLd = (): Json => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: SITE_NAME,
  legalName: "UniversAI Solutions Ltd",
  alternateName: ["UniversAI", "Universai Solutions"],
  url: SITE_URL,
  logo: abs("/icons/icon-512.png"),
  image: abs(DEFAULT_IMAGE),
  description:
    "UniversAI Solutions is an AI consulting and transformation firm serving organisations across Nigeria. It diagnoses operational bottlenecks, builds custom AI systems into existing ERP, POS, CRM and core banking platforms, and manages them long term.",
  email: EMAIL,
  telephone: PHONE,
  foundingDate: "2024",
  founder: FOUNDERS_LD,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressRegion: "Federal Capital Territory",
    addressCountry: "NG",
  },
  areaServed: [{ "@type": "Country", name: "Nigeria" }],
  priceRange: "₦₦₦",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: EMAIL,
      telephone: PHONE,
      areaServed: "NG",
      availableLanguage: ["English"],
    },
  ],
  knowsAbout: [
    "Artificial intelligence consulting",
    "AI transformation",
    "Business process automation",
    "Machine learning operations (MLOps)",
    "Retrieval-augmented generation",
    "ERP and core banking integration",
    "AI governance",
  ],
});

export const websiteLd = (): Json => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "en-NG",
  publisher: { "@id": ORG_ID },
});

export const breadcrumbLd = (items: { name: string; path: string }[]): Json => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});

export const faqLd = (items: { q: string; a: string }[]): Json => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceLd = (s: {
  name: string;
  description: string;
  path: string;
  type?: string;
}): Json => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  serviceType: s.type ?? s.name,
  description: s.description,
  url: abs(s.path),
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Country", name: "Nigeria" },
});

export const articleLd = (a: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  section?: string;
  type?: "Article" | "BlogPosting";
}): Json => ({
  "@context": "https://schema.org",
  "@type": a.type ?? "Article",
  headline: a.headline,
  description: a.description,
  image: abs(a.image ?? DEFAULT_IMAGE),
  articleSection: a.section,
  inLanguage: "en-NG",
  mainEntityOfPage: abs(a.path),
  author: { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
});
