import Link from "next/link";
import type { Article } from "@/lib/types";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
        {article.category}
      </span>
      <h3 className="mt-2 font-heading text-lg font-bold text-primary group-hover:text-secondary">
        <Link href={`/articles/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-muted">
        <span>{article.readTime} min read</span>
        <Link href={`/articles/${article.slug}`} className="font-semibold text-secondary hover:underline">
          Read more →
        </Link>
      </div>
    </article>
  );
}
