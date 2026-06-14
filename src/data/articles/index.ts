import type { Article } from "@/lib/types";
import { batch1Articles } from "./batch-1";
import { batch2Articles } from "./batch-2";
import { batch3Articles } from "./batch-3";

const allArticles: Article[] = [
  ...batch1Articles,
  ...batch2Articles,
  ...batch3Articles,
];

export function getAllArticles(): Article[] {
  return [...allArticles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((article) => article.slug === slug);
}

export function getLatestArticles(n: number): Article[] {
  return getAllArticles().slice(0, n);
}

export { batch1Articles, batch2Articles, batch3Articles };
