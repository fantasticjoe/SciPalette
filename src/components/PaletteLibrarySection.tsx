import { PaletteFilters } from "./PaletteFilters";
import PaletteGrid from "./PaletteGrid";
import type { Palette, PaletteCategory, PlotType } from "../lib/types";
import { Check, Library, Shuffle } from "lucide-react";

interface PaletteLibrarySectionProps {
  className?: string;
  filteredPalettes: Palette[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  category: PaletteCategory | "all";
  onCategoryChange: (category: PaletteCategory | "all") => void;
  plotType: PlotType | "all";
  onPlotTypeChange: (plotType: PlotType | "all") => void;
  colorblindOnly: boolean;
  onColorblindOnlyChange: (value: boolean) => void;
  colorCount: string;
  onColorCountChange: (count: string) => void;
  hasActiveFilters: boolean;
  onResetFilters: () => void;
  copiedPaletteName: string | null;
  onCopyRandomPalette: () => void;
}

export function PaletteLibrarySection({
  className,
  filteredPalettes,
  searchQuery,
  onSearchChange,
  category,
  onCategoryChange,
  plotType,
  onPlotTypeChange,
  colorblindOnly,
  onColorblindOnlyChange,
  colorCount,
  onColorCountChange,
  hasActiveFilters,
  onResetFilters,
  copiedPaletteName,
  onCopyRandomPalette,
}: PaletteLibrarySectionProps) {
  return (
    <section id="palettes" className={`sp-lift mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 ${className ?? ""}`}>
      <div className="space-y-8">
        <div className="flex flex-col gap-5 border-b border-[#dadcd6] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#4f6d5f]">
              <Library className="h-3.5 w-3.5" aria-hidden="true" />
              palette library
            </p>
            <h1 className="font-display mt-2 max-w-4xl text-5xl font-bold leading-none tracking-[-0.03em] text-[#212c33] sm:text-6xl">
              Search and export every SciPalette color system.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[rgb(33_44_51_/_0.68)]">
              Filter curated palettes by figure type, accessibility, family, and color count.
            </p>
          </div>
          <button
            type="button"
            onClick={onCopyRandomPalette}
            className="sp-button-secondary w-fit px-5 py-3 text-sm shadow-sm"
          >
            {copiedPaletteName ? <Check className="h-5 w-5" /> : <Shuffle className="h-5 w-5" />}
            {copiedPaletteName ? `Copied ${copiedPaletteName}` : "Copy random palette"}
          </button>
        </div>

        <PaletteFilters
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          category={category}
          onCategoryChange={onCategoryChange}
          plotType={plotType}
          onPlotTypeChange={onPlotTypeChange}
          colorblindOnly={colorblindOnly}
          onColorblindOnlyChange={onColorblindOnlyChange}
          colorCount={colorCount}
          onColorCountChange={onColorCountChange}
          hasActiveFilters={hasActiveFilters}
          onReset={onResetFilters}
        />

        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#4f6d5f]">
              <Library className="h-3.5 w-3.5" aria-hidden="true" />
              results
            </p>
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
  );
}
