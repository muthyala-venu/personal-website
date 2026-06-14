import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SummaryBlock } from "@/components/ui/SummaryBlock";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAllArticles } from "@/data/articles";
import { siteConfig } from "@/data/site";
import { PageAttribution } from "@/components/seo/PageAttribution";

export const metadata = createMetadata({
  title: "Articles",
  description:
    "Educational articles by Muthyala Venu on human rights, citizen rights, public grievances, legal awareness, and community welfare in India.",
  path: "/articles",
  keywords: ["Human Rights Articles", "Citizen Rights India", "Legal Awareness Articles"],
});

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Articles", url: "/articles" },
        ])}
      />
      <PageHero
        title="Articles"
        subtitle="Educational articles on human rights, grievances, legal awareness, and citizen empowerment."
        badge={`${articles.length} Articles`}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Articles" }]} />

        <SummaryBlock title="About These Articles">
          <p>
            These articles are published by {siteConfig.name} for educational and SEO-friendly awareness
            purposes. Content does not constitute legal advice. Laws and procedures may change—verify with
            official sources for specific cases.
          </p>
        </SummaryBlock>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <PageAttribution />
      </div>
    </>
  );
}
