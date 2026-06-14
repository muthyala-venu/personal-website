import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQBlock } from "@/components/ui/FAQBlock";
import { SummaryBlock } from "@/components/ui/SummaryBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";
import { getAllArticles, getArticleBySlug } from "@/data/articles";
import { siteConfig } from "@/data/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/articles/${slug}`,
    keywords: article.tags,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = (article.relatedSlugs || [])
    .map((s) => getArticleBySlug(s))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(article)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Articles", url: "/articles" },
          { name: article.title, url: `/articles/${slug}` },
        ])}
      />
      <JsonLd data={faqSchema(article.faqs)} />
      <PageHero title={article.title} subtitle={article.excerpt} badge={article.category} />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Articles", href: "/articles" },
            { name: article.title },
          ]}
        />

        <div className="mb-8 flex flex-wrap gap-4 text-sm text-muted">
          <span>By {siteConfig.name}</span>
          <span>•</span>
          <time dateTime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>•</span>
          <span>{article.readTime} min read</span>
        </div>

        <SummaryBlock title="Article Summary">
          <p>{article.excerpt}</p>
        </SummaryBlock>

        <article className="prose-content mt-10 max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />

        <div className="mt-8 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-primary">
              {tag}
            </span>
          ))}
        </div>

        <FAQBlock faqs={article.faqs} title="Article FAQ" />

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-primary">Related Articles</h2>
            <div className="mt-6 space-y-4">
              {related.map((rel) =>
                rel ? (
                  <Link
                    key={rel.slug}
                    href={`/articles/${rel.slug}`}
                    className="block rounded-lg border border-border p-5 hover:shadow-md"
                  >
                    <h3 className="font-heading font-bold text-primary">{rel.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{rel.excerpt}</p>
                  </Link>
                ) : null
              )}
            </div>
          </section>
        )}

        <div className="mt-12 rounded-lg bg-surface p-6 text-center">
          <p className="text-sm text-slate-600">
            For grievance guidance, visit{" "}
            <Link href="/public-grievance-guides" className="text-secondary hover:underline">
              Public Grievance Guides
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-secondary hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
