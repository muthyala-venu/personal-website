export const siteConfig = {
  name: "Muthyala Venu",
  title: "Muthyala Venu | Human Rights & Public Grievance Advocate",
  description:
    "Public Grievance and Human Rights Advocate dedicated to promoting awareness, citizen engagement, community welfare, and responsible grievance redressal in Telangana and across India.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://muthyalavenu.org",
  locale: "en_IN",
  designation: "State Vice President – Public Grievances",
  occupation: ["Entrepreneur", "Social Services", "Financial Consultant"],
  ventures: [
    {
      name: "Aryan Filling Station",
      established: "2023",
      description: "Business establishment in Telangana.",
    },
    {
      name: "Aryan Pay Enterprises",
      established: "2024",
      description: "Enterprise venture in Telangana.",
    },
  ],
  organization: {
    name: "All India Council of Human Rights, Liberties & Social Justice",
    shortName: "AICHLS",
    description:
      "A national organization working toward human rights awareness, liberties, and social justice across India.",
    url: "https://aichls.org",
  },
  location: {
    state: "Telangana",
    country: "India",
  },
  mission:
    "Dedicated to promoting human rights awareness, public grievance education, legal literacy, citizen empowerment, and community welfare through responsible advocacy and public engagement.",
  tagline:
    "Public Grievance and Human Rights Advocate dedicated to promoting awareness, citizen engagement, community welfare, and responsible grievance redressal.",
  contact: {
    email: "venumuthyala4u@gmail.com",
    phone: "+91-XXXXXXXXXX",
    whatsapp: "+91-XXXXXXXXXX",
    address: "Telangana, India",
  },
  social: {
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
  },
  keywords: [
    "Muthyala Venu",
    "Muthyala Venu Human Rights",
    "Muthyala Venu Public Grievances",
    "Muthyala Venu Telangana",
    "Human Rights Advocate Telangana",
    "Public Grievance Awareness",
    "Citizen Rights India",
    "Legal Awareness Telangana",
    "AICHLS Telangana",
    "Human Rights Telangana",
    "Financial Consultant Telangana",
    "Social Services Telangana",
  ],
  disclaimer:
    "This website provides educational information on human rights awareness and public grievance processes. Content does not constitute legal advice. Organizational credentials represent an association role and should not be interpreted as a government appointment or statutory authority.",
  images: {
    portrait: "/images/muthyalavenu.png",
    orgLogo: "/images/orglogo.png",
    appointmentCertificate: "/images/aichls-appointment-certificate.jpeg",
  },
  documents: {
    appointmentCertificate: "/images/aichls-appointment-certificate.jpeg",
  },
};

export const personEntity = {
  name: "Muthyala Venu",
  jobTitle: "State Vice President – Public Grievances",
  occupation: siteConfig.occupation,
  worksFor: siteConfig.organization.name,
  description: siteConfig.tagline,
  email: siteConfig.contact.email,
  knowsAbout: [
    "Human Rights Awareness",
    "Public Grievance Awareness",
    "Citizen Rights Education",
    "Legal Awareness",
    "Community Welfare",
    "Social Services",
    "Financial Consulting",
    "Constitutional Rights",
    "RTI Awareness",
    "Consumer Rights",
  ],
  areaServed: "Telangana, India",
};

export const topicEntities = [
  {
    name: "Human Rights",
    description:
      "Fundamental rights and freedoms that belong to every person, protected under national and international frameworks.",
  },
  {
    name: "Public Grievance",
    description:
      "The process through which citizens raise concerns with public authorities for fair review and redressal.",
  },
  {
    name: "Citizen Rights",
    description:
      "Legal and constitutional entitlements that enable individuals to participate in and benefit from democratic governance.",
  },
  {
    name: "Legal Awareness",
    description:
      "Understanding of laws, procedures, and remedies that help citizens protect themselves and seek justice.",
  },
  {
    name: "Community Welfare",
    description:
      "Collective efforts to improve quality of life, dignity, and opportunity within local communities.",
  },
];
