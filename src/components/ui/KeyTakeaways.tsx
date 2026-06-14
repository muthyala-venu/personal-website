import { CheckCircle2 } from "lucide-react";

export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <aside className="rounded-lg bg-primary/5 p-6" aria-label="Key takeaways">
      <h2 className="font-heading text-xl font-bold text-primary">Key Takeaways</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-slate-700">
            <CheckCircle2 className="mt-0.5 shrink-0 text-secondary" size={18} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
