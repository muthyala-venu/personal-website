"use client";

import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { galleryItems, galleryCategories } from "@/data/gallery";

export function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Awareness activities, community engagement, and public service documentation."
        badge="Media"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Gallery" }]} />

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === "All"
                ? "bg-primary text-white"
                : "bg-surface text-primary hover:bg-primary/10"
            }`}
          >
            All
          </button>
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-surface text-primary hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <figure key={item.id} className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
              <div className="flex aspect-video items-center justify-center bg-primary/5">
                <ImageIcon className="text-primary/30" size={48} />
              </div>
              <figcaption className="p-4">
                <span className="text-xs font-semibold uppercase text-secondary">{item.category}</span>
                <h3 className="mt-1 font-heading font-bold text-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
