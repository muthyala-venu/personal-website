import { Award, FileText, Shield, QrCode } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SummaryBlock } from "@/components/ui/SummaryBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, organizationSchema, personSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site";
import { credentials, credentialDisclaimer } from "@/data/credentials";

export const metadata = createMetadata({
  title: "Credentials",
  description:
    "Professional credentials, appointment details, and organizational membership information for Muthyala Venu with AICHLS.",
  path: "/credentials",
  keywords: ["Muthyala Venu Credentials", "AICHLS Telangana"],
});

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  appointment: Award,
  membership: FileText,
  certificate: Shield,
  verification: QrCode,
};

export default function CredentialsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Credentials", url: "/credentials" },
        ])}
      />
      <JsonLd data={personSchema()} />
      <JsonLd data={organizationSchema()} />
      <PageHero
        title="Professional Credentials"
        subtitle="Organizational role and association documentation."
        badge="Verification"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Credentials" }]} />

        <div className="rounded-lg border-2 border-accent/50 bg-accent/5 p-6">
          <h2 className="font-heading text-lg font-bold text-primary">Important Disclaimer</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{credentialDisclaimer}</p>
        </div>

        <SummaryBlock title="Appointment Details">
          <p>
            <strong>Name:</strong> {siteConfig.name}
            <br />
            <strong>Designation:</strong> {siteConfig.designation}
            <br />
            <strong>Organization:</strong> {siteConfig.organization.name} ({siteConfig.organization.shortName})
            <br />
            <strong>Location:</strong> {siteConfig.location.state}, {siteConfig.location.country}
          </p>
        </SummaryBlock>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {credentials.map((cred) => {
            const Icon = iconMap[cred.type] || Award;
            return (
              <div key={cred.id} className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <Icon className="text-secondary" size={32} />
                <h3 className="mt-4 font-heading text-lg font-bold text-primary">{cred.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{cred.description}</p>
                <div className="mt-4 flex aspect-video items-center justify-center rounded-lg bg-surface text-sm text-muted">
                  {cred.type === "certificate" && "Certificate Image Placeholder"}
                  {cred.type === "appointment" && "Appointment Letter Placeholder"}
                  {cred.type === "verification" && "QR Verification Placeholder"}
                  {cred.type === "membership" && "Membership Document Placeholder"}
                </div>
              </div>
            );
          })}
        </div>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-primary">Organization Information</h2>
          <div className="mt-4 rounded-lg border border-border p-6">
            <p className="font-semibold text-primary">{siteConfig.organization.name}</p>
            <p className="mt-2 text-sm text-slate-600">{siteConfig.organization.description}</p>
            <p className="mt-4 text-sm text-muted">
              Validity information and verification details will be updated when official documentation is available for public display.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
