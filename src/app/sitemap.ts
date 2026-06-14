import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getAllArticles } from "@/data/articles";
import { guides } from "@/data/guides";
import { knowledgeCategories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages = [
    "",
    "/about",
    "/role-and-responsibilities",
    "/human-rights-knowledge-hub",
    "/public-grievance-guides",
    "/articles",
    "/credentials",
    "/gallery",
    "/faq",
    "/contact",
    "/admin",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const articlePages = getAllArticles().map((article) => ({
    url: `${base}/articles/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const guidePages = guides.map((guide) => ({
    url: `${base}/public-grievance-guides/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryPages = knowledgeCategories.map((cat) => ({
    url: `${base}/human-rights-knowledge-hub/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages, ...guidePages, ...categoryPages];
}
