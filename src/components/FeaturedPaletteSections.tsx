import PaletteGrid from "./PaletteGrid";
import type { FeaturedPaletteGroups } from "../lib/homepage";
import { Accessibility, Flame, ScanLine } from "lucide-react";

interface FeaturedPaletteSectionsProps {
  className?: string;
  groups: FeaturedPaletteGroups;
}

export function FeaturedPaletteSections({ className, groups }: FeaturedPaletteSectionsProps) {
  const { singleCellPalettes, colorblindSafePalettes, heatmapPalettes } = groups;

  return (
    <section className={`sp-lift mx-auto max-w-7xl space-y-12 px-4 py-14 sm:px-6 lg:px-8 ${className ?? ""}`}>
      {singleCellPalettes.length > 0 && (
        <div>
          <div className="mb-5">
            <h2 className="font-display inline-flex items-center gap-2 text-4xl font-bold tracking-[-0.02em] text-[#212c33]">
              <ScanLine className="h-6 w-6 text-[#4f6d5f]" aria-hidden="true" />
              Single-cell analysis
            </h2>
            <p className="mt-1 text-[rgb(33_44_51_/_0.68)]">Optimized for UMAP, t-SNE, and cluster annotation.</p>
          </div>
          <PaletteGrid palettes={singleCellPalettes.slice(0, 3)} />
        </div>
      )}

      {colorblindSafePalettes.length > 0 && (
        <div id="accessible">
          <div className="mb-5">
            <h2 className="font-display inline-flex items-center gap-2 text-4xl font-bold tracking-[-0.02em] text-[#212c33]">
              <Accessibility className="h-6 w-6 text-[#4f6d5f]" aria-hidden="true" />
              Colorblind-safe palettes
            </h2>
            <p className="mt-1 text-[rgb(33_44_51_/_0.68)]">Accessible to readers with common color vision deficiencies.</p>
          </div>
          <PaletteGrid palettes={colorblindSafePalettes.slice(0, 3)} />
        </div>
      )}

      {heatmapPalettes.length > 0 && (
        <div>
          <div className="mb-5">
            <h2 className="font-display inline-flex items-center gap-2 text-4xl font-bold tracking-[-0.02em] text-[#212c33]">
              <Flame className="h-6 w-6 text-[#4f6d5f]" aria-hidden="true" />
              Heatmap gradients
            </h2>
            <p className="mt-1 text-[rgb(33_44_51_/_0.68)]">Sequential and diverging palettes for expression and correlation matrices.</p>
          </div>
          <PaletteGrid palettes={heatmapPalettes.slice(0, 3)} />
        </div>
      )}
    </section>
  );
}
