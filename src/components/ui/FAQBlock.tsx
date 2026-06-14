import type { FAQ } from "@/lib/types";

export function FAQBlock({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="mt-12" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="font-heading text-2xl font-bold text-primary">
        {title}
      </h2>
      <div className="mt-6 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.id}
            className="group rounded-lg border border-border bg-white p-5 shadow-sm"
          >
            <summary className="cursor-pointer list-none font-semibold text-primary marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {faq.question}
                <span className="text-secondary transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
