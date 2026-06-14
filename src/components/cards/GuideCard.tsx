import Link from "next/link";
import type { Guide } from "@/lib/types";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="group rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <span className="text-xs font-semibold uppercase tracking-wide text-accent">{guide.category}</span>
      <h3 className="mt-2 font-heading text-lg font-bold text-primary">
        <Link href={`/public-grievance-guides/${guide.slug}`}>{guide.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{guide.excerpt}</p>
      <Link
        href={`/public-grievance-guides/${guide.slug}`}
        className="mt-4 inline-block text-sm font-semibold text-secondary hover:underline"
      >
        Read guide →
      </Link>
    </article>
  );
}
