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
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search palettes, tags, or use cases..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none transition-colors text-gray-900 placeholder:text-gray-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value as PaletteCategory | "all")}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none transition-colors text-gray-900"
          >
            <option value="all">All Categories</option>
            <option value="categorical">Categorical</option>
            <option value="sequential">Sequential</option>
            <option value="diverging">Diverging</option>
            <option value="heatmap">Heatmap</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Plot Type</label>
          <select
            value={plotType}
            onChange={(e) => onPlotTypeChange(e.target.value as PlotType | "all")}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none transition-colors text-gray-900"
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
          <label className="block text-sm font-medium text-gray-700 mb-2">Color Count</label>
          <select
            value={colorCount}
            onChange={(e) => onColorCountChange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none transition-colors text-gray-900"
          >
            <option value="all">All</option>
            <option value="2-4">2-4 colors</option>
            <option value="5-8">5-8 colors</option>
            <option value="9-12">9-12 colors</option>
            <option value="12+">12+ colors</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Accessibility</label>
          <label className="flex items-center gap-3 px-3 py-2 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="checkbox"
              checked={colorblindOnly}
              onChange={(e) => onColorblindOnlyChange(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-200"
            />
            <span className="text-sm text-gray-900">Colorblind-safe only</span>
          </label>
        </div>
      </div>
    </div>
  );
}
