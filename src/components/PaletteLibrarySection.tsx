import { PaletteFilters } from "./PaletteFilters";
import PaletteGrid from "./PaletteGrid";
import type { Palette, PaletteCategory, PlotType } from "../lib/types";

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
}: PaletteLibrarySectionProps) {
  return (
    <section id="palettes" className={`sp-lift mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 ${className ?? ""}`}>
      <div className="space-y-8">
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
  );
}
