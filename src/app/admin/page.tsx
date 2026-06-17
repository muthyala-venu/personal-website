import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  FileText,
  Award,
  Search,
  Settings,
  LayoutDashboard,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { PageAttribution } from "@/components/seo/PageAttribution";

export const metadata = createMetadata({
  title: "Admin",
  description: "Site content structure and management reference for developers.",
  path: "/admin",
});

const adminModules = [
  {
    title: "Article Management",
    description: "Create, edit, and publish SEO articles. Data layer: src/data/articles/",
    icon: FileText,
    href: "/articles",
  },
  {
    title: "Credentials Management",
    description: "Update credentials and profile images. Data layer: src/data/credentials.ts & public/images/",
    icon: Award,
    href: "/credentials",
  },
  {
    title: "SEO Management",
    description: "Page metadata via createMetadata() in src/lib/seo.ts and per-page exports.",
    icon: Search,
    href: "/",
  },
  {
    title: "Metadata Management",
    description: "Site config, keywords, and profile data in src/data/site.ts",
    icon: Settings,
    href: "/",
  },
  {
    title: "Dashboard",
    description: "Browse published articles, guides, and knowledge hub categories.",
    icon: LayoutDashboard,
    href: "/articles",
  },
];

export default function AdminPage() {
  return (
    <>
      <PageHero
        title="Admin Dashboard"
        subtitle="Reference for site content structure, data files, and published sections."
        badge="Admin"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Admin" }]} />

        <div className="rounded-lg border border-accent/50 bg-accent/5 p-6">
          <p className="text-sm text-slate-700">
            This section documents how site content is organized. Articles, guides, FAQs, and profile data are
            managed through TypeScript data files in <code className="text-xs">src/data/</code>. Update those files
            to publish new educational content across the website.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {adminModules.map((mod) => {
            const Icon = mod.icon;
            return (
              <Link
                key={mod.title}
                href={mod.href}
                className="rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <Icon className="text-secondary" size={32} />
                <h2 className="mt-4 font-heading text-lg font-bold text-primary">{mod.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{mod.description}</p>
              </Link>
            );
          })}
        </div>

        <section className="mt-12">
          <h2 className="font-heading text-xl font-bold text-primary">Data Layer Structure</h2>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-surface p-4 text-xs text-slate-700">
{`src/data/
├── site.ts              # Site config, profile & SEO
├── articles/            # 30 articles (batch-1/2/3.ts)
├── guides.ts            # Grievance guides
├── categories.ts        # Knowledge hub categories
├── faqs.ts              # Global FAQs
├── credentials.ts       # Credentials disclaimer
├── focus-areas.ts       # Home focus areas
├── timeline.ts          # About timeline
└── navigation.ts        # Nav links`}
          </pre>
        </section>

        <PageAttribution />
      </div>
    </>
  );
}
