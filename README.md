# Muthyala Venu — Official Website

Production-ready personal authority website for **Muthyala Venu**, State Vice President – Public Grievances, AICHLS.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons
- Schema.org JSON-LD, Metadata API, sitemap, robots.txt

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Site Structure

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | Biography, vision, mission, timeline |
| `/role-and-responsibilities` | Conceptual role overview |
| `/human-rights-knowledge-hub` | 10 knowledge categories |
| `/public-grievance-guides` | 8 citizen guides |
| `/articles` | 30 SEO articles |
| `/credentials` | Organizational credentials |
| `/faq` | 20 FAQs with schema |
| `/contact` | Contact form + WhatsApp |
| `/admin` | CMS-ready architecture docs |

## Content Management

Content lives in `src/data/` as TypeScript files (CMS-ready). Replace with a headless CMS API when ready.

- **Articles:** `src/data/articles/`
- **Guides:** `src/data/guides.ts`
- **FAQs:** `src/data/faqs.ts`
- **Site config:** `src/data/site.ts`

## Configuration

Update contact details, social links, and domain in `src/data/site.ts`:

```ts
url: process.env.NEXT_PUBLIC_SITE_URL || "https://muthyalavenu.org"
contact: { email, phone, whatsapp, address }
```

## Content Policy

This site does **not** claim fake achievements, awards, government authority, or unverifiable experience. All content is educational and awareness-focused.

## License

Private — All rights reserved.
