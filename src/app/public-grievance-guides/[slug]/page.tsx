import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DefinitionBlock } from "@/components/ui/DefinitionBlock";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQBlock } from "@/components/ui/FAQBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { guides, getGuideBySlug } from "@/data/guides";
import { siteConfig } from "@/data/site";
import { PageAttribution } from "@/components/seo/PageAttribution";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return createMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/public-grievance-guides/${slug}`,
    keywords: [guide.category, "Public Grievance Guide", siteConfig.name],
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Grievance Guides", url: "/public-grievance-guides" },
          { name: guide.title, url: `/public-grievance-guides/${slug}` },
        ])}
      />
      <JsonLd data={faqSchema(guide.faqs)} />
      <PageHero title={guide.title} subtitle={guide.excerpt} badge={guide.category} />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Grievance Guides", href: "/public-grievance-guides" },
            { name: guide.title },
          ]}
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {guide.definition && (
              <div className="mb-8">
                <DefinitionBlock term={guide.title} definition={guide.definition} />
              </div>
            )}
            <div className="prose-content" dangerouslySetInnerHTML={{ __html: guide.content }} />
          </div>
          <div>
            <KeyTakeaways items={guide.keyTakeaways} />
          </div>
        </div>

        <FAQBlock faqs={guide.faqs} />
        <PageAttribution />
      </div>
    </>
  );
}
