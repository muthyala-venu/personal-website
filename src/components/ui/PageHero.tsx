import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, badge, children }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/90 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {badge && (
          <span className="inline-block rounded-full bg-accent/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            {badge}
          </span>
        )}
        <h1 className="mt-4 font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-3xl text-lg leading-relaxed text-blue-100">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

export function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "accent";
}) {
  const styles = {
    primary: "bg-white text-primary hover:bg-blue-50",
    outline: "border-2 border-white text-white hover:bg-white/10",
    accent: "bg-accent text-primary hover:bg-accent/90",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors ${styles[variant]}`}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
