import Link from "next/link";
import {
  Scale,
  ShoppingCart,
  User,
  Baby,
  HeartHandshake,
  Landmark,
  FileSearch,
  Shield,
  Gavel,
  Building2,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SummaryBlock } from "@/components/ui/SummaryBlock";
import { FAQBlock } from "@/components/ui/FAQBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { knowledgeCategories } from "@/data/categories";
import { globalFaqs } from "@/data/faqs";

export const metadata = createMetadata({
  title: "Human Rights Knowledge Hub",
  description:
    "Educational resources on human rights, consumer rights, constitutional rights, RTI, cyber safety, and legal awareness for citizens in India.",
  path: "/human-rights-knowledge-hub",
  keywords: ["Human Rights Knowledge Hub", "Citizen Rights India", "Legal Awareness Telangana"],
});

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Scale,
  ShoppingCart,
  User,
  Baby,
  HeartHandshake,
  Landmark,
  FileSearch,
  Shield,
  Gavel,
  Building2,
};

const hubFaqs = globalFaqs.filter((f) =>
  ["Knowledge Hub", "Human Rights", "RTI", "Legal Awareness"].includes(f.category || "")
);

export default function KnowledgeHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Knowledge Hub", url: "/human-rights-knowledge-hub" },
        ])}
      />
      <JsonLd data={faqSchema(hubFaqs.slice(0, 5))} />
      <PageHero
        title="Human Rights Knowledge Hub"
        subtitle="Educational categories covering rights, legal awareness, and citizen empowerment."
        badge="Citizen Education"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Knowledge Hub" }]} />

        <SummaryBlock title="What is the Knowledge Hub?">
          <p>
            The Human Rights Knowledge Hub provides structured educational content across ten categories.
            Each category includes articles, FAQs, and placeholders for future downloadable resources.
            All content is informational and does not constitute legal advice.
          </p>
        </SummaryBlock>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {knowledgeCategories.map((category) => {
            const Icon = iconMap[category.icon] || Scale;
            return (
              <Link
                key={category.slug}
                href={`/human-rights-knowledge-hub/${category.slug}`}
                className="group rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <Icon className="text-secondary transition-colors group-hover:text-primary" size={36} />
                <h2 className="mt-4 font-heading text-xl font-bold text-primary">{category.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{category.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-secondary group-hover:underline">
                  Explore category →
                </span>
              </Link>
            );
          })}
        </div>

        <FAQBlock faqs={hubFaqs.slice(0, 5)} title="Knowledge Hub FAQs" />
      </div>
    </>
  );
}
