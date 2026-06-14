export function DefinitionBlock({ term, definition }: { term: string; definition: string }) {
  return (
    <aside className="rounded-lg border-l-4 border-accent bg-surface p-6" aria-label={`Definition: ${term}`}>
      <p className="text-xs font-semibold uppercase tracking-wide text-secondary">Definition</p>
      <h2 className="mt-1 font-heading text-xl font-bold text-primary">{term}</h2>
      <p className="mt-3 leading-relaxed text-slate-600">{definition}</p>
    </aside>
  );
}
