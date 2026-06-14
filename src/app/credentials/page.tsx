import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SummaryBlock } from "@/components/ui/SummaryBlock";
import { PortraitImage } from "@/components/ui/PortraitImage";
import { OrgLogo } from "@/components/ui/OrgLogo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, organizationSchema, personSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site";
import { credentialDisclaimer, appointmentCertificate } from "@/data/credentials";
import { AppointmentCertificate } from "@/components/credentials/AppointmentCertificate";

export const metadata = createMetadata({
  title: "Credentials",
  description:
    "Professional credentials, appointment details, and organizational membership information for Muthyala Venu with AICHLS.",
  path: "/credentials",
  keywords: ["Muthyala Venu Credentials", "AICHLS Telangana"],
});

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
        subtitle="Organizational role and association with AICHLS."
        badge="Verification"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Credentials" }]} />

        <div className="rounded-lg border-2 border-accent/50 bg-accent/5 p-6">
          <h2 className="font-heading text-lg font-bold text-primary">Important Disclaimer</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{credentialDisclaimer}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-white p-8 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-primary">Profile</h2>
            <div className="mt-6 flex flex-col items-center sm:flex-row sm:items-start sm:gap-6">
              <PortraitImage size="lg" className="shadow-md" />
              <div className="mt-4 text-center sm:mt-0 sm:text-left">
                <p className="font-heading text-lg font-bold text-primary">{siteConfig.name}</p>
                <p className="mt-1 text-sm font-medium text-secondary">{siteConfig.designation}</p>
                <p className="mt-3 text-sm text-slate-600">
                  {siteConfig.location.state}, {siteConfig.location.country}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-white p-8 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-primary">Serving Organization</h2>
            <div className="mt-6 flex flex-col items-center text-center">
              <OrgLogo size="lg" className="justify-center" />
              <p className="mt-4 font-semibold text-primary">{siteConfig.organization.name}</p>
              <p className="mt-2 text-sm text-slate-600">{siteConfig.organization.description}</p>
            </div>
          </div>
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
            <br />
            <strong>Email:</strong>{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            <br />
            <strong>Occupation:</strong> {siteConfig.occupation.join(", ")}
          </p>
        </SummaryBlock>

        <AppointmentCertificate />
      </div>
    </>
  );
}
