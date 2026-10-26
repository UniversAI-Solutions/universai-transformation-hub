import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ld, organizationLd, websiteLd } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <section data-field="mist" className="field-mist">
        <div className="wrap min-h-[80svh] flex flex-col justify-end pb-16 pt-[calc(var(--header-h)+10vh)]">
          <h1 className="t-5">Nothing here.</h1>
          <p className="t-2 mt-6 max-w-[44ch]">
            That page doesn't exist or has moved. Start again from the home page.
          </p>
          <div className="mt-8">
            <Link to="/" className="btn">
              Go to the home page
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

// Site-wide defaults. Each route's head() overrides these through seo() in src/lib/seo.ts.
const TITLE = "UniversAI Solutions | AI Consulting and Transformation, Nigeria";
const DESCRIPTION =
  "UniversAI Solutions is an AI consulting and transformation firm serving organisations across Nigeria. We diagnose operational bottlenecks, build custom AI systems and manage them long term.";

// Search-console ownership tags, set as environment variables at build time
const GOOGLE_VERIFY = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined;
const BING_VERIFY = import.meta.env.VITE_BING_SITE_VERIFICATION as string | undefined;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "author", content: "UniversAI Solutions Ltd." },
      { name: "theme-color", content: "#1f3a60" },
      { name: "format-detection", content: "telephone=no" },
      ...(GOOGLE_VERIFY ? [{ name: "google-site-verification", content: GOOGLE_VERIFY }] : []),
      ...(BING_VERIFY ? [{ name: "msvalidate.01", content: BING_VERIFY }] : []),
      ld(organizationLd()),
      ld(websiteLd()),
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/icons/favicon-32.png", type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/icons/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
