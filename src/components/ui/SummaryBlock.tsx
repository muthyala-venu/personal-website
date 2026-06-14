export function SummaryBlock({ title = "Summary", children }: { title?: string; children: React.ReactNode }) {
  return (
    <aside className="rounded-lg border border-border bg-white p-6 shadow-sm" aria-label={title}>
      <h2 className="font-heading text-lg font-bold text-primary">{title}</h2>
      <div className="mt-3 leading-relaxed text-slate-600">{children}</div>
    </aside>
  );
}
