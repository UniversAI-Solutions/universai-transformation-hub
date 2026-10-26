// Writes public/sitemap.xml and public/robots.txt from the site's own data, so every case study,
// article and industry page is listed. Runs before each build (see "prebuild" in package.json).
// Set VITE_SITE_URL to the live origin if it differs from the default.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = (process.env.VITE_SITE_URL || "https://universaisolutions.com").replace(/\/$/, "");
const today = new Date().toISOString().slice(0, 10);

const read = (p) => readFileSync(join(root, p), "utf8");
const slugsIn = (file, pattern) => [...read(file).matchAll(pattern)].map((m) => m[1]);

const caseSlugs = [...new Set(slugsIn("src/data/case-studies.ts", /slug: "([a-z0-9-]+)"/g))];
const insightSlugs = slugsIn("src/data/insights.ts", /^\s{4}slug: "([a-z0-9-]+)"/gm);
const industrySlugs = slugsIn("src/data/industries.ts", /^\s{4}slug: "([a-z0-9-]+)"/gm);

const pages = [
  { path: "/", priority: "1.0", freq: "weekly" },
  { path: "/services", priority: "0.9", freq: "monthly" },
  { path: "/industries", priority: "0.9", freq: "monthly" },
  ...industrySlugs.map((s) => ({ path: `/industries/${s}`, priority: "0.8", freq: "monthly" })),
  { path: "/platform", priority: "0.8", freq: "monthly" },
  { path: "/case-studies", priority: "0.8", freq: "monthly" },
  ...caseSlugs.map((s) => ({ path: `/case-studies/${s}`, priority: "0.7", freq: "yearly" })),
  { path: "/insights", priority: "0.8", freq: "weekly" },
  ...insightSlugs.map((s) => ({ path: `/insights/${s}`, priority: "0.7", freq: "monthly" })),
  { path: "/team", priority: "0.6", freq: "monthly" },
  { path: "/work-with-us", priority: "0.7", freq: "yearly" },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `# UniversAI Solutions
User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

writeFileSync(join(root, "public/sitemap.xml"), sitemap);
writeFileSync(join(root, "public/robots.txt"), robots);
console.log(`sitemap.xml: ${pages.length} URLs on ${SITE}`);
