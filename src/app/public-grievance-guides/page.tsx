import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SummaryBlock } from "@/components/ui/SummaryBlock";
import { FAQBlock } from "@/components/ui/FAQBlock";
import { GuideCard } from "@/components/cards/GuideCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { guides } from "@/data/guides";
import { globalFaqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";
import { PageAttribution } from "@/components/seo/PageAttribution";

export const metadata = createMetadata({
  title: "Public Grievance Guides",
  description:
    "Public grievance guides by Muthyala Venu — RTI, consumer complaints, cyber crime reporting, and emergency resources for citizens in Telangana.",
  path: "/public-grievance-guides",
  keywords: ["Public Grievance Guides", "How to File Grievance", "RTI Guide India"],
});

const guideFaqs = globalFaqs.filter((f) =>
  ["Public Grievance", "RTI", "Consumer Rights", "Cyber Safety"].includes(f.category || "")
);

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Grievance Guides", url: "/public-grievance-guides" },
        ])}
      />
      <JsonLd data={faqSchema(guideFaqs.slice(0, 5))} />
      <PageHero
        title="Public Grievance Guides"
        subtitle="Informational guides to help citizens understand official processes and resources."
        badge="Citizen Guides"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Grievance Guides" }]} />

        <SummaryBlock title="Important Notice">
          <p>
            These guides are published by {siteConfig.name} for educational purposes only. They do not constitute legal advice. Always verify
            current procedures with official government sources before taking action. No guide on this site
            guarantees outcomes or implies personal authority to resolve grievances.
          </p>
        </SummaryBlock>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>

        <FAQBlock faqs={guideFaqs.slice(0, 5)} title="Guide FAQs" />
        <PageAttribution />
      </div>
    </>
  );
}
