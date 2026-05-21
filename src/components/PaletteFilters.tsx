import { PaletteCategory, PlotType } from "../lib/types";
import { Search } from "lucide-react";

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
}: PaletteFiltersProps) {
  const controlClass =
    "w-full rounded-[14px] border border-[#dadcd6] bg-[rgb(251_249_242_/_0.9)] px-3 py-2.5 text-sm font-semibold text-[#212c33] shadow-sm outline-none transition focus:border-[rgb(79_109_95_/_0.45)] focus:ring-3 focus:ring-[rgb(79_109_95_/_0.16)]";

  return (
    <div className="rounded-[20px] border border-[#dadcd6] bg-[rgb(251_249_242_/_0.76)] p-5 shadow-[0_24px_70px_rgb(33_44_51_/_0.06)] backdrop-blur-sm sm:p-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#4f6d5f]" />
        <input
          type="text"
          placeholder="Search UMAP, clinical, heatmap, colorblind-safe..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-[18px] border border-[#dadcd6] bg-[rgb(248_245_236_/_0.72)] py-4 pl-12 pr-4 text-base font-semibold text-[#212c33] outline-none transition placeholder:text-[rgb(33_44_51_/_0.52)] focus:border-[rgb(79_109_95_/_0.45)] focus:ring-4 focus:ring-[rgb(79_109_95_/_0.14)]"
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[rgb(33_44_51_/_0.66)]">Category</label>
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value as PaletteCategory | "all")}
            className={controlClass}
          >
            <option value="all">All Categories</option>
            <option value="categorical">Categorical</option>
            <option value="sequential">Sequential</option>
            <option value="diverging">Diverging</option>
            <option value="heatmap">Heatmap</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[rgb(33_44_51_/_0.66)]">Plot Type</label>
          <select
            value={plotType}
            onChange={(e) => onPlotTypeChange(e.target.value as PlotType | "all")}
            className={controlClass}
          >
            <option value="all">All Plots</option>
            <option value="bar">Bar Plot</option>
            <option value="line">Line Plot</option>
            <option value="scatter">Scatter Plot</option>
            <option value="umap">UMAP</option>
            <option value="heatmap">Heatmap</option>
            <option value="volcano">Volcano Plot</option>
            <option value="boxplot">Box Plot</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[rgb(33_44_51_/_0.66)]">Color Count</label>
          <select
            value={colorCount}
            onChange={(e) => onColorCountChange(e.target.value)}
            className={controlClass}
          >
            <option value="all">All</option>
            <option value="2-4">2-4 colors</option>
            <option value="5-8">5-8 colors</option>
            <option value="9-12">9-12 colors</option>
            <option value="12+">12+ colors</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[rgb(33_44_51_/_0.66)]">Accessibility</label>
          <label className="flex cursor-pointer items-center gap-3 rounded-[14px] border border-[#dadcd6] bg-[rgb(251_249_242_/_0.9)] px-3 py-2.5 text-sm font-semibold text-[#212c33] shadow-sm transition hover:bg-[rgb(122_158_141_/_0.1)]">
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
