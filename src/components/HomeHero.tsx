import { Database, Palette } from "lucide-react";
import type { Palette as PaletteType } from "../lib/types";

interface HomeHeroProps {
  className?: string;
  specimenPalette: PaletteType;
  paletteCount: number;
  categoryCount: number;
  accessibleCount: number;
}

export function HomeHero({
  className,
  specimenPalette,
  paletteCount,
  categoryCount,
  accessibleCount,
}: HomeHeroProps) {
  return (
    <section className={`sp-lift relative overflow-hidden border-b border-[#dadcd6] bg-[#f8f5ec] ${className ?? ""}`}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-24 lg:pt-24">
        <div className="flex flex-col justify-center">
          <div className="sp-chip mb-7 w-fit px-3 py-1 text-sm">
            <Palette className="h-4 w-4" />
            Publication-ready palettes for research figures
          </div>
          <h1 className="font-display max-w-4xl text-5xl font-bold leading-[0.96] tracking-[-0.035em] text-[#212c33] sm:text-6xl lg:text-7xl">
            Scientific color, composed for publication.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-[rgb(33_44_51_/_0.72)]">
            A quiet library of curated palettes for papers, single-cell atlases, clinical comparisons, heatmaps, and accessible scientific visualization.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[rgb(33_44_51_/_0.62)]">
            为论文图、单细胞图、医学统计图和科研可视化整理的高质量配色方案库
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/palettes/"
              className="sp-button-primary px-6 py-3 text-sm shadow-[0_14px_32px_rgb(33_44_51_/_0.12)]"
            >
              <Database className="h-5 w-5" />
              Explore Palettes
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="sp-panel relative rounded-lg p-5">
            <div className="border border-[rgb(79_109_95_/_0.18)] bg-[#f8f5ec] p-5">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4f6d5f]">Specimen sheet</p>
                  <p className="font-display mt-1 text-3xl font-bold leading-none text-[#212c33]">{specimenPalette.name}</p>
                </div>
                <p className="max-w-40 text-right text-sm leading-5 text-[rgb(33_44_51_/_0.58)]">UMAP and cluster annotation palette</p>
              </div>
              <div className="grid grid-cols-6 gap-2 sm:grid-cols-8">
                {specimenPalette.colors.slice(0, 12).map((color, index) => (
                  <div
                    key={`${color}-${index}`}
                    className="h-14 rounded border border-[rgb(33_44_51_/_0.08)] shadow-inner"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[#dadcd6] pt-5">
                <div>
                  <p className="font-display text-4xl font-bold leading-none text-[#212c33]">{paletteCount}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(33_44_51_/_0.56)]">palettes</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-bold leading-none text-[#212c33]">{categoryCount}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(33_44_51_/_0.56)]">families</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-bold leading-none text-[#212c33]">{accessibleCount}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(33_44_51_/_0.56)]">accessible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
