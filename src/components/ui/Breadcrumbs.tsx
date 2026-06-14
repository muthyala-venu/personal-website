import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-1">
            {index > 0 && <ChevronRight size={14} className="text-border" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-primary">
                {item.name}
              </Link>
            ) : (
              <span className="font-medium text-primary">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
