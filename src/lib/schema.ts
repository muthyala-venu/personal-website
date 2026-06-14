import { siteConfig, personEntity, topicEntities } from "@/data/site";
import type { FAQ, Article } from "@/lib/types";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personEntity.name,
    jobTitle: personEntity.jobTitle,
    description: personEntity.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.images.portrait}`,
    email: siteConfig.contact.email,
    knowsAbout: personEntity.knowsAbout,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.organization.name,
      url: siteConfig.organization.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: personEntity.areaServed,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.organization.name,
    alternateName: siteConfig.organization.shortName,
    description: siteConfig.organization.description,
    url: siteConfig.organization.url,
    logo: `${siteConfig.url}${siteConfig.images.orgLogo}`,
    member: {
      "@type": "Person",
      name: personEntity.name,
      jobTitle: personEntity.jobTitle,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Person",
      name: personEntity.name,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/articles/${article.slug}`,
    },
    keywords: article.tags.join(", "),
    articleSection: article.category,
  };
}

export function topicEntitySchema() {
  return topicEntities.map((topic) => ({
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: topic.name,
    description: topic.description,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${siteConfig.name} Knowledge Topics`,
    },
  }));
}

export function combineSchemas(...schemas: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}
