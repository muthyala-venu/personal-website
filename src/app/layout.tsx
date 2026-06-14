import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { combineSchemas, organizationSchema, personSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata = createMetadata({
  title: "Home",
  description:
    "Official website of Muthyala Venu — Public Grievance and Human Rights Advocate in Telangana, dedicated to citizen education and community welfare.",
  path: "/",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = combineSchemas(personSchema(), organizationSchema(), websiteSchema());

  return (
    <html lang="en-IN" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <JsonLd data={schema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
