import { HomeClient } from "@/components/home/HomeClient";
import { focusAreas } from "@/data/focus-areas";
import { getLatestArticles } from "@/data/articles";
import { guides } from "@/data/guides";

export default function HomePage() {
  return (
    <HomeClient
      latestArticles={getLatestArticles(3)}
      featuredGuides={guides.slice(0, 3)}
      focusAreas={focusAreas}
    />
  );
}
