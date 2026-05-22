import PaletteGrid from "./PaletteGrid";
import type { FeaturedPaletteGroups } from "../lib/homepage";

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
  );
}
