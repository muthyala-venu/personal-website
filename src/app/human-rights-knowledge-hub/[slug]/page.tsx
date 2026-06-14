import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DefinitionBlock } from "@/components/ui/DefinitionBlock";
import { FAQBlock } from "@/components/ui/FAQBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { knowledgeCategories, getCategoryBySlug } from "@/data/categories";
import { getArticleBySlug } from "@/data/articles";
import { siteConfig } from "@/data/site";
import { PageAttribution } from "@/components/seo/PageAttribution";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return knowledgeCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return createMetadata({
    title: category.title,
    description: category.description,
    path: `/human-rights-knowledge-hub/${slug}`,
    keywords: [category.title, "Human Rights Telangana", siteConfig.name],
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const articles = category.articleSlugs
    .map((s) => getArticleBySlug(s))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Knowledge Hub", url: "/human-rights-knowledge-hub" },
          { name: category.title, url: `/human-rights-knowledge-hub/${slug}` },
        ])}
      />
      <JsonLd data={faqSchema(category.faqs)} />
      <PageHero title={category.title} subtitle={category.description} badge="Knowledge Category" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Knowledge Hub", href: "/human-rights-knowledge-hub" },
            { name: category.title },
          ]}
        />

        <DefinitionBlock term={category.title} definition={category.description} />

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-primary">Educational Articles</h2>
          <div className="mt-6 space-y-4">
            {articles.map((article) =>
              article ? (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="block rounded-lg border border-border p-5 transition-shadow hover:shadow-md"
                >
                  <h3 className="font-heading font-bold text-primary">{article.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{article.excerpt}</p>
                </Link>
              ) : null
            )}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-primary">Downloadable Resources</h2>
          <p className="mt-3 text-slate-600">
            PDF guides and checklists for this category will be available here. Placeholder for future CMS-managed downloads.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {["Quick Reference Guide (PDF)", "Citizen Checklist (PDF)"].map((resource) => (
              <div key={resource} className="rounded-lg border border-dashed border-border bg-surface p-6 text-center text-sm text-muted">
                {resource} — Coming Soon
              </div>
            ))}
          </div>
        </section>

        <FAQBlock faqs={category.faqs} />
        <PageAttribution />
      </div>
    </>
  );
}
