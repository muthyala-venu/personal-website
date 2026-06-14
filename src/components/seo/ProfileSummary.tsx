import { personEntity, siteConfig, topicEntities } from "@/data/site";

export function ProfileSummary() {
  return (
    <section
      className="rounded-lg border border-border bg-surface p-8"
      aria-label={`About ${siteConfig.name}`}
    >
      <h2 className="font-heading text-2xl font-bold text-primary">About {siteConfig.name}</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        Personal and professional profile of {siteConfig.name} — human rights and public grievance advocate
        serving citizens in Telangana through awareness, education, and community welfare.
      </p>
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="font-heading text-lg font-semibold text-primary">Personal Profile</h3>
          <dl className="mt-3 space-y-2 text-sm">
            <div>
              <dt className="font-medium text-muted">Name</dt>
              <dd className="text-slate-700">{personEntity.name}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted">Occupation</dt>
              <dd className="text-slate-700">{personEntity.occupation.join(", ")}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted">Role</dt>
              <dd className="text-slate-700">{personEntity.jobTitle}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted">Organization</dt>
              <dd className="text-slate-700">{personEntity.worksFor}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted">Location</dt>
              <dd className="text-slate-700">{personEntity.areaServed}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted">Email</dt>
              <dd className="text-slate-700">{personEntity.email}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted">Business Ventures</dt>
              <dd className="text-slate-700">
                {siteConfig.ventures.map((v) => `${v.name} (${v.established})`).join("; ")}
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold text-primary">Areas of Focus</h3>
          <ul className="mt-3 space-y-3">
            {topicEntities.map((topic) => (
              <li key={topic.name} className="text-sm">
                <span className="font-medium text-primary">{topic.name}:</span>{" "}
                <span className="text-slate-600">{topic.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 text-xs text-muted">
        {siteConfig.name} works in human rights awareness, public grievance education, and citizen
        empowerment across Telangana.
      </p>
    </section>
  );
}
