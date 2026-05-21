import { useState, useMemo } from "react";
import { PaletteFilters } from "./PaletteFilters";
import PaletteGrid from "./PaletteGrid";
import { palettes } from "../lib/palettes";
import { filterPalettes, getRandomPalette } from "../lib/palette-utils";
import type { PaletteCategory, PlotType } from "../lib/types";
import { Palette, Shuffle } from "lucide-react";

export default function PaletteBrowser() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<PaletteCategory | "all">("all");
  const [plotType, setPlotType] = useState<PlotType | "all">("all");
  const [colorblindOnly, setColorblindOnly] = useState(false);
  const [colorCount, setColorCount] = useState("all");

  const filteredPalettes = useMemo(
    () => filterPalettes(searchQuery, category, plotType, colorblindOnly, colorCount),
    [searchQuery, category, plotType, colorblindOnly, colorCount]
  );

  const handleRandomPalette = () => {
    const random = getRandomPalette();
    navigator.clipboard.writeText(random.colors.join(", "));
    alert(`Copied ${random.name} to clipboard!\n${random.colors.join(", ")}`);
  };

  const singleCellPalettes = palettes.filter(p => p.tags.includes("single-cell") || p.tags.includes("scRNA-seq"));
  const colorblindSafePalettes = palettes.filter(p => p.colorblindSafe);
  const heatmapPalettes = palettes.filter(p => p.category === "heatmap" || p.recommendedFor.includes("heatmap"));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <Palette className="w-8 h-8 text-gray-900" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">SciPalette</h1>
            </div>
            <p className="text-xl text-gray-600 mb-3">
              Curated color palettes for publication-ready scientific figures.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              为论文图、单细胞图、医学统计图和科研可视化整理的高质量配色方案库
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#palettes"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-sm"
              >
                <Palette className="w-5 h-5" />
                Explore Palettes
              </a>
              <button
                onClick={handleRandomPalette}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <Shuffle className="w-5 h-5" />
                Copy Random Palette
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="palettes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <PaletteFilters
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

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredPalettes.length}</span> palette
              {filteredPalettes.length !== 1 ? "s" : ""}
            </p>
          </div>

          <PaletteGrid palettes={filteredPalettes} />
        </div>
      </section>

      {/* Featured Sections */}
      {!searchQuery && category === "all" && plotType === "all" && !colorblindOnly && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {singleCellPalettes.length > 0 && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular for Single-Cell Analysis</h2>
                <p className="text-gray-600">Optimized for UMAP, t-SNE, and cluster visualization</p>
              </div>
              <PaletteGrid palettes={singleCellPalettes.slice(0, 3)} />
            </div>
          )}

          {colorblindSafePalettes.length > 0 && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Colorblind-Safe Palettes</h2>
                <p className="text-gray-600">Accessible to readers with all types of color vision deficiency</p>
              </div>
              <PaletteGrid palettes={colorblindSafePalettes.slice(0, 3)} />
            </div>
          )}

          {heatmapPalettes.length > 0 && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Heatmap Gradients</h2>
                <p className="text-gray-600">Sequential and diverging palettes for gene expression and correlation matrices</p>
              </div>
              <PaletteGrid palettes={heatmapPalettes.slice(0, 3)} />
            </div>
          )}
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-500">
            SciPalette · A curated collection of scientific color palettes
          </p>
        </div>
      </footer>
    </div>
  );
}
