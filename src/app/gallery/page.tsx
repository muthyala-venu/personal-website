import { createMetadata } from "@/lib/seo";
import { GalleryClient } from "@/components/gallery/GalleryClient";

export const metadata = createMetadata({
  title: "Gallery",
  description:
    "Photo gallery of awareness activities, community engagement, certificates, and public service initiatives.",
  path: "/gallery",
});

export default function GalleryPage() {
  return <GalleryClient />;
}
