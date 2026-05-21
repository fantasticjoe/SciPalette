import { PaletteCategory, PlotType } from "../lib/types";
import { categoryOptions, colorCountOptions, plotTypeOptions } from "../lib/filter-options";
import { Search, X } from "lucide-react";

interface PaletteFiltersProps {
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
  onReset: () => void;
}

export function PaletteFilters({
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
  onReset,
}: PaletteFiltersProps) {
  const controlClass =
    "w-full border border-[#dadcd6] bg-[rgb(251_249_242_/_0.92)] px-3 py-2.5 text-sm font-semibold text-[#212c33] outline-none transition focus:border-[rgb(79_109_95_/_0.45)] focus:ring-2 focus:ring-[rgb(79_109_95_/_0.14)]";

  return (
    <div className="border border-[#dadcd6] bg-[rgb(251_249_242_/_0.74)] p-4 sm:p-5">
      <div className="flex flex-col gap-3 border-b border-[#dadcd6] pb-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4f6d5f]" />
          <input
            type="text"
            placeholder="Search UMAP, clinical, heatmap, colorblind-safe..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full border border-[#dadcd6] bg-[rgb(248_245_236_/_0.78)] py-3 pl-10 pr-3 text-base font-semibold text-[#212c33] outline-none transition placeholder:text-[rgb(33_44_51_/_0.48)] focus:border-[rgb(79_109_95_/_0.45)] focus:ring-2 focus:ring-[rgb(79_109_95_/_0.14)]"
          />
        </div>
        <button
          type="button"
          onClick={onReset}
          disabled={!hasActiveFilters}
          className="inline-flex items-center justify-center gap-2 border border-[#dadcd6] px-3 py-2.5 text-sm font-bold text-[#4f6d5f] transition hover:bg-[rgb(122_158_141_/_0.1)] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:bg-transparent"
        >
          <X className="h-4 w-4" />
          Clear
        </button>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[rgb(33_44_51_/_0.66)]">Category</label>
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value as PaletteCategory | "all")}
            className={controlClass}
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[rgb(33_44_51_/_0.66)]">Plot Type</label>
          <select
            value={plotType}
            onChange={(e) => onPlotTypeChange(e.target.value as PlotType | "all")}
            className={controlClass}
          >
            {plotTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[rgb(33_44_51_/_0.66)]">Color Count</label>
          <select
            value={colorCount}
            onChange={(e) => onColorCountChange(e.target.value)}
            className={controlClass}
          >
            {colorCountOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[rgb(33_44_51_/_0.66)]">Accessibility</label>
          <label className="flex cursor-pointer items-center gap-3 border border-[#dadcd6] bg-[rgb(251_249_242_/_0.92)] px-3 py-2.5 text-sm font-semibold text-[#212c33] transition hover:bg-[rgb(122_158_141_/_0.1)]">
            <input
              type="checkbox"
              checked={colorblindOnly}
              onChange={(e) => onColorblindOnlyChange(e.target.checked)}
              className="h-4 w-4 rounded border-[#dadcd6] accent-[#4f6d5f] focus:ring-2 focus:ring-[rgb(79_109_95_/_0.28)]"
            />
            <span>Colorblind-safe only</span>
          </label>
        </div>
      </div>
    </div>
  );
}
