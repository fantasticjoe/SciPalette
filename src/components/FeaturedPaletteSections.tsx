import type { FeaturedPaletteGroups } from "../lib/homepage";
import type { Palette } from "../lib/types";
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
          <ShowcaseGrid palettes={singleCellPalettes.slice(0, 3)} />
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
          <ShowcaseGrid palettes={colorblindSafePalettes.slice(0, 3)} />
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
          <ShowcaseGrid palettes={heatmapPalettes.slice(0, 3)} />
        </div>
      )}
    </section>
  );
}

function ShowcaseGrid({ palettes }: { palettes: Palette[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {palettes.map((palette) => (
        <article className="border border-[#dadcd6] bg-[rgb(251_249_242_/_0.76)] p-4" key={palette.id}>
          <div className="flex h-16 overflow-hidden border border-[rgb(33_44_51_/_0.08)]">
            {palette.colors.slice(0, 12).map((color, index) => (
              <div className="flex-1" style={{ backgroundColor: color }} title={color} key={`${palette.id}-${color}-${index}`} />
            ))}
          </div>
          <div className="mt-4">
            <h3 className="font-display text-2xl font-bold leading-tight text-[#212c33]">{palette.name}</h3>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-[rgb(33_44_51_/_0.68)]">{palette.description}</p>
            <a href={`/palettes/${palette.id}`} className="mt-4 inline-flex text-sm font-bold text-[#4f6d5f] hover:text-[#212c33]">
              View palette
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
