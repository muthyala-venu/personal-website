"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-secondary/30 bg-secondary/5 p-8 text-center">
        <h3 className="font-heading text-xl font-bold text-primary">Message Received</h3>
        <p className="mt-3 text-slate-600">
          Thank you for reaching out. This form is configured for demonstration. Connect via email or WhatsApp for direct contact.
        </p>
      </div>
    );
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
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
      >
        <Send size={16} />
        Send Message
      </button>
    </form>
  );
}
