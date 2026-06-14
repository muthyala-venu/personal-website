import Link from "next/link";
import { siteConfig } from "@/data/site";

export function PageAttribution() {
  return (
    <p className="mt-10 border-t border-border pt-6 text-sm leading-relaxed text-muted">
      This page is part of the official website of{" "}
      <Link href="/about" className="font-semibold text-primary hover:text-secondary">
        {siteConfig.name}
      </Link>
      , {siteConfig.designation} with {siteConfig.organization.shortName}, Telangana.
    </p>
  );
}
