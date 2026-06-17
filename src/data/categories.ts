import type { KnowledgeCategory } from "@/lib/types";

export const knowledgeCategories: KnowledgeCategory[] = [
  {
    slug: "human-rights",
    title: "Human Rights",
    description:
      "Fundamental rights, dignity, equality, and protections that apply to every person under law and the Constitution.",
    icon: "Scale",
    faqs: [
      {
        id: "hr-1",
        question: "What are fundamental human rights in India?",
        answer:
          "Fundamental rights in India include equality before law, freedom of speech and expression, protection against exploitation, freedom of religion, cultural and educational rights, and the right to constitutional remedies under Articles 12–35 of the Constitution.",
      },
      {
        id: "hr-2",
        question: "How are human rights protected?",
        answer:
          "Human rights are protected through constitutional guarantees, statutes, judicial review, national and state human rights institutions, and international conventions ratified by India.",
      },
    ],
    articleSlugs: [
      "importance-of-human-rights-in-modern-society",
      "human-rights-and-social-responsibility",
      "understanding-universal-declaration-of-human-rights",
    ],
    guideSlugs: ["how-to-approach-government-departments", "emergency-resources"],
  },
  {
    slug: "consumer-rights",
    title: "Consumer Rights",
    description:
      "Rights and remedies available to consumers under the Consumer Protection Act and related regulations.",
    icon: "ShoppingCart",
    faqs: [
      {
        id: "cr-1",
        question: "What are basic consumer rights in India?",
        answer:
          "Consumers have rights to safety, information, choice, representation, redressal, and consumer education under the Consumer Protection Act, 2019.",
      },
    ],
    articleSlugs: ["understanding-consumer-rights-in-india", "how-consumer-protection-act-helps-citizens"],
    guideSlugs: ["consumer-complaint-guide"],
  },
  {
    slug: "women-rights",
    title: "Women Rights",
    description:
      "Legal protections, helplines, and awareness resources related to women's safety, dignity, and equality.",
    icon: "User",
    faqs: [
      {
        id: "wr-1",
        question: "What laws protect women in India?",
        answer:
          "Several laws address women's rights including provisions against domestic violence, sexual harassment at workplace, dowry prohibition, and criminal law protections. Helplines and support centres provide immediate assistance.",
      },
    ],
    articleSlugs: ["women-rights-awareness-in-india", "understanding-domestic-violence-act-basics"],
    guideSlugs: ["women-helpline-guide"],
  },
  {
    slug: "child-rights",
    title: "Child Rights",
    description:
      "Rights of children to protection, education, dignity, and development under national and international frameworks.",
    icon: "Baby",
    faqs: [
      {
        id: "chr-1",
        question: "What is the right to education for children?",
        answer:
          "The Right of Children to Free and Compulsory Education Act mandates free and compulsory education for children aged 6–14 years, supporting access to quality elementary education.",
      },
    ],
    articleSlugs: ["child-rights-protection-in-india", "human-rights-education-for-youth"],
    guideSlugs: ["emergency-resources"],
  },
  {
    slug: "senior-citizen-rights",
    title: "Senior Citizen Rights",
    description:
      "Maintenance, welfare, abuse reporting, and support mechanisms for elderly citizens.",
    icon: "HeartHandshake",
    faqs: [
      {
        id: "scr-1",
        question: "What maintenance rights do senior citizens have?",
        answer:
          "The Maintenance and Welfare of Parents and Senior Citizens Act enables senior citizens to seek maintenance from children or relatives who neglect or refuse to maintain them, subject to legal procedure.",
      },
    ],
    articleSlugs: ["senior-citizen-rights-and-support-in-india"],
    guideSlugs: ["senior-citizen-support-guide"],
  },
  {
    slug: "constitutional-rights",
    title: "Constitutional Rights",
    description:
      "Fundamental rights, directive principles, and constitutional remedies available to Indian citizens.",
    icon: "Landmark",
    faqs: [
      {
        id: "con-1",
        question: "What is Article 32?",
        answer:
          "Article 32 of the Indian Constitution allows individuals to approach the Supreme Court directly for enforcement of fundamental rights. It is often called the heart and soul of the Constitution.",
      },
    ],
    articleSlugs: [
      "understanding-citizen-rights-in-india",
      "importance-of-constitutional-awareness",
      "fundamental-rights-every-citizen-should-know",
    ],
    guideSlugs: ["how-to-file-a-public-grievance", "how-to-approach-government-departments"],
  },
  {
    slug: "rti",
    title: "RTI",
    description:
      "Right to Information Act procedures, applications, appeals, and transparency in governance.",
    icon: "FileSearch",
    faqs: [
      {
        id: "rti-1",
        question: "Who can file an RTI?",
        answer:
          "Any citizen of India can file an RTI application to seek information from public authorities covered under the RTI Act, 2005, subject to exemptions specified in the law.",
      },
    ],
    articleSlugs: ["right-to-information-act-citizen-guide", "transparency-and-accountability-through-rti"],
    guideSlugs: ["rti-guide"],
  },
  {
    slug: "cyber-safety",
    title: "Cyber Safety",
    description:
      "Digital rights, online safety, fraud prevention, and cyber crime reporting for citizens.",
    icon: "Shield",
    faqs: [
      {
        id: "cy-1",
        question: "How do I report online fraud?",
        answer:
          "Report online fraud through the National Cyber Crime Reporting Portal, helpline 1930, and your bank's fraud reporting channel if financial fraud is involved. Preserve all digital evidence.",
      },
    ],
    articleSlugs: ["digital-rights-in-the-internet-age", "cyber-safety-awareness-for-citizens"],
    guideSlugs: ["cyber-crime-complaint-guide"],
  },
  {
    slug: "legal-awareness",
    title: "Legal Awareness",
    description:
      "Understanding laws, legal aid, court processes, and citizen responsibilities in seeking justice.",
    icon: "Gavel",
    faqs: [
      {
        id: "la-1",
        question: "Where can I get free legal aid?",
        answer:
          "Legal Services Authorities at national, state, and district levels provide free legal aid to eligible persons under the Legal Services Authorities Act. Lok Adalats also facilitate dispute resolution.",
      },
    ],
    articleSlugs: [
      "why-legal-awareness-matters",
      "access-to-justice-and-legal-aid-in-india",
      "understanding-lok-adalat-and-alternate-dispute-resolution",
    ],
    guideSlugs: ["how-to-file-a-public-grievance", "how-to-approach-government-departments"],
  },
  {
    slug: "public-welfare",
    title: "Public Welfare",
    description:
      "Schemes, community welfare, social justice, and citizen access to public services and entitlements.",
    icon: "Building2",
    faqs: [
      {
        id: "pw-1",
        question: "What is social justice?",
        answer:
          "Social justice refers to fair distribution of resources, opportunities, and protections so that all members of society can live with dignity. Directive Principles of State Policy guide the state toward social and economic justice.",
      },
    ],
    articleSlugs: [
      "public-welfare-and-social-justice-in-india",
      "citizen-participation-in-governance",
      "ethics-and-community-leadership",
    ],
    guideSlugs: ["how-to-file-a-public-grievance", "how-to-approach-government-departments", "emergency-resources"],
  },
];

export function getCategoryBySlug(slug: string) {
  return knowledgeCategories.find((c) => c.slug === slug);
}
