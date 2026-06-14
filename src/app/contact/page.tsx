import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { SummaryBlock } from "@/components/ui/SummaryBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Muthyala Venu for human rights awareness, public grievance education, and community welfare inquiries in Telangana.",
  path: "/contact",
  keywords: ["Contact Muthyala Venu", "Human Rights Advocate Telangana"],
});

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />
      <JsonLd data={personSchema()} />
      <PageHero
        title="Contact"
        subtitle="Reach out for awareness initiatives, educational inquiries, and community engagement."
        badge="Get in Touch"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SummaryBlock title="Contact Information">
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 shrink-0 text-secondary" size={20} />
                  <span>{siteConfig.contact.email}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 shrink-0 text-secondary" size={20} />
                  <span>{siteConfig.contact.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 shrink-0 text-secondary" size={20} />
                  <span>{siteConfig.contact.address}</span>
                </li>
              </ul>
            </SummaryBlock>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

            <div className="mt-8">
              <h3 className="font-heading font-bold text-primary">Social Media</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href={siteConfig.social.facebook} className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={siteConfig.social.twitter} className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a href={siteConfig.social.linkedin} className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={siteConfig.social.youtube} className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-surface text-sm text-muted">
              Google Maps Placeholder — Telangana, India
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Send a Message</h2>
            <p className="mt-2 text-sm text-slate-600">
              For awareness-related inquiries. This form is for demonstration; update with backend integration for production.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
