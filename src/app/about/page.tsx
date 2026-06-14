import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQBlock } from "@/components/ui/FAQBlock";
import { EntityBlock } from "@/components/seo/EntityBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site";
import { professionalTimeline } from "@/data/timeline";
import { globalFaqs } from "@/data/faqs";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about Muthyala Venu — Public Grievance and Human Rights Advocate in Telangana, his vision, mission, and commitment to citizen education.",
  path: "/about",
  keywords: ["Muthyala Venu About", "Human Rights Advocate Telangana"],
});

const coreValues = [
  { title: "Integrity", description: "Honest, transparent advocacy without false claims or inflated credentials." },
  { title: "Education", description: "Prioritizing citizen knowledge over confrontation or unverifiable promises." },
  { title: "Dignity", description: "Respecting every individual's inherent worth and constitutional protections." },
  { title: "Service", description: "Community-oriented engagement focused on welfare and responsible redressal." },
  { title: "Accountability", description: "Encouraging citizens and institutions to act responsibly within the law." },
];

const areasOfInterest = [
  "Human Rights Awareness",
  "Public Grievances",
  "Legal Awareness",
  "Community Engagement",
  "Citizen Empowerment",
];

const aboutFaqs = globalFaqs.filter((f) => ["General", "Human Rights", "Organization"].includes(f.category || ""));

export default function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema(aboutFaqs)} />
      <PageHero
        title="About Muthyala Venu"
        subtitle="Public Grievance and Human Rights Advocate dedicated to awareness, citizen education, and community welfare."
        badge="Professional Profile"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />

        <div className="prose-content max-w-none">
          <h2>Biography</h2>
          <p>
            Muthyala Venu is a public-facing advocate based in Telangana, India, working in the areas of human
            rights awareness, public grievance education, legal literacy, and community welfare. He serves as{" "}
            {siteConfig.designation} with the {siteConfig.organization.name} ({siteConfig.organization.shortName}).
          </p>
          <p>
            His work focuses on helping citizens understand their rights, navigate grievance mechanisms responsibly,
            and engage with community welfare initiatives. This website is part of an ongoing effort to build a
            credible public profile through education and ethical advocacy—not through unverifiable claims of
            experience, awards, or government authority.
          </p>

          <h2>Professional Profile</h2>
          <p>
            As State Vice President – Public Grievances with AICHLS, Muthyala Venu contributes to organizational
            initiatives focused on public grievance awareness and citizen rights education. The role is centered
            on awareness building, community engagement, and responsible advocacy within the human rights and
            social justice space.
          </p>

          <h2>Vision</h2>
          <p>
            A society where every citizen understands their fundamental rights, knows how to engage with public
            institutions responsibly, and participates actively in community welfare and social justice.
          </p>

          <h2>Mission</h2>
          <p>{siteConfig.mission}</p>

          <h2>Core Values</h2>
          <div className="not-prose mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <div key={value.title} className="rounded-lg border border-border p-5">
                <h3 className="font-heading font-bold text-primary">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>

          <h2>Areas of Interest</h2>
          <ul>
            {areasOfInterest.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>

          <h2>Professional Development Timeline</h2>
          <p className="text-sm text-muted italic">
            The following timeline reflects areas of ongoing interest and association—not fabricated achievements.
          </p>
          <div className="not-prose mt-6 space-y-4">
            {professionalTimeline.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-lg border border-border p-5">
                <span className="shrink-0 text-sm font-semibold text-secondary">{item.period}</span>
                <div>
                  <h3 className="font-heading font-bold text-primary">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <EntityBlock />
        </div>

        <FAQBlock faqs={aboutFaqs} title="About — Frequently Asked Questions" />

        <div className="mt-12 text-center">
          <Link href="/contact" className="font-semibold text-secondary hover:underline">
            Contact for awareness initiatives →
          </Link>
        </div>
      </div>
    </>
  );
}
