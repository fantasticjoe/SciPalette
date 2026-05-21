import type { Palette } from "../lib/types";
import PaletteCard from "./PaletteCard";

interface PaletteGridProps {
  palettes: Palette[];
}

export default function PaletteGrid({ palettes }: PaletteGridProps) {
  if (palettes.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No palettes found</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Try adjusting your filters or search query to find more color palettes.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {palettes.map((palette) => (
        <PaletteCard key={palette.id} palette={palette} />
      ))}
    </div>
  );
}
