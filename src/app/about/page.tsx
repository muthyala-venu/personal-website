import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQBlock } from "@/components/ui/FAQBlock";
import { ProfileSummary } from "@/components/seo/ProfileSummary";
import { PortraitImage } from "@/components/ui/PortraitImage";
import { OrgLogo } from "@/components/ui/OrgLogo";
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
  "Social Services",
  "Financial Consulting",
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

        <div className="mb-12 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
          <PortraitImage size="lg" priority className="shrink-0 shadow-md" />
          <div className="flex-1">
            <OrgLogo size="lg" showName className="mb-4" />
            <p className="text-sm font-medium text-secondary">{siteConfig.designation}</p>
            <p className="mt-3 leading-relaxed text-slate-600">{siteConfig.tagline}</p>
          </div>
        </div>

        <div className="prose-content max-w-none">
          <h2>Biography</h2>
          <p>
            Muthyala Venu is an entrepreneur and social services professional based in Telangana, India. He is
            also engaged as a financial consultant and serves as {siteConfig.designation} with the{" "}
            {siteConfig.organization.name} ({siteConfig.organization.shortName}).
          </p>
          <p>
            In 2023, he established <strong>Aryan Filling Station</strong>, followed by{" "}
            <strong>Aryan Pay Enterprises</strong> in 2024. Alongside his business ventures, he works in social
            services and citizen-focused advocacy—helping communities understand their rights, navigate grievance
            mechanisms responsibly, and engage with welfare initiatives.
          </p>
          <p>
            This website supports his public profile in human rights awareness, public grievance education, and
            community welfare—presented honestly without unverifiable claims of awards or government authority.
          </p>

          <h2>Professional Profile</h2>
          <p>
            <strong>Occupation:</strong> Entrepreneur, Social Services, Financial Consultant
            <br />
            <strong>Location:</strong> Telangana, India
            <br />
            <strong>Email:</strong>{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          </p>
          <p>
            As State Vice President – Public Grievances with AICHLS, Muthyala Venu contributes to organizational
            initiatives focused on public grievance awareness and citizen rights education. His entrepreneurial
            background through Aryan Filling Station and Aryan Pay Enterprises complements his community-oriented
            work in social services and financial consulting.
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

          <h2>Professional Timeline</h2>
          <p className="text-sm text-muted italic">
            Key professional milestones as provided for public profile.
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
          <ProfileSummary />
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
