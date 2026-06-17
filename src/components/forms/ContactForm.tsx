"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

interface ContactFormProps {
  whatsappNumber: string;
}

export function ContactForm({ whatsappNumber }: ContactFormProps) {
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    const recipient = whatsappNumber.replace(/[^0-9]/g, "");
    if (recipient.length < 10) {
      setError(`WhatsApp number is not configured yet. Please email ${siteConfig.contact.email} instead.`);
      return;
    }

    const text = [
      `Hello, I am ${name}.`,
      "",
      `Subject: ${subject}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.open(`https://wa.me/${recipient}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-border px-4 py-3 text-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-md border border-border px-4 py-3 text-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-border px-4 py-3 text-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-primary">
          Subject *
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-border px-4 py-3 text-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-border px-4 py-3 text-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
        />
      </div>

      {error && (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      <p className="text-xs text-muted">
        Submitting opens WhatsApp with your message prefilled to send directly.
      </p>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        <MessageCircle size={16} />
        Send via WhatsApp
      </button>
    </form>
  );
}
