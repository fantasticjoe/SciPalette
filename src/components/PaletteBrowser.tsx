import { useMemo, useState } from "react";
import { palettes } from "../lib/palettes";
import { filterPalettes, getRandomPalette } from "../lib/palette-utils";
import type { PaletteCategory, PlotType } from "../lib/types";
import { getFeaturedPaletteGroups, getPaletteCategoryCount } from "../lib/homepage";
import { FeaturedPaletteSections } from "./FeaturedPaletteSections";
import { HomeHero } from "./HomeHero";
import { PaletteLibrarySection } from "./PaletteLibrarySection";

export default function PaletteBrowser() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<PaletteCategory | "all">("all");
  const [plotType, setPlotType] = useState<PlotType | "all">("all");
  const [colorblindOnly, setColorblindOnly] = useState(false);
  const [colorCount, setColorCount] = useState("all");
  const [copiedPaletteName, setCopiedPaletteName] = useState<string | null>(null);

  const filteredPalettes = useMemo(
    () => filterPalettes(searchQuery, category, plotType, colorblindOnly, colorCount),
    [searchQuery, category, plotType, colorblindOnly, colorCount]
  );

  const handleRandomPalette = () => {
    const random = getRandomPalette();
    navigator.clipboard.writeText(random.colors.join(", "));
    setCopiedPaletteName(random.name);
    window.setTimeout(() => setCopiedPaletteName(null), 2200);
  };

  const featuredGroups = useMemo(() => getFeaturedPaletteGroups(palettes), []);
  const isDefaultView = !searchQuery && category === "all" && plotType === "all" && !colorblindOnly && colorCount === "all";
  const categoryCount = useMemo(() => getPaletteCategoryCount(palettes), []);

  return (
    <>
      <HomeHero
        specimenPalette={palettes[1]}
        paletteCount={palettes.length}
        categoryCount={categoryCount}
        accessibleCount={featuredGroups.colorblindSafePalettes.length}
        copiedPaletteName={copiedPaletteName}
        onCopyRandomPalette={handleRandomPalette}
      />

      <PaletteLibrarySection
        filteredPalettes={filteredPalettes}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        category={category}
        onCategoryChange={setCategory}
        plotType={plotType}
        onPlotTypeChange={setPlotType}
        colorblindOnly={colorblindOnly}
        onColorblindOnlyChange={setColorblindOnly}
        colorCount={colorCount}
        onColorCountChange={setColorCount}
      />

      {isDefaultView && <FeaturedPaletteSections groups={featuredGroups} />}

      <footer className="mt-12 border-t border-[#dadcd6] bg-[rgb(251_249_242_/_0.62)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-[rgb(33_44_51_/_0.62)]">
            SciPalette, a curated collection of scientific color palettes.
          </p>
        </div>
      </footer>
    </>
  );
}
