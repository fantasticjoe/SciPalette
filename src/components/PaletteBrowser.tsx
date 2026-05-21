import { useMemo, useState } from "react";
import { PaletteFilters } from "./PaletteFilters";
import PaletteGrid from "./PaletteGrid";
import { palettes } from "../lib/palettes";
import { filterPalettes, getRandomPalette } from "../lib/palette-utils";
import type { PaletteCategory, PlotType } from "../lib/types";
import { Check, Database, Palette, Shuffle } from "lucide-react";

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

  const singleCellPalettes = palettes.filter(p => p.tags.includes("single-cell") || p.tags.includes("scRNA-seq"));
  const colorblindSafePalettes = palettes.filter(p => p.colorblindSafe);
  const heatmapPalettes = palettes.filter(p => p.category === "heatmap" || p.recommendedFor.includes("heatmap"));
  const isDefaultView = !searchQuery && category === "all" && plotType === "all" && !colorblindOnly && colorCount === "all";
  const categoryCount = new Set(palettes.map(p => p.category)).size;

  return (
    <>
      <section className="relative overflow-hidden border-b border-[#dadcd6] bg-[#f8f5ec]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-24 lg:pt-24">
          <div className="flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[rgb(79_109_95_/_0.22)] bg-[rgb(122_158_141_/_0.12)] px-3 py-1 text-sm font-semibold text-[#4f6d5f]">
              <Palette className="h-4 w-4" />
              Publication-ready palettes for research figures
            </div>
            <h1 className="font-display max-w-4xl text-5xl font-bold leading-[0.96] tracking-[-0.035em] text-[#212c33] sm:text-6xl lg:text-7xl">
              Scientific color, composed for publication.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[rgb(33_44_51_/_0.72)]">
              A quiet library of curated palettes for papers, single-cell atlases, clinical comparisons, heatmaps, and accessible scientific visualization.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[rgb(33_44_51_/_0.62)]">
              为论文图、单细胞图、医学统计图和科研可视化整理的高质量配色方案库
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#palettes"
                className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#212c33] px-6 py-3 text-sm font-bold text-[#f8f5ec] shadow-[0_18px_45px_rgb(33_44_51_/_0.16)] transition hover:bg-[#2f453d]"
              >
                <Database className="h-5 w-5" />
                Explore Palettes
              </a>
              <button
                onClick={handleRandomPalette}
                className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-[#dadcd6] bg-[rgb(251_249_242_/_0.86)] px-6 py-3 text-sm font-bold text-[#212c33] shadow-sm transition hover:border-[rgb(79_109_95_/_0.32)] hover:bg-[rgb(122_158_141_/_0.12)]"
              >
                {copiedPaletteName ? <Check className="h-5 w-5" /> : <Shuffle className="h-5 w-5" />}
                {copiedPaletteName ? `Copied ${copiedPaletteName}` : "Copy Random Palette"}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[20px] border border-[#dadcd6] bg-[rgb(251_249_242_/_0.84)] p-5 shadow-[0_28px_90px_rgb(33_44_51_/_0.08)]">
              <div className="rounded-[18px] border border-[rgb(79_109_95_/_0.18)] bg-[#f8f5ec] p-5">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4f6d5f]">Specimen sheet</p>
                    <p className="font-display mt-1 text-3xl font-bold leading-none text-[#212c33]">Cell Atlas 12</p>
                  </div>
                  <p className="max-w-40 text-right text-sm leading-5 text-[rgb(33_44_51_/_0.58)]">UMAP and cluster annotation palette</p>
                </div>
                <div className="grid grid-cols-6 gap-2 sm:grid-cols-8">
                  {palettes[1].colors.slice(0, 12).map((color, index) => (
                    <div
                      key={`${color}-${index}`}
                      className="h-14 rounded-[12px] border border-[rgb(33_44_51_/_0.08)] shadow-inner"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[#dadcd6] pt-5">
                  <div>
                    <p className="font-display text-4xl font-bold leading-none text-[#212c33]">{palettes.length}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(33_44_51_/_0.56)]">palettes</p>
                  </div>
                  <div>
                    <p className="font-display text-4xl font-bold leading-none text-[#212c33]">{categoryCount}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(33_44_51_/_0.56)]">families</p>
                  </div>
                  <div>
                    <p className="font-display text-4xl font-bold leading-none text-[#212c33]">{colorblindSafePalettes.length}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(33_44_51_/_0.56)]">accessible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="palettes" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4f6d5f]">palette library</p>
              <h2 className="font-display mt-1 text-4xl font-bold tracking-[-0.02em] text-[#212c33]">
                {filteredPalettes.length} match{filteredPalettes.length === 1 ? "" : "es"} ready to export
              </h2>
            </div>
            <p className="text-sm font-medium text-[rgb(33_44_51_/_0.68)]">
              Showing <span className="font-bold text-[#212c33]">{filteredPalettes.length}</span> palette
              {filteredPalettes.length !== 1 ? "s" : ""}
            </p>
          </div>

          <PaletteGrid palettes={filteredPalettes} />
        </div>
      </section>

      {isDefaultView && (
        <section className="mx-auto max-w-7xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">
          {singleCellPalettes.length > 0 && (
            <div>
              <div className="mb-5">
                <h2 className="font-display text-4xl font-bold tracking-[-0.02em] text-[#212c33]">Single-cell analysis</h2>
                <p className="mt-1 text-[rgb(33_44_51_/_0.68)]">Optimized for UMAP, t-SNE, and cluster annotation.</p>
              </div>
              <PaletteGrid palettes={singleCellPalettes.slice(0, 3)} />
            </div>
          )}

          {colorblindSafePalettes.length > 0 && (
            <div id="accessible">
              <div className="mb-5">
                <h2 className="font-display text-4xl font-bold tracking-[-0.02em] text-[#212c33]">Colorblind-safe palettes</h2>
                <p className="mt-1 text-[rgb(33_44_51_/_0.68)]">Accessible to readers with common color vision deficiencies.</p>
              </div>
              <PaletteGrid palettes={colorblindSafePalettes.slice(0, 3)} />
            </div>
          )}

          {heatmapPalettes.length > 0 && (
            <div>
              <div className="mb-5">
                <h2 className="font-display text-4xl font-bold tracking-[-0.02em] text-[#212c33]">Heatmap gradients</h2>
                <p className="mt-1 text-[rgb(33_44_51_/_0.68)]">Sequential and diverging palettes for expression and correlation matrices.</p>
              </div>
              <PaletteGrid palettes={heatmapPalettes.slice(0, 3)} />
            </div>
          )}
        </section>
      )}

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
