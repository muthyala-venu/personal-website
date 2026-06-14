import Link from "next/link";
import Image from "next/image";
import { siteConfig, topicEntities } from "@/data/site";
import { navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={siteConfig.images.orgLogo}
                alt={siteConfig.organization.shortName}
                width={48}
                height={48}
                className="h-12 w-12 rounded-md bg-white object-contain p-1"
              />
              <h2 className="font-heading text-xl font-bold">{siteConfig.name}</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-blue-100">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-xs text-blue-200">{siteConfig.designation}</p>
            <p className="text-xs text-blue-200">{siteConfig.organization.shortName}</p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navigation.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-blue-100 hover:text-accent">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide">
              Focus Topics
            </h3>
            <ul className="mt-4 space-y-2">
              {topicEntities.map((topic) => (
                <li key={topic.name} className="text-sm text-blue-100">
                  {topic.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-blue-100">
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6">
          <p className="text-xs leading-relaxed text-blue-200">{siteConfig.disclaimer}</p>
          <p className="mt-4 text-xs text-blue-300">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
