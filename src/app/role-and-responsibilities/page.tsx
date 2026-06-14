import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DefinitionBlock } from "@/components/ui/DefinitionBlock";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { SummaryBlock } from "@/components/ui/SummaryBlock";
import { FAQBlock } from "@/components/ui/FAQBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Role & Responsibilities",
  description:
    "Understanding the role of public grievance awareness, citizen rights education, and human rights advocacy in community welfare.",
  path: "/role-and-responsibilities",
  keywords: ["Public Grievance Role", "Human Rights Advocacy", "Citizen Rights Education"],
});

const roleFaqs = [
  {
    id: "role-1",
    question: "What does a Public Grievance awareness role involve?",
    answer:
      "It involves educating citizens about grievance mechanisms, helping them understand how to file complaints through official channels, and promoting responsible engagement with public institutions—not adjudicating disputes or exercising government power.",
  },
  {
    id: "role-2",
    question: "Does this role replace government grievance officers?",
    answer:
      "No. Government grievance officers and statutory bodies have formal authority. Awareness advocates complement these systems by improving citizen knowledge and encouraging proper use of established channels.",
  },
  {
    id: "role-3",
    question: "What is ethical leadership in this context?",
    answer:
      "Ethical leadership means transparent communication, respect for facts, avoidance of false claims, prioritizing citizen dignity, and directing people to appropriate official resources rather than making unverifiable promises.",
  },
];

const takeaways = [
  "Public grievance awareness helps citizens use official redressal channels effectively.",
  "Human rights organizations promote education and advocacy, not statutory enforcement.",
  "Citizen rights education strengthens democratic participation and accountability.",
  "Community engagement builds trust and social cohesion at the local level.",
  "Ethical leadership requires honesty, humility, and respect for institutional boundaries.",
];

export default function RolePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Role & Responsibilities", url: "/role-and-responsibilities" },
        ])}
      />
      <JsonLd data={faqSchema(roleFaqs)} />
      <PageHero
        title="Role & Responsibilities"
        subtitle="Conceptual overview of public grievance awareness, citizen rights education, and ethical advocacy."
        badge="Awareness & Education"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Role & Responsibilities" }]} />

        <SummaryBlock title="Overview">
          <p>
            This page explains the conceptual framework behind public grievance awareness and human rights
            advocacy. It does not claim specific personal accomplishments. The focus is on what these roles
            mean in a democratic society and how citizens benefit from education and responsible engagement.
          </p>
        </SummaryBlock>

        <div className="prose-content mt-12 max-w-none">
          <h2>What is Public Grievance Awareness?</h2>
          <p>
            Public grievance awareness is the process of educating citizens about how to raise concerns with
            government departments and public authorities through established complaint and redressal mechanisms.
            Citizens encounter delays, service deficiencies, and administrative issues in everyday life. Grievance
            systems exist so these concerns can be documented, reviewed, and addressed within legal frameworks.
          </p>
          <p>
            An awareness advocate helps citizens understand where to file grievances, what information to provide,
            how to track status, and when to escalate—without replacing official grievance officers or claiming
            authority to resolve cases personally.
          </p>

          <h2>Importance of Citizen Rights</h2>
          <p>
            Citizen rights form the foundation of democratic governance. When people understand their constitutional
            and statutory protections, they can participate more effectively in society, hold institutions accountable,
            and protect themselves from exploitation or discrimination. Rights education is especially important for
            vulnerable groups who may lack access to legal resources.
          </p>

          <h2>Role of Human Rights Organizations</h2>
          <p>
            Organizations such as AICHLS work in the space of human rights awareness, liberties, and social justice.
            They support educational initiatives, community engagement, and advocacy that complements—not replaces—
            courts, police, human rights commissions, and government grievance systems. Their value lies in reaching
            communities, simplifying complex information, and promoting a culture of dignity and justice.
          </p>

          <h2>Awareness Building</h2>
          <p>
            Awareness building includes publishing educational articles, conducting community sessions, maintaining
            knowledge hubs, and answering citizen questions through accessible formats. The goal is informed citizenship:
            people who know their options and act responsibly within the law.
          </p>

          <h2>Community Engagement</h2>
          <p>
            Effective advocacy connects with local communities, listens to concerns, and directs people to appropriate
            official channels. Community engagement builds trust and ensures that awareness efforts address real
            needs rather than abstract principles alone.
          </p>

          <h2>Ethical Leadership</h2>
          <p>
            Leaders in the awareness space must avoid exaggerating credentials, promising outcomes they cannot
            deliver, or implying government authority where none exists. Ethical leadership means transparency,
            factual communication, and a commitment to citizen welfare above personal publicity.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <DefinitionBlock
            term="Public Grievance Awareness"
            definition="Educational advocacy that helps citizens understand and use official grievance redressal mechanisms responsibly and effectively."
          />
          <KeyTakeaways items={takeaways} />
        </div>

        <FAQBlock faqs={roleFaqs} />
      </div>
    </>
  );
}
