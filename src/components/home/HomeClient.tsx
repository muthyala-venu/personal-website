"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Scale,
  MessageSquare,
  BookOpen,
  Users,
  Heart,
  ArrowRight,
  Award,
  Image as ImageIcon,
} from "lucide-react";
import type { Article, Guide, FocusArea } from "@/lib/types";
import { siteConfig } from "@/data/site";
import { CTAButton } from "@/components/ui/PageHero";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { GuideCard } from "@/components/cards/GuideCard";
import { EntityBlock } from "@/components/seo/EntityBlock";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Scale,
  MessageSquare,
  BookOpen,
  Users,
  Heart,
};

interface HomeClientProps {
  latestArticles: Article[];
  featuredGuides: Guide[];
  focusAreas: FocusArea[];
}

export function HomeClient({ latestArticles, featuredGuides, focusAreas }: HomeClientProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/95 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggIGQ9Ik0zNiAzNGg4djhoLTh6bTAgMGg4djhoLTh6bTAgMGg4djhoLTh6bTAgMGg4djhoLTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:gap-12 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <span className="inline-block rounded-full bg-accent/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              {siteConfig.designation}
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-lg text-blue-200">{siteConfig.organization.shortName}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
              {siteConfig.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/about">Learn More</CTAButton>
              <CTAButton href="/contact" variant="outline">
                Contact
              </CTAButton>
              <CTAButton href="/human-rights-knowledge-hub" variant="accent">
                Knowledge Hub
              </CTAButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 lg:mt-0 lg:w-80"
          >
            <div className="mx-auto flex aspect-[3/4] max-w-xs items-center justify-center rounded-lg border-4 border-white/20 bg-white/10 backdrop-blur">
              <div className="p-6 text-center">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-white/20">
                  <Users size={64} className="text-white/80" />
                </div>
                <p className="mt-4 text-sm text-blue-200">Professional Portrait Placeholder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-primary">
              Building Public Authority Through Awareness
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              Muthyala Venu is dedicated to human rights awareness, public grievance education, legal literacy,
              and community welfare in Telangana and across India. This platform provides educational resources
              to help citizens understand their rights, engage responsibly with public institutions, and
              participate in community-oriented advocacy—without claiming unverifiable achievements or
              government authority.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-secondary hover:underline"
            >
              Read full profile <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-primary">Focus Areas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Educational advocacy across key domains of citizen rights and public service awareness.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, i) => {
              const Icon = iconMap[area.icon] || Scale;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={area.href}
                    className="block h-full rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <Icon className="text-secondary" size={32} />
                    <h3 className="mt-4 font-heading text-lg font-bold text-primary">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{area.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary">Latest Articles</h2>
              <p className="mt-2 text-slate-600">Educational content on rights, grievances, and legal awareness.</p>
            </div>
            <Link href="/articles" className="hidden font-semibold text-secondary hover:underline sm:block">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary">Featured Knowledge Guides</h2>
          <p className="mt-2 text-slate-600">Practical educational guides for citizens navigating public systems.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
          <Link
            href="/public-grievance-guides"
            className="mt-8 inline-block font-semibold text-secondary hover:underline"
          >
            View all guides →
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-white p-8 shadow-sm lg:p-12">
            <div className="flex items-start gap-4">
              <Award className="shrink-0 text-accent" size={40} />
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary">Professional Credentials</h2>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {siteConfig.designation} with {siteConfig.organization.name}. Organizational role focused
                  on public grievance awareness and citizen education.
                </p>
                <p className="mt-3 text-sm italic text-muted">
                  This credential represents an organizational role and should not be interpreted as a government
                  appointment or statutory authority.
                </p>
                <Link href="/credentials" className="mt-4 inline-block font-semibold text-secondary hover:underline">
                  View credentials →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary">Gallery</h2>
          <p className="mt-2 text-slate-600">Awareness activities, community engagement, and public service.</p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="flex aspect-square items-center justify-center rounded-lg bg-primary/10"
              >
                <ImageIcon className="text-primary/40" size={48} />
              </div>
            ))}
          </div>
          <Link href="/gallery" className="mt-8 inline-block font-semibold text-secondary hover:underline">
            View gallery →
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EntityBlock />
        </div>
      </section>

      <section className="bg-primary py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold">Connect for Awareness & Education</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Reach out for human rights awareness, public grievance education, and community welfare initiatives.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact" variant="accent">
              Get in Touch
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
