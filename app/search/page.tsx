import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SearchExplorer } from "@/components/search/SearchExplorer";
import { searchIndex } from "@/lib/learning/search";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Look up any character taught on this site by character, romaji, meaning, reading, or example word.",
};

export default function SearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Look up any character."
        description="Search by the character itself, its romaji, its meaning, a reading, or a word it appears in."
      />

      <section className="page-section section-alt">
        <div className="shell search-shell">
          <SearchExplorer totalEntries={searchIndex.length} />
        </div>
      </section>
    </>
  );
}
