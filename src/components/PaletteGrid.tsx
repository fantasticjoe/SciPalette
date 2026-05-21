import type { Palette } from "../lib/types";
import PaletteCard from "./PaletteCard";

interface PaletteGridProps {
  palettes: Palette[];
}

export default function PaletteGrid({ palettes }: PaletteGridProps) {
  if (palettes.length === 0) {
    return (
      <div className="border border-dashed border-[rgb(79_109_95_/_0.3)] bg-[rgb(251_249_242_/_0.72)] py-16 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(122_158_141_/_0.14)]">
          <svg className="h-8 w-8 text-[#4f6d5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </div>
        <h3 className="font-display mb-2 text-2xl font-bold text-[#212c33]">No palettes match this protocol</h3>
        <p className="mx-auto max-w-md text-[rgb(33_44_51_/_0.68)]">
          Relax one filter or search for a plot type such as UMAP, heatmap, or clinical.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {palettes.map((palette) => (
        <PaletteCard key={palette.id} palette={palette} />
      ))}
    </div>
  );
}
