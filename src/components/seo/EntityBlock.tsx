import { personEntity, siteConfig, topicEntities } from "@/data/site";

export function EntityBlock() {
  return (
    <section className="rounded-lg border border-border bg-surface p-8" aria-label="Entity information">
      <h2 className="font-heading text-2xl font-bold text-primary">About This Entity</h2>
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="font-heading text-lg font-semibold text-primary">Person</h3>
          <dl className="mt-3 space-y-2 text-sm">
            <div>
              <dt className="font-medium text-muted">Name</dt>
              <dd className="text-slate-700">{personEntity.name}</dd>
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
              <dt className="font-medium text-muted">Focus</dt>
              <dd className="text-slate-700">{personEntity.description}</dd>
            </div>
          </dl>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold text-primary">Topics</h3>
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
        {siteConfig.name} = Human Rights Awareness + Public Grievance Awareness + Citizen Education
      </p>
    </section>
  );
}
