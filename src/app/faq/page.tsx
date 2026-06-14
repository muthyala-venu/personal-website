import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQBlock } from "@/components/ui/FAQBlock";
import { SummaryBlock } from "@/components/ui/SummaryBlock";
import { EntityBlock } from "@/components/seo/EntityBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { globalFaqs } from "@/data/faqs";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about Muthyala Venu, human rights awareness, public grievances, citizen rights, and legal awareness.",
  path: "/faq",
  keywords: ["FAQ Human Rights", "Public Grievance FAQ", "Citizen Rights FAQ"],
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ])}
      />
      <JsonLd data={faqSchema(globalFaqs)} />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about human rights, grievances, and citizen education."
        badge="20 FAQs"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />

        <SummaryBlock title="Quick Answer">
          <p>
            Muthyala Venu is a Public Grievance and Human Rights Advocate in Telangana focused on awareness
            and citizen education. This website provides educational resources—not legal advice or government services.
          </p>
        </SummaryBlock>

        <FAQBlock faqs={globalFaqs} />

        <div className="mt-12">
          <EntityBlock />
        </div>
      </div>
    </>
  );
}
