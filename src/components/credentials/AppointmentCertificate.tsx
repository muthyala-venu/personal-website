import Image from "next/image";
import { Download, ExternalLink, ImageIcon } from "lucide-react";
import { appointmentCertificate } from "@/data/credentials";

export function AppointmentCertificate() {
  const { title, description, file } = appointmentCertificate;

  return (
    <section id="appointment-certificate" className="mt-12 rounded-lg border border-border bg-white p-6 shadow-sm lg:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <ImageIcon className="mt-1 shrink-0 text-secondary" size={28} />
          <div>
            <h2 className="font-heading text-xl font-bold text-primary">{title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            <ExternalLink size={16} />
            View Full Size
          </a>
          <a
            href={file}
            download="aichls-appointment-certificate.jpeg"
            className="inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-surface"
          >
            <Download size={16} />
            Download
          </a>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border border-border bg-surface p-2">
        <Image
          src={file}
          alt={title}
          width={1600}
          height={1130}
          className="h-auto w-full object-contain"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>
    </section>
  );
}
