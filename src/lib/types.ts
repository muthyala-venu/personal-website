export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  faqs: FAQ[];
  relatedSlugs?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  faqs: FAQ[];
  keyTakeaways: string[];
  definition?: string;
}

export interface KnowledgeCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
  faqs: FAQ[];
  articleSlugs: string[];
  guideSlugs?: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

export interface FocusArea {
  title: string;
  description: string;
  icon: string;
  href: string;
}
