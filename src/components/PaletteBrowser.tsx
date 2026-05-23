import { useEffect, useMemo, useState } from "react";
import { palettes } from "../lib/palettes";
import { filterPalettes, getRandomPalette } from "../lib/palette-utils";
import type { PaletteCategory, PlotType } from "../lib/types";
import { PaletteLibrarySection } from "./PaletteLibrarySection";
import { PaletteComparisonPanel } from "./PaletteComparisonPanel";
import { PaletteRecommendationPanel } from "./PaletteRecommendationPanel";

export default function PaletteBrowser() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<PaletteCategory | "all">("all");
  const [plotType, setPlotType] = useState<PlotType | "all">("all");
  const [colorblindOnly, setColorblindOnly] = useState(false);
  const [colorCount, setColorCount] = useState("all");
  const [copiedPaletteName, setCopiedPaletteName] = useState<string | null>(null);

  useEffect(() => {
    setColorblindOnly(new URLSearchParams(window.location.search).get("accessibility") === "colorblind-safe");
  }, []);

  const filteredPalettes = useMemo(
    () => filterPalettes(searchQuery, category, plotType, colorblindOnly, colorCount),
    [searchQuery, category, plotType, colorblindOnly, colorCount]
  );

  const hasActiveFilters =
    Boolean(searchQuery) ||
    category !== "all" ||
    plotType !== "all" ||
    colorblindOnly ||
    colorCount !== "all";

  const resetFilters = () => {
    setSearchQuery("");
    setCategory("all");
    setPlotType("all");
    setColorblindOnly(false);
    setColorCount("all");
  };

  const handleRandomPalette = () => {
    const random = getRandomPalette();
    navigator.clipboard.writeText(random.colors.join(", "));
    setCopiedPaletteName(random.name);
    window.setTimeout(() => setCopiedPaletteName(null), 2200);
  };

  return (
    <>
      <PaletteLibrarySection
        className="sp-reveal"
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
        hasActiveFilters={hasActiveFilters}
        onResetFilters={resetFilters}
        copiedPaletteName={copiedPaletteName}
        onCopyRandomPalette={handleRandomPalette}
      />
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <PaletteRecommendationPanel />
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <PaletteComparisonPanel />
      </div>
    </>
  );
}
